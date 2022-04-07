import {sum,del} from  './calc'
import './index.css'
console.log(sum(547,7))
console.log(del(91,45))
const root = document.getElementById('root')

const h1 = document.createElement('h1')

h1.innerText = "Hello World"
h1.setAttribute('class','redText')

root.appendChild(h1)