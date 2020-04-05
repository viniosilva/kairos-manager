const { teacherSchema } = require('../../entities/teacher');
const { ValidationError } = require('../../common/errors');

module.exports = (payload) => {
  const { error, value } = teacherSchema.validate(payload);

  if (error) {
    throw new ValidationError(error.message);
  }

  return value;
};
