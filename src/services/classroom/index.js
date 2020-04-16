const createClassroom = require('./create');
const destroyClassroom = require('./destroy');
const getClassroomById = require('./getById');
const getClassrooms = require('./getAll');
const updateClassroom = require('./update');

module.exports = {
  createClassroom,
  destroyClassroom,
  getClassroomById,
  getClassrooms,
  updateClassroom,
};
