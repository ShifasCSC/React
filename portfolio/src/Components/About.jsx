import React from 'react'
import '../App.scss'
import { motion } from 'framer-motion'
function About() {
  return (
    <>
         {/* The Next Section to Scroll To  */}
      <div id="next-section" className=" mt-40 pb-2 ">
        <h2 className="text-4xl text-purple-300 text-center">ABOUT <span className='text-slate-200'>ME</span></h2>
        <div className='flex flex-wrap'>
          <motion.div whileInView={{opacity:1.100,delay:0,duration:0.5}} initial={{x:-120,opacity:0}} animate={{ x: 30,opacity:1,transition: { duration:1,delay:1 }}} className='w-full md:w-1/2  '>
          <div className='pic1 flex items-center justify-center'>
            <img src="halfmy.jpg" className='lg:ms-40 sm:me-90 xl:ms-60 2xl:ms-60 border border-white rounded-2xl mt-20' alt="" />
            {/* <span className='text-transparent bg-gradient-to-r from-gray-500 via-white to-sky-600 tracking-tight bg-clip-text hover:subpixel-antialiased  leading-relaxed text-7xl  text-5xl'></span> */}
          </div>
        </motion.div>
          <motion.div whileInView={{opacity:1,delay:0,duration:0.5}} initial={{x:120,opacity:0}} animate={{ x: -100,opacity:1,transition:{ duration:1.2,delay:1 }}} className='w-full md:w-1/2'>
          <div className='flex justify-center  md:justify-start'>
            <p  className='my-2 md:max-w-sm sm:max-w-sm sm:ms-40 py-8 w-70 text-white tracking-tighter'>
              I'm a Mern Stack developer with experience in creating dynamic and efficient web applications. I specialize in using JavaScript, Node.js and Express.I leverage modern web development practices and RESTful APIs to deliver high-quality applications. I am always eager to learn new technologies and improve my skills, striving to create intuitive and impactful web experiences.
            </p>
            </div>
      </motion.div>
            </div>
          </div>
    </>
  )
}

export default About