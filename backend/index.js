require("dotenv").config();
// const User=require("./models/Product")
const cors = require('cors')

const https = require('https');
const fs = require('fs');


const cookieParser = require('cookie-parser');  


const mongoose=require('mongoose');

const express=require("express");



const app=express()
var corsOptions = {
    origin: "https://localhost:3000",
    credentials: true,
}
app.use(cors(corsOptions))
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
// app.listen(PORT,()=>{console.log(`server started : http://localhost:${PORT}`);})

const options = {
    key: fs.readFileSync('./cert/key.pem'), // Replace with the path to your key
    cert: fs.readFileSync('./cert/cert.pem') // Replace with the path to your certificate
}

https.createServer(options, app).listen(PORT,() => {
    console.log(`server started : https://localhost:${PORT}`);
});
