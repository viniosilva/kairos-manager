const {
  createTeacher,
  destroyTeacher,
  getTeacherById,
  getTeachers,
  updateTeacher,
} = require('../../services/teacher');

exports.createTeacher = ({ input }) => createTeacher(input);

exports.destroyTeacher = ({ id }) => destroyTeacher(id);

exports.teacher = ({ id }) => getTeacherById(id);

exports.teachersList = ({ page, pageSize }) => getTeachers(page, pageSize);

exports.updateTeacher = ({ id, input }) => updateTeacher(id, input);
