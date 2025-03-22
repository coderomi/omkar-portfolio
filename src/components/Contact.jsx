import React from 'react';

const Contact = () => {
  return (
    <div className="mx-auto w-full min-h-[60vh] px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black" id="contact">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-center drop-shadow-lg">
        Message Me
      </h1>

      <form
        action="https://formsubmit.co/sontakkeomkar40@gmail.com"
        method="POST"
        className="mt-8 w-full max-w-md sm:max-w-lg bg-gray-900 bg-opacity-80 backdrop-blur-lg p-6 rounded-lg shadow-2xl border border-gray-800 transition-all duration-300 hover:shadow-blue-500/50"
      >
        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-300 text-sm sm:text-base font-semibold mb-2">Your Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 text-black bg-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-300 text-sm sm:text-base font-semibold mb-2">Your Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 text-black bg-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            placeholder="Enter your email"
          />
        </div>

        {/* Mobile Number (Optional) */}
        <div className="mb-4">
          <label className="block text-gray-300 text-sm sm:text-base font-semibold mb-2">Mobile Number (Optional)</label>
          <input
            type="tel"
            name="mobile"
            className="w-full px-4 py-2 text-black bg-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            placeholder="Enter your mobile number"
          />
        </div>

        {/* Message Input */}
        <div className="mb-4">
          <label className="block text-gray-300 text-sm sm:text-base font-semibold mb-2">Your Message</label>
          <textarea
            name="message"
            required
            rows="4"
            className="w-full px-4 py-2 text-black bg-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        {/* No Activation, No Redirects, Just Send */}
        <input type="hidden" name="_captcha" value="false" />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-6 py-2 rounded-md font-semibold shadow-lg hover:bg-blue-700 hover:shadow-blue-500 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
