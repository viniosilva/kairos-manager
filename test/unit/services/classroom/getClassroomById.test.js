const { getClassroomById } = require('../../../../src/services/classroom');
const { getClassroomById: getClassroomByIdMock } = require('../../../../src/entities/classroom');
const { NotFoundError, ValidationError } = require('../../../../src/common/errors');

jest.mock('../../../../src/entities/classroom/getClassroomById');

const classroomFixture = {
  name: 'A',
  degree: 1,
  grade: 1,
};

describe('Classroom Service', () => {
  describe('Get Classroom By ID', () => {
    beforeEach(() => {
      getClassroomByIdMock.mockClear();
    });

    it('should return classroom list', async () => {
      getClassroomByIdMock.mockReturnValueOnce(classroomFixture);

      const classroom = await getClassroomById('3fa85f64-5717-4562-b3fc-2c963f66afa6');

      expect(classroom.grade).toEqual(1);
    });

    it('should throw validation error', async () => {
      try {
        await getClassroomById('1');
      } catch (error) {
        expect(error instanceof ValidationError).toEqual(true);
      }
    });

    it('should throw not found error', async () => {
      getClassroomByIdMock.mockRejectedValueOnce(new NotFoundError('Classroom not found'));

      try {
        await getClassroomById('3fa85f64-5717-4562-b3fc-2c963f66afa6');
      } catch (error) {
        expect(error instanceof NotFoundError).toEqual(true);
      }
    });
  });
});
