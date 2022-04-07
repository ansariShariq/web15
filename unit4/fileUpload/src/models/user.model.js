const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName:{type:String,required:true},
    
    profilePic:{type:String,required:true}


})
const User = mongoose.model("user",userSchema)
module.exports = User
