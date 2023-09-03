const Joi = require("joi")

const itemSchema = Joi.object({
  img: Joi.any().required(),
  name: Joi.string().required(),
  amount: Joi.number().integer().required(),
});

const productJoi = Joi.object({
  title: Joi.string().required(),
  tag: Joi.string().required(),
  price: Joi.number().required(),
  items: Joi.array().min(1).items(itemSchema).required(),
});

module.exports =  productJoi  