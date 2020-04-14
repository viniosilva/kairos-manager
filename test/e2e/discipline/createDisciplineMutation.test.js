const { Discipline } = require('../../../src/entities/discipline');
const requestGraphQL = require('../requestGraphQL');

describe('Create Discipline Mutation', () => {
  afterEach(async () => {
    await Discipline.destroy({ where: {} });
  });

  it('should return the created discipline', async () => {
    const res = await requestGraphQL().send({
      query: `mutation {
        createDiscipline(input: {
          name: "Português",
          degree: 1,
          grade: 1,
        }) {
          id
        }
      }`,
    });

    expect(res.body.data.createDiscipline.id).toBeDefined();
  });

  it('should return invalid payload error', async () => {
    const res = await requestGraphQL().send({
      query: `mutation {
        createDiscipline(input: {
          name: "Português",
          degree: -1,
          grade: -1,
        }) {
          id
        }
      }`,
    });

    expect(res.body.errors[0].message).toEqual('"degree" must be larger than or equal to 1');
  });
});
