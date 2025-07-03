// src/pages/TandC.jsx

import React from 'react';

const TandC = () => {
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
          Terms and Conditions
        </h1>

        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          By accessing or using our services, you agree to be bound by the following Terms and Conditions. If you do not agree with these terms, please do not use our services.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          These Terms and Conditions govern your use of The Greek God Squad’s services, including access to digital content, payment processing, and any other services we offer. By using our website or services, you confirm your acceptance of these terms.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          2. Use of Services
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          Our services are for personal, non-commercial use only. You agree not to use our services for any illegal or unauthorized purpose. You must comply with all local laws and regulations regarding online conduct and content.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          3. Intellectual Property
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          All content, materials, and services provided on The Greek God Squad’s website are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or use any of our intellectual property without prior written consent.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          4. Payment and Subscription
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          Payments for services are processed through third-party payment processors, including Razorpay. By making a payment, you agree to provide accurate and up-to-date payment information. All purchases are final and non-refundable, except as required by law.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          5. Refunds and Cancellations
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          As our services are digital, we do not offer refunds for any purchased products or subscriptions. In certain cases, where required by law, refunds may be processed, but such refunds will only be made under special circumstances. Any such request must be made within 30 days of purchase.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          6. User Responsibility
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          You are responsible for maintaining the confidentiality of your account information, including login credentials and payment methods. You agree to notify us immediately if you suspect any unauthorized access to your account.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          7. Privacy Policy
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          Our Privacy Policy outlines how we collect, use, and protect your personal information. By using our services, you consent to the collection and use of your data as described in our Privacy Policy.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          8. Modifications to Terms
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          We reserve the right to modify, update, or change these Terms and Conditions at any time without prior notice. The most current version of the Terms will be posted on our website, and your continued use of our services constitutes acceptance of the updated Terms.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          9. Limitation of Liability
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          We will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability will be limited to the amount you have paid for the service in question.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          10. Governing Law
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          These Terms and Conditions are governed by the laws of the jurisdiction where The Greek God Squad is registered. Any disputes related to these Terms shall be resolved in the courts of that jurisdiction.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-300 mb-4">
          11. Contact Information
        </h2>
        <p className="text-base sm:text-lg mb-6 leading-relaxed tracking-wide">
          If you have any questions or concerns about our Terms and Conditions, please contact us at <span className="font-semibold text-gray-400">support@greekgodsquad.com</span>.
        </p>
      </div>
    </div>
  );
};

export default TandC;
