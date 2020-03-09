const boom = require('@hapi/boom');

// eslint-disable-next-line no-unused-vars
module.exports = (error, _req, res, next) => {
  let boomError;

  if (boom.isBoom(error)) {
    boomError = error;
  } else {
    console.error(error);

    boomError = boom.internal('Oops! Internal server error!');
  }

  const { payload, statusCode } = boomError.output;

  res.status(statusCode).json(payload);
};
