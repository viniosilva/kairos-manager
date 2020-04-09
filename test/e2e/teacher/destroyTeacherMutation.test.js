const { Teacher } = require('../../../src/entities/teacher');
const requestGraphQL = require('../requestGraphQL');

const teacherFixture = {
  fullName: 'Test',
  document: '0000000000',
};

describe('Destroy Teacher Mutation', () => {
  afterEach(async () => {
    await Teacher.destroy({ where: {} });
  });

  it('should return teacher', async () => {
    const { id: teacherId } = await Teacher.create(teacherFixture);

    const res = await requestGraphQL().send({
      query: `mutation {
        destroyTeacher(id: "${teacherId}")
      }`,
    });

    expect(res.body.data.destroyTeacher).toEqual('Teacher destroyed');
  });

  it('should return notFoundError', async () => {
    const res = await requestGraphQL().send({
      query: `mutation {
        destroyTeacher(id: "3fa85f64-5717-4562-b3fc-2c963f66afa6")
      }`,
    });

    expect(res.body.errors[0].message).toEqual('Teacher not found');
  });
});
