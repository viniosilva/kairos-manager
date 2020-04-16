const { getSequelizeErrors, isUniqueConstraintError } = require('../../database/common');
const { ConflictError } = require('../../common/errors');
const Teacher = require('./Teacher');

module.exports = async (payload) => {
  try {
    return await Teacher.create(payload);
  } catch (error) {
    const messageError = getSequelizeErrors(error);

    if (isUniqueConstraintError(error)) {
      throw new ConflictError(messageError);
    }

    throw new Error(messageError);
  }
};
