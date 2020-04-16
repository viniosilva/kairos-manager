const formatRequest = require('./formatRequest');
const formatResponse = require('./formatResponse');
const { validateUuid } = require('../common');
const { updateClassroom } = require('../../entities/classroom');

module.exports = async (classroomId, payload) => {
  validateUuid(classroomId);

  const formatedPayload = formatRequest(payload);
  const classroom = await updateClassroom(classroomId, formatedPayload);
  const formatedClassroom = formatResponse(classroom);

  return formatedClassroom;
};
