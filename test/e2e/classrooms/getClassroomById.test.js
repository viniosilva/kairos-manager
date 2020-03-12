const assert = require('assert');
const request = require('supertest');
const { app } = require('../../../src/api/server');
const { Classroom, createClassroom } = require('../../../src/entities/classroom');

const path = '/classrooms';

const classroomFixture = {
  name: 'A',
  grade: 1,
  degree: 1,
};

let classroomFixtureId;

describe('GET /classrooms/:classroomId', () => {
  beforeEach(async () => {
    const newClassroom = await createClassroom(classroomFixture);
    classroomFixtureId = newClassroom.id;
  });
  afterEach(async () => {
    await Classroom.destroy({ where: {} });
  });
  it('with a valid classroomId should return status 200', async () => {
    const res = await request(app)
      .get(`${path}/${classroomFixtureId}`)
      .set('Accept', 'application/json');

    assert.equal(res.status, 200);
  });
  it('with a valid classroomId should return classroom object', async () => {
    const res = await request(app)
      .get(`${path}/${classroomFixtureId}`)
      .set('Accept', 'application/json');

    assert.equal(res.body.name, classroomFixture.name);
  });
  it('with a inexistent classroomId should return status 404', async () => {
    const res = await request(app)
      .get(`${path}/3fc7fdfb-1067-4227-9049-1511f0674e13`)
      .set('Accept', 'application/json');

    assert.equal(res.status, 404);
  });
  it('with a invalid classroomId should return status 400', async () => {
    const res = await request(app)
      .get(`${path}/1`)
      .set('Accept', 'application/json');

    assert.equal(res.status, 400);
  });
});
