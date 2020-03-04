const assert = require('assert');
const { Classroom, findAllClassrooms, createClassroom } = require('../../../../src/entities/classroom');

const classroomFixture = {
  name: 'A',
  grade: 1,
  degree: 1,
};

context('Classroom Entity', () => {
  describe('Find all Classroom', () => {
    before(async () => {
      await createClassroom(classroomFixture);
      await createClassroom(classroomFixture);
    });
    after(async () => {
      await Classroom.destroy({ where: {} });
    });
    it('should return the classrooms when find all classrooms', async () => {
      const offset = 0;
      const limit = 10;

      const classrooms = await findAllClassrooms(offset, limit);

      assert.equal(classrooms.length, 2);
    });
    it('should return one classroom when find classrooms whith limit equal 1', async () => {
      const offset = 0;
      const limit = 1;

      const classrooms = await findAllClassrooms(offset, limit);

      assert.equal(classrooms.length, 1);
    });
  });
});
