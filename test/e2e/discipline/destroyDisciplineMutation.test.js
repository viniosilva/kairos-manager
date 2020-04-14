const { Discipline } = require('../../../src/entities/discipline');
const requestGraphQL = require('../requestGraphQL');

const disciplineFixture = {
  name: 'Português',
  degree: 1,
  grade: 1,
};

describe('Destroy Discipline Mutation', () => {
  afterEach(async () => {
    await Discipline.destroy({ where: {} });
  });

  it('should return discipline', async () => {
    const { id: disciplineId } = await Discipline.create(disciplineFixture);

    const res = await requestGraphQL().send({
      query: `mutation {
        destroyDiscipline(id: "${disciplineId}")
      }`,
    });

    expect(res.body.data.destroyDiscipline).toEqual('Discipline destroyed');
  });

  it('should return notFoundError', async () => {
    const res = await requestGraphQL().send({
      query: `mutation {
        destroyDiscipline(id: "3fa85f64-5717-4562-b3fc-2c963f66afa6")
      }`,
    });

    expect(res.body.errors[0].message).toEqual('Discipline not found');
  });
});
