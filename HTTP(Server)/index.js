const http=require('http');
const fs=require('fs');
const servar=http.createServer((req ,res) =>{
    console.log("new request rec");
    // console.log(req.headers);
    // console.log(req);//All information about the server request
    
    const log=`${Date.now()} ${req.url} : New Req Received\n`
    fs.appendFile('log.txt',log,(err,data)=>{
        // res.end("hello from server again");//for responce
        switch(req.url){
    case '/':res.end("Homepage");
    break;
    case '/about' : res.end("I am santosh Patel");
    break;
    default : res.end("404 Not found");
}
        
    });    

});
servar.listen(5000, ()=> console.log("Server Started !")
); // ek server ek hi port pr chlega



// We do
// switch(req.url){
//     case '/':res.end("Homepage");
//     break;
//     case '/about' : res.end("I am santosh Patel");
//     break;
//     default : res.end("404 Not found");
// }