const { classroomResolvers } = require('./classroom');
const { teacherResolvers } = require('./teacher');

module.exports = {
  ...classroomResolvers,
  ...teacherResolvers,
};
