const { Discipline } = require('../../../src/entities/discipline');
const requestGraphQL = require('../requestGraphQL');

const disciplinesFixture = [{
  name: 'Português',
  degree: 1,
  grade: 1,
}, {
  name: 'Matemática',
  degree: 1,
  grade: 1,
}, {
  name: 'Física',
  degree: 1,
  grade: 2,
}, {
  name: 'Inglês',
  degree: 1,
  grade: 2,
}];

describe('Disciplines List Query', () => {
  afterEach(async () => {
    await Discipline.destroy({ where: {} });
  });

  it('should return disciplines list', async () => {
    await Promise.all(disciplinesFixture.map((fixture) => Discipline.create(fixture)));

    const res = await requestGraphQL().send({
      query: `{
        disciplinesList {
          id
        }
      }`,
    });

    expect(res.body.data.disciplinesList).toHaveLength(4);
  });

  it('should return two disciplines', async () => {
    await Promise.all(disciplinesFixture.map((fixture) => Discipline.create(fixture)));

    const res = await requestGraphQL().send({
      query: `{
        disciplinesList(pageSize: 2) {
          id
        }
      }`,
    });

    expect(res.body.data.disciplinesList).toHaveLength(2);
  });
});
