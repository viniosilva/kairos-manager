const formatTeacherRequest = require('./formatTeacherRequest');
const formatTeacherResponse = require('./formatTeacherResponse');
const { updateTeacher } = require('../../entities/teacher');

module.exports = async (teacherId, payload) => {
  const formatedPayload = formatTeacherRequest(payload);
  const teacher = await updateTeacher(teacherId, formatedPayload);
  const formatedTeacher = formatTeacherResponse(teacher);

  return formatedTeacher;
};
