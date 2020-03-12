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

describe('DELETE /classrooms/:classroomId', () => {
  beforeEach(async () => {
    const newClassroom = await createClassroom(classroomFixture);
    classroomFixtureId = newClassroom.id;
  });
  afterEach(async () => {
    await Classroom.destroy({ where: {} });
  });
  it('with a valid classroomId should return status 204', async () => {
    const res = await request(app)
      .delete(`${path}/${classroomFixtureId}`)
      .set('Accept', 'application/json');

    assert.equal(res.status, 204);
  });
  it('with a inexistent classroomId should return status 404', async () => {
    const res = await request(app)
      .delete(`${path}/3fc7fdfb-1067-4227-9049-1511f0674e13`)
      .set('Accept', 'application/json');

    assert.equal(res.status, 404);
  });
  it('with a invalid classroomId should return status 400', async () => {
    const res = await request(app)
      .delete(`${path}/1`)
      .set('Accept', 'application/json');

    assert.equal(res.status, 400);
  });
});
