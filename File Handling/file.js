// file handling Means performing Operation on the file 
//1. Read
// 2. Write
// 3.chang
// 4.operation

// fs are in built 

const fs=require("fs");
// Sync...
// fs.writeFileSync('./test.txt','Hello');
// Async...
fs.writeFile('./test.txt','Hello Duniya');



const result =fs.readFileSync('./contect.txt','utf-8');
console.log(result);



// synchronous  => Blocking req\ block the flow of the control
// Asynchronous => Non Blocking req\ it give value by a call back();

// Always recommended to write Non blocking requests



// +++++++++++++++++++++Archicture of the Node js
// Request -> Event Queue -> Event loop ::1.boocking operations 2. non blocking operations  
// after processing they give Response



// Blocking operation  -> i need a thered/ worker ---> thread pool
// assign a worker and make him work




//   Return The result  <<< <<<------
// By defauolt thered = no of callbacks
//  max ? : 8 core cpu ->8

// so max size 8

const Os= require("os");
console.log(Os.cpus().length);
