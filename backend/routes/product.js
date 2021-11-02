const router=require("express").Router()
const {JWTmiddleware}=require("../helper/jwt");
const {Add_product,getallproduct,Product,updateUserName}=require("../models/product")
const {Productvalidate}=require("../helper/validation/product");
const { request } = require("express");

router.get("/",JWTmiddleware,async(req,res)=>{
    try{
        const allproduct=await getallproduct()
        res.send({success:1,products:allproduct})
    }
    catch(err){
        res.status(400).send({"success":0,"error":err.message})
    }
})



router.post('/add',JWTmiddleware,async(req,res)=>{
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
// router.delete("/:id",async(req,res)=>{
//     Product.deleteOne({_id:req.prams.id})
//     .then(result=>{
//         res.status(200).json({
//             message:"product delete",
//             success:1
//         })
//     })
//     .catch(err=>{
//         res.status(500).json({
//             error:err,
//             success:0
//         })
//     })
// })



router.delete("/:id",async(req,res)=>{
    try{
        const deletedId=req.params.id
        console.log(deletedId)
        if (deletedId.length > 5) {
            console.log("okk")
            const deleteresult=await updateUserName(deletedId)
            console.log("okk")
            console.log(deleteresult)
            res.send({ success:1 , status: deleteresult });
            }
        else{
            console.log("no delete")
        }
    }
    catch(err){
        res.status(400).send({"success" : 0,"error" : err.message });  
    } 
})




// router.delete("/:id",async(req,res)=>{
//     try{
//         const deletedId=request.params.id
//         if (deletedId > 5) {
//             const deleteresult=await (updateUserName)
//         }
//         else{
//             console.log(err)
//         }
//     }
//     catch(err){
//         console.log(err)
//     }
    


// }
//         try{
//         // const xxxx=Product.deleteOne({_id:req.prams.id})
//         const user_id = req.params.uid
//         console.log(user_id)
//         // const validationResult = validateUserName(req.body)
//         if (user_id.error ){
//             res.status(400).send({"success" : 0,"error" : validationResult.error }); 
//         } 
//         else{
//             // const name = validationResult.value.name

//             const status  = await updateUserName({IsDelete:true})
//             res.send({ success:1 , status: status });
//         }
        
//     }
//     catch(err){
//         res.status(400).send({"success" : 0,"error" : err.message });  
//     }  
// });

// const deletedId=request.params.id
// if (deletedId > 5) {
//     const deleteresult=await (updateUserName)
// }

// router.delete("/:id",async(req,res)=>{
//     try{
//         updateUserName.deleteOne({_id:req.params.id})
//         res.status(200).json({
//                     message:"product delete",
//                     result:result
//                 })
//     }
//     catch(err){
//         res.status(500).json({
            
//                 message:"error",
            
//                 })
//                 console.log(err)
//     }
// })
    

module.exports=router;