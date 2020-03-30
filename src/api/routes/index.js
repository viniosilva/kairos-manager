const express = require('express');
const healthcheckRoute = require('./healthcheck');

module.exports = express.Router()
  .use('/healthcheck', healthcheckRoute);
