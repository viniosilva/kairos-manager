const {
  createClassroom,
  getClassroomById,
  getClassrooms,
} = require('../../services/classroom');

exports.createClassroom = ({ input }) => createClassroom(input);

exports.classroom = ({ id }) => getClassroomById(id);

exports.classroomsList = ({ page, pageSize }) => getClassrooms(page, pageSize);
