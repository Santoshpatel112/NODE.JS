// console.log("Hello santosh")

// const http=require('http');
import http from "http";
import {sum,mul} from './app.js'
import fs from 'fs';
import path from 'path';
// const server=http.createServer();
// console.log(fs);
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("<h1>hii</h1>")
    }
    else if(req.url==='/about'){
        res.end("<h1>my name is santosh</h1>")
    }
    else{
        res.end("<h1>404</h1>")
    }
})


// const extantion=path.extname('sample.js')
// console.log(extantion)

// read a file 

// const fileread=fs.readFileSync('./sample.txt','utf-8')
// console.log(fileread);

// //  creat a file 
// fs.writeFile('index.txt',"this is file content",()=>{
//     console.log("File is created");
// })





// sum(20,10)
// mul(30,6)
const port=1000;
server.listen(port,()=>{
    console.log(`Server is running on port  ${port}`);
})
