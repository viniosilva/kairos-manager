const assert = require('assert');
const request = require('supertest');
const { app } = require('../../../src/api/server');
const { Classroom } = require('../../../src/entities/classroom');

const path = '/classrooms';

const classroomsFixture = [
  { name: 'A', grade: 1, degree: 1 },
  { name: 'B', grade: 2, degree: 2 },
];

describe('GET /classrooms', () => {
  afterEach(async () => {
    await Classroom.destroy({ where: {} });
  });
  it('should return status 200 when the classroom list is empty', async () => {
    const res = await request(app)
      .get(path)
      .set('Accept', 'application/json');

    assert.equal(res.status, 200);
  });
  it('should return status 200 when contains a classroom list', async () => {
    await Classroom.bulkCreate(classroomsFixture);

    const res = await request(app)
      .get(path)
      .set('Accept', 'application/json');

    assert.equal(res.status, 200);
  });
  it('should return a classroom list with 2 objects', async () => {
    await Classroom.bulkCreate(classroomsFixture);

    const res = await request(app)
      .get(path)
      .set('Accept', 'application/json');

    assert.equal(res.body.length, 2);
  });
  it('should return a empty classroom list', async () => {
    const res = await request(app)
      .get(path)
      .set('Accept', 'application/json');

    assert.equal(res.body.length, 0);
  });
});
