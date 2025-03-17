import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const handleGetInTouch = () => {
    const recipient = 'sontakkeomkar40@gmail.com';
    const subject = encodeURIComponent('Inquiry from Website');
    const body = encodeURIComponent('Hello,\n\nI would like to get in touch regarding...');
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="mx-auto w-full min-h-[50vh] px-4 sm:px-6 lg:px-8 text-white flex flex-col items-center justify-center" id="contact">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-center"
      >
        Contact Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-gray-300 text-lg text-center max-w-2xl leading-relaxed mt-4"
      >
       Have a game-changing idea for a web or mobile project? Let’s build something exceptional with the latest technology and creativity! 🚀
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onClick={handleGetInTouch}
        className="relative overflow-hidden group bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 px-8 py-4 md:text-lg rounded-full font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-white mt-8"
      >
        <span className="relative z-10">Get in Touch</span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </motion.button>

      <footer className="w-full mt-16 border-t border-gray-800/30 p-10">
        <div className="text-gray-400 text-center text-sm sm:text-base hover:text-gray-300 transition-colors">
          © 2025 Omkar Sontakke | All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Contact;