const fs=require("fs");
/* write  ,Apfilepend file ,read file, remname ,unlink */

// call back ka mtlb => function();
// 1.write

// fs.writeFile(file, data[, options], callback)✅ 
// fs.writeFile('hey.txt','hey hello kaise ho',function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })

// AppendFile✅ 
//  it means adding somthing
// fs.appendFile(path, data[, options], callback)


// fs.appendFile('hey.txt',' me to achha hu',function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })



// Rename(chang it name)✅
// fs.rename(oldPath, newPath, callback)

// fs.rename("hello.txt","HLO.txt",function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })




// CopyFile✅ 
// fs.copyFile(src, dest[, mode], callback)



// fs.copyFile('HLO.txt','./basic/newfile.txt',function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })




// fs.copyFile('HLO.txt','./Hello-World/newfile.txt',function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })



// // bcz intrester in error

// fs.copyFile('HLO.txt','./basic1/newfile.txt',function(err){
//     if(err) console.error(err.message);
//     else console.log("Done");
// })



// Unlink(deleteFile)✅

// fs.unlink(path,callback)
// fs.unlink('HLO.txt',function(err){
//     if(err) console.error(err.message);
//     else console.log("remove");
// })



// /To remove the folder✅
// fs.rmdir(path[,option],callback)
// but one condition it work when folder are the empty if the floder not empty then it not work

// ✅
// fs.rm("./new",function(err){
//     if(err)console.erroe(err);
//     else console.log("removed");
// })





// H.W
// making a folder ,read Folder and write a Folder ,read a file ,??????????????
