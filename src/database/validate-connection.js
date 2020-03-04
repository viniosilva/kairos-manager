const sequelize = require('./sequelize');

module.exports = async () => {
  await sequelize.authenticate();
  return true;
};
