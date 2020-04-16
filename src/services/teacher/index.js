const createTeacher = require('./create');
const destroyTeacher = require('./destroy');
const getTeacherById = require('./getById');
const getTeachers = require('./getAll');
const updateTeacher = require('./update');

module.exports = {
  createTeacher,
  destroyTeacher,
  getTeacherById,
  getTeachers,
  updateTeacher,
};
