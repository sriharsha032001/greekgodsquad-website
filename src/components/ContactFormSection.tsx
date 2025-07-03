import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactFormSection() {
  const [loading, setLoading] = useState(false);

  return (
    <section id="contact" className="w-full py-12 px-4 flex justify-center">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/40 backdrop-blur-lg rounded-2xl shadow-2xl p-8 flex flex-col gap-5"
        onSubmit={e => { e.preventDefault(); setLoading(true); setTimeout(() => setLoading(false), 1200); }}
        autoComplete="on"
      >
        <h3 className="text-2xl font-extrabold mb-2 text-center text-gray-800">Join the Squad</h3>
        <input
          name="name"
          type="text"
          required
          placeholder="Name"
          pattern="[A-Za-z ]+"
          title="Name should contain only letters and spaces."
          className="w-full bg-gray-100 border border-gray-300 rounded-full p-3 text-base font-bold text-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400"
          autoComplete="name"
        />
        <input
          name="dob"
          type="text"
          required
          placeholder="DD-MM-YYYY"
          maxLength={10}
          className="w-full bg-gray-100 border border-gray-300 rounded-full p-3 text-base font-bold text-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400"
          autoComplete="bday"
        />
        <input
          name="phone"
          type="tel"
          required
          placeholder="Phone Number"
          maxLength={10}
          minLength={10}
          pattern="[0-9]{10}"
          title="Please enter exactly 10 digits"
          className="w-full bg-gray-100 border border-gray-300 rounded-full p-3 text-base font-bold text-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400"
          autoComplete="tel"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="w-full bg-gray-100 border border-gray-300 rounded-full p-3 text-base font-bold text-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400"
          autoComplete="email"
        />
        <input
          name="height"
          type="number"
          required
          placeholder="Height (in cm)"
          className="w-full bg-gray-100 border border-gray-300 rounded-full p-3 text-base font-bold text-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400"
          autoComplete="off"
        />
        <input
          name="weight"
          type="number"
          required
          placeholder="Weight (in kg)"
          className="w-full bg-gray-100 border border-gray-300 rounded-full p-3 text-base font-bold text-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400"
          autoComplete="off"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition font-bold text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-400 disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Start Your Journey'}
        </button>
        <p className="text-center text-sm text-gray-500">
          By joining, you agree to our Terms & Conditions and Privacy Policy
        </p>
      </motion.form>
    </section>
  );
} 