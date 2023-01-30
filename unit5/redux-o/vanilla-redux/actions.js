import { ADD_COUNT,ADD_TODO,TOGGLE_STATUS } from "./actionTypes.js"
import {v4 as uuid} from 'uuid'
export const addtoCount = (payload) =>{
    return {type:ADD_COUNT,payload}
}
export const addToddo = (title)=>{
    return {type:ADD_TODO,payload:{title:title,status:false,id:uuid()}}
}
export const toggleStatus = (id)=>{
    
    return {type:TOGGLE_STATUS, payload:id}
}