const healthcheck = require('../../../src/api/healthcheck');
const { authenticate: authenticateMock } = require('../../../src/database/sequelize');

jest.mock('../../../src/database/sequelize');

const resMock = {
  statusCode: 200,
  body: {},
  json(json) {
    this.body = json;
    return this;
  },
  status(statusCode) {
    this.statusCode = statusCode;
    return this;
  },
};

describe('API', () => {
  describe('Healhcheck Common', () => {
    beforeEach(() => {
      authenticateMock.mockClear();
    });

    it('should throw status code 500', async () => {
      authenticateMock.mockRejectedValueOnce(new Error('TEST'));

      await healthcheck(null, resMock);

      expect(resMock.statusCode).toEqual(500);
    });

    it('should throw Internal Server Error', async () => {
      authenticateMock.mockRejectedValueOnce(new Error('TEST'));

      await healthcheck(null, resMock);

      expect(resMock.body.status).toEqual('Internal Server Error');
    });
  });
});
