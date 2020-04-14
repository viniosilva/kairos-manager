const databaseConfig = require('../../../src/config/database');

describe('Config', () => {
  describe('Database', () => {
    it('should not return pool setting when env enviroment variable is undefined', () => {
      const config = databaseConfig();

      expect(config.pool).toBeUndefined();
    });
    it('should return pool setting  when env enviroment variable is staging', () => {
      process.env.ENV = 'staging';

      const config = databaseConfig();

      process.env.ENV = undefined;

      expect(config.pool).toBeDefined();
    });
  });
});
