const formatClassroomRequest = require('./formatClassroomRequest');
const formatClassroomResponse = require('./formatClassroomResponse');
const { validateUuid } = require('../common');
const { updateClassroom } = require('../../entities/classroom');

module.exports = async (classroomId, payload) => {
  validateUuid(classroomId);

  const formatedPayload = formatClassroomRequest(payload);
  const classroom = await updateClassroom(classroomId, formatedPayload);
  const formatedClassroom = formatClassroomResponse(classroom);

  return formatedClassroom;
};
