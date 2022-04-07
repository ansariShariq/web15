// import express from "express"
// const express = require("express")
// const app = express()

// const express = require("express");

// app.use(express.json())
// // console.log(app)
// app.listen("1234",()=>{
//     console.log("Listening at 1234")
// })

// app.get('/',(req,res)=>{
//     console.log("get request is sent")
//     res.send("respond is send")
// })

// app.post('/',(req,res)=>{
//     console.log('post req is send',req.body)
//     res.send(req.body)
// })


const express = require("express")
const app = express()
// app.use(logger)

app.get("/books",(req,res)=>{
    res.send("fetching a book")
})

app.get(`/books/:name`,logger1,(req,res)=>{
    var bookName = req.params
    bookName['bookName'] = bookName.name
    delete bookName.name 
    console.log(bookName)
    res.send(bookName)
})

app.listen(1234,()=>{
    console.log('listenig to 1234')
})
function logger1(req,res,next){
    console.log(req.url)
    // req.params = req.name.params
 next()
}
function logger(req,res,next){
    console.log("fetching the book")
  
    next()
}