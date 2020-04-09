const { validateUuid } = require('../common');
const { destroyClassroom } = require('../../entities/classroom');

module.exports = async (classroomId) => {
  validateUuid(classroomId);

  await destroyClassroom(classroomId);

  return 'Classroom destroyed';
};
