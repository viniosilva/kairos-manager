const bodyParser = require('body-parser');
const compression = require('compression');
const express = require('express');
const helmet = require('helmet');
const errorHandler = require('./helpers/errorHandler');
const routes = require('./routes');


const port = process.env.PORT || 3000;
const app = express()
  .use(helmet())
  .use(compression())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(routes)
  .use(errorHandler);

exports.start = () => {
  // istanbul ignore next
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on port ${port}!`);
  });
};

exports.app = app;
