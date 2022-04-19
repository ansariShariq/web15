import { useState } from "react";

export const TodoItem = ({ item, handleStatus, handleRemove }) => {
  return (
    <div
      style={
        item.status ? { textDecoration: "line-through", color: "grey" } : null
      }
    >
      <input
        type="checkbox"
        checked={item.status}
        onChange={() => {
          handleStatus(item.id);
        }}
      />{" "}
      {item.text}
      {/* {!item.status ? "Not Done" : "Done"} */}
      {/* <button onClick={() => handleStatus(item.id)}> toggle</button> */}
      <button
        onClick={() => {
          handleRemove(item.id);
        }}
      >
        remove
      </button>
    </div>
  );
};
