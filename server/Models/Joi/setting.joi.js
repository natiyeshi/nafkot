const Joi = require("joi") 

const SettingJoi = Joi.object({
    currency: Joi.number().required(),
})

module.exports = SettingJoi
