const express= require('express');
const app = express();
app.set("view engine","ejs");
app.get('/',function(req,res){
    res.render("index");
})
app.get('/contect',function(req,res){
    res.render("contect")
})

app.get('./error',function(req,res,next){
    throw Error("Smoething went wrong"); // throw error pure code me errorhandler ko find krega then operation perform krega
    next();
})
app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render("error", { error: err })
})


app.listen(13000,()=>{
    console.log("server listening on");
    
})