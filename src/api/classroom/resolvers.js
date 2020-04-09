const {
  createClassroom,
  destroyClassroom,
  getClassroomById,
  getClassrooms,
  updateClassroom,
} = require('../../services/classroom');

exports.createClassroom = ({ input }) => createClassroom(input);

exports.destroyClassroom = ({ id }) => destroyClassroom(id);

exports.classroom = ({ id }) => getClassroomById(id);

exports.classroomsList = ({ page, pageSize }) => getClassrooms(page, pageSize);

exports.updateClassroom = ({ id, input }) => updateClassroom(id, input);
