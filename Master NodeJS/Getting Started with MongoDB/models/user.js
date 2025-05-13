const mongoose =require('mongoose');
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
    },
    jobTitle:{
        type:String,
    },
    gender:{
        type:String,
        required:true
    },

},{timestamps:true,})


export const User=mongoose.model("User",userSchema);