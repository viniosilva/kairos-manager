const joi = require('@hapi/joi');

module.exports = joi.object({
  name: joi.string()
    .min(1)
    .max(20)
    .required(),
  grade: joi.number()
    .integer()
    .min(1)
    .max(100)
    .required(),
  degree: joi.number()
    .integer()
    .min(1)
    .max(100)
    .required(),
});
