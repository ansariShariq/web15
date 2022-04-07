const connect = require('./src/config/db')
const userController = require('./src/controllers/user.controller')
const express = require('express')

// const connect = require('./config/db')
const app =express()
app.use(express.json())

app.use("/users",userController)



const start = async()=>{
    await connect()
    app.listen(3214,()=>{
        console.log('listening at port 3214')
    })
}
module.exports = start