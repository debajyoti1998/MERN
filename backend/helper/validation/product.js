const Joi = require("joi");
const Productscema=Joi.object({
    name:Joi.string(),
    purches_price:Joi.number(),
    selling_price:Joi.number()
})

function Productvalidate(productdata){
    return Productscema.validate(productdata)
}

module.exports={Productvalidate}