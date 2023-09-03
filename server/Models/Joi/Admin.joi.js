const Joi = require("joi") 

const AdminJoi = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
})

module.exports = AdminJoi
