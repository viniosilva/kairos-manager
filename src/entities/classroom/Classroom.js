const sequelize = require('../../database/sequelize');

const { Sequelize } = sequelize;

module.exports = sequelize.define('classrooms', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  grade: Sequelize.INTEGER,
  degree: Sequelize.INTEGER,
});
