const sequelize = require('../../database/sequelize');

const { Sequelize } = sequelize;

class Teacher extends Sequelize.Model { }
Teacher.init({
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  fullName: Sequelize.STRING,
  document: Sequelize.STRING,
}, {
  sequelize,
  modelName: 'teacher',
});

module.exports = Teacher;
