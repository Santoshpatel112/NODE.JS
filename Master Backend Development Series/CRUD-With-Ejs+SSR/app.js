const express=require('express');
const app=express();
const PORT=3000;
const path=require('path');
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
const ejs=require('ejs');
app.set("view engine","ejs");


app.get('/',(req,res)=>{
    res.render('index');

})


app.listen(PORT,()=>{
    console.log(`Server is listining on the PORT ${PORT}`);
})