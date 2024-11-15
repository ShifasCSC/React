import { useState,useEffect } from "react";
import './Home.css'
import React from "react";
import { Link } from "react-router-dom";

function Home({search}){
    let [arr,setArr]=useState([])
    let [cate,setCate]=useState([])
    let [filter,setFilter]=useState("")
    useEffect(()=>{
      getData()
    },[])
    const getData=async()=>{
    try{
      const res=await fetch('https://dummyjson.com/products')
      const data=await res.json()
      console.log(data);
      setArr(data.products)

      const cat=await fetch('https://dummyjson.com/products/categories')
      const catData=await cat.json()
      setCate(catData)
      console.log(catData);
      
      
    }catch(error){
      console.log(error);
      
    }
    console.log(filter);
     
  }
  
  return (
    <>
        
        <div className="section">
          <section onClick={()=>setFilter("")} >All</section>
          {
            cate.map((ct,index)=><section key={index} onClick={()=>setFilter(ct.name)} >{ct.name}</section>)
          }
        </div>
          <div className="cards">
            {arr.filter((sea)=>sea.title.toLowerCase().includes(search.toLowerCase())).filter((dt)=>dt.category.toLowerCase().includes(filter.toLowerCase())).map((product)=>(<Link to={`/details/:${product.id}`}>
              <div className="card">
                <div className="image">
                  <img src={product.thumbnail} alt="" />
                </div>
                <h2>{product.title} {product.categories}</h2>
                <br />
                <p>Price: {product.price}</p><br />
                <p>Stock: {product.stock}</p>
              </div></Link>
            ))}
          </div>
          
        </>
      );

}
export default Home