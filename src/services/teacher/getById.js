const formatResponse = require('./formatResponse');
const { validateUuid } = require('../common');
const { getTeacherById } = require('../../entities/teacher');

module.exports = async (teacherId) => {
  validateUuid(teacherId);

  const teacher = await getTeacherById(teacherId);
  const formatedTeacher = formatResponse(teacher);

  return formatedTeacher;
};
