require("dotenv").config();
// const User=require("./models/Product")
const cors = require('cors')
const cookieParser = require('cookie-parser');  


const mongoose=require('mongoose');

const express=require("express");
const app=express()
app.use(cors())
app.use(express.json());   //bodyparser : old
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log('database connected'))
.catch(err=>{
    console.log(err)
    console.log('connection faild')
})
app.get('/', async function(req,res){
    res.send({status:"hellow world"})
});
app.use('/user',require('./routes/user'))



const PORT=process.env.PORT || 8000
app.listen(PORT,()=>{console.log(`server started : http://localhost:${PORT}`);})