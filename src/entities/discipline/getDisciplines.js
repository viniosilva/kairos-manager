const { getSequelizeErrors } = require('../../database/common');
const Discipline = require('./Discipline');

module.exports = async (limit, offset) => {
  try {
    return await Discipline.findAll({ limit, offset });
  } catch (error) {
    const messageError = getSequelizeErrors(error);
    throw new Error(messageError);
  }
};
