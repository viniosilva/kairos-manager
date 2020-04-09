const { Classroom } = require('../../../src/entities/classroom');
const requestGraphQL = require('../requestGraphQL');

describe('Create Classroom Mutation', () => {
  afterEach(async () => {
    await Classroom.destroy({ where: {} });
  });

  it('should return the created classroom', async () => {
    const res = await requestGraphQL().send({
      query: `mutation {
        createClassroom(input: {
          name: "A",
          degree: 1,
          grade: 1,
        }) {
          id
        }
      }`,
    });

    expect(res.body.data.createClassroom.id).toBeDefined();
  });

  it('should return invalid payload error', async () => {
    const res = await requestGraphQL().send({
      query: `mutation {
        createClassroom(input: {
          name: "A",
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
