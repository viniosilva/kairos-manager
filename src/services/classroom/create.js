const formatRequest = require('./formatRequest');
const formatResponse = require('./formatResponse');
const { createClassroom } = require('../../entities/classroom');

module.exports = async (payload) => {
  const formatedPayload = formatRequest(payload);
  const teacher = await createClassroom(formatedPayload);
  const formatedTeacher = formatResponse(teacher);

  return formatedTeacher;
};
