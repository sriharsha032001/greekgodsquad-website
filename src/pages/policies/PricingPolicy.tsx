// src/pages/PricingPolicy.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const PricingPolicy = () => {
  const navigate = useNavigate(); // useNavigate replaces useHistory

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="min-h-screen p-6 sm:p-8 bg-black text-white">
      <div className="max-w-3xl mx-auto bg-black/80 rounded-3xl p-6 sm:p-10 shadow-2xl transform transition-all hover:scale-105 hover:shadow-xl">
        
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="absolute top-4 sm:top-6 left-4 sm:left-6 text-gray-400 hover:text-white transition-all"
        >
          &larr; Back
        </button>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Pricing Policy
        </h1>

        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          Welcome to The Greek God Squad's Pricing Policy page. We believe in complete transparency regarding the prices for our services. 
          Our goal is to provide clear, concise, and understandable pricing information for all of our products and services.
        </p>

        <p className="text-base sm:text-lg mb-4 leading-relaxed tracking-wide">
          All prices are clearly mentioned on the website or app for each product or service. However, please note that the final price at checkout may vary depending on the content and services selected by the user. Any applicable taxes, shipping charges, or additional fees will be clearly displayed before checkout, unless stated otherwise.
        </p>

        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          We reserve the right to change the prices of our services at any time. However, any changes in pricing will not affect orders or services already placed or confirmed. By using our services, you agree to the prices as listed at the time of purchase.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          Fixed Pricing Agreement
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          For certain content and services, we offer fixed pricing plans. By subscribing to or purchasing such services, you agree to the fixed prices for the duration of your subscription or purchase.
        </p>

        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          We highly recommend reviewing our pricing details carefully before proceeding with any purchase or subscription. Your understanding and acceptance of our fixed pricing is essential for enjoying the full benefits of our offerings.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          Payment Methods
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          We accept various payment methods, including credit/debit cards and online payment systems like Razorpay. Please ensure that your payment method is up to date to avoid any interruptions in your service.
        </p>

        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          If you have any questions or concerns about our pricing policy, feel free to reach out to our support team at <span className="font-semibold text-gray-400">support@greekgodsquad.com</span>.
        </p>
      </div>
    </div>
  );
};

export default PricingPolicy;
