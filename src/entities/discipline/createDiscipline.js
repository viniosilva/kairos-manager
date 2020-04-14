const { getSequelizeErrors } = require('../../database/common');
const Discipline = require('./Discipline');

module.exports = async (payload) => {
  try {
    return await Discipline.create(payload);
  } catch (error) {
    const messageError = getSequelizeErrors(error);

    throw new Error(messageError);
  }
};
