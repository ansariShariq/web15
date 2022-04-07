const express=require("express");
//console.log(express)
const app=express();

app.use(logger);



app.get("/books",(req,res)=>{
    console.log("books")
    return res.send({route:req.role})
});
app.get("/ libraries",logger,logger,logger,(req,res)=>{
    return res.send({route:req.role,permission:req.permission})
});
app.get("/authors",logger,logger,logger,(req,res)=>{
    return res.send({route:req.role,permission:req.permission})
});

function logger(req,res,next){ls
    
    if(req.path=="/books"){
        req.role="/books";
    }
    else if(req.path=="libraries"){
        req.role="/libraries"
    }
    else if(req.path=="authors"){
        req.role="/aothors"
    }
    next();


    app.listen(1234,()=>{
        console.log("listenning on port 1234")
    });
    
}
