const { destroyTeacher } = require('../../../../src/services/teacher');
const { destroyTeacher: destroyTeacherMock } = require('../../../../src/entities/teacher');

jest.mock('../../../../src/entities/teacher/destroyTeacher');

describe('Teacher Service', () => {
  describe('Destroy Teacher', () => {
    beforeEach(() => {
      destroyTeacherMock.mockClear();
    });
    it('should return successfull message when id exists', async () => {
      const response = await destroyTeacher('3fa85f64-5717-4562-b3fc-2c963f66afa6');

      expect(response).toEqual('Teacher destroyed');
    });
  });
});
