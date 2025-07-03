// src/pages/ContactUs.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-6 sm:p-8 bg-black text-white">
      <div className="max-w-3xl mx-auto bg-black/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="text-white mb-6 p-2 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
        >
          &#8592; Back
        </button>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Contact Us
        </h1>

        <div className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          <p>
            We would love to hear from you! Below are our contact details. Feel free to reach out with any questions or inquiries.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">Our Office Address</h2>
          <p className="text-base sm:text-lg">Rishi Tower, Ravi Colony, Serilingampally, 500019, Hyderabad</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">Mobile Number</h2>
          <p className="text-base sm:text-lg">+919160427763</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">Email Address</h2>
          <p className="text-base sm:text-lg">Chakrifitness@gmail.com</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">Developed by</h2>
          <p className="text-base sm:text-lg">Ramachandra Sri Harsha [ramachanrasriharsha1@gmail.com]</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
