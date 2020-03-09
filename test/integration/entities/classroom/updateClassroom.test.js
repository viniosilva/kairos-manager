const assert = require('assert');
const { Classroom, updateClassroom, createClassroom } = require('../../../../src/entities/classroom');

const classroomFixture = {
  name: 'A',
  grade: 1,
  degree: 1,
};

let classroomFixtureId;

context('Classroom Entity', () => {
  describe('Update Classroom', () => {
    before(async () => {
      const newClassroom = await createClassroom(classroomFixture);
      classroomFixtureId = newClassroom.id;
    });
    after(async () => {
      await Classroom.destroy({ where: {} });
    });
    it('should return the classroom when find classroom by id', async () => {
      const classroomToUpdate = {
        name: 'B',
        grade: 2,
        degree: 2,
      };

      const classroom = await updateClassroom(classroomFixtureId, classroomToUpdate);

      assert.equal(classroom.name, classroomToUpdate.name);
    });
    it('should return error when classroom is not found', async () => {
      try {
        const classroomToUpdate = {
          name: 'B',
          grade: 2,
          degree: 2,
        };

        await updateClassroom('3fc7fdfb-1067-4227-9049-1511f0674e13', classroomToUpdate);
        throw new Error();
      } catch (error) {
        assert.equal(error.message, 'Classroom not found');
      }
    });
  });
});
