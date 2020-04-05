jest.mock('../../../../src/entities/teacher/createTeacher');

const { createTeacher } = require('../../../../src/services/teacher');
const { createTeacher: createTeacherMock } = require('../../../../src/entities/teacher');

const teacherFixture = {
  fullName: 'Fulano de Tal',
  document: '9999999999',
};

describe('Teacher Service', () => {
  describe('Create Teacher', () => {
    beforeEach(() => {
      createTeacherMock.mockClear();
    });
    it('should create a teacher when is a valid payload', async () => {
      createTeacherMock.mockReturnValueOnce({
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        fullName: 'Fulano de Tal',
        document: '9999999999',
      });

      const teacher = await createTeacher(teacherFixture);

      expect(teacher.id).toEqual('3fa85f64-5717-4562-b3fc-2c963f66afa6');
    });
  });
});
