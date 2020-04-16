const formatResponse = require('./formatResponse');
const { validateUuid } = require('../common');
const { getClassroomById } = require('../../entities/classroom');

module.exports = async (classroomId) => {
  validateUuid(classroomId);

  const classroom = await getClassroomById(classroomId);
  const formatedClassroom = formatResponse(classroom);

  return formatedClassroom;
};
