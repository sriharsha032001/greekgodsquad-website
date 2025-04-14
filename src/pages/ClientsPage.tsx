import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Clients = () => {
  const navigate = useNavigate();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const clientPhotos = [
    "/client1.JPG",
    "/client2.JPG",
    "/client3.JPG",
    "/client4.JPG",
    "/client5.JPG",
    "/client6.JPG",
  ];

  const description = (
    <p className="text-gray-300 text-lg mb-6">
      At <strong>The Greek God Squad</strong>, we don’t just train clients—we invest in their goals and treat them like family. Our personalized approach ensures each transformation is guided with full dedication, respect, and sincere mentorship.
    </p>
  );

  const fullDescription = (
    <>
      <p className="text-gray-300 text-lg mb-6">
        No matter where you start, we meet you there and walk with you to your goals—step by step, rep by rep. Our client journeys are a reflection of genuine commitment, patience, and celebrating real wins together.
      </p>
      <p className="text-gray-300 text-lg mb-6">
        We believe in honesty, hard work, and a bond that lasts beyond the training floor. Because when our clients succeed, we do too.
      </p>
    </>
  );

  const additionalCardContent = (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg mt-8">
      <h2 className="text-2xl font-semibold text-white mb-4">Our Approach to Client Success</h2>
      <p className="text-gray-300 text-lg mb-6">
        We are committed to understanding the unique needs of each client, creating tailored training programs that ensure sustainable results. From nutritional advice to personalized workout plans, our clients' progress is our top priority.
      </p>
      <p className="text-gray-300 text-lg">
        Our clients’ success stories are a testament to their hard work and our unwavering dedication. Every achievement is celebrated, and we are proud to be part of their fitness journey.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 px-4 py-2 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          ← Back to Home
        </button>

        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          Our Clients' Success Stories
        </h1>

        {/* Grid of Client Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {clientPhotos.map((photo, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={photo}
                alt={`Client ${index + 1}`}
                className="w-full h-80 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="text-center max-w-3xl mx-auto">
          {description}

          {/* Conditionally Render Full Description */}
          {showFullDescription && fullDescription}

          {/* Conditionally Render Additional Card */}
          {showFullDescription && additionalCardContent}

          {/* Toggle Button to Show Full Description or Hide */}
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-blue-400 hover:text-blue-200 transition mt-6"
          >
            {showFullDescription ? 'Hide Full Description' : 'View Full Description'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Clients;
