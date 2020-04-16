const createDiscipline = require('./create');
const destroyDiscipline = require('./destroy');
const getDisciplineById = require('./getById');
const getDisciplines = require('./getAll');
const updateDiscipline = require('./update');

module.exports = {
  createDiscipline,
  destroyDiscipline,
  getDisciplineById,
  getDisciplines,
  updateDiscipline,
};
