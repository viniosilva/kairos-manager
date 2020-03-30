const boom = require('@hapi/boom');
const { ConflictError, ValidationError } = require('../../../common/errors');
const {
  createUser,
  formatUserRequest,
  formatUserResponse,
} = require('../../../services/user');

module.exports = async (req, res, next) => {
  try {
    const payload = formatUserRequest(req.body);
    const newUser = await createUser(payload);
    const response = formatUserResponse(newUser);

    res.status(201).json(response);
  } catch (error) {
    if (error instanceof ValidationError) {
      next(boom.badRequest(error.message));
    } if (error instanceof ConflictError) {
      next(boom.conflict(error.message));
    } else {
      next(error);
    }
  }
};
