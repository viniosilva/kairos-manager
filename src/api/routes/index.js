const express = require('express');
const healthcheckRoute = require('./healthcheck');
const apiDocs = require('./apiDocs');
const classroomsRoute = require('./classrooms');

module.exports = express.Router()
  .use('/healthcheck', healthcheckRoute)
  .use('/api-docs', apiDocs)
  .use('/classrooms', classroomsRoute);
