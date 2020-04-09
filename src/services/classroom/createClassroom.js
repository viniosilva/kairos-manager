const formatTeacherRequest = require('./formatClassroomRequest');
const formatTeacherResponse = require('./formatClassroomResponse');
const { createClassroom } = require('../../entities/classroom');

module.exports = async (payload) => {
  const formatedPayload = formatTeacherRequest(payload);
  const teacher = await createClassroom(formatedPayload);
  const formatedTeacher = formatTeacherResponse(teacher);

  return formatedTeacher;
};
