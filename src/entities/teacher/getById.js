const { getSequelizeErrors } = require('../../database/common');
const { NotFoundError } = require('../../common/errors');
const Teacher = require('./Teacher');

module.exports = async (teacherId) => {
  let teacher;

  try {
    teacher = await Teacher.findByPk(teacherId);
  } catch (error) {
    const messageError = getSequelizeErrors(error);
    throw new Error(messageError);
  }

  if (!teacher) {
    throw new NotFoundError('Teacher not found');
  }

  return teacher;
};
