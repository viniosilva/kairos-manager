const joi = require('@hapi/joi');

module.exports = joi.object({
  fullName: joi.string()
    .min(1)
    .max(200)
    .required(),
  document: joi.string()
    .regex(/\d/)
    .min(1)
    .max(11)
    .required(),
});
