const { updateClassroom } = require('../../../../src/services/classroom');
const { updateClassroom: updateClassroomMock } = require('../../../../src/entities/classroom');

jest.mock('../../../../src/entities/classroom/update');

const classroomFixture = {
  name: 'A',
  degree: 1,
  grade: 1,
};

describe('Classroom Service', () => {
  describe('Update Classroom', () => {
    beforeEach(() => {
      updateClassroomMock.mockClear();
    });

    it('should create a classroom when is a valid payload', async () => {
      updateClassroomMock.mockReturnValueOnce({
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        name: 'A',
        degree: 1,
        grade: 1,
      });

      const classroom = await updateClassroom('3fa85f64-5717-4562-b3fc-2c963f66afa6', classroomFixture);

      expect(classroom.id).toEqual('3fa85f64-5717-4562-b3fc-2c963f66afa6');
    });
  });
});
