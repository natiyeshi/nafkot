const Joi = require("joi") 

const TopupJoi = Joi.object({
    amount: Joi.number().min(100).required(),
})

module.exports = TopupJoi
