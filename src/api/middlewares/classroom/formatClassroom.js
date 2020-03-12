const boom = require('@hapi/boom');
const { ValidateError } = require('../../../common/errors');
const { formatClassroom } = require('../../../services/classroom');


module.exports = async (req, _res, next) => {
  try {
    req.body = await formatClassroom(req.body);
    next();
  } catch (error) {
    if (error instanceof ValidateError) {
      next(boom.badRequest(error.message));
    } else {
      next(error);
    }
  }
};
