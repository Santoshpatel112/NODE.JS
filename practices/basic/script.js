const express=require('express');
const app=express();
app.set('view engine','ejs');
app.use(function(req,res,next){
    console.log("middleware 1 is running");
    next();
})
app.get('/',function(req,res){
    res.send("welcome to the server");
})
app.get('/profile',function(req,res){
    res.render('profile');
})
app.use(function(req,res,next){
    console.log("middleware 2 is running");
    
})
app.listen(11000,()=>{
    console.log("server listening start");
    
})