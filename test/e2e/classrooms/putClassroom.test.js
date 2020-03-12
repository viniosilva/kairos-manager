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

const classroomToUpdate = {
  name: 'B',
  grade: 2,
  degree: 2,
};

let classroomFixtureId;

describe('PUT /classrooms/:classroomId', () => {
  beforeEach(async () => {
    const newClassroom = await createClassroom(classroomFixture);
    classroomFixtureId = newClassroom.id;
  });
  afterEach(async () => {
    await Classroom.destroy({ where: {} });
  });
  it('with a valid classroomId should return status 200', async () => {
    const res = await request(app)
      .put(`${path}/${classroomFixtureId}`)
      .send(classroomToUpdate)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');

    assert.equal(res.status, 200);
  });
  it('with a valid classroomId should return updated classroom name', async () => {
    const res = await request(app)
      .put(`${path}/${classroomFixtureId}`)
      .send(classroomToUpdate)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');

    assert.equal(res.body.name, classroomToUpdate.name);
  });
  it('with a inexistent classroomId should return status 404', async () => {
    const res = await request(app)
      .put(`${path}/3fc7fdfb-1067-4227-9049-1511f0674e13`)
      .send(classroomToUpdate)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');

    assert.equal(res.status, 404);
  });
  it('with a invalid classroomId should return status 400', async () => {
    const res = await request(app)
      .put(`${path}/1`)
      .send(classroomToUpdate)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');

    assert.equal(res.status, 400);
  });
  it('with a invalid classroom should return an error', async () => {
    const invalidClassroom = { name: 'A', grade: 1 };

    const res = await request(app)
      .put(`${path}/${classroomFixtureId}`)
      .send(invalidClassroom)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');

    assert.equal(res.body.message, '"degree" is required');
  });
});
