const { getSequelizeErrors } = require('../../database/common');
const Discipline = require('./Discipline');

module.exports = async (limit, offset, where) => {
  try {
    return await Discipline.findAll({ limit, offset, where });
  } catch (error) {
    const messageError = getSequelizeErrors(error);
    throw new Error(messageError);
  }
};
