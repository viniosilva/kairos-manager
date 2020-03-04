const assert = require('assert');
const { Classroom, destroyClassroom, createClassroom } = require('../../../../src/entities/classroom');

const classroomFixture = {
  name: 'A',
  grade: 1,
  degree: 1,
};

let classroomFixtureId;

context('Classroom Entity', () => {
  describe('Destroy Classroom', () => {
    before(async () => {
      const newClassroom = await createClassroom(classroomFixture);
      classroomFixtureId = newClassroom.id;
    });
    after(async () => {
      await Classroom.destroy({ where: {} });
    });
    it('should destroy classroom', async () => {
      await destroyClassroom(classroomFixtureId);
    });
    it('should return error when classroom is not found', async () => {
      try {
        await destroyClassroom('3fc7fdfb-1067-4227-9049-1511f0674e13');
        throw new Error();
      } catch (error) {
        assert.equal(error.message, 'Classroom not found');
      }
    });
  });
});
