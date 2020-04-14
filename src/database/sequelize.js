const Sequelize = require('sequelize');
const databaseConfig = require('../config/database')();

const config = {
  ...databaseConfig,
  define: {
    timestamps: false,
    underscored: true,
  },
  logging: false,
};

module.exports = new Sequelize(config);
