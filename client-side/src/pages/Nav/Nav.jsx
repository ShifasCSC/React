import "./Nav.css"
import React from "react"
import { Link } from "react-router-dom"

function Nav(){
    return(
        <>
        <div className="bar">
                <div className="search">
                    <input type="text" id="search" placeholder="search"/>
                </div>
            <div className="filter">
                <select name="designation" id="filter">
                    <option value="mern">mern</option>
                    <option value="mern">full stack</option>
                    <option value="mern">python</option>
                    <option value="mern">ruby</option>
                </select>
            </div>
        
                <ul>
                    <li><Link to={"/"}>home</Link></li>
                    <li><span><Link to={"/Add"}>add</Link></span></li>
                </ul>
            </div>
        
        </>
    )
}
export default Nav