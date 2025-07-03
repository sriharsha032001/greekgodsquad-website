import React from 'react';
import { Link } from 'react-router-dom';

export default function ModernFooter() {
  return (
    <footer className="w-full py-8 px-4 bg-white/40 backdrop-blur-lg rounded-t-2xl shadow-inner mt-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-gray-700">
          <Link to="/pricingpolicy" className="hover:text-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400">Pricing Policy</Link>
          <Link to="/shipping" className="hover:text-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400">Shipping Policy</Link>
          <Link to="/termsandconditions" className="hover:text-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400">Terms & Conditions</Link>
          <Link to="/privacypolicy" className="hover:text-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400">Privacy Policy</Link>
          <Link to="/refund" className="hover:text-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400">Cancellation/Refund</Link>
          <Link to="/contactus" className="hover:text-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400">Contact Us</Link>
        </div>
        <p className="text-xs text-gray-500 font-semibold mt-2">&copy; 2025 The Greek God Squad. All rights reserved.</p>
      </div>
    </footer>
  );
} 