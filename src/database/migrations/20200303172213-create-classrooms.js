exports.up = (queryInterface, Sequelize) => queryInterface.createTable('classrooms', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  grade: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  degree: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

exports.down = (queryInterface) => queryInterface.dropTable('classrooms');
