import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

export const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [completedTodo, setCompletedTodo] = useState([]);
  const [showCompTodo, setShowCompTodo] = useState(false);
  const handleAddTodo = (item) => {
    setTodoList([...todoList, item]);
    // console.log(item)
  };
  const handleStatus = (id) => {
    // console.log(todo)
    // const compledItem = todoList.filter((item)=>{
    //     return item.id === id
    // })
    // setCompletedTodo([...completedTodo,compledItem])
    const updatedList = todoList.filter((item) => {
      item.id === id
        ? (item = { ...item, status: !item.status })
        : (item = { ...item }); //before
      item.id === id
        ? setCompletedTodo([...completedTodo, item])
        : setTodoList(completedTodo);
      return item.id !== id;
    });
    setTodoList(updatedList);
    // const updatedList2 = completedTodo.filter((item)=>{
    //     item.id === id?item = {...item,status:!item.status}:item ={...item}//before
    //     item.id === id?setTodoList([...todoList,item]):setTodoList(todoList)
    //    return item.id !== id

    //    })
    //    setCompletedTodo(updatedList2)
  };
  const handleShowTodo = () => {
    setShowCompTodo(!showCompTodo);
  };
  const handleRemove = (id) => {
    const updatedList = todoList.filter((item) => {
      return item.id !== id;
    });
    // if(updatedList.length !== todoList.length){

    setTodoList(updatedList);
    // }
    // else{
    const updateCompletedList = completedTodo.filter((item) => {
      return item.id !== id;
    });
    setCompletedTodo(updateCompletedList);

    // }
  };
  return (
    <div>
      <TodoInput handleAddTodo={handleAddTodo} />
      {todoList.map((item) => {
        return (
          <TodoItem
            item={item}
            handleStatus={handleStatus}
            handleRemove={handleRemove}
          />
        );
      })}
      <button onClick={handleShowTodo}>{!showCompTodo?"Show Completed Todos":"Hide Completed Todos"}</button>
      {showCompTodo &&
        completedTodo.map((item) => {
          return (
            <TodoItem
              item={item}
              handleStatus={handleStatus}
              handleRemove={handleRemove}
            />
          );
        })}
    </div>
  );
};
