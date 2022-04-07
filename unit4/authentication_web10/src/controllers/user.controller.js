
var jwt = require('jsonwebtoken');
require('dotenv').config()
const User = require('../models/user.model')


const newToken = (user)=>{
    const token = jwt.sign({ user:user }, process.env.HASHING_VAR);
    return token
}
const register =async (req,res)=>{
    try{
        //checking if user already exists or not
        let user = await User.findOne({email:req.body.email}).lean().exec()
        if(user){
          return  res.status(401).json({message:"User already exist"})
        }
        user =await User.create(req.body)
        console.log(user)

        const token = newToken(user)
        res.status(400).send({user:user,token:token})


    }
    catch(err){
        res.send(err)
    }
}

const login =(req,res)=>{
    res.send("login")
}

module.exports = {register,login}