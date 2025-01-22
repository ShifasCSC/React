import React from "react";
import "./Nav.scss"

const Nav=()=>{
  return(
    <>
   <div id="nav" className="nav items-center bg-gradient-to-r from-purple-500 via-slate-300 to-pink-500 ">
  <div className="left">
    <span className="bg-gradient-to-r from-purple-200 via-slate-900 to-pink-100 bg-clip-text text-4xl text-transparent">
      <h1>CS</h1>
    </span>
  </div>
  <div className="right">
    <ul className="list flex space-x-10 px-10 my-2  text-black">
      <li className="hover:underline underline-offset-4 decoration-2 decoration-white hover:delay-150 hover:scale-110">
        <a href="#">Home</a>
      </li>
      <li className="hover:underline underline-offset-4 decoration-2 decoration-white hover:delay-150 hover:scale-110">
        <a href="#next-section">About</a>
      </li>
      <li className="hover:underline underline-offset-4 decoration-2 decoration-white hover:delay-150 hover:scale-110">
        <a href="#project">Projects</a>
      </li>
      <li className="hover:underline underline-offset-4 decoration-2 decoration-white hover:delay-150 hover:scale-110">
        <a href="#contact">Contacts</a>
      </li>
    </ul>
  </div>
</div>

    </>
  )  
}
export default Nav