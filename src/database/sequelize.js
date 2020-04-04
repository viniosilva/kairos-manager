const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const config = {
  ...databaseConfig[process.env.ENV],
  define: {
    timestamps: false,
    underscored: true,
  },
  logging: false,
};

module.exports = new Sequelize(config);
