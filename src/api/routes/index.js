const express = require('express');
const apiDocsRoute = require('./apiDocs');
const healthcheckRoute = require('./healthcheck');

module.exports = express.Router()
  .use('/api-docs', apiDocsRoute)
  .use('/healthcheck', healthcheckRoute);
