const sequelize = require('../../database/sequelize');

const { Sequelize } = sequelize;

module.exports = sequelize.define('classrooms', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    isUUID: 4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    notNull: true,
    notEmpty: true,
    len: [1, 20],
  },
  grade: {
    type: Sequelize.INTEGER,
    notNull: true,
    notEmpty: true,
    min: 0,
    max: 100,
  },
  degree: {
    type: Sequelize.INTEGER,
    notNull: true,
    notEmpty: true,
    min: 0,
    max: 100,
  },
});
