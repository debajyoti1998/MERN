const router = require('express').Router();
const User=require("../models/Product")
router.post('/', async function (req, res) {
    res.send(status="hellow world")
//     const {name,email,password}=req.body;
//     if (!name || !email || !password ){
//         return res.status(422).json({error:"please fill the property"});
//     }
//     User.findOne({email:email})
//     .then((userOne)=>{
//         return res.status(422).json({error:"email already exits"});
//     })
//         const user=new User({name,email,password});
//         user.save().then(()=>{
//             res.status(201).json({message:"user ragister successfully"})
//         })


// });
})
module.exports = router;
