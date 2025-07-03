// src/pages/Refund.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Refund = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-6 sm:p-8 bg-black text-white">
      <div className="max-w-3xl mx-auto bg-black/80 rounded-3xl p-6 sm:p-10 shadow-2xl transform transition-all hover:scale-105 hover:shadow-xl">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="text-base sm:text-lg text-gray-300 mb-4 hover:text-white transition-all"
        >
          &#8592; Back
        </button>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Cancellation/Refund Policy
        </h1>

        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          We understand that situations change. However, as of now, we do not offer any cancellation or refund policy for digital goods or services.
        </p>

        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          Please reach out to our support team if you have any concerns or questions regarding your purchase.
        </p>

        <p className="text-base sm:text-lg mt-6 leading-relaxed tracking-wide">
          <strong>Return Policy:</strong> We currently do not have a return policy for digital goods.
        </p>
      </div>
    </div>
  );
};

export default Refund;
