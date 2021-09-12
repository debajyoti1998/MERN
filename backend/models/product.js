// const { string, number, func } = require("joi")
const mongoose=require("mongoose")

const Productscema=new mongoose.Schema({
    name:{
        type:String,
        
    },
    purches_price:{
        type:Number
    },
    selling_price:{
        type:Number
    }
})
const Product=mongoose.model("add_product",Productscema)

async function Add_product(productadd){
    const proobj=Product(productadd)
    return proobj.save()
}

module.exports={Add_product}
