const assert = require('assert');
const { Classroom, createClassroom } = require('../../../../src/entities/classroom');

const classroomFixture = {
  name: 'A',
  grade: 1,
  degree: 1,
};

context('Classroom Entity', () => {
  describe('Create Classroom', () => {
    after(async () => {
      await Classroom.destroy({ where: {} });
    });
    it('should return the created classroom when create a classroom', async () => {
      const classroom = await createClassroom(classroomFixture);

      assert.ok(classroom.id);
    });
  });
});
