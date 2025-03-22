import React from 'react';

const Contact = () => {
  return (
    <div 
      className="relative mx-auto w-full min-h-[60vh] px-4 sm:px-6 lg:px-8 text-white flex flex-col items-center justify-center overflow-hidden" 
      id="contact"
    >
      {/* Intense Glowing Lights (Centered and Balanced) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-400 opacity-80 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-blue-500 opacity-80 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-sky-400 opacity-80 blur-[80px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/2 right-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-blue-600 opacity-80 blur-[80px] rounded-full pointer-events-none"></div>
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-center">
        Message Me
      </h1>

      <form
        action="https://formsubmit.co/sontakkeomkar40@gmail.com"
        method="POST"
        className="relative mt-8 w-full max-w-lg bg-gray-900 p-6 rounded-lg shadow-2xl shadow-blue-800 scale-105"
      >
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2">Your Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2">Your Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Mobile Number (Optional) */}
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2">Mobile Number (Optional)</label>
          <input
            type="tel"
            name="mobile"
            className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your mobile number"
          />
        </div>

        {/* Message Input */}
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2">Your Message</label>
          <textarea
            name="message"
            required
            rows="4"
            className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        {/* No Captcha */}
        <input type="hidden" name="_captcha" value="false" />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
