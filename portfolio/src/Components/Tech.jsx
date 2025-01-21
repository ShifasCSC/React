import React from 'react'
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { RiBootstrapLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
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
    <div  id='tech' className='border-b mt-20 border-neutral-800'>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className='flex justify-center items-center flex-wrap m-2 p-3'>
        <motion.div 
        variants={iconVarients(1)}
        initial="initial"
        animate="animate"

        className='rounded-2xl border-4 m-2 p-3'>
            <SiMongodb className='text-7xl bg-white rounded-full text-green-800'/>
        </motion.div>
        <motion.div 
        variants={iconVarients(1.20)}
        initial="initial"
        animate="animate"

        className='rounded-2xl border-4 m-2 p-1'>
            <SiExpress className='text-7xl bg-white m-2 p-2 rounded'/>
        </motion.div>
        <motion.div 
        variants={iconVarients(1.28)}
        initial="initial"
        animate="animate"

        className='rounded-2xl border-4 m-2 p-3'>
            <FaCss3 className='text-7xl bg-sky-700 rounded text-white'/>
        </motion.div>

        <motion.div 
        variants={iconVarients(1.18)}
        initial="initial"
        animate="animate"

        className='rounded-2xl border-4 m-2 p-3'>
            <FaHtml5 className='text-7xl bg-orange-700 rounded text-black'/>
        </motion.div>

        <motion.div 
        variants={iconVarients(1.8)}
        initial="initial"
        animate="animate"

        className='rounded-2xl border-4 m-2 p-3'>
            <FaReact className='text-7xl bg-slate-700 rounded text-cyan-500'/>
        </motion.div>

        {/* <motion.div 
        variants={iconVarients(1.6)}
        initial="initial"
        animate="animate"

        className='rounded-2xl border-4 m-5 p-3'>
            <SiVite className='text-7xl rounded bg-purple-700  p-2 text-center text-yellow-500'/>
        </motion.div> */}


        <motion.div 
        variants={iconVarients(1)}
        initial="initial"
        animate="animate"

        className='rounded-2xl border-4 m-2 p-3'>
            <FaNodeJs className='text-7xl bg-white rounded text-green-700'/>
        </motion.div>

        <motion.div 
        variants={iconVarients(1.3)}
        initial="initial"
        animate="animate"

        className='rounded-2xl border-4 m-2 p-3'>
            <RiTailwindCssFill className='text-7xl text-sky-600'/>
        </motion.div>
        <motion.div 
        variants={iconVarients(1)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 m-2 p-3'>
            <FaSass className='text-7xl bg-white p-2 text-center text-pink-800'/>
        </motion.div>

        <motion.div 
        variants={iconVarients(1.3)}
        initial="initial"
        animate="animate"

        className='rounded-2xl border-4 m-2 p-3'>
            <RiBootstrapLine className='text-7xl rounded bg-purple-700  p-2 text-center text-white'/>
        </motion.div>
       
        </motion.div>

    </div>
  )
}

export default Tech