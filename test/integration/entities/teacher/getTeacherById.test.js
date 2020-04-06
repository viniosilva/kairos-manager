const { Teacher, getTeacherById } = require('../../../../src/entities/teacher');
const { NotFoundError } = require('../../../../src/common/errors');

const teacherFixture = {
  fullName: 'Fulano de Tal',
  document: '23615770030',
};

describe('Teacher Entity', () => {
  describe('Get Teacher By ID', () => {
    afterEach(async () => {
      await Teacher.destroy({ where: {} });
    });
    it('should return teacher when a valid id', async () => {
      const { id: teacherId } = await Teacher.create(teacherFixture);

      const teacher = await getTeacherById(teacherId);

      expect(teacher.document).toEqual('23615770030');
    });

    it('should throw not found error when id not exists', async () => {
      try {
        await getTeacherById('3fa85f64-5717-4562-b3fc-2c963f66afa6');
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error instanceof NotFoundError).toEqual(true);
      }
    });

    it('should throw an error when invalid id', async () => {
      try {
        await getTeacherById(1);
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error.message).toEqual('operator does not exist: uuid = integer');
      }
    });
  });
});
