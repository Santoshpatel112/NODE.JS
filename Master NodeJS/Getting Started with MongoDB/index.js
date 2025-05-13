// const express=require('express');
// const app= express();
// const users=require('./MOCK_DATA 2.json');
// const PORT=7000;

// const fs=require('fs');
// const mongoose= require('mongoose');
// const { type } = require('os');
// const { timeStamp } = require('console');




// // Connection
// mongoose.connect(" mongodb://127.0.0.1:27017/AIM-backend").then(()=>{
//     console.log("mongodb connection established");
// }).catch((err)=>console.log("Mongo Error",err));


// // Schema

// const userSchema =new mongoose.Schema({
// firstName : {
//     type :String,
//     required:true
// },
// lastName : {
//     type :String,
//     required:false
// },
// email : {
//     type :String,
//     required: true,
//     unique :true
// },
// jobTitle:{
//     type :String,
// },
// gender :{
//     type:String,
// },
// timeStamp:true,

// });


// //model
// const User=mongoose.model("user",userSchema);


// app.get('/users',function(req,res){
//     const html=
//     `<ul>${users.map((user)=>`<li>${user.first_name}</li>`).join("")}</ul>`
//     res.send(html);
// });


// //REST API

// app.get('/api/users',(req,res)=>{
//     return res.json(users)
// })
// // app.get('/api/users/:id',(req,res)=>{
// //     const id=req.params.id;
// //     const user=users.find((user)=>user.id==id);
// //     return res.json(user);
// // });

// app
// .route("/api/users/:id")
// .get((req,res)=>{
//     const id=req.params.id;
//     const user=users.find((user)=>user.id==id);
//     return res.json(user);
// })

// .patch((req,res)=>{
//     //edit user with id
//     return res.json({status: 'pending'})
// })
// .delete((req,res)=>{
//     //delete user with id
//     return res.json({status: 'pending'})
// })
// //middleware
// app.use(express.urlencoded({ extended:false}));
// app.post('/api/users',async (req,res)=>{
//     res.setHeader("X-myname","Santosh Patel") //costom Headers(always add  -X in the custom Headers)
//     const body=req.body;




//     if(
//         !body ||
//         !body.first_name ||
//         !body.last_name ||
//         !body.email||
//         !body.gender||
//         !body.job_title
//     ){
//        return res.status(404).json({msg :'All feild requrid'});
//     }
//     // console.log("Body",body);

//    const result= await User.create({
//         firstName: body.first_name,
//         lastName: body.last_name,
//         email: body.email,
//         gender: body.gender,
//         jobTitle: body.job_title,
//     });

//     console.log(result);
    
//  return res.status(201).json({msg :"Success"});


// app.listen(PORT, () => {
//     console.log(`${PORT} listening`);
// });

//     // users.push({...body, id:users.length+1});
//     // fs.writeFile('./MOCK_DATA 2.json',JSON.stringify(users),(err,data)=>{
//     //   return res.status(201).json({status: 'Success',id:users.length})});
//     // });
    
//     // return res.json({status: 'pending'})
// // app.listen(PORT,()=>{
// // console.log(`${PORT} listening `)

// // });




const express = require('express');
const app = express();
const {}=require("./middlewares")
const users = require('./MOCK_DATA 2.json');
const PORT = 7000;
const userRouter=require('./routes/user')
const fs = require('fs');
const {connectMongoDb} =require('./connection');

// Connection
connectMongoDb("mongodb://127.0.0.1:27017/AIM-backend");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(logReqres("log.txt"));
app.use("/user",userRouter);
app.listen(PORT,()=> console.log(`Server Started at PORT:${PORT}`));