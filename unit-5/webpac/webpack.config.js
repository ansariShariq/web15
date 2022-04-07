const path= require('path')
const config = {
    entry:'./src/index.js',//just for the purpose of understanding
    output:{
        path:path.resolve(__dirname,"distributor"),//to name the folder, by default dist
        filename:'bundles.js'//name of the file to be created,by default main.js
    },
    mode:"development",
    module: {
        rules: [
          { test: /\.css$/, use:['style-loader','css-loader']  },
         
        ],
    }
}
module.exports = config