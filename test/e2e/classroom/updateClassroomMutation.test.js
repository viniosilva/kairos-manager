const { Classroom } = require('../../../src/entities/classroom');
const requestGraphQL = require('../requestGraphQL');

const classroomFixture = {
  name: 'A',
  degree: 1,
  grade: 1,
};

describe('Update Classroom Mutation', () => {
  afterEach(async () => {
    await Classroom.destroy({ where: {} });
  });

  it('should return the updated classroom', async () => {
    const { id: classroomId } = await Classroom.create(classroomFixture);

    const res = await requestGraphQL().send({
      query: `mutation {
        updateClassroom(id: "${classroomId}", input: {
          name: "B",
          degree: 1,
          grade: 2,
        }) {
          name
        }
      }`,
    });

    expect(res.body.data.updateClassroom.name).toEqual('B');
  });

  it('should return not found error', async () => {
    const res = await requestGraphQL().send({
      query: `mutation {
        updateClassroom(id: "3fa85f64-5717-4562-b3fc-2c963f66afa6", input: {
          name: "B",
          degree: 1,
          grade: 2,
        }) {
          name
        }
      }`,
    });

    expect(res.body.errors[0].message).toEqual('Classroom not found');
  });

  it('should return invalid payload error', async () => {
    const res = await requestGraphQL().send({
      query: `mutation {
        updateClassroom(id: "3fa85f64-5717-4562-b3fc-2c963f66afa6", input: {
          name: "B",
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
