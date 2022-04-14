import { useState } from "react";


export const TodoItem = ({ item, handleStatus }) => {
    
  return (
    <div>
      {item.text} {!item.status ? "Not Done" : "Done"}
      <button onClick={() => handleStatus(item.id)}> toggle</button>
    </div>
  );
};
