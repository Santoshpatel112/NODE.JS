const express= require('express');
const app = express();
app.set("view engine","ejs");
app.get('/',function(req,res){
    res.render("index");
})
app.get('/contect',function(req,res){
    res.render("contect")
})

app.listen(13000,()=>{
    console.log("server listening on");
    
})
// app.get('/:username',function(req,res){
//     res.send(`hello from ${req.params.username}`);
// })