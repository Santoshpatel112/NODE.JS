import { log } from 'console';
import express from 'express';
import path from 'path';
//  Routing in Express

//  C R U D
// ctreat -> POST
// read -> GET
// update -> PUT/PATCH
// delete -> DELETE


const app=express();

app.set("view engine","ejs");
app.use(express.static('./public'));

app.use((res,req,next)=>{
    console.log("middleware working");
    
    next();
})

app.get('/',(req,res)=>{
    res.send("<h1>This is home page </h1>")
    console.log("this is home Rote");
    
})
app.get('/profile',(req,res)=>{
    // res.send("<h1>This is home page </h1>")
    // res.json({success:true,message:[]})
    // console.log(path.resolve()); // it return current directory
        // console.log(path.join(dir,'./text.html'))
    // const dir=path.resolve();
    // const url=path.join(dir, 'text.html');

    // res.sendFile(url);

    // res.sendFile('index.html')


    // res.render('index.ejs')
    // console.log(`/home route is listning`);


    res.send("This is profile page")
    console.log("this is profile page");
        
})

app.get('/profile/:username',(req,res)=>{
res.send(`hello from ${req.params.username}`);
})

app.get('/ejs',(req,res)=>{
    res.render('index')
})


const port=3000;
app.listen(port,()=>{
    console.log(`sirver is runing on port ${port}`);
});



