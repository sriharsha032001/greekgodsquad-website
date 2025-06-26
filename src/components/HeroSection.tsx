import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] px-4 py-12 bg-gradient-to-br from-[#eaf6fb] to-[#f7fafc]">
      <div className="flex flex-col md:flex-row items-center w-full max-w-7xl mx-auto">
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          >
            <span className="block text-gray-700">Fit.</span>
            <span className="block text-gray-700">Fast.</span>
            <span className="block text-green-500">Forever.</span>
          </motion.h1>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block mt-6 px-8 py-3 rounded-full bg-green-500 text-white font-bold text-lg shadow-lg hover:bg-green-600 transition"
          >
            TRAIN WITH US
          </motion.a>
        </div>
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <div className="bg-white/40 backdrop-blur-lg rounded-3xl shadow-2xl p-2 md:p-4 flex items-center justify-center">
            <img
              src="/hero-athletes.png"
              alt="Athletes"
              className="w-full max-w-xs md:max-w-md rounded-3xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 