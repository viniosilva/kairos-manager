const { updateDiscipline } = require('../../../../src/services/discipline');
const { updateDiscipline: updateDisciplineMock } = require('../../../../src/entities/discipline');

jest.mock('../../../../src/entities/discipline/updateDiscipline');

const disciplineFixture = {
  name: 'Português',
  degree: 1,
  grade: 1,
};

describe('Discipline Service', () => {
  describe('Update Discipline', () => {
    beforeEach(() => {
      updateDisciplineMock.mockClear();
    });

    it('should create a discipline when is a valid payload', async () => {
      updateDisciplineMock.mockReturnValueOnce({
        id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
        name: 'Português',
        degree: 1,
        grade: 1,
      });

      const discipline = await updateDiscipline('3fa85f64-5717-4562-b3fc-2c963f66afa6', disciplineFixture);

      expect(discipline.id).toEqual('3fa85f64-5717-4562-b3fc-2c963f66afa6');
    });
  });
});
