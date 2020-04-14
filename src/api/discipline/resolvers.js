const {
  createDiscipline,
  destroyDiscipline,
  getDisciplineById,
  getDisciplines,
  updateDiscipline,
} = require('../../services/discipline');

exports.createDiscipline = ({ input }) => createDiscipline(input);

exports.destroyDiscipline = ({ id }) => destroyDiscipline(id);

exports.discipline = ({ id }) => getDisciplineById(id);

exports.disciplinesList = ({ page, pageSize }) => getDisciplines(page, pageSize);

exports.updateDiscipline = ({ id, input }) => updateDiscipline(id, input);
