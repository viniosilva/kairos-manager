const { Discipline } = require('../config/models');
const disciplineSchema = require('./disciplineSchema');
const createDiscipline = require('./createDiscipline');
const destroyDiscipline = require('./destroyDiscipline');
const getDisciplineById = require('./getDisciplineById');
const getDisciplines = require('./getDisciplines');
const updateDiscipline = require('./updateDiscipline');

module.exports = {
  Discipline,
  disciplineSchema,
  createDiscipline,
  destroyDiscipline,
  getDisciplineById,
  getDisciplines,
  updateDiscipline,
};
