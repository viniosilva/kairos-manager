const request = require('supertest');
const { app } = require('../../../src/api/server');
const { Teacher } = require('../../../src/entities/teacher');

const path = '/graphql';

describe('Create Teacher', () => {
  afterEach(async () => {
    await Teacher.destroy({ where: {} });
  });

  it('should return the created teacher', async () => {
    const res = await request(app)
      .post(path)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send({
        query: `mutation {
        createTeacher(input: {
          fullName: "Test",
          document: "999999999"
        }) {
          id
          fullName
          document
        }
      }`,
      });

    expect(res.body.data.createTeacher.id).toBeDefined();
  });
});
