# Client =>at any place where we run internate on the browser
(client have cookies)
# server => lockelhost on my laptop
(server have sessions)

# cookies =>data save at the frontend or the browser called cookies
# server => data save at the server called session
(more sequre)

✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅ 

# 🎯Sessions
# 1. express-session
# create
req.session.koibhinam=koibhinam;
read

req.session.koibhinam

delete  session
 req.session.destroy

 // Sessions

var express = require('express');
var router=express.Router();
router.use(function(req,res,next){
  console.log("welcome to the session");
  next();
})
router.get('/',function(req,res){
  // req.session.koibhinam="hlo";//sever pr koibhinam se session bn jayega jiska value hlo hoga
  req.session.ban=true;
  res.render('index');
});
// agar hm session ko kisi bhi route me bna dete hai to use kisi bhi route me chek kr  skte hai

router.get('/checkban',function(req,res){
if(req.session.ban===true){
  res.send("You are banned");
}
});
router.get('./removeban',function(req,res){
  req.session.destroy(function(error){
    if (error) throw error;
    
    res.send("ban remove")
  })
})
module.exports=router;
// reload krne se session delete ho jata hai

✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅ 

# cookies => frontend browser pr set hoti hai
