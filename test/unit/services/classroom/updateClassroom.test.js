const assert = require('assert');
const sinon = require('sinon');
const { updateClassroom } = require('../../../../src/services/classroom');
const { Classroom } = require('../../../../src/entities/classroom');

let classroomStub;

context('Classroom Service', () => {
  describe('Update Classroom', () => {
    afterEach(() => {
      classroomStub.restore();
    });
    it('should call updateClassroom when update classroom', async () => {
      classroomStub = sinon
        .stub(Classroom, 'update')
        .resolves({});

      await updateClassroom('', {});

      assert.equal(classroomStub.called, true);
    });
    it('should call updateClassroom when update classroom throw a Error', async () => {
      classroomStub = sinon
        .stub(Classroom, 'update')
        .throws(new Error('Test Error'));

      try {
        await updateClassroom('', {});
      } catch (_error) {
        assert.equal(classroomStub.called, true);
      }
    });
  });
});
