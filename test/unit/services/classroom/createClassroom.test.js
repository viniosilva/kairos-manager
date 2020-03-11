const assert = require('assert');
const sinon = require('sinon');
const { createClassroom } = require('../../../../src/services/classroom');
const { Classroom } = require('../../../../src/entities/classroom');

let classroomStub;

context('Classroom Service', () => {
  describe('Create Classroom', () => {
    beforeEach(() => {
      classroomStub = sinon
        .stub(Classroom, 'create')
        .resolves({});
    });
    afterEach(() => {
      classroomStub.restore();
    });

    it('should call createClassroom classroom when create a classroom', async () => {
      await createClassroom({});

      assert.equal(classroomStub.called, true);
    });
  });
});
