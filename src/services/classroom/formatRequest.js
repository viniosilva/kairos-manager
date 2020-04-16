const { classroomSchema } = require('../../entities/classroom');
const { ValidationError } = require('../../common/errors');

module.exports = (payload) => {
  const { error, value } = classroomSchema.validate(payload);

  if (error) {
    throw new ValidationError(error.message);
  }

  return value;
};
