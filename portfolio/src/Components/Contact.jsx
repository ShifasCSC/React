import React from 'react'
import "./Contact.scss"
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";




function Contact() {
  return (
    <div id='contact'>
        <h1 className='text-4xl text-center text-gray-300 mt-40'>CONTACT</h1>
        <div className="con flex flex-col justify-center text-center flex-wrap items-center ">

        <div className='flex space-x-2 mt-20 trackling-tighter'>
          <MdLocationOn className='text-5xl text-white border border-3 border-white rounded p-2'/>
           <span className='text-white mt-3'>
            Chembrayoor House,Vellarakkad,Thrissur 
            </span>
          </div>


        <div className='flex space-x-2 mt-20 trackling-tighter'>
        <MdOutlineMail className='text-5xl text-white border border-3 border-white rounded p-2'/>
           <span className='text-white mt-3 pe-39'>
             sshifas333@gmail.com 
            </span>
          </div>

          <div className='flex space-x-2 mt-20 trackling-tighter'>
          <FaPhone className='text-5xl text-white border border-3 border-white rounded p-2'/>
           <span className='text-white mt-3'>
             6282887370
            </span>
          </div>
        
      
        </div>

        <div className="items ">
         <ul className='flex  mt-40 border-b animate-pulse border-b-1 border-purple-700  justify-center space-x-10'>
          <li><a href=""><FaInstagramSquare className='text-4xl animate-bounce  text-white rounded text-center m-2'/></a></li>
          <li><a href="https://github.com/ShifasCSC"><FaGithub className='text-4xl animate-bounce text-white text-center m-2'/></a></li>
          <li><a href="https://www.linkedin.com/in/shifas-cs-257174308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className='text-4xl text-white animate-bounce text-center m-2'/></a></li>
         </ul>
        </div>
        </div>
  )
}

export default Contact