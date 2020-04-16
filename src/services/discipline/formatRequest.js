const { disciplineSchema } = require('../../entities/discipline');
const { ValidationError } = require('../../common/errors');

module.exports = (payload) => {
  const { error, value } = disciplineSchema.validate(payload);

  if (error) {
    throw new ValidationError(error.message);
  }

  return value;
};
