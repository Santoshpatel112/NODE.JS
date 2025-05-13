const express=require('express');
const app = express();
const port=7000;
const users=require('./MOCK_DATA (4).json');


app.get('/api/user',(req,res)=>{
    return res.json(users);
})


app.get('/user',(req,res)=>{    
    const html=`
    <ul>
    ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}</ul>`
    res.send(html);
})

app.listen(port,()=>{
    console.log("server started");
    
});