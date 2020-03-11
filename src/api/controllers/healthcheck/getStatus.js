const boom = require('@hapi/boom');
const { validateConnection } = require('../../../services/database');

module.exports = async (_req, res, next) => {
  try {
    await validateConnection();
    res.json({ status: 'It\'s all OK' });
  } catch (error) {
    // a beatiful log here
    next(boom.serverUnavailable('Some service is not well'));
  }
};
