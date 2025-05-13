# middleware ek aisa function  hota hai jo har route se pahle chalta hai ,iska mtlb saare main koi bhi chale usse pahle middleware chlta hai aur usme likha code  sbse pahle exucute hota hai✅


app.use(function(req, res, next) {
console.log(req);//
console.log("Middleware working");
next();
});



app.use(function(req, res, next) {
console.log("Middleware 2 working");
next();
});
🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯
# req => isme user ki data hoti hai (Ip adress: ,Locations: , devices: ,wifi)
// man jaise koi user ne google or likha www.instagram.com to uski sari  data chli jati hai

# req=> User data ✅ 
 // you will check = >console.log(req);


 🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯 
  
# res => data send by server called response
// jaise user ne request kiya to jo data aayegi use response khte hai


# req => jb samne se data aaye(aane vala data)
# res => aur jb yha se data bhejna ho (sara code yha se bhejne ke liye)

# 🔥Execute any code
# 🔥Make changes to the request and the response object
# 🔥End the request-response cycle.
# 🔥call the next middleware function in the stack


🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯🎯 
# Node ke sath ek dikkat hai ki agar conrtol ek bar bhi kisi middleware pr gya  to control khudh se alag  route/middleware pr nhi jayega , use agle pr le jane ke liye aapko push krna pdega aur ye push khlayega next();  ko chalna


# it is type of plugin 
# work as a middleman
✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
# when req send by the client then it go first of  middleware and check the req is not sent by hacker banking agent if any type of error then it return  go back if all are ok then go for server response 



const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})



🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨 ✅✅✅✅✅✅✅✅✅✅✅✅✅✅
# third party middleware
Use third-party middleware to add functionality to Express apps.

Install the Node.js module for the required functionality, then load it in your app at the application level or at the router level.

The following example illustrates installing and loading the cookie-parsing middleware function cookie-parser. 


🔥 npm install cookie-parser



const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

// load the cookie-parsing middleware
app.use(cookieParser())




