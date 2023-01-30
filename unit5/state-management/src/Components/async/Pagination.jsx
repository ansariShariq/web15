import { useState } from "react"
import { useEffect } from "react"

export const  Pagination = ({arr,itemsPerPage,handleDelete,handleStatus})=>{
    const [showArr,setShowArr] = useState([])
    const [offset,setOffset] = useState(0)
    const [pageNumber,setPageNumber] = useState(1)
    const [negative,setNegative] = useState(true)
    const [postive,setPositive] = useState(false)
    
    const handleOffset = (itemsChange)=>{
        if(offset+ itemsChange * itemsPerPage === 0){
            setNegative(true)
        }
        else{
            setNegative(false)
        }
        if(offset + itemsChange * itemsPerPage >= arr.length  - itemsChange * itemsPerPage ){
            setPositive(true)
        }
        else{
            setPositive(false)
            
        }
        setOffset(offset + itemsChange * itemsPerPage)
        setPageNumber(pageNumber + itemsChange)
    }
    useEffect(()=>{
        const endOffset = offset + itemsPerPage

        setShowArr(arr.slice(offset,endOffset))

    },[offset])
    
    return <div>
        <table id='container'>
       <thead>

       <tr>
           <   th>Id</  th>
           <   th>Title</   th>
           <   th>Status/Completed</  th>
       </tr>
       </thead>
       <tbody>
       {  
       showArr?.map(item=>{
           return <tr key={item.id}>
               <td>{item.id}</td> 
               <td>{item.title}</td>
               <td>{item.completed?'Yes':"No"}</td>
               <td><button onClick={()=>{handleDelete(item.id)} } >delete</button></td>
               <td><button onClick={()=>{handleStatus(item.id)} } >Toggle</button></td>

               
                
           </tr>  
       })
   }
       </tbody>
    </table>
    <button onClick={()=>handleOffset(-1)} disabled={negative}>-</button>{pageNumber}
    <button onClick={()=>handleOffset(+1)} disabled = {postive}>+</button>

    </div>
   
    
}