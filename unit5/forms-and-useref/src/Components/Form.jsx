import {useState} from 'react'
export const Form = ()=>{
    const initial = {
        username:'',
        age:""
    }
    const [formData,setFormData] =useState(initial)
    const handleChange = (e)=>
    {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
        
        // console.log(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        fetch(`http://localhost:8080/users`,{
            method:"POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body:JSON.stringify(formData)
        })
        setFormData(initial)
    }
    return <form onSubmit={handleSubmit} >

        <input onChange={handleChange} type="text" name="username" placeholder="username" value={formData.username} />
        <input onChange={handleChange} type="number" name="age" placeholder="age"  value={formData.age}/>
        <input type='submit' />


    </form>
}