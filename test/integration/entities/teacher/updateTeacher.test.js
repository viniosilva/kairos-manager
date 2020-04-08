const { Teacher, updateTeacher } = require('../../../../src/entities/teacher');
const { ConflictError, NotFoundError } = require('../../../../src/common/errors');

const teacherFixture = {
  fullName: 'Test',
  document: '0000000000',
};

describe('Teacher Entity', () => {
  describe('Update Teacher', () => {
    afterEach(async () => {
      await Teacher.destroy({ where: {} });
    });

    it('should return teacher with updated fullName when id exists', async () => {
      const { id: teacherId } = await Teacher.create(teacherFixture);

      const teacher = await updateTeacher(teacherId, { fullName: 'Update Test' });

      expect(teacher.fullName).toEqual('Update Test');
    });

    it('should throw not found error when id not exists', async () => {
      try {
        await updateTeacher('3fa85f64-5717-4562-b3fc-2c963f66afa6', { fullName: 'TEST' });
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error instanceof NotFoundError).toEqual(true);
      }
    });

    it('should throw an error when invalid id', async () => {
      try {
        await updateTeacher(1, { fullName: 'TEST' });
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error.message).toEqual('invalid input syntax for type uuid: "1"');
      }
    });

    it('should throw a error with a invalid payload', async () => {
      const { id: teacherId } = await Teacher.create(teacherFixture);

      try {
        await updateTeacher(teacherId, {});
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    it('should throw a conflict error when try update a duplicated document', async () => {
      await Teacher.create({ fullName: 'Test', document: '1111111111' });
      const { id: teacherId } = await Teacher.create(teacherFixture);

      try {
        await updateTeacher(teacherId, { document: '1111111111' });
      } catch (error) {
        expect(error instanceof ConflictError).toEqual(true);
      }
    });

    it('should return a error message when try create a duplicated document', async () => {
      await Teacher.create({ fullName: 'Test', document: '1111111111' });
      const { id: teacherId } = await Teacher.create(teacherFixture);

      try {
        await updateTeacher(teacherId, { document: '1111111111' });
      } catch (error) {
        expect(error.message).toEqual('document must be unique');
      }
    });
  });
});
