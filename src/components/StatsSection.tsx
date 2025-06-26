import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Active Members', value: '500+' },
  { label: 'Success Rate', value: '95%' },
  { label: 'Transformations', value: '1000+' },
  { label: 'Member Rating', value: '4.9/5' },
];

export default function StatsSection() {
  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center"
          >
            <div className="text-3xl md:text-4xl font-extrabold text-green-500 mb-2">{stat.value}</div>
            <div className="text-base text-gray-700 font-semibold">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 