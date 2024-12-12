import React from 'react'
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { animate } from 'framer-motion';
import { motion } from 'framer-motion';
const iconVarients=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{duration:duration,ease:"linear",repeat:Infinity,repeatType:"reverse",},
    },
})
const Tech=()=>{
  return (
    <div id='tech' className='border-b mt-40 border-neutral-800'>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className='flex justify-center items-center flex-wrap m-5'>
        <motion.div 
        variants={iconVarients(1)}
        initial="initial"
        animate="animate"

        className='rounded-2xl border-4 m-5 p-3'>
            <SiMongodb className='text-7xl bg-white rounded-full text-green-800'/>
        </motion.div>
        <motion.div 
        variants={iconVarients(1.10)}
        initial="initial"
        animate="animate"

        className='rounded-2xl border-4 mx-5 p-3'>
            <SiExpress className='text-7xl bg-white p-2 rounded'/>
        </motion.div>
        <motion.div 
        variants={iconVarients(1.1)}
        initial="initial"
        animate="animate"

        className='rounded-2xl border-4 m-5 p-3'>
            <FaReact className='text-7xl bg-slate-700 rounded text-cyan-500'/>
        </motion.div>
        <motion.div 
        variants={iconVarients(1)}
        initial="initial"
        animate="animate"

        className='rounded-2xl border-4 m-5 p-3'>
            <FaNodeJs className='text-7xl bg-white rounded text-green-700'/>
        </motion.div>
        <motion.div 
        variants={iconVarients(1.3)}
        initial="initial"
        animate="animate"

        className='rounded-2xl border-4 m-5 p-3'>
            <RiTailwindCssFill className='text-7xl text-sky-600'/>
        </motion.div>
        <motion.div 
        variants={iconVarients(1)}
        initial="initial"
        animate="animate"

        className='rounded-2xl border-4 m-5 p-3'>
            <FaSass className='text-7xl bg-white p-2 text-center text-pink-800'/>
        </motion.div>
       
        </motion.div>

    </div>
  )
}

export default Tech