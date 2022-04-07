const express = require("express")

const app = express()

app.get('/books',(req,res)=>{
    const obj = {
        route:req.url
    }
    res.send(obj)
})
app.get('/authors',checkPermission('/authors'),(req,res)=>{
    const obj = {
        route:req.url,
        permission:req.permission

    }
    res.send(obj)
    
})
app.get('/libraries',checkPermission("/libraries"),(req,res)=>{
    const obj = {
        route:req.url,
        permission:req.permission
    }
    res.send(obj)
    
})

function checkPermission(routeName){
   return (req,res,next)=>{
        req.permission = true
        next()

    }
}







app.listen(1234,()=>{
    console.log('listening at 1234')
})

