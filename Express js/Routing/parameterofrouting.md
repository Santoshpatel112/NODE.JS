# ++++++🧨🧨🧨 Route parameters +++++

# facebook.com/profile/harsh
# facebook.com/profile/harshit
# facebook.com/profile/harshita
# facebook.com/profile/hardik

# aisa koi bhi route jiska koi hissa bar bar same rhta hai aur kuch hissa bar bar same rhta hau iske liye aap ek fynamic route bna skte hai




#  🤖🤖🤖 DYANAMIC ROUTE

# /profile/harsh
# /profile/harshit
# /profile/harshita
# /profile/hardik

jo chize bar bar change ho rhi hai uske liye parameter pas kr denge like METHOD ,VARIBLES ...


# app.get('/profile/:username',function(req,res){
    res.send(`hello from ${req.params.username}`);
}) ✅

# value return hogi req se


# /Home/profile/contect/ram
# /Home/profile/contect/shyam
# /Home/profile/contect/sitaram
# /Home/profile/contect/jiyaram
# /Home/profile/contect/rajaram

⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️⚙️
# /Home/profile/contect/:username

app.get('/Home/profile/contect/:username',function(req,res){
    console.log(` Hello from ${req.params.username}`);
})
app.listen(12000,()=>{
    console.log(" server is now working");
})


