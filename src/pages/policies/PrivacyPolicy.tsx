// src/pages/Privacy.jsx

import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen p-6 sm:p-8 bg-black text-white">
      <div className="max-w-3xl mx-auto bg-black/80 rounded-3xl p-6 sm:p-10 shadow-2xl transform transition-all hover:scale-105 hover:shadow-xl">
        
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="text-base sm:text-lg text-gray-300 mb-4 hover:text-white transition-all"
        >
          &#8592; Back
        </button>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Privacy Policy
        </h1>

        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          At The Greek God Squad, we value and respect your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          1. Information We Collect
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          We may collect the following types of information:
          <ul className="list-disc list-inside">
            <li>Your name, email address, and other contact details when you sign up for our services.</li>
            <li>Payment information, such as credit card details, for processing transactions.</li>
            <li>Usage data, including how you interact with our website or services.</li>
          </ul>
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          2. How We Use Your Information
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          We use the information we collect to:
          <ul className="list-disc list-inside">
            <li>Provide you with access to our services and digital content.</li>
            <li>Process your transactions and send order-related notifications.</li>
            <li>Improve our services based on your feedback and usage patterns.</li>
            <li>Communicate with you about updates, promotions, and customer support.</li>
          </ul>
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          3. Data Protection
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          We take your privacy seriously and implement a variety of security measures to protect your personal data. All sensitive information, such as payment details, is encrypted and securely stored. We also ensure that our third-party service providers comply with privacy standards.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          4. Sharing Your Information
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          We do not share your personal information with third parties, except:
          <ul className="list-disc list-inside">
            <li>To process payments through third-party services like Razorpay.</li>
            <li>When required by law or to comply with a legal process.</li>
            <li>To protect the rights, property, or safety of The Greek God Squad or others.</li>
          </ul>
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          5. Your Rights
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          You have the right to:
          <ul className="list-disc list-inside">
            <li>Access and update your personal information.</li>
            <li>Request the deletion of your personal data, subject to legal requirements.</li>
            <li>Opt out of marketing communications at any time.</li>
          </ul>
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          6. Cookies
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          Our website uses cookies to enhance your experience and gather data on how you use our services. By using our website, you consent to the use of cookies as outlined in our Cookie Policy.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          7. Changes to this Privacy Policy
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the updated policy on our website. Your continued use of our services after any changes constitute your acceptance of the revised policy.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          8. Contact Us
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          If you have any questions or concerns about our Privacy Policy, please contact us at <span className="font-semibold text-gray-400">Chakrifitness@gmail.com</span>.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
