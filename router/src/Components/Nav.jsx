import React from "react";
import { Link } from "react-router-dom";
const Nav=()=>{
    return(
        <div style={{width:"100%",height:"80px",backgroundColor:"yellow"}}>
           <span><Link to={"/"}>home</Link></span>
           <span><Link to={"/about"}>about</Link></span>
        </div>
    )
}
export default Nav