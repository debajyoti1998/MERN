
const router=require("express").Router();
const {getUserByemailandPassword,create_user}=require("../models/user")
const {validationData,validateLoginUser}=require("./validation")
const {createAccessToken}=require("../helper/jwt")

router.get('/', async(req,res) => {
    try{
        const alluser  = await getAllUser()
        res.send({ success:1 , users: alluser });
        res.end('Success')
    }
    catch(err){
        res.status(400).send({"success" : 0,"error" : err.message });  
    }  
});
// router.post('/',async function(req,res){
//     try{
//         console.log(req.body)
//         const validationResult = validationData(req.body) 
//         console.log(validationResult) 
//         if (validationResult.error ){
//             res.status(422).send({"success" : 0,"error" : validationResult.error }); 
//         } 
        
//         else{
//             console.log( validationResult.value)
//             const {name , email , password} = validationResult.value
//             const dbRes = await create_user({
//                 name,
//                 email,
//                 password
//             })
//             console.log(dbRes)
//             res.send({ x:name , y:email});
//         }      
//     }
//     catch(err){
//         res.status(400).send({"success" : 0,"error" : err.message });  
//     }  
// });

router.post('/signup', async(req,res) => {
    try{       
        const validationResult = validationData(req.body) 
        
        if (validationResult.error ){
            res.status(400).send({"success" : 0,"error" : validationResult.error }); 
        } 
        else{
            const {name , email , password} = validationResult.value
            const dbRes = await create_user({
                name,
                email,
                password
            })
            console.log(dbRes)
            res.send({ success:1 , message: "registration successful"});
        }    
        
    }
    catch(err){
        res.status(400).send({"success" : 0,"error" : err.message });  
    }  
});





// router.post('/login',async(req,res)=>{
//     // console.log(req.body)
//     // res.json({message:"awm"})
//     try{
//         const {email,password}=req.body;
//         if (!email || !password){
//             return res.status(400).json({error:"plz filled data"})
//         }
//         const userLogin = await User.findOne({email:email,password:password});
//         console.log(userLogin)
//         if (!userLogin){
//             res.status(400).json({error:"user error"})
//         }
//         else{
//             res.json({message:"user ogin success"})

//         }

//     } catch (err){
//         console.log(err);
//     }
// })



router.post('/login',async(req,res)=>{
    try{
        const validationResult=validateLoginUser(req.body)
        console.log("!!!!!!!!!",validationResult)
        if( validationResult.error){
            res.status(400).send({"success":0,"error":validationResult.error})
        }
        else{
            const {email,password}=validationResult.value;
            const user= await getUserByemailandPassword({email,password})
            console.log("*******",user)
            const accessToken = createAccessToken(user)
            res.cookie('jwt',accessToken, { httpOnly: true, sameSite: 'none', secure: true }).send({ success:1 , user: user });
        }

    }
    catch(err){
        res.status(400).send({"success":0,"error":err.message});
    }

    
})






module.exports=router