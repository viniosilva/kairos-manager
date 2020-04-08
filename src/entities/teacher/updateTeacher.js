const { getSequelizeErrors, isUniqueConstraintError } = require('../../database/common');
const { ConflictError, NotFoundError } = require('../../common/errors');
const Teacher = require('./Teacher');

module.exports = async (teacherId, payload) => {
  const options = {
    where: { id: teacherId },
    returning: true,
  };

  let affectedRows = 0;
  let teachers;

  try {
    [affectedRows, teachers] = await Teacher.update(payload, options);
  } catch (error) {
    const messageError = getSequelizeErrors(error);

    if (isUniqueConstraintError(error)) {
      throw new ConflictError(messageError);
    }

    throw new Error(messageError);
  }

  if (affectedRows === 0) {
    throw new NotFoundError('Teacher not found');
  }

  return teachers[0];
};
