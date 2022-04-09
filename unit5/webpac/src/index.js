import {sum,del} from  './calc'
import './index.css'
import React from 'react'
import ReactDom from 'react-dom'
console.log(sum(547,7))
console.log(del(91,45))
const root = document.getElementById('root')

const h1 = React.createElement('h1',{},'React')
const p = React.createElement('p',{className:"redTest"},h1,h1, h1)

ReactDom.render(
    p,//what to run
    root // where to run
)
