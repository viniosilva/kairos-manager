const formatTeacherResponse = require('./formatTeacherResponse');
const { getTeacherById } = require('../../entities/teacher');
const { validateUuid } = require('../common');

module.exports = async (teacherId) => {
  validateUuid(teacherId);

  const teacher = await getTeacherById(teacherId);
  const formatedTeacher = formatTeacherResponse(teacher);

  return formatedTeacher;
};
