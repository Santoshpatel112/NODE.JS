const mongoose=require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/sam`);
const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    age:Number,
    jobTitle:String,
})
module.exports=mongoose.model('User',userSchema);