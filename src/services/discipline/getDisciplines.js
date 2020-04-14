const formatDisciplineResponse = require('./formatDisciplineResponse');
const { getDisciplines } = require('../../entities/discipline');
const { queries } = require('../../config');

module.exports = async (page, pageSize) => {
  const limit = pageSize || queries.limit;
  const offset = page || queries.offset;

  const disciplines = await getDisciplines(limit, offset);
  const formatedDisciplines = disciplines.map((discipline) => formatDisciplineResponse(discipline));

  return formatedDisciplines;
};
