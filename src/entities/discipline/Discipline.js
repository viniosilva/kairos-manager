const sequelize = require('../../database/sequelize');

const { Sequelize } = sequelize;

class Discipline extends Sequelize.Model { }
Discipline.init({
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  degree: Sequelize.INTEGER,
  grade: Sequelize.INTEGER,
}, {
  sequelize,
  modelName: 'discipline',
});

module.exports = Discipline;
