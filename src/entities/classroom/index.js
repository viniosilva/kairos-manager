const Classroom = require('./Classroom');
const classroomSchema = require('./schema');
const createClassroom = require('./create');
const destroyClassroom = require('./destroy');
const getClassroomById = require('./getById');
const getClassrooms = require('./getAll');
const updateClassroom = require('./update');

module.exports = {
  Classroom,
  classroomSchema,
  createClassroom,
  destroyClassroom,
  getClassroomById,
  getClassrooms,
  updateClassroom,
};
