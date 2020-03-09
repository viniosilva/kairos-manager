const validateConnection = require('../../../src/database/validateConnection');

context('Database', () => {
  describe('Validate connection', () => {
    it('should return true when validate connection', async () => {
      await validateConnection();
    });
  });
});
