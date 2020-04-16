const { getTeacherById } = require('../../../../src/services/teacher');
const { getTeacherById: getTeacherByIdMock } = require('../../../../src/entities/teacher');
const { NotFoundError, ValidationError } = require('../../../../src/common/errors');

jest.mock('../../../../src/entities/teacher/getById');

const teacherFixture = {
  fullName: 'Test',
  document: '0000000000',
};

describe('Teacher Service', () => {
  describe('Get Teacher By ID', () => {
    beforeEach(() => {
      getTeacherByIdMock.mockClear();
    });

    it('should return teacher list', async () => {
      getTeacherByIdMock.mockReturnValueOnce(teacherFixture);

      const teacher = await getTeacherById('3fa85f64-5717-4562-b3fc-2c963f66afa6');

      expect(teacher.document).toEqual('0000000000');
    });

    it('should throw validation error', async () => {
      try {
        await getTeacherById('1');
      } catch (error) {
        expect(error instanceof ValidationError).toEqual(true);
      }
    });

    it('should throw not found error', async () => {
      getTeacherByIdMock.mockRejectedValueOnce(new NotFoundError('Teacher not found'));

      try {
        await getTeacherById('3fa85f64-5717-4562-b3fc-2c963f66afa6');
      } catch (error) {
        expect(error instanceof NotFoundError).toEqual(true);
      }
    });
  });
});
