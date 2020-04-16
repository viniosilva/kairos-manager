const { Discipline, destroyDiscipline } = require('../../../../src/entities/discipline');
const { NotFoundError } = require('../../../../src/common/errors');

const disciplineFixture = {
  name: 'Português',
  degree: 1,
  grade: 1,
};

describe('Discipline Entity', () => {
  describe('Destroy Discipline', () => {
    afterEach(async () => {
      await Discipline.destroy({ where: {} });
    });

    it('should destroy discipline when id exists', async () => {
      const { id: disciplineId } = await Discipline.create(disciplineFixture);

      await destroyDiscipline(disciplineId);
      const discipline = await Discipline.findByPk(disciplineId);

      expect(discipline).toEqual(null);
    });

    it('should throw not found error when id not exists', async () => {
      try {
        await destroyDiscipline('3fa85f64-5717-4562-b3fc-2c963f66afa6');
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error instanceof NotFoundError).toEqual(true);
      }
    });

    it('should throw an error when invalid id', async () => {
      try {
        await destroyDiscipline(1);
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error.message).toEqual('operator does not exist: uuid = integer');
      }
    });
  });
});
