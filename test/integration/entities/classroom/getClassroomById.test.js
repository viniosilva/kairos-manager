const { Classroom, getClassroomById } = require('../../../../src/entities/classroom');
const { NotFoundError } = require('../../../../src/common/errors');

const classroomFixture = {
  name: 'A',
  degree: 1,
  grade: 1,
};

describe('Classroom Entity', () => {
  describe('Get Classroom By ID', () => {
    afterEach(async () => {
      await Classroom.destroy({ where: {} });
    });

    it('should return classroom when is id exists', async () => {
      const { id: classroomId } = await Classroom.create(classroomFixture);

      const classroom = await getClassroomById(classroomId);

      expect(classroom.degree).toEqual(1);
    });

    it('should throw not found error when id not exists', async () => {
      try {
        await getClassroomById('3fa85f64-5717-4562-b3fc-2c963f66afa6');
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error instanceof NotFoundError).toEqual(true);
      }
    });

    it('should throw an error when invalid id', async () => {
      try {
        await getClassroomById(1);
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error.message).toEqual('operator does not exist: uuid = integer');
      }
    });
  });
});
