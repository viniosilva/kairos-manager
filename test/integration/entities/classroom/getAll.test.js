const { Classroom, getClassrooms } = require('../../../../src/entities/classroom');

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

describe('Classroom Entity', () => {
  describe('Get Classrooms', () => {
    afterEach(async () => {
      await Classroom.destroy({ where: {} });
    });

    it('should return classroom list', async () => {
      await Promise.all(classroomsFixture.map((fixture) => Classroom.create(fixture)));

      const classrooms = await getClassrooms();

      expect(classrooms).toHaveLength(4);
    });

    it('should return empty classroom list', async () => {
      const classrooms = await getClassrooms();

      expect(classrooms).toHaveLength(0);
    });

    it('should return only one classroom', async () => {
      await Promise.all(classroomsFixture.map((fixture) => Classroom.create(fixture)));

      const limit = 1;
      const classrooms = await getClassrooms(limit);

      expect(classrooms).toHaveLength(1);
    });

    it('should return only second classroom', async () => {
      await Classroom.create(classroomsFixture[0]);
      await Classroom.create(classroomsFixture[1]);

      const limit = 1;
      const offset = 1;
      const classrooms = await getClassrooms(limit, offset);

      expect(classrooms[0].name).toEqual('B');
    });

    it('should throw an error', async () => {
      const limit = -1;

      try {
        await getClassrooms(limit);
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error.message).toEqual('LIMIT must not be negative');
      }
    });
  });
});
