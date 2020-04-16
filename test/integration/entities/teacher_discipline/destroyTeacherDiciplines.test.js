const { Discipline } = require('../../../../src/entities/discipline');
const { Teacher } = require('../../../../src/entities/teacher');
const { createTeacherDisciplines, destroyTeacherDisciplines } = require('../../../../src/entities/teacher_discipline');
const { NotFoundError } = require('../../../../src/common/errors');

const teacherFixture = {
  fullName: 'Test',
  document: '0000000000',
};

const disciplinesFixture = [{
  name: 'Português',
  degree: 1,
  grade: 1,
}, {
  name: 'Matemática',
  degree: 1,
  grade: 1,
}];

const disciplineIds = [];
let teacherId;

describe('Teacher Entity', () => {
  describe('Destroy Relationship Teacher Disciplines', () => {
    beforeAll(async () => {
      await Promise.all(disciplinesFixture.map(async (discipline) => {
        disciplineIds.push((await Discipline.create(discipline)).id);
      }));

      teacherId = (await Teacher.create(teacherFixture)).id;
    });

    afterEach(async () => {
      await Teacher.destroy({ where: {} });
      await Discipline.destroy({ where: {} });
    });

    it('should destroy teacher when teacher id exists', async () => {
      await createTeacherDisciplines(teacherId, disciplineIds);

      await destroyTeacherDisciplines(teacherId);
    });

    it('should throw not found error when id not exists', async () => {
      try {
        await destroyTeacherDisciplines('3fa85f64-5717-4562-b3fc-2c963f66afa6');
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error instanceof NotFoundError).toEqual(true);
      }
    });

    it('should throw an error when invalid id', async () => {
      try {
        await destroyTeacherDisciplines(1);
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error.message).toEqual('operator does not exist: uuid = integer');
      }
    });
  });
});
