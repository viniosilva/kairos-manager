const { classroomResolvers } = require('./classroom');
const { disciplineResolvers } = require('./discipline');
const { teacherResolvers } = require('./teacher');

module.exports = {
  ...classroomResolvers,
  ...disciplineResolvers,
  ...teacherResolvers,
};
