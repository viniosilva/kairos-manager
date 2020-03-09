const assert = require('assert');
const request = require('supertest');
const app = require('../../../src/api/server');
const { Classroom } = require('../../../src/entities/classroom');

const path = '/classrooms';

const classroomFixture = {
  name: 'A',
  grade: 1,
  degree: 1,
};

describe('POST /classrooms', () => {
  afterEach(async () => {
    await Classroom.destroy({ where: {} });
  });
  it('with a valid classroom should return status 201', async () => {
    const res = await request(app)
      .post(path)
      .send(classroomFixture)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');

    assert.equal(res.status, 201);
  });
});
