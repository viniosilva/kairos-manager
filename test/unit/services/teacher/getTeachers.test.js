jest.mock('../../../../src/entities/teacher/getTeachers');

const { getTeachers } = require('../../../../src/services/teacher');
const { getTeachers: getTeachersMock } = require('../../../../src/entities/teacher');

const teachersFixture = [{
  fullName: 'Fulano de Tal',
  document: '23615770030',
}, {
  fullName: 'Tal de Fulano',
  document: '99384567332',
}, {
  fullName: 'Tal de Ciclano',
  document: '32145678843',
}, {
  fullName: 'Ciclano de Tal',
  document: '123468784332',
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
