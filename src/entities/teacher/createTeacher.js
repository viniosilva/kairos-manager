const { getSequelizeErrors, isUniqueConstraintError } = require('../../database/common');
const Teacher = require('./Teacher');
const { ConflictError } = require('../../common/errors');

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
