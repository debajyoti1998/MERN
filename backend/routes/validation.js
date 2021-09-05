const Joi = require('joi');
const userSchema = Joi.object({
    name: Joi.string().required().max(50).regex(/^[a-zA-Z0-9. ]*$/, 'Alphanumerics, space and dot characters'),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(12).required(),
})

function validationData(userData) {
    return userSchema.validate(userData);   // value , error
}
const userLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(12).required(),
})
function validateLoginUser(userData) {
    return userLoginSchema.validate(userData);   // value , error
}




module.exports={validationData,validateLoginUser} 