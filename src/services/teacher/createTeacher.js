const formatTeacherRequest = require('./formatTeacherRequest');
const formatTeacherResponse = require('./formatTeacherResponse');
const { createTeacher } = require('../../entities/teacher');

module.exports = async (payload) => {
  const formatedPayload = formatTeacherRequest(payload);
  const teacher = await createTeacher(formatedPayload);
  const formatedTeacher = formatTeacherResponse(teacher);

  return formatedTeacher;
};
