const { getSequelizeErrors } = require('../../database/common');
const { NotFoundError } = require('../../common/errors');
const Classroom = require('./Classroom');

module.exports = async (classroomId) => {
  let classroom;

  try {
    classroom = await Classroom.findByPk(classroomId);
  } catch (error) {
    const messageError = getSequelizeErrors(error);
    throw new Error(messageError);
  }

  if (!classroom) {
    throw new NotFoundError('Classroom not found');
  }

  return classroom;
};
