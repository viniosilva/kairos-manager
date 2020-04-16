const { getSequelizeErrors } = require('../../database/common');
const Classroom = require('./Classroom');

module.exports = async (limit, offset) => {
  try {
    return await Classroom.findAll({ limit, offset });
  } catch (error) {
    const messageError = getSequelizeErrors(error);
    throw new Error(messageError);
  }
};
