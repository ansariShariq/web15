import { useEffect, useRef, useState } from "react";

export const Stopwatch = () => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(null);
  const [start, setStart] = useState(true);
  const handlePause =()=>{
    
        clearInterval(counterRef.current);
        setStart(false);
      
  }
const handleStart = ()=>{
    if (!start) {
        return setStart(true);
      }
}
const handleReset = ()=>{
    handlePause()
    setCounter(0)
}
  useEffect(() => {
    if (start) {
      counterRef.current = setInterval(() => {
        console.log("inside the counter");
        setCounter((prev) => prev + 1);
      }, 1000);
    }
  }, [start]);

  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={handlePause}
      >
        pause
      </button>
      <button
        onClick={handleStart}
      >
        start
      </button>
      <button
      onClick={handleReset}>reset</button>
    </div>
  );
};
