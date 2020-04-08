const { Teacher } = require('../../../src/entities/teacher');
const requestGraphQL = require('../requestGraphQL');

const teacherFixture = {
  fullName: 'Test',
  document: '0000000000',
};

describe('Update Teacher Mutation', () => {
  afterEach(async () => {
    await Teacher.destroy({ where: {} });
  });

  it('should return the updated teacher', async () => {
    const { id: teacherId } = await Teacher.create(teacherFixture);

    const res = await requestGraphQL().send({
      query: `mutation {
        updateTeacher(id: "${teacherId}", input: {
          fullName: "Test",
          document: "999999999"
        }) {
          document
        }
      }`,
    });

    expect(res.body.data.updateTeacher.document).toEqual('999999999');
  });

  it('should return not found error', async () => {
    const res = await requestGraphQL().send({
      query: `mutation {
        updateTeacher(id: "3fa85f64-5717-4562-b3fc-2c963f66afa6", input: {
          fullName: "Test",
          document: "999999999"
        }) {
          document
        }
      }`,
    });

    expect(res.body.errors[0].message).toEqual('Teacher not found');
  });

  it('should return invalid payload error', async () => {
    const res = await requestGraphQL().send({
      query: `mutation {
        updateTeacher(id: "3fa85f64-5717-4562-b3fc-2c963f66afa6", input: {
          fullName: "Test",
          document: "9999999999999999999"
        }) {
          document
        }
      }`,
    });

    expect(res.body.errors[0].message).toEqual('"document" length must be less than or equal to 11 characters long');
  });

  it('should return conflict error', async () => {
    await Teacher.create({ fullName: 'Test', document: '1111111111' });
    const { id: teacherId } = await Teacher.create(teacherFixture);

    const res = await requestGraphQL().send({
      query: `mutation {
        updateTeacher(id: "${teacherId}", input: {
          fullName: "Test",
          document: "1111111111"
        }) {
          document
        }
      }`,
    });

    expect(res.body.errors[0].message).toEqual('document must be unique');
  });
});
