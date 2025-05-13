const express=require('express');
const app= express();
app.use(function(req,res,next){
    console.log("middleware 1 is working now");
    next();
    
})
app.get('/',function(req,res){
    res.send("hello world");
})
app.use(function(req,res,next){
    console.log("middleware 2 is working now");
    next();
    
})
app.get('/profile', function(req,res){
res.send("welcome to my profile");
})
app.use(function(req,res,next){
    console.log("middleware 3 is working now");
    next();
})
app.get('/profile/:username',function(req,res){
    res.send(`hello from ${req.params.username}`);
})
app.listen(12000,()=>{
    console.log("server is working now");
    
})