const formatDisciplineRequest = require('./formatDisciplineRequest');
const formatDisciplineResponse = require('./formatDisciplineResponse');
const { validateUuid } = require('../common');
const { updateDiscipline } = require('../../entities/discipline');

module.exports = async (disciplineId, payload) => {
  validateUuid(disciplineId);

  const formatedPayload = formatDisciplineRequest(payload);
  const discipline = await updateDiscipline(disciplineId, formatedPayload);
  const formatedDiscipline = formatDisciplineResponse(discipline);

  return formatedDiscipline;
};
