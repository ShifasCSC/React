import React from 'react';
import './Project.scss'; // For custom styles, including animations
import { motion } from 'framer-motion';
function Project() {
  return (
    <div id='project' className='mt-40'>
      <motion.h1
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
       transition={{duration:1.5}}
        className='text-purple-300 text-center mb-10 text-4xl'>
        <span className='text-slate-100 text-4xl'>MY </span>PROJECTS
      </motion.h1>
      <div className='flex flex-wrap  m-5 items-center justify-center'>
        {/* Project 1 */}
        <div className='project-card'>
          <img src="/3928469.jpg" alt="Project 1" className='project-image'/>
          <div className="content text-center text-white">
            <h1 className='text-xl underline-offset-4 decoration-2 decoration-solid hover:underline '>Whether Forecast</h1>
            <p className='text-sm p-3 hover:text-transparent bg-gradient-to-r from-purple-600 via-slate-500 to-rose-600 tracking-tight bg-clip-text'>Weather Forecast Web Application is a tool that provides real-time weather data, including wind speed, temperature, and humidity, for any given city. Built with JavaScript, the app uses RESTful weather APIs to deliver accurate and up-to-date weather information, offering a seamless and efficient user experience.</p>
          </div>
        </div>
        
        {/* Project 2 */}
        <div className='project-card hover:delay-150'>
          <img src="/heart.jpg" alt="Project 2" className='project-image'/>
          <div className="content text-center text-white">
            <h1 className='text-xl underline-offset-4 decoration-2 decoration-solid hover:underline '>Blood Bank</h1>
            <p className=' hover:text-transparent bg-gradient-to-r from-purple-600 via-slate-500 to-rose-600 tracking-tight bg-clip-text'>Blood Bank System is a web application build with Node.js as it back-end.This apllication   efficiently manages and displays available blood groups and donor information,this enables seamless connections between blood banks and donors for timely donations.</p>
          </div>
        </div>
        
        {/* Project 3 */}
        <div className='project-card'>
          <img src="/19728.jpg" alt="Project 3" className='project-image'/>
          <div className="content text-center text-white">
            <h1 className='text-xl underline-offset-4 decoration-2 decoration-solid hover:underline '>Employee Management System</h1>
            <p className='text-sm hover:text-transparent bg-gradient-to-r from-purple-600 via-slate-500 to-rose-600 tracking-tight bg-clip-text'>It is a web application built using HTML, CSS, JavaScript, Express, and MongoDB. This allow efficient management of employee data by enabling functionalities like adding, displaying, editing, and deleting employee records.It make simple for administrators to perform HR processes and improving data management.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;
