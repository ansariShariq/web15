import './App.css';
import {useState} from 'react'
function App() {
  const [counter,setCounter] = useState(0)
  return (
    <div className="App">
      {counter}
      <br></br>
      <button onClick={()=>{
        return setCounter(counter+1)
      }}>Add</button>
      <button onClick={()=>{
        return setCounter(counter-1)
      }}>sub</button>
      
    </div>
  );
}

export default App;
