import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

const Nav = ({setState}) => {
     return (
    <div className="nav">
    <div className="left">
    <h2>My UserDetails</h2>
    </div>
    <div className="right">
    <ul className="list">
    <li><input type="text" placeholder="search" onChange={(e)=>setState(e.target.value)}/></li>
     <li><Link to={"/Details"}>user</Link></li>
    </ul>
    </div>
    </div>
)
}
export default Nav