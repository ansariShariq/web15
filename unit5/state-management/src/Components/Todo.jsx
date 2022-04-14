import { useState } from "react"
import { TodoInput } from "./TodoInput"
import { TodoItem } from "./TodoItem"

export const Todo =()=>{
    const[todoList,setTodoList] = useState([])
    const handleAddTodo = (item)=>{
        setTodoList([...todoList,item])

        // console.log(item)
    }
    const handleStatus = (id)=>{
        // console.log(todo)
        const updatedList = todoList.map((item)=>{
           return item.id === id?item = {...item,status:!item.status}:item ={...item}
        })
        setTodoList(updatedList)
    }
return <div>
    <TodoInput handleAddTodo = {handleAddTodo} />
    {todoList.map((item)=>{
        return <TodoItem item = {item} handleStatus={handleStatus}/>
    })}
    
</div>
}