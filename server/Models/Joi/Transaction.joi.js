const Joi = require('joi');

const schema = Joi.object({
  senderFirstName: Joi.string().required(),
  senderLastName: Joi.string().required(),
  senderEmail: Joi.string().email().required(),
  senderPhoneNumber: Joi.string().required(),
  reciverFirstName: Joi.string().required(),
  reciverLastName: Joi.string().required(),
  reciverEmail: Joi.string().email().required(),
  reciverPhoneNumber: Joi.string().required(),
  reciverPhoneNumber2: Joi.string().allow('').optional(),
  reciverCity: Joi.string().required(),
  reciverRegion: Joi.string().required(),
  message: Joi.string().required(),
  cart: Joi.array().items(
    Joi.object({
      productId: Joi.string().required(),
      amount: Joi.number().min(1).required()
    })
  ).required(),
  totalPrice: Joi.number().required()
});

module.exports = schema;