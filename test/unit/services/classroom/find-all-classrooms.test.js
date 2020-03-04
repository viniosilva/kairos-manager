const assert = require('assert');
const sinon = require('sinon');
const { findAllClassrooms } = require('../../../../src/services/classroom');
const Classroom = require('../../../../src/entities/classroom');

let classroomStub;

context('Classroom Service', () => {
  describe('Find all Classrooms', () => {
    beforeEach(() => {
      classroomStub = sinon
        .stub(Classroom, 'findAllClassrooms')
        .resolves({});
    });
    afterEach(() => {
      classroomStub.restore();
    });
    it('should call findAllClassrooms when find all classrooms', async () => {
      await findAllClassrooms();

      assert.equal(classroomStub.called, true);
    });
  });
});
