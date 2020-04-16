const { createTeacher } = require('../../../../src/services/teacher');
const { createTeacher: createTeacherMock } = require('../../../../src/entities/teacher');

jest.mock('../../../../src/entities/teacher/create');

const teacherFixture = {
  fullName: 'Test',
  document: '0000000000',
};

describe('Teacher Service', () => {
  describe('Create Teacher', () => {
    beforeEach(() => {
      createTeacherMock.mockClear();
    });

    it('should create a teacher when is a valid payload', async () => {
      createTeacherMock.mockReturnValueOnce({
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        fullName: 'Test',
        document: '0000000000',
      });

      const teacher = await createTeacher(teacherFixture);

      expect(teacher.id).toEqual('3fa85f64-5717-4562-b3fc-2c963f66afa6');
    });
  });
});
