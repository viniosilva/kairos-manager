const { ValidationError } = require('../../../../src/common/errors');
const formatRequest = require('../../../../src/services/classroom/formatRequest');

const classroomFixture = {
  name: 'A',
  degree: 1,
  grade: 1,
};

describe('Classroom Service', () => {
  describe('Format Classroom Request', () => {
    it('should format classroom when send a valid payload', async () => {
      const formatedClassroom = await formatRequest(classroomFixture);

      expect(formatedClassroom).toBeDefined();
    });

    it('should return a ValidationError when send a invalid payload', async () => {
      try {
        await formatRequest({});

        throw new Error('It should not pass here');
      } catch (error) {
        expect(error instanceof ValidationError).toEqual(true);
      }
    });
  });
});
