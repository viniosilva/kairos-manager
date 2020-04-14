const { Discipline, getDisciplines } = require('../../../../src/entities/discipline');

const disciplinesFixture = [{
  name: 'Português',
  degree: 1,
  grade: 1,
}, {
  name: 'Matemática',
  degree: 1,
  grade: 1,
}, {
  name: 'Física',
  degree: 1,
  grade: 2,
}, {
  name: 'Inglês',
  degree: 1,
  grade: 2,
}];

describe('Discipline Entity', () => {
  describe('Get Disciplines', () => {
    afterEach(async () => {
      await Discipline.destroy({ where: {} });
    });

    it('should return discipline list', async () => {
      await Promise.all(disciplinesFixture.map((fixture) => Discipline.create(fixture)));

      const disciplines = await getDisciplines();

      expect(disciplines).toHaveLength(4);
    });

    it('should return empty discipline list', async () => {
      const disciplines = await getDisciplines();

      expect(disciplines).toHaveLength(0);
    });

    it('should return only one discipline', async () => {
      await Promise.all(disciplinesFixture.map((fixture) => Discipline.create(fixture)));

      const limit = 1;
      const disciplines = await getDisciplines(limit);

      expect(disciplines).toHaveLength(1);
    });

    it('should return only second discipline', async () => {
      await Discipline.create(disciplinesFixture[0]);
      await Discipline.create(disciplinesFixture[1]);

      const limit = 1;
      const offset = 1;
      const disciplines = await getDisciplines(limit, offset);

      expect(disciplines[0].name).toEqual('Matemática');
    });

    it('should throw an error', async () => {
      const limit = -1;

      try {
        await getDisciplines(limit);
        throw new Error('It should not pass here');
      } catch (error) {
        expect(error.message).toEqual('LIMIT must not be negative');
      }
    });
  });
});
