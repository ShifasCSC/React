import { useNavigate } from "react-router-dom"
import "./Add.css"
import React, { useState } from "react"


function Add(){
    const navigate=useNavigate()
   const [emp,setEmp]=useState({
    name:"",age:"",gender:"",email:"",place:"",designation:"",experience:"",salary:"",phone:"",profile:""
   })
   const handleChange=(e)=>{
    console.log(e.target.name);
    console.log(e.target.value);
    setEmp((pre)=>({...pre,[e.target.name]:e.target.value}))
    
   }
   const handleSubmit=async(e)=>{
    e.preventDefault()
    const res=await fetch("http://localhost:3001/api/addemp",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(emp)
    })
     navigate('/')
    console.log(res);
    
}

 function convertBase64(file){
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader()
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result)
        }
        fileReader.onerror=()=>{
            reject(error)
        }
    })
 }
 
 const handleFile=async(e)=>{
    console.log(e.target.files[0]);
    const profile=await convertBase64(e.target.files[0])
    setEmp((pre)=>({...pre,profile:profile}))
 }
console.log(emp);
    return(
        <>
        <div className="newcontain">
        <div className="contain">
        <form className="frm">
            <h1 id="head">Employ Form</h1>
           <table>
            <tbody>
            <tr>
                <td>Name:</td>
                <td><input type="text" onChange={handleChange}  name="name" /></td>
            </tr>
            <tr>
                <td>gender:</td>
                <td>
                    <input type="radio" onChange={handleChange} name="gender" value="male"/><span>male</span>
                    <input type="radio" onChange={handleChange} name="gender" value="female"/><span>female</span>
                    <input type="radio" onChange={handleChange} name="gender" value="other"/><span>other</span>
                </td>
            </tr>
            <tr>
                <td>age:</td>
                <td><input type="text" onChange={handleChange} name="age" /></td>
            </tr>
            <tr>
                <td>email:</td>
                <td><input type="text" onChange={handleChange} name="email" /></td>
            </tr>
            <tr>
                <td>place:</td>
                <td><input type="text" onChange={handleChange} name="place" /></td>
            </tr>
            <tr>
                <td>phone:</td>
                <td><input type="text" onChange={handleChange} name="phone"/></td>
            </tr>
            <tr>
                <td>experience:</td>
                <td><input type="text" onChange={handleChange} name="experience" /></td>
            </tr>
            <tr>
                <td>designation:</td>
                <td>
                    <select name="designation" id="desig" onChange={handleChange}>
                        <option value="" name="designation" >select</option>
                        <option value="mern" onChange={handleChange} name="designation" >mern</option>
                        <option value="python" onChange={handleChange} name="designation">python</option>
                        <option value="flutter" onChange={handleChange} name="designation">flutter</option>
                        <option value="andriod" onChange={handleChange} name="designation">andriod</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>salary:</td>
                <td><input type="text" onChange={handleChange} name="salary" /></td>
            </tr>
            <tr>
                <td>profile:</td>
                <td><input type="file" id="profile" onChange={handleFile}  name="profile" className="profile" /></td>
            </tr>
            <tr>
                <td><input type="submit" value="add" onClick={handleSubmit} className="button" /></td>
            </tr>

            </tbody>
           </table>
           </form>
        </div>
        </div>

        </>
    )
}
export default Add