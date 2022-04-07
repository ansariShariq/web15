const express = require('express')
const router = express.Router()
// console.log(router)
const User = require('../models/user.model')
const upload = require('../middlewear/uploads')
router.get('/',async(req,res)=>{
try{
    const user =await User.find().lean().exec()
    console.log(user)
    res.send("hell=")
}
catch(err){
    res.send({message:err.message})
}
})
router.post('/',upload.single('profilePic'),async(req,res)=>{
    try{
        const user =await User.create(req.body)
        console.log(user)
        // res.send("hell=")
        res.send({"a":"userd"})
    }
    catch(err){
        res.send({message:err.message})
    }
    })


module.exports= router