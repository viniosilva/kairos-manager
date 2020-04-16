const { destroyClassroom } = require('../../../../src/services/classroom');
const { destroyClassroom: destroyClassroomMock } = require('../../../../src/entities/classroom');

jest.mock('../../../../src/entities/classroom/destroy');

describe('Classroom Service', () => {
  describe('Destroy Classroom', () => {
    beforeEach(() => {
      destroyClassroomMock.mockClear();
    });

    it('should return successfull message when id exists', async () => {
      const response = await destroyClassroom('3fa85f64-5717-4562-b3fc-2c963f66afa6');

      expect(response).toEqual('Classroom destroyed');
    });
  });
});
