import { useState } from "react";
import {nanoid }from 'nanoid'
export const TodoInput = ({ handleAddTodo }) => {
  const [text, setText] = useState("");
 
  return (
    <div>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        placeholder="Enter your task here"
        value={text}
      />
      <button
        onClick={() => {
            const payload = {
                text:text,
                status:false,
                id:nanoid(4)
            }
            setText('')
            
            // console.log(payload)
          handleAddTodo(payload);
          
        }}
      >
        Add
      </button>
    </div>
  );
};
