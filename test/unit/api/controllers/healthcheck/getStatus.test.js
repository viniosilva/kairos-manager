jest.mock('../../../../../src/database/sequelize');

const { getStatus } = require('../../../../../src/api/controllers/healthcheck');
const { authenticate: authenticateMock } = require('../../../../../src/database/sequelize');

const resMock = {
  body: '',
  json(body) {
    this.body = body;
  },
};

const nextMock = jest.fn();

describe('API', () => {
  describe('Get Status', () => {
    beforeEach(() => {
      authenticateMock.mockClear();
    });

    it('should return status It\'s all OK', async () => {
      authenticateMock.mockReturnValue(true);

      await getStatus(null, resMock);

      expect(resMock.body.status).toEqual('It\'s all OK');
    });

    it('should throw a error with next', async () => {
      authenticateMock.mockRejectedValue(new Error('TEST'));

      await getStatus(null, resMock, nextMock);

      expect(nextMock).toHaveBeenCalledTimes(1);
    });
  });
});
