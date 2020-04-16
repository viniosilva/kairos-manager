const { createClassroom } = require('../../../../src/services/classroom');
const { createClassroom: createClassroomMock } = require('../../../../src/entities/classroom');

jest.mock('../../../../src/entities/classroom/create');

const classroomFixture = {
  name: 'A',
  degree: 1,
  grade: 1,
};

describe('Classroom Service', () => {
  describe('Create Classroom', () => {
    beforeEach(() => {
      createClassroomMock.mockClear();
    });

    it('should create a classroom when is a valid payload', async () => {
      createClassroomMock.mockReturnValueOnce({
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        name: 'A',
        degree: 1,
        grade: 1,
      });

      const classroom = await createClassroom(classroomFixture);

      expect(classroom.id).toEqual('3fa85f64-5717-4562-b3fc-2c963f66afa6');
    });
  });
});
