exports.up = (queryInterface, Sequelize) => queryInterface.createTable('disciplines', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  degree: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  grade: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  created_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: new Date(),
  },
  updated_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: new Date(),
  },
});

exports.down = (queryInterface) => queryInterface.dropTable('disciplines');
