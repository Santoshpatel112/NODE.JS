const express=require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const ejs=require('ejs');
app.set("view engine","ejs");// set the view engine file




app.get('/',(req,res)=>{
res.send("go on /profile see profile");
})
app.get('/profile',(req,res)=>{
res.render("index");
})


app.listen(3000,()=>{
    console.log("Server listening on port 3000");
    
})