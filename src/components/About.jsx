import React from 'react';
import { motion } from 'framer-motion';
import { BiLogoGithub, BiLogoLinkedin, BiLogoYoutube } from 'react-icons/bi';
import image from '../../public/BACK-01.jpeg';

const About = () => {
  return (
    <div
      className="mx-auto max-w-6xl w-full min-h-screen p-4 md:p-8 lg:p-28 flex items-center justify-center"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col-reverse items-center justify-center md:flex-row gap-8 md:gap-16 lg:gap-24"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center md:items-start justify-center gap-3"
        >
          <span className="px-2 py-1 text-white bg-zinc-800 rounded-full text-xs md:text-sm">
            Open to hire
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center md:text-left bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-transparent bg-clip-text">
   Omkar Sontakke
</h1>


          <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-center md:text-left bg-gradient-to-r from-blue-400 via-sky-400 to-blue-600 text-transparent bg-clip-text">
   Web Developer & Computer Engineering Student
</h3>


          <p className="text-sm text-slate-400 text-center md:text-left">
          I am a dedicated web developer with expertise in HTML5, CSS3, JavaScript, ReactJS. I have experience in backend development with Java, Node.js, and PHP, along with database management using MySQL and MongoDB. My projects include an AI-based image generator, a department website, and an event management system. I am committed to continuous learning and professional growth.
          </p>

          <div className="flex gap-5 mt-3">
            <a href="http://github.com/coderomi" target="_blank" rel="noopener noreferrer">
              <BiLogoGithub
                className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-indigo-500 hover:rotate-12 transition-all duration-300 ease-in-out"
                aria-label="GitHub"
              />
            </a>
            <a href="https://www.linkedin.com/in/omkar-sontakke-262297224" target="_blank" rel="noopener noreferrer">
              <BiLogoLinkedin
                className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-indigo-500 hover:rotate-12 transition-all duration-300 ease-in-out"
                aria-label="LinkedIn"
              />
            </a>
            <a href="https://www.youtube.com/@omkarsontakke4005" target="_blank" rel="noopener noreferrer">
              <BiLogoYoutube
                className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-indigo-500 hover:rotate-12 transition-all duration-300 ease-in-out"
                aria-label="YouTube"
              />
            </a>
          </div>
        </motion.div>
        <img
          src={image}
          className="w-[300px] md:w-[400px] rounded-full hover:shadow-2xl hover:shadow-blue-800 hover:scale-105 hover:rotate-2 transition-all duration-500"
          alt="Omkar Sontakke"
        />
      </motion.div>
    </div>
  );
};

export default About;
