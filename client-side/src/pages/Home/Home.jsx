import "./Home.css"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Home(){
    const [data,setData]=useState([])

    useEffect(()=>{
       empData()
    },[])

    const empData=async()=>{
     const res=await fetch("http://localhost:3001/api/displayemps")
     const emp=await res.json()
     setData(emp)
     console.log(emp);
     
    }
return(
    <>
    <div className="main">
        <div className="cards">
           {data.map((emps)=>( <Link  key={emps._id} to={`/Emp/${emps._id}`}>
            <div className="card">
                <div className="image">
                    <img src={emps.profile} alt="" />
                    <h2>{emps.name}</h2>
                </div>
                <div className="details">
                    <br />
                    <h4>age:{emps.age}</h4>
                    <br />
                    <h3 id="des">{emps.designation}</h3>
                </div>
            </div>
            </Link>))}
        </div>
        </div>
        </>
)
}
export default Home