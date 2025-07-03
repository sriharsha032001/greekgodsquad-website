import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import { motion } from 'framer-motion';

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { width, height } = useWindowSize();

  // Safely access downloadUrl from location state
  const downloadUrl = location.state?.downloadUrl;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 sm:p-6 antialiased relative overflow-hidden">
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={300}
        gravity={0.1}
        colors={['#EF4444', '#F59E0B', '#FCD34D']}
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-lg bg-gray-800/50 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-lg p-6 sm:p-8 text-center z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
          className="mx-auto w-20 h-20 flex items-center justify-center bg-green-500/20 border-2 border-green-500 rounded-full mb-6"
        >
          <svg className="w-12 h-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <motion.path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </svg>
        </motion.div>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
          Payment Successful!
        </h1>
        <p className="text-gray-300 mb-8 text-base sm:text-lg">
          Your blueprint to a legendary physique is ready.
        </p>
        
        {/* Download Button */}
        {downloadUrl ? (
          <motion.a
            href={downloadUrl}
            download="greekgod-ebook.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-lg py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 mb-6"
          >
            Download Ebook
          </motion.a>
        ) : (
          <div className="w-full bg-gray-700 text-gray-400 font-bold text-lg py-3 px-6 rounded-lg mb-6">
            Generating Link...
          </div>
        )}

        {/* NOTE Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-200 p-4 rounded-lg text-left"
        >
          <p className="font-bold text-yellow-300 text-lg flex items-center">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.21 3.03-1.742 3.03H4.42c-1.532 0-2.492-1.696-1.742-3.03l5.58-9.92zM10 13a1 1 0 110-2 1 1 0 010 2zm-1-8a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            IMPORTANT NOTE
          </p>
          <ul className="list-disc list-inside mt-2 text-sm sm:text-base space-y-1">
            <li>The download link is valid for <strong>5 minutes</strong> only.</li>
            <li>Save the file immediately to your device.</li>
          </ul>
        </motion.div>
        
        {/* Return Button */}
        <button
          onClick={() => navigate('/ebooks')}
          className="mt-8 text-sm text-gray-400 underline hover:text-white transition-colors"
        >
          ← Return to Ebooks Library
        </button>
      </motion.div>
    </div>
  );
};

export default Success;
