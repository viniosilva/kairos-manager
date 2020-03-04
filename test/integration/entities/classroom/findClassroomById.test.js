const assert = require('assert');
const { Classroom, findClassroomById, createClassroom } = require('../../../../src/entities/classroom');

const classroomFixture = {
  name: 'A',
  grade: 1,
  degree: 1,
};

let classroomFixtureId;

context('Classroom Entity', () => {
  describe('Find Classroom by ID', () => {
    before(async () => {
      const newClassroom = await createClassroom(classroomFixture);
      classroomFixtureId = newClassroom.id;
    });
    after(async () => {
      await Classroom.destroy({ where: {} });
    });
    it('should return the classroom when update classroom', async () => {
      const classroom = await findClassroomById(classroomFixtureId);

      assert.equal(classroom.id, classroomFixtureId);
    });
    it('should return error when classroom is not found', async () => {
      try {
        await findClassroomById('3fc7fdfb-1067-4227-9049-1511f0674e13');
        throw new Error();
      } catch (error) {
        assert.equal(error.message, 'Classroom not found');
      }
    });
  });
});
