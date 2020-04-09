const { Classroom, createClassroom } = require('../../../../src/entities/classroom');

const classroomFixture = {
  name: 'A',
  degree: 1,
  grade: 1,
};

describe('Classroom Entity', () => {
  describe('Create Classroom', () => {
    afterEach(async () => {
      await Classroom.destroy({ where: {} });
    });

    it('should return the created classroom when is a valid payload', async () => {
      const newClassroom = await createClassroom(classroomFixture);

      expect(newClassroom).toHaveProperty('id');
    });

    it('should throw a error with a invalid payload', async () => {
      try {
        await createClassroom({});
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });
});
