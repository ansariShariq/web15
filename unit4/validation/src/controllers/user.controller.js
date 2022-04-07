const express = require('express')
const router = express.Router()
// console.log(router)
const User = require('../models/user.model')

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
router.post('/',async(req,res)=>{
    try{
        const user =await User.create(req.body)
        console.log(user)
        // res.send("hell=")
        res.send(user)
    }
    catch(err){
        res.send({message:err.message})
    }
    })


module.exports= router