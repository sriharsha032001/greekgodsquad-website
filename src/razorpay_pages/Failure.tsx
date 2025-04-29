import React from "react";
import { useNavigate } from "react-router-dom";

const Failure = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <div className="flex flex-col items-center space-y-6">
        {/* Failure Icon */}
        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-red-500/20 border-2 border-red-500 animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-red-500">Payment Failed</h1>
        <p className="text-gray-400 text-center max-w-md">
          Oops! Something went wrong with your payment. Please try again or contact support if the issue persists.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 mt-6">
          <button
            onClick={() => navigate("/ebooks")}
            className="bg-gradient-to-r from-red-500 to-pink-400 py-2 px-6 rounded-lg text-white font-semibold shadow-md hover:from-red-400 hover:to-pink-300 transition-all duration-300"
          >
            Retry Payment
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-white/10 border border-white/20 py-2 px-6 rounded-lg text-white font-semibold hover:bg-white/20 transition-all duration-300"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Failure;
