const formatRequest = require('./formatRequest');
const formatResponse = require('./formatResponse');
const { validateUuid } = require('../common');
const { updateDiscipline } = require('../../entities/discipline');

module.exports = async (disciplineId, payload) => {
  validateUuid(disciplineId);

  const formatedPayload = formatRequest(payload);
  const discipline = await updateDiscipline(disciplineId, formatedPayload);
  const formatedDiscipline = formatResponse(discipline);

  return formatedDiscipline;
};
