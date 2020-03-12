const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const {
  contact,
  description,
  license,
  title,
  version,
} = require('../../../package.json');

const options = {
  definition: {
    info: {
      contact,
      description,
      title,
      version,
      license: {
        name: license,
        url: './LICENSE',
      },
    },
    host: 'kairosmanager.com.br',
    schemes: [
      'http',
      'https',
    ],
  },
  apis: ['./routes.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = express.Router()
  .use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
