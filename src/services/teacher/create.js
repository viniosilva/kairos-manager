const formatRequest = require('./formatRequest');
const formatResponse = require('./formatResponse');
const { createTeacher } = require('../../entities/teacher');

module.exports = async (payload) => {
  const formatedPayload = formatRequest(payload);
  const teacher = await createTeacher(formatedPayload);
  const formatedTeacher = formatResponse(teacher);

  return formatedTeacher;
};
