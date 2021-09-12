const router=require("express").Router()
const {JWTmiddleware}=require("../helper/jwt");
const {Add_product}=require("../models/product")
const {Productvalidate}=require("../helper/validation/product")
router.post('/',JWTmiddleware,async(req,res)=>{
    try{
    const validateProduct=Productvalidate(req.body)
    console.log(validateProduct)
    if (validateProduct.error){
        res.status(400).send({"success":0,"error":validateProduct.error})
    }
    else{
        const {name,purches_price,selling_price}=validateProduct.value
        const dbpro=await Add_product ({
            name,purches_price,selling_price
        })
        console.log(dbpro)
        res.status(200).send({success:1, product:dbpro, message:"product add successfully"})

        
    }
    }
    catch(err){
        res.status(400).send({"success" : 0,"error" : err.message });  
    }  
})

module.exports=router;