const {
  createClassroom,
  getClassrooms,
} = require('../../services/classroom');

exports.createClassroom = ({ input }) => createClassroom(input);

exports.classroomsList = ({ page, pageSize }) => getClassrooms(page, pageSize);
