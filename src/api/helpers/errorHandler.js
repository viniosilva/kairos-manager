const boom = require('@hapi/boom');
const logger = require('./logger');

// eslint-disable-next-line no-unused-vars
module.exports = (error, _req, res, _next) => {
  let boomError;

  if (boom.isBoom(error)) {
    boomError = error;
  } else {
    logger.error(error.message);
    boomError = boom.internal();
  }

  const { payload, statusCode } = boomError.output;

  res.status(statusCode).json(payload);
};
