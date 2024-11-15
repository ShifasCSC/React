import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Nav({setElement}){
  console.log(setElement);
  
return(
  <div className="nav">
    <input type="text" placeholder="search" onChange={(e)=>setElement(e.target.value)} />
    <p><Link to={"/details"}>details</Link></p>
  </div>  
)
}
export default Nav