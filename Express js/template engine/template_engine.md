
🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨🧨
# tamplete engine => ejs

# html se pass superpower nhi hai calculation karne ki
(1+2) =>1+2

# ejs me option hoga chahe to calculate kra skte hai
(1+2) =>3
⚙️
# ejs is html with superpower (means u can do some calculation javascript inside html)

ejs me sari chize dynamic hoti hai

✅✅✅✅✅✅✅✅✅✅✅
# ################# ejs setup 


# 1.ejs install
npm i ejs

# 2.configure ejs
 app.set("view engine","ejs");

 # 3.ek views folder banao
 # 4.usme ejs file banao
 # 5.send ki jagah render karo 
 
 
 
 
 
 
 =>render krte vakt make sure aap views folder ke andar waali koi file ka naam likhe aur usme ejs add na kre aur render function me .ejs mention na kre


// views ke anadar rkhi file ka name likhe res.render(index);
without using  .ejs
👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆

# template engine =>pug handlebars ,ejs✅ .hade
# ejs is very very similer to html











ejs are dyanamic🤖🤖🤖🤖
see blew 

<!-- Emportant thing -->
app.get('/',function(req,res){
    res.render("index",{age:12});
})

// after user ejs file me jha jha age hoga vha 12 aa jayega 

but
in ejs
<h3><%= age%></h3>
🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁🎁 