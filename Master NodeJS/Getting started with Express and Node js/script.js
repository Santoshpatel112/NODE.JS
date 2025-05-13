const expess=require('express');
const app=expess();


app.get('/',(req,res)=>{
    console.log("Welcome");
    res.send("Helo from home page");    
})
app.get('/about',(req,res)=>{
//    res.send("Hello from ${req.query.name")
    // res.send("hello from about Page"+" hey" + req.query.name);//after apply req.query.name => when you write on server (/about?name=santosh)

})
app.use(function(req,res,next){
    console.log("Middleware 1 is runing now");
    next();
    
})
app.get('/profile/:username',function(req,res){
res.send(` hlo from ${req.params.username}`)
})
app.listen(2000,(Error)=>{
    if(Error)console.error(error);
    else console.log("Server started listening on");
})