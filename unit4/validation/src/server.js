const express = require('express')
const connect = require('./config/db')

const userController = require('./controllers/user.controller')
const app = express()
app.use(express.json())

app.use('/users',userController)

const start = async()=>{
    await connect()
    app.listen(1234,()=>{
        console.log('listening to 1234')
    })
}

module.exports = start