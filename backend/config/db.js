// require("dotenv").config();
// const mongoose=require('mongoose');

// const connectDb=async()=>{
//     try{
//         await mongoose.connect(process.env.MONGODB_URI,{
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("mongodb connected");
//     }
//     catch {error}{
//         console.error('mongodb connection error');
//         process.exit(1);

//     }
// }
// module.exports=connectDb;