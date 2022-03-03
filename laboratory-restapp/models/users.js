const mongoose = require('mongoose');
const Schema=mongoose.Schema
const userSchema=new Schema({
    fname:{
        type:String,
        required:true,
        minlength:3,
        maxlength:15
    },
    email:{
        type:String,
        required:true,
        minlength:5,
        maxlength:40

    },
    password:{
        type:String,
        required:true
        
    },
    role:{
        type:String,
        required:true,
        minlength:3,
        maxlength:10

    }
})
module.exports=mongoose.model('users',userSchema)