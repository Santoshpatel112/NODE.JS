const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.get('/',function(req,res){
res.render('revision')
})
app.use(function(req,res,next){
    console.log('middleware listening on')
    next();
})
app.get('/profile',function(req,res){
    res.render('profile1')
})
app.listen(4000,(error)=>{
if(error) console.log(error);
else console.log("server is successfully listening");


})