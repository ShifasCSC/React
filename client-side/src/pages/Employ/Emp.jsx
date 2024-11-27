import React, { useEffect, useState } from "react"
import "./Emp.css"
import { useParams,Link, useNavigate } from "react-router-dom"



function Emp(){
    const {_id}=useParams()
    const navigate =useNavigate()
    const [arr,setArr]=useState({})
    useEffect(()=>{
       empData()
    },[])
    const empData=async()=>{
        const res=await fetch(`http://localhost:3001/api/displayemp/${_id}`)
        const data=await res.json()
        setArr({...data})
        
    }
    const deleteEmp=async()=>{
        const res=await fetch(`http://localhost:3001/api/deleteemp/${_id}`,{
            method:"DELETE"
        }).then(async(res)=>{
            if(res.status==200){
             const data=await res.json()
             alert(data.msg)   
             navigate('/')
            }else{
                alert("data cannot delete")
            }
        }).catch((error)=>{
            console.log(error);
            
        })
    }
    return(
        <>
        <div className="main">
          <form className="for">
            <table>
                <tbody>
                    <tr>
                        <td><div className="imagee">
                            <img src={arr.profile} alt="" /></div></td>
                            <td><h1 style={{backgroundColor:"bisque",textAlign:"center",borderRadius:"10px", marginTop:"-30px"}}>{arr.name}</h1></td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" name="name" value={arr.name}  /></td>
                    </tr>
                    <tr>
                <td>gender:</td>
                <td>
                    <input type="radio" checked={arr.gender==="male"} readOnly value="male"/><span>male</span>
                    <input type="radio" checked={arr.gender==="female"} readOnly value="female"/><span>female</span>
                    <input type="radio" checked={arr.gender==="other"} readOnly value="other"/><span>other</span>
                </td>
            </tr>
            <tr>
                <td>age:</td>
                <td>{arr.age}</td>
            </tr>
            <tr>
                <td>email:</td>
                <td>{arr.email}</td>
            </tr>
            <tr>
                <td>place:</td>
                <td>{arr.place}</td>
            </tr>
            <tr>
                <td>phone:</td>
                <td>{arr.phone}</td>
            </tr>
            <tr>
                <td>experience:</td>
                <td>{arr.experience}</td>
            </tr>
            <tr>
                <td>designation:</td>
                <td>
                    <select name="designation" id="desig">
                        <option value="{dat.designation}">{arr.designation}</option>
                        <option value="mern">mern</option>
                        <option value="python">python</option>
                        <option value="flutter">flutter</option>
                        <option value="andriod">andriod</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>salary:</td>
                <td>{arr.salary}</td>
            </tr>
           
            <tr>
                <td><Link to={`/Edit/${_id}`}><input type="submit" id="edit" value="edit" className="edit" /></Link></td>
                <td><input type="submit" onClick={deleteEmp} id="delete" value="delete" className="delete" /></td>
            </tr>
                </tbody>
            </table>
          </form>
        </div>
        </>
    )
}
export default Emp;