const assert = require('assert');
const validateConnection = require('../../../src/database/validateConnection');

context('Database', () => {
  describe('Validate connection', () => {
    it('should return true when validate connection', async () => {
      const isValid = await validateConnection();

      assert.equal(isValid, true);
    });
  });
});
