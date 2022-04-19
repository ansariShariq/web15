// import { useState } from "react";
import { useState } from "react";
import { SimpleTimer } from "./Components/SimpleTimer";
import { Todo } from "./Components/Todo";
function App() {
 const [showTimer,setShowTimer] = useState(true)
 
  return(<div>
    {showTimer?<SimpleTimer/>:null}
    <button onClick={()=>{
      setShowTimer(!showTimer)
    }}>{showTimer?'hide Timer':"show Timer"}</button>
    
      <br />
      <br />
      <Todo/>
  </div>)

}


export default App;
