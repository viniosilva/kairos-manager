const formatClassroomResponse = require('./formatClassroomResponse');
const { validateUuid } = require('../common');
const { getClassroomById } = require('../../entities/classroom');

module.exports = async (classroomId) => {
  validateUuid(classroomId);

  const classroom = await getClassroomById(classroomId);
  const formatedClassroom = formatClassroomResponse(classroom);

  return formatedClassroom;
};
