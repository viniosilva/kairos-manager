const { getSequelizeErrors } = require('../../database/common');
const Teacher = require('./Teacher');

module.exports = async (limit, offset) => {
  try {
    return await Teacher.findAll({ limit, offset });
  } catch (error) {
    const messageError = getSequelizeErrors(error);
    throw new Error(messageError);
  }
};
