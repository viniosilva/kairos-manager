const { validateUuid } = require('../common');
const { destroyDiscipline } = require('../../entities/discipline');

module.exports = async (disciplineId) => {
  validateUuid(disciplineId);

  await destroyDiscipline(disciplineId);

  return 'Discipline destroyed';
};
