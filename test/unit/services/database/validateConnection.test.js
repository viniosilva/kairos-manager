jest.mock('../../../../src/database/validateConnection');

const { validateConnection } = require('../../../../src/services/database');
const validateConnectionMock = require('../../../../src/database/validateConnection');

describe('Database Service', () => {
  describe('Validate Connection', () => {
    beforeEach(() => {
      validateConnectionMock.mockClear();
    });
    it('should validate the database connection', async () => {
      await validateConnection();
    });
  });
});
