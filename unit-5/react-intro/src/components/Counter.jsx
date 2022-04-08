import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
   const handleChange = (num)=>{
        setCounter(counter + num)
    }
    const counterDouble = (num)=>{
        setCounter(counter * num)
    }
  return (
    <div>
        
      <div>Counter : {counter}</div>
      <div>
        <button onClick = { ()=>{
            handleChange(1)
        }}>+</button>
        <button onClick = { ()=>{
            handleChange(-1)
        }}>-</button>
        <button onClick={()=>{
            counterDouble(2)
        }}>Double</button>
      </div>
    </div>
  );
};
export { Counter };
