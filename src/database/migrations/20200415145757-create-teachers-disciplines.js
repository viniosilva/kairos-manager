exports.up = (queryInterface, Sequelize) => queryInterface.createTable('teachers_disciplines', {
  teacher_id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    references: {
      model: { tableName: 'teachers' },
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  discipline_id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    references: {
      model: { tableName: 'disciplines' },
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
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

exports.down = (queryInterface) => queryInterface.dropTable('teachers_disciplines');
