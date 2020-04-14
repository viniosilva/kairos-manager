const { ValidationError } = require('../../../../src/common/errors');
const formatDisciplineRequest = require('../../../../src/services/discipline/formatDisciplineRequest');

const disciplineFixture = {
  name: 'Português',
  degree: 1,
  grade: 1,
};

describe('Discipline Service', () => {
  describe('Format Discipline Request', () => {
    it('should format discipline when send a valid payload', async () => {
      const formatedDiscipline = await formatDisciplineRequest(disciplineFixture);

      expect(formatedDiscipline).toBeDefined();
    });

    it('should return a ValidationError when send a invalid payload', async () => {
      try {
        await formatDisciplineRequest({});

        throw new Error('It should not pass here');
      } catch (error) {
        expect(error instanceof ValidationError).toEqual(true);
      }
    });
  });
});
