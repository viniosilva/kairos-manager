const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const databaseConfig = require('../../config/database');

const {
  contact,
  description,
  license,
  title,
  version,
} = require('../../../package.json');

const env = process.env.ENV || 'development';
const { host } = databaseConfig[env];
const port = process.env.PORT || 3000;

const options = {
  definition: {
    info: {
      contact: {
        email: contact,
      },
      description,
      title,
      version,
      license: {
        name: license,
        url: './LICENSE',
      },
    },
    host: `${host}:${port}`,
    basePath: '/',
    schemes: [
      'http',
      'https',
    ],
  },
  apis: ['./src/api/**/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = express.Router()
  .use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
