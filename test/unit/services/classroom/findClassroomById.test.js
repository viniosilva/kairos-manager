const assert = require('assert');
const sinon = require('sinon');
const { findClassroomById } = require('../../../../src/services/classroom');
const { Classroom } = require('../../../../src/entities/classroom');

let classroomStub;

context('Classroom Service', () => {
  describe('Find Classroom by ID', () => {
    beforeEach(() => {
      classroomStub = sinon
        .stub(Classroom, 'findByPk')
        .resolves({});
    });
    afterEach(() => {
      classroomStub.restore();
    });
    it('should call findClassroomById when find classroom by id', async () => {
      await findClassroomById('');

      assert.equal(classroomStub.called, true);
    });
  });
});
