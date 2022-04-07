const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:true,unique:true},
    address:{type:String,reuqired:true},
    gender:{type:String,reuqired:false,default:"female"},
    type:{type:String,required:false,default:"customer",enum:["customer","employee"]}

},{
    timestamps:true,
    versionKey:false
})
const User = mongoose.model("user",userSchema)

module.exports = User
