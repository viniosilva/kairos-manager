const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

module.exports = async (req, _res, next) => {
  try {
    const { classroomId } = req.params;

    const { error } = joi.object({
      classroomId: joi.string()
        .guid()
        .required(),
    }).validate({ classroomId });

    if (!error) {
      next();
    } else {
      next(boom.badRequest(error.message));
    }
  } catch (error) {
    next(error);
  }
};
