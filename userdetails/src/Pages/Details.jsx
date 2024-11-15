import React, { useEffect, useState } from "react";
import './Details.css'
import { Link, useParams } from "react-router-dom";

function Details(){
    const {id}=useParams();
    
    let[prods,setProds]=useState([])
    useEffect(()=>{
        getProduct()
    },[])
let getProduct=async()=>{
    try{
   const res=await fetch(`https://dummyjson.com/products/:${id}`)

    }catch(error){
        console.log(error);
        
    }
}

return(
    <>
    <Link to={"/"}>Home</Link>
    <div className="main">
        
        <div className="detail">
            <h3>middileName</h3>
            <p>address</p>
        </div>
    </div>
    </>
)
}
export default Details