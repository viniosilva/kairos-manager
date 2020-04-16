const { getTeachers } = require('../../../../src/services/teacher');
const { getTeachers: getTeachersMock } = require('../../../../src/entities/teacher');

jest.mock('../../../../src/entities/teacher/getAll');

const teachersFixture = [{
  fullName: 'Test1',
  document: '11111111111',
}, {
  fullName: 'Test2',
  document: '22222222222',
}, {
  fullName: 'Test3',
  document: '33333333333',
}, {
  fullName: 'Test4',
  document: '44444444444',
}];

describe('Teacher Service', () => {
  describe('Get Teachers', () => {
    beforeEach(() => {
      getTeachersMock.mockClear();
    });

    it('should return teacher list', async () => {
      getTeachersMock.mockReturnValueOnce(teachersFixture);

      const teachers = await getTeachers();

      expect(teachers).toHaveLength(4);
    });

    it('should return empty teacher list', async () => {
      getTeachersMock.mockReturnValueOnce([]);
      const teachers = await getTeachers();

      expect(teachers).toHaveLength(0);
    });

    it('should return only one teacher', async () => {
      getTeachersMock.mockReturnValueOnce([teachersFixture[0]]);

      const pageSize = 1;
      const teachers = await getTeachers(null, pageSize);

      expect(teachers).toHaveLength(1);
    });

    it('should throw an error', async () => {
      getTeachersMock.mockRejectedValueOnce(new Error('LIMIT must not be negative'));

      const limit = -1;

      try {
        await getTeachers(limit);
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error.message).toEqual('LIMIT must not be negative');
      }
    });
  });
});
