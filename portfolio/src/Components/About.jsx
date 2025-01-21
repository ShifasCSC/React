import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="next-section" className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center">
      {/* Header */}
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-3xl md:text-4xl lg:text-5xl text-purple-300 text-center mb-12"
      >
        <span>ABOUT </span>
        <span className="text-slate-200">ME</span>
      </motion.h2>

      {/* Content Container */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Image Section */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative w-full max-w-md lg:max-w-lg">
            <img 
              src="halfmy.jpg" 
              alt="Profile"
              className=" w-80 border border-white mt-20  rounded-full border border-white shadow-lg"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center lg:justify-start"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="text-white text-base md:text-lg max-w-2xl px-4 lg:px-0 leading-relaxed">
            I'm a MERN Stack developer with experience in creating dynamic and efficient web applications. 
            I specialize in using JavaScript, Node.js and Express. I leverage modern web development 
            practices and RESTful APIs to deliver high-quality applications. I am always eager to learn 
            new technologies and improve my skills, striving to create intuitive and impactful web experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;