const express = require('express')
const port = 1234
const Password = "Shariq%40001."

const mongoose = require('mongoose')

const app = express()
app.use(express.json())

const connect = ()=>{
    return mongoose.connect(`mongodb+srv://shariq_ansari:${Password}@cluster0.kvpqg.mongodb.net/schoolDB`)
}
// User schema
const userSchema =new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:true},
    role:{type:String,required:true}
},{
    timestamps:true,
    versionKey:false
})
//User Model
const User = mongoose.model('users',userSchema);

//User Crud

app.get('/users',async (req,res)=>{
    try{
        const users =await User.find().lean().exec()
        console.table(users)
        res.status(200).send(users)
    }
    catch(err){
        
        res.status(505).send({meassage:err.meassage})
    }
})

app.post('/users',async (req,res)=>{
    try{
        const user =await User.create(req.body)
        // console.log(user)
        res.status(200).send(user)
    }
    catch(err){
        
        res.status(505).send({meassage:err.meassage})
    }
})

//Student Schema

const batchSchema =new mongoose.Schema({
    name:{type:String,required:true}
},{
    timestamps:true,
    versionKey:false
})


//batch Model
const Batch = mongoose.model('batch',batchSchema)

//Batch Crud
app.get('/batchs',async (req,res)=>{
    try{
        const batchs =await Batch.find().lean().exec()
        console.table(batchs)
        res.status(200).send(batchs)
    }
    catch(err){
        
        res.status(505).send({meassage:err.meassage})
    }
})

app.post('/batchs',async (req,res)=>{
    try{
        const user =await Batch.create(req.body)
        // console.log(user)
        res.status(200).send(user)
    }
    catch(err){
        
        res.status(505).send({meassage:err.meassage})
    }
})

//Batch Schema

const studentSchema =new mongoose.Schema({
    roll_id:{type:mongoose.Schema.Types.ObjectId,required:true}
},{
    timestamps:true,
    versionKey:false
})


//Batch Model
const Student = mongoose.model('student',studentSchema)

//Student Crud
app.get('/students',async (req,res)=>{
    try{
        const batchs =await Student.find().lean().exec()
        console.table(batchs)
        res.status(200).send(batchs)
    }
    catch(err){
        
        res.status(505).send({meassage:err.meassage})
    }
})

app.post('/students/:id',async (req,res)=>{
    try{
        const user =await Student.create(req.params.id)
        // console.log(user)
        res.status(200).send(user)
    }
    catch(err){
        
        res.status(505).send({meassage:err.meassage})
    }
})

app.listen(port,async()=>{
    await connect()
    console.log("listening at "+port)
})