const Joi = require('joi');

const userJoiSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  phoneNumber: Joi.string().required(),
});

module.exports = userJoiSchema;