const sequelize = require('../../database/sequelize');

const { Sequelize } = sequelize;

class Classroom extends Sequelize.Model { }
Classroom.init({
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
  modelName: 'classroom',
});

module.exports = Classroom;
