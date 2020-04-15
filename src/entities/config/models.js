const Classroom = require('../classroom/Classroom');
const Discipline = require('../discipline/Discipline');
const Teacher = require('../teacher/Teacher');

Discipline.belongsToMany(Teacher, {
  as: 'Teachers',
  through: 'teachers_disciplines',
  foreignKey: 'discipline_id',
});

Teacher.belongsToMany(Discipline, {
  as: 'Disciplines',
  through: 'teachers_disciplines',
  foreignKey: 'teacher_id',
});

module.exports = {
  Classroom,
  Discipline,
  Teacher,
};
