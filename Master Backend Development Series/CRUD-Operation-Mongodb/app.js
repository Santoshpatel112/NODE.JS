const express=require('express');
const app=express();

const userModel=require('./usermodel');

//Create user

app.get('/creat',async(req,res)=>{
const user=await userModel.create({
     username:"John Due",
    email:"johndue.dev@gmail.com",
    age:29,
    jobTitle:"Software-Devolper",
    })
res.send(user);
console.log(user);
})

//Update user

app.get('/update',async (req,res)=>{
    const userupdate=await userModel.findOneAndUpdate({username:"SantoshPatel"},{age:18},{email:"santosh.dev@gmail.com"});
    res.send(userupdate);
    console.log(userupdate);
})

//Read User
app.get('/read',async (req,res)=>{
    const readuser=await userModel.find();
    res.send(readuser);
    console.log(readuser);
})

//Delete user
app.get('/delete',async (req,res)=>{
    const deluser= await userModel.findOneAndDelet({user:""});
    res.send(deluser);
    console.log(deluser);
})

app.listen(3000,()=>{
    console.log("Server is Listning on the Port 3000");
});
