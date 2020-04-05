const { getSequelizeErrors } = require('../../../../src/database/common');

describe('Common Database', () => {
  describe('Get Sequelize Errors', () => {
    it('should return array errors when is an array of errors', () => {
      const error = new Error('TEST');
      error.errors = [
        { message: 'TEST1' },
        { message: 'TEST2' },
        { message: 'TEST3' },
      ];

      const errors = getSequelizeErrors(error);

      expect(errors).toEqual('TEST1, TEST2, TEST3');
    });
    it('should return array errors with 1 element when is not an array of errors', () => {
      const error = new Error('TEST');

      const errors = getSequelizeErrors(error);

      expect(errors).toEqual('TEST');
    });

    it('should return undefined when is not an error', () => {
      const errors = getSequelizeErrors({});

      expect(errors).toBeUndefined();
    });
  });
});
