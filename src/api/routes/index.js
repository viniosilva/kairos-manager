const express = require('express');
const healthcheckRoute = require('./healthcheck');
const classroomsRoute = require('./classrooms');

module.exports = express.Router()
  .use('/healthcheck', healthcheckRoute)
  .use('/classrooms', classroomsRoute);
