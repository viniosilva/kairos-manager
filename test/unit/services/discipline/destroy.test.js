const { destroyDiscipline } = require('../../../../src/services/discipline');
const { destroyDiscipline: destroyDisciplineMock } = require('../../../../src/entities/discipline');

jest.mock('../../../../src/entities/discipline/destroy');

describe('Discipline Service', () => {
  describe('Destroy Discipline', () => {
    beforeEach(() => {
      destroyDisciplineMock.mockClear();
    });

    it('should return successfull message when id exists', async () => {
      const response = await destroyDiscipline('3fa85f64-5717-4562-b3fc-2c963f66afa6');

      expect(response).toEqual('Discipline destroyed');
    });
  });
});
