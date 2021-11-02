// const { string, number, func } = require("joi")
// const { boolean } = require("joi")
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
    },
    IsDelete:{
        type:Boolean,
        default:false
    }

})
const Product=mongoose.model("xxxxxx",Productscema)

async function Add_product(productadd){
    const proobj=Product(productadd)
    return proobj.save()
}
async function getallproduct(){
    const product=await Product.find({IsDelete:false},'-__v',).exec()
    return product
}
async function updateUserName(id){
    const res = await Product.updateOne({ _id: id }, {IsDelete: true });
    // console.log(res)
    if (res.modifiedCount){
        return true
    } 
    else{
        return false
    }  
} 
  


module.exports={Add_product,getallproduct,Product,updateUserName}
