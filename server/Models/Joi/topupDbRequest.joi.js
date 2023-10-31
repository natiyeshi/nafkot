const Joi = require('joi');

const schema = Joi.object({
  senderFullName: Joi.string().required(),
  senderEmail: Joi.string().email().required(),
  receiverFullName: Joi.string().required(),
  receiverPhoneNumber: Joi.string().required(),
  receiverPhoneNumber2: Joi.string().allow('').optional(),
  amount: Joi.number().required(),
  totalPrice: Joi.number().required(),
  currency: Joi.string().required(),
  status: Joi.string().required(),
  transfered: Joi.boolean().optional(),
});

module.exports = schema;