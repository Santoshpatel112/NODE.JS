// require('node:http') 
const http=require('http');



// to creat A server
// http.createServer([optional][,requestListener])
// it contain two parameter firstone is response and 2md one is request




// const server= http.createServer(function(req,res){
// res.end("Hello world");
// })

// server.listen(3000);

http.request(function(req,res){
    console.log("server listening on");
    
})

const server2=http.createServer(function(req,res){
    res.end("Welcome to my first server");
})
server2.listen(2000);