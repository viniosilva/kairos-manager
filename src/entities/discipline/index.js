const Discipline = require('./Discipline');
const disciplineSchema = require('./schema');
const createDiscipline = require('./create');
const destroyDiscipline = require('./destroy');
const getDisciplineById = require('./getById');
const getDisciplines = require('./getAll');
const updateDiscipline = require('./update');

module.exports = {
  Discipline,
  disciplineSchema,
  createDiscipline,
  destroyDiscipline,
  getDisciplineById,
  getDisciplines,
  updateDiscipline,
};
