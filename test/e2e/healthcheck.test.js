const request = require('supertest');
const { app } = require('../../src/api/server');

const path = '/healthcheck';

describe('GET /healthcheck', () => {
  it('should return status 200 when GET /healthcheck', async () => {
    const res = await request(app).get(path);

    expect(res.status).toEqual(200);
  });
  it('should return server OK when GET /healthcheck', async () => {
    const res = await request(app).get(path);

    expect(res.body.status).toEqual('It\'s all OK');
  });
});
