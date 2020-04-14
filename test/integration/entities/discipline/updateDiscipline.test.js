const { Discipline, updateDiscipline } = require('../../../../src/entities/discipline');
const { NotFoundError } = require('../../../../src/common/errors');

const disciplineFixture = {
  name: 'Português',
  degree: 1,
  grade: 1,
};

describe('Discipline Entity', () => {
  describe('Update Discipline', () => {
    afterEach(async () => {
      await Discipline.destroy({ where: {} });
    });

    it('should return discipline with updated name when id exists', async () => {
      const { id: disciplineId } = await Discipline.create(disciplineFixture);

      const discipline = await updateDiscipline(disciplineId, { name: 'Matemática' });

      expect(discipline.name).toEqual('Matemática');
    });

    it('should throw not found error when id not exists', async () => {
      try {
        await updateDiscipline('3fa85f64-5717-4562-b3fc-2c963f66afa6', { name: 'Matemática' });
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error instanceof NotFoundError).toEqual(true);
      }
    });

    it('should throw an error when invalid id', async () => {
      try {
        await updateDiscipline(1, { name: 'Matemática' });
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error.message).toEqual('invalid input syntax for type uuid: "1"');
      }
    });

    it('should throw a error with a invalid payload', async () => {
      const { id: disciplineId } = await Discipline.create(disciplineFixture);

      try {
        await updateDiscipline(disciplineId, {});
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });
});
