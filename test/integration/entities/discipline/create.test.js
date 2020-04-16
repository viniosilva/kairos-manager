const { Discipline, createDiscipline } = require('../../../../src/entities/discipline');

const disciplineFixture = {
  name: 'Português',
  degree: 1,
  grade: 1,
};

describe('Discipline Entity', () => {
  describe('Create Discipline', () => {
    afterEach(async () => {
      await Discipline.destroy({ where: {} });
    });

    it('should return the created discipline when is a valid payload', async () => {
      const newDiscipline = await createDiscipline(disciplineFixture);

      expect(newDiscipline).toHaveProperty('id');
    });

    it('should throw a error with a invalid payload', async () => {
      try {
        await createDiscipline({});
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });
});
