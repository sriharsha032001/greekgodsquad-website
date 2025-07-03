import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Failure = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 sm:p-6 antialiased">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          x: [0, -10, 10, -10, 10, 0],
        }}
        transition={{ 
          y: { duration: 0.3, ease: 'easeOut' },
          x: { delay: 0.3, duration: 0.5, repeat: 1, repeatType: "loop", ease: 'easeInOut' },
        }}
        className="w-full max-w-md bg-gray-800/50 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-lg p-6 sm:p-8 text-center"
      >
        
        {/* Failure Icon */}
        <div className="mx-auto w-20 h-20 flex items-center justify-center bg-red-500/20 border-2 border-red-500 rounded-full mb-6">
          <svg className="w-12 h-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
          Payment Failed
        </h1>
        <p className="text-gray-300 mb-8 text-base sm:text-lg">
          Unfortunately, we couldn't process your payment. Don't worry, you haven't been charged.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/ebooks')}
            className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-lg py-3 px-6 rounded-lg shadow-lg transform transition-transform"
          >
            Retry Payment
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="w-full bg-white/10 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg transform transition-transform"
          >
            Return Home
          </motion.button>
        </div>

        {/* Support Note */}
        <p className="mt-8 text-sm text-gray-400">
          If the problem persists, please <a href="https://wa.me/919160427763" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-white">contact support</a>.
        </p>

      </motion.div>
    </div>
  );
};

export default Failure;
