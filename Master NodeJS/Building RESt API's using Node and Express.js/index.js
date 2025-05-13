const express=require('express');
const app= express();
const users=require('./MOCK_DATA.json');
const PORT=8000;

const fs=require('fs');

app.get('/users',function(req,res){
    const html=
    `<ul>${users.map((user)=>`<li>${user.first_name}</li>`).join("")}</ul>`
    res.send(html);
});


//REST API

app.get('/api/users',(req,res)=>{
    return res.json(users)
})
// app.get('/api/users/:id',(req,res)=>{
//     const id=req.params.id;
//     const user=users.find((user)=>user.id==id);
//     return res.json(user);
// });

app
.route("/api/users/:id")
.get((req,res)=>{
    const id=req.params.id;
    const user=users.find((user)=>user.id==id);
    return res.json(user);
})

.patch((req,res)=>{
    //edit user with id
    return res.json({status: 'pending'})
})
.delete((req,res)=>{
    //delete user with id
    return res.json({status: 'pending'})
})
//middleware
app.use(express.urlencoded({ extended:false}));
app.post('/api/users',(req,res)=>{
    res.setHeader("X-myname","Santosh Patel") //costom Headers(always add  -X in the custom Headers)
    const body=req.body;
    // if(!body.first_name || !body.last_name || !body.email||body.job_title){
    //     res.status(404).json({msg :'All feild requrid'});
    // }
    // console.log("Body",body);
    users.push({...body, id:users.length+1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
      return res.status(201).json({status: 'Success',id:users.length})});
    });
    
    // return res.json({status: 'pending'})
app.listen(PORT,()=>{`server started at port ${PORT}`});
