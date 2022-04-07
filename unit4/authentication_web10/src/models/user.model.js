const bcrypt = require('bcrypt');
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
},{
    timestamps:true,
    versionKey:false
})
userSchema.pre("save",function(next){
    if(!this.isModified("password")) return next()
    console.log("before",this.password)
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash
    console.log('after',this.password)
    return next()
})
module.exports = mongoose.model("users",userSchema)

