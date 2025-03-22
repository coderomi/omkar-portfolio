import React from 'react';
import { motion } from 'framer-motion';
import {
  BiLogoAws, BiLogoCss3, BiLogoGithub, BiLogoHtml5, BiLogoLinkedin, BiLogoMongodb,
  BiLogoReact, BiLogoYoutube, BiLogoJava, BiLogoPython, BiLogoJavascript, BiLogoPhp
} from 'react-icons/bi';
import image from '/BACK-01.jpeg';

const About = () => {
  return (
    <div className="mx-auto max-w-6xl w-full min-h-screen p-4 md:p-8 lg:p-28 flex items-center justify-center" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col-reverse items-center justify-center md:flex-row gap-8 md:gap-16 lg:gap-24"
      >
        {/* Left Section - Text & Social Links */}
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
            I am a dedicated web developer with expertise in HTML5, CSS3, JavaScript, ReactJS. 
            I have experience in backend development with Java, Node.js, and PHP, along with database 
            management using MySQL and MongoDB. My projects include an AI-based image generator, 
            a department website, and an event management system. I am committed to continuous learning and professional growth.
          </p>

          {/* ✅ Social Media Links */}
          <div className="flex gap-5 mt-3">
            <a href="http://github.com/coderomi" target="_blank" rel="noopener noreferrer">
              <BiLogoGithub className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-indigo-500 hover:rotate-12 transition-all duration-300 ease-in-out" />
            </a>
            <a href="https://www.linkedin.com/in/omkar-sontakke-262297224" target="_blank" rel="noopener noreferrer">
              <BiLogoLinkedin className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-indigo-500 hover:rotate-12 transition-all duration-300 ease-in-out" />
            </a>
            <a href="https://www.youtube.com/@omkarsontakke4005" target="_blank" rel="noopener noreferrer">
              <BiLogoYoutube className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-indigo-500 hover:rotate-12 transition-all duration-300 ease-in-out" />
            </a>
          </div>
          <div className="flex space-x-4">
  {/* ✅ View Resume (JPG) */}
  <a 
    href="/omkar-portfolio/Omkar_resume.jpg"  // Adjust path based on your setup
    target="_blank" 
    rel="noopener noreferrer"
    className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 text-center"
  >
    🖼️ View Resume
  </a>

  {/* ✅ Download Resume (PDF) */}
  <button
    onClick={() => {
      const link = document.createElement("a");
      link.href = "/omkar-portfolio/Omkar_resume.pdf"; // Adjust path based on your setup
      link.download = "Omkar_Sontakke_Resume.pdf"; // Forces download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }}
    className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
  >
    ⬇️ Download Resume
  </button>
</div>







          {/* ✅ Programming Languages */}
          <div className="mt-5">
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Technologies & Skills</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <div className="flex flex-col items-center">
                <BiLogoHtml5 className="text-4xl text-orange-500 hover:scale-110 transition-all duration-300" />
                <span className="text-sm text-gray-300">HTML5</span>
              </div>
              <div className="flex flex-col items-center">
                <BiLogoCss3 className="text-4xl text-blue-500 hover:scale-110 transition-all duration-300" />
                <span className="text-sm text-gray-300">CSS3</span>
              </div>
              <div className="flex flex-col items-center">
                <BiLogoJavascript className="text-4xl text-yellow-400 hover:scale-110 transition-all duration-300" />
                <span className="text-sm text-gray-300">JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <BiLogoPhp className="text-4xl text-indigo-500 hover:scale-110 transition-all duration-300" />
                <span className="text-sm text-gray-300">PHP</span>
              </div>
              <div className="flex flex-col items-center">
                <BiLogoJava className="text-4xl text-red-500 hover:scale-110 transition-all duration-300" />
                <span className="text-sm text-gray-300">Java</span>
              </div>
              <div className="flex flex-col items-center">
                <BiLogoPython className="text-4xl text-blue-400 hover:scale-110 transition-all duration-300" />
                <span className="text-sm text-gray-300">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <BiLogoReact className="text-4xl text-blue-400 hover:scale-110 transition-all duration-300" />
                <span className="text-sm text-gray-300">React</span>
              </div>
              <div className="flex flex-col items-center">
                <BiLogoMongodb className="text-4xl text-green-500 hover:scale-110 transition-all duration-300" />
                <span className="text-sm text-gray-300">MongoDB</span>
              </div>
              <div className="flex flex-col items-center">
                <BiLogoAws className="text-4xl text-yellow-500 hover:scale-110 transition-all duration-300" />
                <span className="text-sm text-gray-300">AWS</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ✅ Profile Image */}
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
