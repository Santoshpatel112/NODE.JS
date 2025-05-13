# mongodb =>is a data base
# database => jha sara apka web application android application ka data stroe hota hai 
# database many do tarh ke hote hai 



# 1. relationl
# 2. non relationl(mongodb)
# // 1.Code side ->db side-> model -> shema

# //2.mongoDB side-> DB formation->collection->Documents



# key point =>
har ek app ke data ka store storge me hohga pr use direct rkhne ki jgah jhm use conatainer me rhenge us conatainer me sirf us app ka data aayega

# model(code) =>Collection(db)
# Schema(code)=>documents(db)
--------------------------

# ek app ka pura data =>db
# ek app me verity of data hota hai pr pura data hota hai app ka hi  subcatgory->collection
# ek user ki bat kre to use khte hai documents



#  MongoDB Setup
# 1.install mongodb
# 2.install mongoosejs
# 3.require and setup connection
# 4.make shema
# 5.creat model and export


# const mongoose =require('mongoose');
localhost:30006
but mongdb by default 27017 pr chalta hai 

# mongoose.connect("mongodb://127.0.0.1:27017/dbname");


👆then dbname se database ban jayega

 scema mtlb apko ye batna banne vala har document sbse chhoti intity  me kya kua hoga


# mongoose.Schema({
    username:String,
    name : String,
    age:Number
})

👆ye btayega document ka data



// then model 
# module.exports=mongoose.model("user",userschema);

👆ye bnayega collection