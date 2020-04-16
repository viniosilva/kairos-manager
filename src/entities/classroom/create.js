const { getSequelizeErrors } = require('../../database/common');
const Classroom = require('./Classroom');

module.exports = async (payload) => {
  try {
    return await Classroom.create(payload);
  } catch (error) {
    const messageError = getSequelizeErrors(error);

    throw new Error(messageError);
  }
};
