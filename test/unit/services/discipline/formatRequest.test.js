const { ValidationError } = require('../../../../src/common/errors');
const formatRequest = require('../../../../src/services/discipline/formatRequest');

const disciplineFixture = {
  name: 'Português',
  degree: 1,
  grade: 1,
};

describe('Discipline Service', () => {
  describe('Format Discipline Request', () => {
    it('should format discipline when send a valid payload', async () => {
      const formatedDiscipline = await formatRequest(disciplineFixture);

      expect(formatedDiscipline).toBeDefined();
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
