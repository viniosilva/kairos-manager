const formatTeacherResponse = require('./formatTeacherResponse');
const { validateUuid } = require('../common');
const { getTeacherById } = require('../../entities/teacher');

module.exports = async (teacherId) => {
  validateUuid(teacherId);

  const teacher = await getTeacherById(teacherId);
  const formatedTeacher = formatTeacherResponse(teacher);

  return formatedTeacher;
};
