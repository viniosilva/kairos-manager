const { Classroom } = require('../config/models');
const classroomSchema = require('./classroomSchema');
const createClassroom = require('./createClassroom');
const destroyClassroom = require('./destroyClassroom');
const getClassroomById = require('./getClassroomById');
const getClassrooms = require('./getClassrooms');
const updateClassroom = require('./updateClassroom');

module.exports = {
  Classroom,
  classroomSchema,
  createClassroom,
  destroyClassroom,
  getClassroomById,
  getClassrooms,
  updateClassroom,
};
