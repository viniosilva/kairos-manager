const { Classroom, destroyClassroom } = require('../../../../src/entities/classroom');
const { NotFoundError } = require('../../../../src/common/errors');

const classroomFixture = {
  name: 'A',
  degree: 1,
  grade: 1,
};

describe('Classroom Entity', () => {
  describe('Destroy Classroom', () => {
    afterEach(async () => {
      await Classroom.destroy({ where: {} });
    });

    it('should destroy classroom when id exists', async () => {
      const { id: classroomId } = await Classroom.create(classroomFixture);

      await destroyClassroom(classroomId);
      const classroom = await Classroom.findByPk(classroomId);

      expect(classroom).toEqual(null);
    });

    it('should throw not found error when id not exists', async () => {
      try {
        await destroyClassroom('3fa85f64-5717-4562-b3fc-2c963f66afa6');
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error instanceof NotFoundError).toEqual(true);
      }
    });

    it('should throw an error when invalid id', async () => {
      try {
        await destroyClassroom(1);
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error.message).toEqual('operator does not exist: uuid = integer');
      }
    });
  });
});
