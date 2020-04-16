const formatRequest = require('./formatRequest');
const formatResponse = require('./formatResponse');
const { validateUuid } = require('../common');
const { updateTeacher } = require('../../entities/teacher');

module.exports = async (teacherId, payload) => {
  validateUuid(teacherId);

  const formatedPayload = formatRequest(payload);
  const teacher = await updateTeacher(teacherId, formatedPayload);
  const formatedTeacher = formatResponse(teacher);

  return formatedTeacher;
};
