
import { useState } from "react"
import { useEffect } from "react"
import { Pagination } from "./Pagination"
import  axios from "axios"
export const Fetch = ()=>{
    
    
    const [arr,setArr] = useState([])
    const itemsPerPage = 10
    const [todo,setTodo] = useState("")
    const handleSubmit = ()=>{
        const payload = {title:todo,completed:false}
        
        console.log(todo)
        axios({
            method:"post",
            url:"http://localhost:8000/ITEMS",
            data:{...payload}
        })
        console.log(arr)
        
    }
      const  handleDelete = async (id)=>{
        let res =await axios({
            method:"delete",
            url:`http://localhost:8000/ITEMS/${id}`

        })
        console.log(res.data)
        getData(arr,setArr)

    }
    const  handleStatus = async (id)=>{
        let res =await axios({
            method:"get",
            url:`http://localhost:8000/ITEMS/${id}`,
            

        })
        let changed = await axios({
            method:'patch',
            url:`http://localhost:8000/ITEMS/${id}`,
            data:{...res.data, 'completed':!res.data.completed}
           
        })
        getData(arr,setArr)
        console.log(res.data,changed)
    }

    useEffect(()=>{getData(arr,setArr)},[])
    // getData(setArr)
    return <div>
        <div>
            

            <input id='todoInput' type="text" onInput={(e)=>{setTodo(e.target.value)}} />
            <button onClick={handleSubmit} >Add</button>
            
            
        </div>
    {arr[0]!== undefined?<Pagination arr = {arr}itemsPerPage = {itemsPerPage} handleDelete = {handleDelete} handleStatus= {handleStatus} />:null}

</div>
    // return <Pagination itemsPerPage={5} arr = {arr} setArr = {setArr}/>
}

async function getData (arr,setArr){
    try{
        let res = await axios.get('http://localhost:8000/ITEMS')
        // let res = await fetch('https://jsonplaceholder.typicode.com/photos')
        res = res.data
        // https://jsonplaceholder.typicode.com/photos
    // console.log(res.data)
    // res =await res.json()
    // console.log(res.json())
    setArr([...res])
    console.log(res)
        
    }
    catch(err){
        console.log(err)
    }

}



