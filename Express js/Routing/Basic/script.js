// 1. install -> npm i express✅
const { log } = require('console');
const expres=require('express');
const app=expres();
const fs=require('fs');
// fs.writeFile('sher.txt',(err)=>{
//     if(err)console.error(err);
//     else console.log("Done")
//     res.send('hello world');
// })
app.use(function(req,res,next){
    console.log("middleware working");
    next();
});


app.get('/',function(req,res){

    res.send('hello world');
    
})
app.listen(4000);

app.use(function(req,res,next){
    console.log("middleware 2 working");
    next();
});


app.get('/profile',function(req,res){
    res.send("welcome to my profile am  santosh");
})
app.get('/profile/harsh',function(req,res){
    res.send("am harsh welcome to my server");
})
app.listen(6000,()=>{
    console.log("listening harsh");
    
})
app.listen(7000,()=>{
    console.log("server is working now");
    
});