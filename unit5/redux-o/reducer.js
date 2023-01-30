import { ADD_COUNT,ADD_TODO, TOGGLE_STATUS } from "./vanilla-redux/actionTypes.js"
export const reducer = (store,action)=>{
    switch(action.type){
        case ADD_COUNT: return {...store,counter:store.counter + action.payload}
        case ADD_TODO : return {...store,todo:[...store.todo,action.payload]}
        case TOGGLE_STATUS:return{...store,todo:store.todo.map(item=>{
            // console.log(item.status,!item.status)
           return item.id === action.payload?{...item,status:!item.status}:item
        })}
        default: return store
    }
    
}