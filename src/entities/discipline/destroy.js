const { getSequelizeErrors } = require('../../database/common');
const { NotFoundError } = require('../../common/errors');
const Discipline = require('./Discipline');

module.exports = async (disciplineId) => {
  let affectedRows = 0;

  try {
    affectedRows = await Discipline.destroy({ where: { id: disciplineId } });
  } catch (error) {
    const messageError = getSequelizeErrors(error);

    throw new Error(messageError);
  }

  if (affectedRows === 0) {
    throw new NotFoundError('Discipline not found');
  }
};
