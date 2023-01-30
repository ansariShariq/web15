// import { useState } from "react";
import { useState } from "react";
import { SimpleTimer } from "./Components/SimpleTimer";
import { Todo } from "./Components/Todo";
import {Fetch} from './Components/async/Fetch'
function App() {
//  const [showTimer,setShowTimer] = useState(true)
 
  return(<div>
    {/* {showTimer?<SimpleTimer/>:null}
    <button onClick={()=>{
      setShowTimer(!showTimer)
    }}>{showTimer?'hide Timer':"show Timer"}</button> */}
    <h1>Hello</h1>
      <br />
      <br />
      {/* <Fetch /> */}
      <Todo/>
  </div>)

}


export default App;
