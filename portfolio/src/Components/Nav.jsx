import React from "react";
import "./Nav.scss"
const Nav=()=>{
  return(
    <>
    <div className="nav flex md:justify-between sm:justify-center items-center text-center">
             <div className="left">
              <span className=" bg-bg-gradient-to-r from-purple-500 to-pink-500 text-4xl tracking-tight text-transparent">CS</span>
            </div> 
            <div className="right">
              <ul className='list flex space-x-10 px-4 py-1 my-2 me-2 bg-white text-black '>
                <li id="li" className="hover:underline underline-offset-4 decoration-2 decoration-solid decoration-violet-400 hover:delay-150 hover:scale-110"><a href="#intro">Home</a></li>
                <li id="li" className="hover:underline underline-offset-4 decoration-2 decoration-solid decoration-violet-400 hover:delay-150 hover:scale-110"><a href="#next-section">About</a></li>
                <li id="li" className="hover:underline underline-offset-4 decoration-2 decoration-solid decoration-violet-400 hover:delay-150 hover:scale-110"><a href="#project">Projects</a></li>
                <li id="li" className="hover:underline underline-offset-4 decoration-2 decoration-solid decoration-violet-400 hover:delay-150 hover:scale-110"><a href="#contact">Contacts</a></li>
              </ul>
            </div>
          </div>
    </>
  )  
}
export default Nav