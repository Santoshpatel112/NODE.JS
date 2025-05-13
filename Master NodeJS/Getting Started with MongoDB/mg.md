# mongodb is a database
# No -SQL Document Based DataBase(Work on the document )
# strong Support of Aggregation pipes
# work on Bason Formate
# Best for node Applications


# ✅ Collection
# ✅ Document(thousend of document in the collection)



# Setup for momgodb



> show dbs
>use<db_name>
>show collection
>db.coll.find()
>db.coll.insert()



✅ for installestion
 # npm install mongoose
 


 # there are thre  opertaion perform 
 # 1.Schema
 # 2.model
 # 3.connection

//for connection
mongoose.connect("mongodb://127.0.0.1:27017/dbName").then(()=>console.log("Mongodb Connected")).
catch(()=>console.log("Mongo Error",err));


Making Schema
 const userSchema=new mongoose.Schema({
    .............

 })

 // Model 
 const User=mongoose.model('user',userSchema)



