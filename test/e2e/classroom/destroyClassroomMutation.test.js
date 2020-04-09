const { Classroom } = require('../../../src/entities/classroom');
const requestGraphQL = require('../requestGraphQL');

const classroomFixture = {
  name: 'A',
  degree: 1,
  grade: 1,
};

describe('Destroy Classroom Mutation', () => {
  afterEach(async () => {
    await Classroom.destroy({ where: {} });
  });

  it('should return classroom', async () => {
    const { id: classroomId } = await Classroom.create(classroomFixture);

    const res = await requestGraphQL().send({
      query: `mutation {
        destroyClassroom(id: "${classroomId}")
      }`,
    });

    expect(res.body.data.destroyClassroom).toEqual('Classroom destroyed');
  });

  it('should return notFoundError', async () => {
    const res = await requestGraphQL().send({
      query: `mutation {
        destroyClassroom(id: "3fa85f64-5717-4562-b3fc-2c963f66afa6")
      }`,
    });

    expect(res.body.errors[0].message).toEqual('Classroom not found');
  });
});
