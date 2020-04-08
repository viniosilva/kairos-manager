const Teacher = require('./Teacher');
const teacherSchema = require('./teacherSchema');
const createTeacher = require('./createTeacher');
const getTeacherById = require('./getTeacherById');
const getTeachers = require('./getTeachers');
const updateTeacher = require('./updateTeacher');

module.exports = {
  Teacher,
  teacherSchema,
  createTeacher,
  getTeacherById,
  getTeachers,
  updateTeacher,
};
