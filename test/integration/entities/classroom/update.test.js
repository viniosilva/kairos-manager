const { Classroom, updateClassroom } = require('../../../../src/entities/classroom');
const { NotFoundError } = require('../../../../src/common/errors');

const classroomFixture = {
  name: 'A',
  degree: 1,
  grade: 1,
};

describe('Classroom Entity', () => {
  describe('Update Classroom', () => {
    afterEach(async () => {
      await Classroom.destroy({ where: {} });
    });

    it('should return classroom with updated name when id exists', async () => {
      const { id: classroomId } = await Classroom.create(classroomFixture);

      const classroom = await updateClassroom(classroomId, { name: 'C' });

      expect(classroom.name).toEqual('C');
    });

    it('should throw not found error when id not exists', async () => {
      try {
        await updateClassroom('3fa85f64-5717-4562-b3fc-2c963f66afa6', { name: 'C' });
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error instanceof NotFoundError).toEqual(true);
      }
    });

    it('should throw an error when invalid id', async () => {
      try {
        await updateClassroom(1, { name: 'C' });
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error.message).toEqual('invalid input syntax for type uuid: "1"');
      }
    });

    it('should throw a error with a invalid payload', async () => {
      const { id: classroomId } = await Classroom.create(classroomFixture);

      try {
        await updateClassroom(classroomId, {});
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });
});
