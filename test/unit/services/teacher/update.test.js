const { updateTeacher } = require('../../../../src/services/teacher');
const { updateTeacher: updateTeacherMock } = require('../../../../src/entities/teacher');

jest.mock('../../../../src/entities/teacher/update');

const teacherFixture = {
  fullName: 'Test',
  document: '0000000000',
};

describe('Teacher Service', () => {
  describe('Update Teacher', () => {
    beforeEach(() => {
      updateTeacherMock.mockClear();
    });

    it('should create a teacher when is a valid payload', async () => {
      updateTeacherMock.mockReturnValueOnce({
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        fullName: 'Test',
        document: '0000000000',
      });

      const teacher = await updateTeacher('3fa85f64-5717-4562-b3fc-2c963f66afa6', teacherFixture);

      expect(teacher.id).toEqual('3fa85f64-5717-4562-b3fc-2c963f66afa6');
    });
  });
});
