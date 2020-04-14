const { Discipline } = require('../../../src/entities/discipline');
const requestGraphQL = require('../requestGraphQL');

const disciplineFixture = {
  name: 'Português',
  degree: 1,
  grade: 1,
};

describe('Update Discipline Mutation', () => {
  afterEach(async () => {
    await Discipline.destroy({ where: {} });
  });

  it('should return the updated discipline', async () => {
    const { id: disciplineId } = await Discipline.create(disciplineFixture);

    const res = await requestGraphQL().send({
      query: `mutation {
        updateDiscipline(id: "${disciplineId}", input: {
          name: "Matemática",
          degree: 1,
          grade: 2,
        }) {
          name
        }
      }`,
    });

    expect(res.body.data.updateDiscipline.name).toEqual('Matemática');
  });

  it('should return not found error', async () => {
    const res = await requestGraphQL().send({
      query: `mutation {
        updateDiscipline(id: "3fa85f64-5717-4562-b3fc-2c963f66afa6", input: {
          name: "Matemática",
          degree: 1,
          grade: 2,
        }) {
          name
        }
      }`,
    });

    expect(res.body.errors[0].message).toEqual('Discipline not found');
  });

  it('should return invalid payload error', async () => {
    const res = await requestGraphQL().send({
      query: `mutation {
        updateDiscipline(id: "3fa85f64-5717-4562-b3fc-2c963f66afa6", input: {
          name: "Matemática",
          degree: 1,
          grade: 100,
        }) {
          name
        }
      }`,
    });

    expect(res.body.errors[0].message).toEqual('"grade" must be less than or equal to 99');
  });
});
