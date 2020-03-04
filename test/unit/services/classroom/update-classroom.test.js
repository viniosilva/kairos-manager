const assert = require('assert');
const sinon = require('sinon');
const { updateClassroom } = require('../../../../src/services/classroom');
const Classroom = require('../../../../src/entities/classroom');

let classroomStub;

context('Classroom Service', () => {
  describe('Update Classroom', () => {
    afterEach(() => {
      classroomStub.restore();
    });
    it('should call updateClassroom when update classroom', async () => {
      classroomStub = sinon
        .stub(Classroom, 'updateClassroom')
        .resolves({});

      await updateClassroom('', {});

      assert.equal(classroomStub.called, true);
    });
    it('should call updateClassroom when update classroom', async () => {
      classroomStub = sinon
        .stub(Classroom, 'updateClassroom')
        .throws(new Error(''));

      await updateClassroom('', {});

      assert.equal(classroomStub.called, true);
    });
  });
});
