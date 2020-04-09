const { Classroom } = require('../../../src/entities/classroom');
const requestGraphQL = require('../requestGraphQL');

const classroomsFixture = [{
  name: 'A',
  degree: 1,
  grade: 1,
}, {
  name: 'B',
  degree: 1,
  grade: 1,
}, {
  name: 'A',
  degree: 1,
  grade: 2,
}, {
  name: 'B',
  degree: 1,
  grade: 2,
}];

describe('Classrooms List Query', () => {
  afterEach(async () => {
    await Classroom.destroy({ where: {} });
  });

  it('should return classrooms list', async () => {
    await Promise.all(classroomsFixture.map((fixture) => Classroom.create(fixture)));

    const res = await requestGraphQL().send({
      query: `{
        classroomsList {
          id
        }
      }`,
    });

    expect(res.body.data.classroomsList).toHaveLength(4);
  });

  it('should return two classrooms', async () => {
    await Promise.all(classroomsFixture.map((fixture) => Classroom.create(fixture)));

    const res = await requestGraphQL().send({
      query: `{
        classroomsList(pageSize: 2) {
          id
        }
      }`,
    });

    expect(res.body.data.classroomsList).toHaveLength(2);
  });
});
