const { Teacher } = require('../../../src/entities/teacher');
const requestGraphQL = require('../requestGraphQL');

describe('Create Teacher Mutation', () => {
  afterEach(async () => {
    await Teacher.destroy({ where: {} });
  });

  it('should return the created teacher', async () => {
    const res = await requestGraphQL().send({
      query: `mutation {
        createTeacher(input: {
          fullName: "Test",
          document: "999999999"
        }) {
          id
          fullName
          document
        }
      }`,
    });

    expect(res.body.data.createTeacher.id).toBeDefined();
  });
});
