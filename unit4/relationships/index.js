const express = require("express");
const app = express();
const mongoose = require("mongoose");
// console.log(mongoose);
app.use(express.json())
const connect = () => {
 return mongoose.connect("mongodb://127.0.0.1:27017/userDB");
};
//User Schema
const userSchema = mongoose.Schema({
    first_name : {type:String,required:true},
    last_name:{type:String,required:true},
    gender:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    age:{type:Number,required:false}


})


//User model
const User = mongoose.model('users',userSchema)


// User CURD
app.get('/users',async (req,res)=>{
    try{

        const users = await User.find().lean().exec()
        console.log(users)
        res.send(users)
    }
    catch(err){
        console.log(err)
        res.send({"message":err.message})
    }
})





app.post('/users',async (req,res)=>{
    try{

        const user =await User.create(req.body)
        // console.log(user)
        res.send(user)
    }
    catch(err){
        console.log(err)
        res.send({"message":err.message})
    }
})

app.patch('/users/:id',async(req,res)=>{
    try{

        const user  =await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        console.log(user)
        res.send(user)
    }
    catch(err){
        console.log(err)
        res.send({"message":err.message})
    }
})
app.delete('/users/:id',async (req,res)=>{
    try{
        const user =await User.findByIdAndDelete(req.params.id).lean().exec()
        console.log(user)
        res.send(user)
    }
    catch(err){
        console.log(err)
        res.send({"message":err.message})
    }
})







app.listen(2145, async() => {
    await connect()
  console.log("listening at 2145");
});