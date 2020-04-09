const {
  createClassroom,
} = require('../../services/classroom');

exports.createClassroom = ({ input }) => createClassroom(input);
