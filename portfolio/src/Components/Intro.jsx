import React from 'react'
import {motion} from "framer-motion"

function Intro() {
    const handleScrollDown = () => {
        const nextSection = document.getElementById("next-section");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <div id='intro' >
         <div className="text text-center mt-52">
            <motion.h1 id='name' initial={{x:-100,opacity:0}} animate={{ x: 120,opacity:1,transition: { duration:2.100,delay:1 }}} className='text-transparent me-60 sm:text-4xl bg-gradient-to-r from-purple-600 via-slate-500 to-rose-600 tracking-tight bg-clip-text hover:subpixel-antialiased  leading-relaxed xl:text-7xl md:text-5xl'>
              Hello, I'm Shifas c.s
            </motion.h1>
            <motion.h2 id='name1' initial={{x:100,opacity:0}} animate={{ x: -5,opacity:1,transition: { duration:1.100,delay:1 }}} className='pt-3 subpixel-antialiased text-slate-300 sm:text-4xl xl:text-7xl md:text-5xl'>
              I'm a full-stack developer
            </motion.h2>
            <button
            onClick={handleScrollDown}
              className='text-white mt-10 outline outline-white md:outline-offset-8 rounded sm:p-2 md:p-3 md:px-6 md:font-semibold sm:text-sm md:text-2xl hover:cursor-cell hover:-translate-y-1 hover:scale-110 transition ease-in-out hover:delay-250 hover:rounded-full hover:bg-white hover:text-black mb-10 '>
              View More
            </button>
          </div>
    </div>
  )
}

export default Intro