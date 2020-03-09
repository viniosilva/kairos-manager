const { schemaClassroom } = require('../../entities/classroom');
const { ValidateError } = require('../../common/errors');

module.exports = async (payload) => {
  const { error, value } = schemaClassroom.validate(payload);

  if (error) {
    throw new ValidateError(error.message);
  }

  return value;
};
