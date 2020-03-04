const createClassroom = require('./create-classroom');
const findAllClassrooms = require('./find-all-classrooms');
const findClassroomById = require('./find-classroom-by-id');
const updateClassroom = require('./update-classroom');
const destroyClassroom = require('./destroy-classroom');

module.exports = {
  createClassroom,
  findAllClassrooms,
  findClassroomById,
  updateClassroom,
  destroyClassroom,
};
