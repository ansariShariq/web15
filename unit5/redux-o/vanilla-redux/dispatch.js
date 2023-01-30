
import { addToddo ,addtoCount, toggleStatus} from "./actions.js"
import {store} from '../store.js'
// store.dispatch(addtoCount(1))


// store.dispatch(addToddo("learn react"))
// store.dispatch(addToddo("learn Redux"))
document.getElementById('AddElement').addEventListener('click',()=>{
    let item = document.getElementById('todoItem').value
        //  console.log(item)
    store.dispatch(addToddo(item))
    const {todo} = store.getState()
    // console.log(todo)
    let list = document.getElementById('list')
    list.innerText = ''
    todo.map(item=>{
        console.log(item.title)
        const li =  document.createElement('li')
        li.innerText = item.title
        const but = document.createElement('button')
        but.innerText = 'toggle'
        li.append(but)
        list.append(li)
        but.addEventListener('click',()=>{
            console.log(item.status,item.title)
            store.dispatch(toggleStatus(item.id))
        })
    })
})

// console.log(store.getState())