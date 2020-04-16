const { getSequelizeErrors } = require('../../database/common');
const { NotFoundError } = require('../../common/errors');
const Discipline = require('./Discipline');

module.exports = async (disciplineId) => {
  let discipline;

  try {
    discipline = await Discipline.findByPk(disciplineId);
  } catch (error) {
    const messageError = getSequelizeErrors(error);
    throw new Error(messageError);
  }

  if (!discipline) {
    throw new NotFoundError('Discipline not found');
  }

  return discipline;
};
