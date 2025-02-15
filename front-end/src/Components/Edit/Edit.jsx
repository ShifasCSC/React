import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { data, useNavigate, useParams } from 'react-router-dom'
import Api from '../Api'

function Edit() {
    const api=Api()
    const {_id}=useParams()
    const navigate=useNavigate()
    const [datas,setDatas]=useState({username:"",email:"",phone:"",designation:""})
    const [editing,setEditing]=useState(false)
    useEffect(()=>{
async function fetchUser(){
    try{
const info=await axios.get(`${api}getuser/${_id}`)
if(info.status===200){
    setDatas(info.data.user)
}
    }catch(error){
        console.log(error);
        
    }
}
fetchUser()
    },[_id])
    const handleChange=(e)=>{
        setDatas((pre)=>({...pre,[e.target.name]:e.target.value}))
    }
    const handleSave=async()=>{
        try{

        }catch(error){
            console.log(error);
            
        }
    }
    const handleEdit=async()=>{
try{
    const edit=await axios.put(`${api}edituser/${_id}`,datas)
    console.log(edit);
    if(edit.status===201){
        alert(edit.data.msg)
        navigate("/")
        setEditing(false)

    }
    

}catch(error){
    console.log(error);
    
}

    }
  return (
    <div className="input">
    
        <table>
            <tbody>
                <tr>
                    <td><label htmlFor="username">Name:</label></td>
                </tr>
                <tr>
                    <td><input type="text" id='username' name='username' onChange={handleChange} value={datas.username} readOnly={!editing} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="email">Email:</label></td>
                </tr>
                <tr>
                    <td><input type="text" id='email' name='email' onChange={handleChange} value={datas.email} readOnly={!editing} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="phone">Phone:</label></td>
                </tr>
                <tr>
                    <td><input type="text" id='phone' name='phone' onChange={handleChange} value={datas.phone} readOnly={!editing} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="designation">Designation:</label></td>
                </tr>
                <tr>
                    <td><input type="text" id='designation' name='designation' onChange={handleChange} value={datas.designation} readOnly={!editing} /></td>
                </tr>
                <tr>
                    <td>
                  <button onClick={editing?handleEdit:()=>setEditing(true)}>{editing?"save":"edit"}</button>
                    </td>
                </tr>
            </tbody>
        </table>
</div>
  )
}

export default Edit