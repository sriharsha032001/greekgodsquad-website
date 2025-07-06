import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ClientsPage = () => {
  const navigate = useNavigate();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const clientPhotos = [
    "./client1.JPG",
    "./client2.JPG",
    "./client3.JPG",
    "./client4.JPG",
    "./client5.JPG",
    "./client6.JPG",
  ];

  const description = (
    <p className="text-gray-300 text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
      At <strong>The Greek God Squad</strong>, we don't just train clients—we forge warriors. Our personalized approach ensures each transformation is guided with full dedication, respect, and sincere mentorship.
    </p>
  );

  const fullDescription = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
        No matter where you start, we meet you there and walk with you to your goals—step by step, rep by rep. Our client journeys are a reflection of genuine commitment, patience, and celebrating real wins together.
      </p>
      <div className="bg-gray-800/50 border border-white/10 p-6 rounded-2xl max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">Our Approach to Client Success</h2>
        <p className="text-gray-300 text-base sm:text-lg">
          We are committed to understanding the unique needs of each client, creating tailored training programs that ensure sustainable results. From nutritional advice to personalized workout plans, our clients' progress is our top priority.
        </p>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans antialiased overflow-x-hidden relative">
      {/* Background Gradient & Shapes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <main className="relative z-10 p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.button
            onClick={() => navigate("/")}
            className="mb-8 px-5 py-2 bg-white/10 border border-white/20 text-white font-bold shadow-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Back to Home
          </motion.button>

          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300"
          >
            Our Warriors' Transformations
          </motion.h1>

          {/* Grid of Client Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {clientPhotos.map((photo, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg border border-white/10 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={photo}
                  alt={`Client ${index + 1}`}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>

          {/* Description */}
          <div className="text-center">
            {description}
            
            <AnimatePresence>
              {showFullDescription && fullDescription}
            </AnimatePresence>
            
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="mt-8 font-semibold text-red-400 hover:text-red-300 transition-colors"
            >
              {showFullDescription ? 'Show Less' : 'Read Our Full Approach'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientsPage;
