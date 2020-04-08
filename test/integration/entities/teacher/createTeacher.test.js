const { Teacher, createTeacher } = require('../../../../src/entities/teacher');
const { ConflictError } = require('../../../../src/common/errors');

const teacherFixture = {
  fullName: 'Test',
  document: '0000000000',
};

describe('Teacher Entity', () => {
  describe('Create Teacher', () => {
    afterEach(async () => {
      await Teacher.destroy({ where: {} });
    });

    it('should return the created teacher when is a valid payload', async () => {
      const newTeacher = await createTeacher(teacherFixture);

      expect(newTeacher).toHaveProperty('id');
    });

    it('should throw a error with a invalid payload', async () => {
      try {
        await createTeacher({});
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    it('should throw a conflict error when try create a duplicated document', async () => {
      try {
        await createTeacher(teacherFixture);
        await createTeacher(teacherFixture);
      } catch (error) {
        expect(error instanceof ConflictError).toEqual(true);
      }
    });

    it('should return a error message when try create a duplicated document', async () => {
      try {
        await createTeacher(teacherFixture);
        await createTeacher(teacherFixture);
      } catch (error) {
        expect(error.message).toEqual('document must be unique');
      }
    });
  });
});
