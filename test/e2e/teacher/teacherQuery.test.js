const { Teacher } = require('../../../src/entities/teacher');
const requestGraphQL = require('../requestGraphQL');

const teachersFixture = {
  fullName: 'Fulano de Tal',
  document: '23615770030',
};

describe('Teacher Query', () => {
  afterEach(async () => {
    await Teacher.destroy({ where: {} });
  });

  it('should return teacher', async () => {
    const { id: teacherId } = await Teacher.create(teachersFixture);

    const res = await requestGraphQL().send({
      query: `{
        teacher(id: "${teacherId}") {
          fullName
        }
      }`,
    });

    expect(res.body.data.teacher.fullName).toEqual('Fulano de Tal');
  });

  it('should return notFoundError', async () => {
    const res = await requestGraphQL().send({
      query: `{
        teacher(id: "3fa85f64-5717-4562-b3fc-2c963f66afa6") {
          fullName
        }
      }`,
    });

    expect(res.body.errors[0].message).toEqual('Teacher not found');
  });
});
