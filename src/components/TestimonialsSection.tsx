import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Abhiram',
    text: 'Lost 15kg in 3 months! The Greek God Squad transformed not just my body, but my entire lifestyle. The personalized training and diet plans are exactly what I needed.',
    rating: 5,
    transformation: '15kg weight loss',
  },
  {
    name: 'Rahul',
    text: 'From skinny to strong! The personalized training and diet plans are game-changers. The coaches are incredibly supportive and knowledgeable.',
    rating: 5,
    transformation: '8kg muscle gain',
  },
  {
    name: 'Priya',
    text: 'The community support is incredible. Never felt alone in my fitness journey! Lost 12kg and gained so much confidence. Best investment in myself!',
    rating: 5,
    transformation: '12kg weight loss',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white/40 backdrop-blur-lg rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              <h4 className="font-bold text-gray-800 text-lg mb-1">{t.name}</h4>
              <p className="text-green-600 text-sm font-semibold mb-2">{t.transformation}</p>
              <p className="text-gray-700 text-base mb-3">{t.text}</p>
              <div className="flex justify-center">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-green-500 text-lg">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 