const { getSequelizeErrors } = require('../../database/common');
const { NotFoundError } = require('../../common/errors');
const Teacher = require('./Teacher');

module.exports = async (teacherId) => {
  let affectedRows = 0;

  try {
    affectedRows = await Teacher.destroy({ where: { id: teacherId } });
  } catch (error) {
    const messageError = getSequelizeErrors(error);

    throw new Error(messageError);
  }

  if (affectedRows === 0) {
    throw new NotFoundError('Teacher not found');
  }
};
