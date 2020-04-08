const { validateUuid } = require('../common');
const { destroyTeacher } = require('../../entities/teacher');

module.exports = async (teacherId) => {
  validateUuid(teacherId);

  await destroyTeacher(teacherId);

  return 'Teacher destroyed';
};
