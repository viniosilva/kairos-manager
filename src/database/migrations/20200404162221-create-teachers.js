exports.up = (queryInterface, Sequelize) => queryInterface.createTable('teachers', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
  },
  full_name: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  document: {
    type: Sequelize.STRING(20),
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
}, {
  uniqueKeys: {
    document_unique: {
      fields: ['document'],
    },
  },
});

exports.down = (queryInterface) => queryInterface.dropTable('teachers');
