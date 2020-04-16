const sequelize = require('../../database/sequelize');
const { Discipline } = require('../discipline');
const { Teacher } = require('../teacher');

const { Sequelize } = sequelize;

class TeacherDiscipline extends Sequelize.Model { }
TeacherDiscipline.init({
  teacherId: {
    type: Sequelize.UUID,
    primaryKey: true,
  },
  disciplineId: {
    type: Sequelize.UUID,
    primaryKey: true,
  },
}, {
  sequelize,
  modelName: 'teachers_discipline',
});

Discipline.belongsToMany(Teacher, {
  as: 'teachers',
  through: 'teachers_disciplines',
  foreignKey: 'discipline_id',
});

Teacher.belongsToMany(Discipline, {
  as: 'disciplines',
  through: 'teachers_disciplines',
  foreignKey: 'teacher_id',
});

module.exports = TeacherDiscipline;
