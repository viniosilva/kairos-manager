const { getDisciplines } = require('../../../../src/services/discipline');
const { getDisciplines: getDisciplinesMock } = require('../../../../src/entities/discipline');

jest.mock('../../../../src/entities/discipline/getAll');

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

describe('Discipline Service', () => {
  describe('Get Disciplines', () => {
    beforeEach(() => {
      getDisciplinesMock.mockClear();
    });

    it('should return discipline list', async () => {
      getDisciplinesMock.mockReturnValueOnce(disciplinesFixture);

      const disciplines = await getDisciplines();

      expect(disciplines).toHaveLength(4);
    });

    it('should return empty discipline list', async () => {
      getDisciplinesMock.mockReturnValueOnce([]);
      const disciplines = await getDisciplines();

      expect(disciplines).toHaveLength(0);
    });

    it('should return only one discipline', async () => {
      getDisciplinesMock.mockReturnValueOnce([disciplinesFixture[0]]);

      const pageSize = 1;
      const disciplines = await getDisciplines(null, pageSize);

      expect(disciplines).toHaveLength(1);
    });

    it('should throw an error', async () => {
      getDisciplinesMock.mockRejectedValueOnce(new Error('LIMIT must not be negative'));

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
