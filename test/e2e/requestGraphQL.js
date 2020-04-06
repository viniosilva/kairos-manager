const request = require('supertest');
const { app } = require('../../src/api/server');

module.exports = () => request(app)
  .post('/graphql')
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json');
