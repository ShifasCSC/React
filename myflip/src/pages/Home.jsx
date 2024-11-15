import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css"

function Home({search}){
let[prod,SetProd]=useState([])
let[cate,SetCate]=useState([])
let [filter,SetFilter]=useState("")
useEffect(()=>{
porduct()
},[])
const porduct=async()=>{
 const res=await fetch("https://dummyjson.com/products")
 const data=await res.json()
 SetProd(data.products)
 console.log(data);

 const cat=await fetch("https://dummyjson.com/products/categories")
 const catData=await cat.json()
 SetCate(catData)
 console.log(catData);
 
 
}
    return(
        <>
        <div className="section">
            <section onClick={()=>SetFilter("")}>all</section>
            {
                cate.map((dat)=><section onClick={()=>SetFilter(dat.name)}>{dat.name}</section>)
            }
        </div>
        <div className="cards">
           {prod.filter((sear)=>sear.title.toLowerCase().includes(search.toLowerCase())).filter((fil)=>fil.category.toLowerCase().includes(filter.toLowerCase())).map((dt)=>{return( <div className="card">
                <div className="image">
                    <img src={dt.thumbnail} alt="" />
                </div>
                <h3>{dt.title}</h3>
                <p>{dt.price}</p>
            </div>)})}
        </div>
        </>
    )
}
export default Home