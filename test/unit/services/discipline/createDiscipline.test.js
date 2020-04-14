const { createDiscipline } = require('../../../../src/services/discipline');
const { createDiscipline: createDisciplineMock } = require('../../../../src/entities/discipline');

jest.mock('../../../../src/entities/discipline/createDiscipline');

const disciplineFixture = {
  name: 'Português',
  degree: 1,
  grade: 1,
};

describe('Discipline Service', () => {
  describe('Create Discipline', () => {
    beforeEach(() => {
      createDisciplineMock.mockClear();
    });

    it('should create a discipline when is a valid payload', async () => {
      createDisciplineMock.mockReturnValueOnce({
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        name: 'Português',
        degree: 1,
        grade: 1,
      });

      const discipline = await createDiscipline(disciplineFixture);

      expect(discipline.id).toEqual('3fa85f64-5717-4562-b3fc-2c963f66afa6');
    });
  });
});
