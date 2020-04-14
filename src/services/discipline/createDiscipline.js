const formatTeacherRequest = require('./formatDisciplineRequest');
const formatTeacherResponse = require('./formatDisciplineResponse');
const { createDiscipline } = require('../../entities/discipline');

module.exports = async (payload) => {
  const formatedPayload = formatTeacherRequest(payload);
  const teacher = await createDiscipline(formatedPayload);
  const formatedTeacher = formatTeacherResponse(teacher);

  return formatedTeacher;
};
