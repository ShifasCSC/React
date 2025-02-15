import axios from 'axios'
import React, { useState } from 'react'
import Api from '../Api'
import { useNavigate } from 'react-router-dom'

function Create() {
    const api=Api()
    const [detail,setDetail]=useState({
        username:"",email:"",phone:"",designation:""
    })
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const data=await axios.post(`${api}setuser`,detail)
       console.log(data);
       if(data.status===201){
        alert(data.data.msg)
        navigate("/")
       }
       
        }catch(error){
            console.log(error.response.data.msg);
            alert(error.response.data.msg)
        }
    }
    const handleInput=(e)=>{
        try{
setDetail((pre)=>({...pre,[e.target.name]:e.target.value}))
console.log(detail);

        }catch(error){
            console.log(error);
            
        }
    }
  return (
    <div className="input">
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td><label htmlFor="username">Name:</label></td>
                    </tr>
                    <tr>
                        <td><input type="text" id='username' name='username' onChange={handleInput} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">Email:</label></td>
                    </tr>
                    <tr>
                        <td><input type="text" id='email' name='email' onChange={handleInput} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="phone">Phone:</label></td>
                    </tr>
                    <tr>
                        <td><input type="text" id='phone' name='phone' onChange={handleInput} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="designation">Designation:</label></td>
                    </tr>
                    <tr>
                        <td><input type="text" id='designation' name='designation' onChange={handleInput} /></td>
                    </tr>
                    <tr>
                        <td><input type="submit" /></td>
                    </tr>
                </tbody>
            </table>
            </form>
    </div>
  )
}

export default Create