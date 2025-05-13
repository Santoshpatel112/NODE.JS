const express= require('express');
const app = express();
app.set("view engine","ejs"); //view engine

app.use(express.static('./public')); //public static
app.get('/',function(req,res){
    res.render("index");
})
app.get('/contect',function(req,res){
    res.render("contect")
})
app.listen(13000,()=>{
    console.log("server listening on");
    
})
