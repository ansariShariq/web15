// const express = require('express')
const path = require('path')

const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, path.join(__dirname,"../myuploads"))
    },
    filename: function (req, file, callback) {
      const prefix = Date.now()
      callback(null, prefix + '-' +  file.originalname )
    }
  })
  function fileFilter (req, file, cb) {

    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'){
        console.log(file)
          // To accept the file pass `true`, like so:
     return cb(null, true)
    }
    else{
        // To reject this file pass `false`, like so:
   return cb(null, false)
    }
    
  
  
  
    // You can always pass an error if something goes wrong:
    // cb(new Error('I don\'t have a clue!'))
  
  }



const options = {
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        fileSize: 1024 * 1024 * 5
    }
}





const upload = multer(options)

module.exports = upload