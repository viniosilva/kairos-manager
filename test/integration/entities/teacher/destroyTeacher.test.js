const { Teacher, destroyTeacher } = require('../../../../src/entities/teacher');
const { NotFoundError } = require('../../../../src/common/errors');

const teacherFixture = {
  fullName: 'Test',
  document: '0000000000',
};

describe('Teacher Entity', () => {
  describe('Destroy Teacher', () => {
    afterEach(async () => {
      await Teacher.destroy({ where: {} });
    });

    it('should destroy teacher when is id exists', async () => {
      const { id: teacherId } = await Teacher.create(teacherFixture);

      await destroyTeacher(teacherId);
      const teacher = await Teacher.findByPk(teacherId);

      expect(teacher).toEqual(null);
    });

    it('should throw not found error when id not exists', async () => {
      try {
        await destroyTeacher('3fa85f64-5717-4562-b3fc-2c963f66afa6');
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error instanceof NotFoundError).toEqual(true);
      }
    });

    it('should throw an error when invalid id', async () => {
      try {
        await destroyTeacher(1);
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error.message).toEqual('operator does not exist: uuid = integer');
      }
    });
  });
});
