const joi = require('@hapi/joi');
const { ValidationError } = require('../../common/errors');

module.exports = (id) => {
  const { error } = joi.string().guid().required().validate(id);

  if (error) {
    throw new ValidationError(error.message);
  }
};
