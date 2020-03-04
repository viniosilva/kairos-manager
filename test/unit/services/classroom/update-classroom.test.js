const assert = require('assert');
const sinon = require('sinon');
const { updateClassroom } = require('../../../../src/services/classroom');
const Classroom = require('../../../../src/entities/classroom');

let classroomStub;

context('Classroom Service', () => {
  describe('Update Classroom', () => {
    beforeEach(() => {
      classroomStub = sinon
        .stub(Classroom, 'updateClassroom')
        .resolves({});
    });
    afterEach(() => {
      classroomStub.restore();
    });
    it('should call updateClassroom when update classroom', async () => {
      await updateClassroom('', {});

      assert.equal(classroomStub.called, true);
    });
  });
});
