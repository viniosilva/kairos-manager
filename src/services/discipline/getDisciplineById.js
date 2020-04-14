const formatDisciplineResponse = require('./formatDisciplineResponse');
const { validateUuid } = require('../common');
const { getDisciplineById } = require('../../entities/discipline');

module.exports = async (disciplineId) => {
  validateUuid(disciplineId);

  const discipline = await getDisciplineById(disciplineId);
  const formatedDiscipline = formatDisciplineResponse(discipline);

  return formatedDiscipline;
};
