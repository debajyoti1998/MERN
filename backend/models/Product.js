const mongoose=require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    }


})
const User = mongoose.model('saveUser',UserSchema);

async function create_user(userData){
    const findData = await User.findOne({email:userData.email},'-password -__v -date',).exec()
    
    if (findData) {
        throw new Error('user already exists');
    }
    else{
        const salt = bcrypt.genSaltSync(saltRounds);
        userData.password = bcrypt.hashSync(userData.password, salt);
       
        const usrObj = new User(userData);
        return usrObj.save()   
    }
     
}

// async function getUserByemailandPassword(email,password){
//     const userdada= await User.findOne({email:email}).exec()
//     if (userdada){
//         const status=bcrypt.compareSync(password,userdada,password)
//         if(status){
//             const newdata = JSON.parse(JSON.stringify(userdada));
//             delete newdata.__v
//             delete newdata.password
//             delete newdata.is_deleted
//             return newdata
//         }
//         else{
//             throw new Error("password not match")
//         }
//     }
//     else{
//         throw new Error("user not found")
//     }
// }


async function getAllUser(){
    const userData = await  User.find({},'-password -__v -date',).exec()
    return userData
}





async function getUserByemailandPassword({email,password}){
    const DbUserData = await User.findOne({email:email}).exec()
    console.log("DbUserData##",DbUserData)
    if(DbUserData){
        const status = bcrypt.compareSync(password, DbUserData.password)
        console.log("status%%",status)    
        if(status) {
            let newData = JSON.parse(JSON.stringify(DbUserData));  
            console.log("newdata@@",newData)         
            delete newData.__v
            delete newData.password
            delete newData.is_deleted
            return newData
            
        }
        else{
            throw new Error('user password not matched');
        }        
    }
    else{
        throw new Error('user not exists');
    }
   
}





// async function create_user(userdata){
//     const usrobj=User(userdata)
//     return usrobj.save()
// }

module.exports={create_user,getUserByemailandPassword,getAllUser,User};