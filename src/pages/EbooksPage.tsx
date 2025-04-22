import React from "react";
import { useNavigate } from "react-router-dom";

declare global {
    interface Window {
      Razorpay: any;
    }
  }  

const EbooksPage = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    const options = {
      key: "rzp_live_siAkR6VxCC9dtU", // Replace with your Razorpay key
      amount: 4900, // amount in paise (49 INR)
      currency: "INR",
      name: "Greek God Squad",
      description: "Shred Like a Greek God - EBook",
      image: "./wlogo.jpeg",
      handler: function (response) {
        alert("Payment Successful! Razorpay ID: " + response.razorpay_payment_id);
        // You can also redirect or call backend to verify/store payment info
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#EF4444", // Red theme
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 bg-white/10 border border-white/20 text-white py-2 px-4 rounded-lg hover:bg-white/20 transition"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold text-center mb-10">EBooks Library</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Ebook Card */}
        <div className="bg-white/10 border border-white/20 rounded-xl p-6 shadow-xl backdrop-blur-sm transition hover:scale-105 hover:shadow-2xl duration-300">
          <img
            src="./ebook1.jpeg"
            alt="Ebook Cover"
            className="w-full aspect-[9/10] object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Shred Like a Greek God</h3>
          <p className="text-gray-300 text-sm mb-4">
            A complete guide to fat loss, muscle toning, and lifestyle transformation.
          </p>
          {/* Razorpay Buy Now Button */}
          <button
            onClick={handlePayment}
            className="bg-gradient-to-r from-red-500 to-orange-600 text-white py-3 px-6 rounded-lg shadow-md hover:from-red-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-105"
          >
            👑Buy Now ₹49
          </button>
        </div>
      </div>
    </div>
  );
};

export default EbooksPage;
