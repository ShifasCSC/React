import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Api from "../Api"
import axios from 'axios'
function Home() {
    const api=Api()
    const [data,setData]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try{
             const res=await fetch(`${api}getusers`) 
             const details=await res.json() 
             if(res.status===200){
                setData(details.user)
             }
            }catch(error){
                console.log(error);
            }
        }
        fetchData()
    },[])

    const handleDelete=async(_id)=>{
try{
    
const del=await axios.delete(`${api}deleteuser/${_id}`)
console.log(del);

if(del.status===200){
    setData(remove=>remove.filter(data=>data._id!==_id))
    alert(del.data.msg)
}
}catch(error){
console.log(error);

}
    }
  return (
    <div className="main">
        <form>
            <Link to={"/create"}><button>Add</button></Link>
            <table>
                <thead>
                    <tr>
                        <td>NAME</td>
                        <td>EMAIL</td>
                        <td>PHONE</td>
                        <td>DESIGNATION</td>
                        <td>BUTTONS</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index)=>(
                        <tr key={index}>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.designation}</td>
                            <td>
                                <Link to={`/edit/${item._id}`}><button>edit</button></Link>
                                <button onClick={()=>handleDelete(item._id)}>delete</button>
                            </td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </form>
    </div>
  )
}

export default Home