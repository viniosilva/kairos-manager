const formatRequest = require('./formatRequest');
const formatResponse = require('./formatResponse');
const { createDiscipline } = require('../../entities/discipline');

module.exports = async (payload) => {
  const formatedPayload = formatRequest(payload);
  const teacher = await createDiscipline(formatedPayload);
  const formatedTeacher = formatResponse(teacher);

  return formatedTeacher;
};
