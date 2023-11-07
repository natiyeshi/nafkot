const Joi = require('joi');

const schema = Joi.object({
  senderFullName: Joi.string().required(),
  senderEmail: Joi.string().email().required(),
  receiverFullName: Joi.string().required(),
  receiverPhoneNumber: Joi.string().required(),
  receiverPhoneNumber2: Joi.string().allow('').optional(),
  amount: Joi.number().required(),
  id: Joi.string().required(),
});

module.exports = schema;