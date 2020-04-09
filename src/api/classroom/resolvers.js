const {
  createClassroom,
  getClassroomById,
  getClassrooms,
  updateClassroom,
} = require('../../services/classroom');

exports.createClassroom = ({ input }) => createClassroom(input);

exports.classroom = ({ id }) => getClassroomById(id);

exports.classroomsList = ({ page, pageSize }) => getClassrooms(page, pageSize);

exports.updateClassroom = ({ id, input }) => updateClassroom(id, input);
