const express = require('express')
const connect = require('./src/config/db')
const {register,login} = require('./src/controllers/user.controller')
const app = express()
app.use(express.json())

app.post('/register',register)
app.post('/login',login)

const start = async()=>{
    await connect()
    app.listen(1234,()=>{
        console.log('listening to 1234')
    })
}

module.exports = start