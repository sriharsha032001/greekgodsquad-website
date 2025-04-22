// src/pages/Shipping.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Goes back to the previous page
  };

  return (
    <div className="min-h-screen p-8 bg-black text-white">
      <div className="max-w-3xl mx-auto bg-black/80 rounded-3xl p-10 shadow-2xl transform transition-all hover:scale-105 hover:shadow-xl">
        <button
          onClick={handleBackClick}
          className="text-lg text-gray-300 mb-4 hover:text-white transition-all"
        >
          &#8592; Back
        </button>

        <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Shipping Policy
        </h1>

        <p className="text-lg mb-6 leading-relaxed tracking-wide">
          Welcome to The Greek God Squad's Shipping Policy page. As our services are entirely digital, there is no physical shipping involved.
        </p>

        <p className="text-lg mb-6 leading-relaxed tracking-wide">
          Once your payment is successfully processed, your access to the digital content or service will be granted instantly or within a few minutes, depending on the service. 
        </p>

        <p className="text-lg mb-6 leading-relaxed tracking-wide">
          Should you experience any delays or if you do not receive access within the expected time, please do not hesitate to reach out to our support team for assistance. 
        </p>

        <p className="text-lg mb-6 leading-relaxed tracking-wide">
          Thank you for choosing The Greek God Squad! We're here to ensure a seamless and digital experience for you.
        </p>
      </div>
    </div>
  );
};

export default Shipping;
