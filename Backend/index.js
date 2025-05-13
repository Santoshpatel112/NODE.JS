const express=require('express')
const app=express();


app.get('/',(res,req)=>{
    res.send("hello dosto")
})
const port=3000;

app.listen(port)