import { useEffect, useState } from "react"

export const SimpleTimer = ()=>{
    const [initial,setInitial] = useState(0)
    const [final,setFinal]  = useState(50)
   
    let id 
    const timer = ()=>{
       console.log('inside timer')
        id = setInterval(()=>{
           setInitial((prev)=>{
               if(prev >= final){
                   clearInterval(id)
                   return prev
               }
               return prev + 1
           })
       },300)
       
   }
    useEffect(()=>{
        
       
        timer()
        return()=>{//cleanup funciton call
            // setInitial(124)
            clearInterval(id)
        }
    },[initial,final])
    
    return <div>
        <input type="text"  placeholder="add from where counter should start" onChange={(e)=>{
            setInitial(+e.target.value)
        }}/> 
        <input type="text"  placeholder="add from where counter should start" onChange={(e)=>{
            setFinal(+e.target.value)
        }}/>
        <br />
        <button onClick={()=>{
            timer()
        }}>start</button>
        <h1>Timer starts   {initial}</h1>
    </div>
}