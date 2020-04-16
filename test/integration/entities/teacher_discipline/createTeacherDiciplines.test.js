const { Discipline } = require('../../../../src/entities/discipline');
const { Teacher } = require('../../../../src/entities/teacher');
const { createTeacherDisciplines } = require('../../../../src/entities/teacher_discipline');

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
  describe('Create Relationship Teacher Disciplines', () => {
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

    it('should return the created teacher when is a valid payload', async () => {
      await createTeacherDisciplines(teacherId, disciplineIds);
    });

    it('should throw a error with a invalid payload', async () => {
      try {
        await createTeacherDisciplines();
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });
});
