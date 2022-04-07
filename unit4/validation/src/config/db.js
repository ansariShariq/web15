const mongoose = require("mongoose")


const connect =  ()=>{
   return  mongoose.connect("mongodb+srv://shariq_ansari:Shariq%40001.@cluster0.kvpqg.mongodb.net/validation")
}

module.exports = connect