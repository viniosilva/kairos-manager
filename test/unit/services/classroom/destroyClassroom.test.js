const assert = require('assert');
const sinon = require('sinon');
const { destroyClassroom } = require('../../../../src/services/classroom');
const Classroom = require('../../../../src/entities/classroom');

let classroomStub;

context('Classroom Service', () => {
  describe('Destroy Classroom', () => {
    beforeEach(() => {
      classroomStub = sinon
        .stub(Classroom, 'destroyClassroom')
        .resolves({});
    });
    afterEach(() => {
      classroomStub.restore();
    });
    it('should destroy classroom', async () => {
      await destroyClassroom({});

      assert.equal(classroomStub.called, true);
    });
  });
});
