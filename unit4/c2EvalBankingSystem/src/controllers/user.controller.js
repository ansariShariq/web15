const User = require('../models/user.modle.js')
const express = require('express')
const router = express.Router()

router.get('/',async(req,res)=>{
    try{

        const users =await User.find().lean().exec()
        console.log(users)
        res.status(200).send(users)
    }
    catch(err){
        console.log(err)
        res.status(500).send({message:err.message})
    }
})
router.post('/',async(req,res)=>{
    try{

        const user =await User.create(req.body)
        console.log(user)
        res.status(200).send(user)
    }
    catch(err){
        console.log(err)
        res.status(500).send({message:err.message})
    }
})

module.exports = router