const Teacher = require('./Teacher');
const teacherSchema = require('./schema');
const createTeacher = require('./create');
const destroyTeacher = require('./destroy');
const getTeacherById = require('./getById');
const getTeachers = require('./getAll');
const updateTeacher = require('./update');

module.exports = {
  Teacher,
  teacherSchema,
  createTeacher,
  destroyTeacher,
  getTeacherById,
  getTeachers,
  updateTeacher,
};
