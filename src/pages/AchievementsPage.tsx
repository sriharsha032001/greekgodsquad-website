import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { motion } from 'framer-motion'; 
import { useState } from 'react';

const Achievements = () => {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const clientAchievements = [
    {
      title: "ICN Pro Card Winner",
      description:
        "The ICN Pro Card is one of the most coveted titles in the world of bodybuilding. Achieving this honor is a significant milestone in any athlete's career, and it showcases not only an impressive physique but also dedication, discipline, and consistency in training. Winning the ICN Pro Card means earning recognition at an elite level of competition, competing against the best in the sport. This achievement is a symbol of excellence, perseverance, and a commitment to pushing limits.",
      imageUrl: "./pro-card.webp", // relative path
    },
    {
      title: "Muscle Mania Champion of champion",
      description:
        "Muscle Mania is one of the most prestigious fitness competitions worldwide, attracting top-tier athletes and bodybuilders from across the globe. As a finalist, this achievement highlights exceptional muscle definition, aesthetic proportions, and stage presentation. The competition requires not just physical conditioning, but also the ability to present oneself under the spotlight, engaging with the audience and judges. Being named a finalist in Muscle Mania represents months of grueling preparation, smart training strategies, and impeccable stage presence.",
      imageUrl: "./muscle-mania.webp", // relative path
    },
    {
      title: "Hammer Champion",
      description:
        "The Hammer event is a rigorous strength and physique competition that tests both muscle size and strength. Winning the Hammer is no small feat, as it requires incredible physical power, endurance, and mental fortitude. The title represents not just brute force, but also the ability to push past limits and stay resilient under pressure. The competition is about more than just building size—it’s about perfecting strength while maintaining balance, and the Hammer Champion title signifies the culmination of years of dedication to both strength and hypertrophy training.",
      imageUrl: "./hammer.webp", // relative path
    },
    {
      title: "All Trophies",
      description:
        "40+ Local Trophies: In addition to these major accomplishments, the athlete has collected over 40 local trophies, recognizing their dominance in regional and national competitions. These trophies represent years of consistent performance, showcasing dedication, hard work, and commitment to excellence. Each local victory serves as a stepping stone, contributing to the athlete’s overall journey in the world of bodybuilding. These trophies acknowledge the athlete’s status as a champion at the grassroots level and highlight their rise through various competitive tiers before reaching global prominence.",
      imageUrl: "./welcome-bg.webp", // relative path
    },
  ];

  const toggleDescription = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div
      className="min-h-screen bg-black text-white p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/')}
          className="mb-8 px-4 py-2 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Home
        </motion.button>

        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My Achievements
        </motion.h1>

        <motion.div
          className="mb-12 text-center text-lg text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>
            Becoming a bodybuilder goes far beyond lifting weights and gaining muscle. It is a journey that requires not only physical strength but also mental toughness, discipline, and consistency. Bodybuilding is about sculpting the body through a combination of proper nutrition, intense workout routines, and rest. The process includes carefully selecting exercises that target different muscle groups, followed by progressively increasing the intensity to push the body beyond its limits.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {clientAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-black/60 p-6 rounded-xl shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
            >
              <img
                src={achievement.imageUrl}
                alt={achievement.title}
                className="w-full h-auto object-cover rounded-md mb-6"
                style={{
                  maxWidth: '100%',
                  maxHeight: '500px',
                  objectFit: 'cover',
                }}
              />
              <h3 className="text-xl font-semibold mb-4 text-white">
                {achievement.title}
              </h3>

              {/* Animated Description with Toggle */}
              <motion.div
                className="text-gray-300 mb-4 overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: expandedIndex === index ? '1000px' : '80px',
                }}
              >
                <p>
                  {expandedIndex === index
                    ? achievement.description
                    : achievement.description.substring(0, 120) + '...'}
                </p>
              </motion.div>

              <button
                onClick={() => toggleDescription(index)}
                className="text-sm text-blue-400 hover:text-blue-200 transition"
              >
                {expandedIndex === index ? 'Hide Story' : 'View Full Story'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;
