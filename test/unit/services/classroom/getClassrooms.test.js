const { getClassrooms } = require('../../../../src/services/classroom');
const { getClassrooms: getClassroomsMock } = require('../../../../src/entities/classroom');

jest.mock('../../../../src/entities/classroom/getClassrooms');

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

describe('Classroom Service', () => {
  describe('Get Classrooms', () => {
    beforeEach(() => {
      getClassroomsMock.mockClear();
    });

    it('should return classroom list', async () => {
      getClassroomsMock.mockReturnValueOnce(classroomsFixture);

      const classrooms = await getClassrooms();

      expect(classrooms).toHaveLength(4);
    });

    it('should return empty classroom list', async () => {
      getClassroomsMock.mockReturnValueOnce([]);
      const classrooms = await getClassrooms();

      expect(classrooms).toHaveLength(0);
    });

    it('should return only one classroom', async () => {
      getClassroomsMock.mockReturnValueOnce([classroomsFixture[0]]);

      const pageSize = 1;
      const classrooms = await getClassrooms(null, pageSize);

      expect(classrooms).toHaveLength(1);
    });

    it('should throw an error', async () => {
      getClassroomsMock.mockRejectedValueOnce(new Error('LIMIT must not be negative'));

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
