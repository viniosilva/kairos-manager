const { ValidationError } = require('../../../../src/common/errors');
const formatRequest = require('../../../../src/services/teacher/formatRequest');

const teacherFixture = {
  fullName: 'Test',
  document: '0000000000',
};

describe('Teacher Service', () => {
  describe('Format Teacher Request', () => {
    it('should format teacher when send a valid payload', async () => {
      const formatedTeacher = await formatRequest(teacherFixture);

      expect(formatedTeacher).toBeDefined();
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
