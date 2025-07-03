import React from "react";
import { useNavigate } from "react-router-dom";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function Store() {
  const navigate = useNavigate();

  const handlePayment = () => {
    const options = {
      key: "rzp_live_siAkR6VxCC9dtU", // Replace with your Razorpay key
      amount: 79900, // amount in paise (₹799)
      currency: "INR",
      name: "Greek God Squad",
      description: "Greek God Squad T-Shirt - Black",
      image: "./wlogo.jpeg",
      handler: function (response: any) {
        alert("Payment Successful! Razorpay ID: " + response.razorpay_payment_id);
        // Optionally call backend API to store/verify the payment
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#EF4444",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const tshirt = {
    id: 1,
    title: "Greek God Squad T-Shirt - Black",
    description: "Premium cotton tee with the official logo.",
    price: "₹799",
    image: "/images/tshirt-black.jpg",
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 bg-white/10 border border-white/20 text-white py-2 px-4 rounded-lg hover:bg-white/20 transition"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-center mb-10">Greek God Squad T-Shirt</h1>

      <div className="max-w-md mx-auto">
        <div className="bg-white/10 border border-white/20 backdrop-blur-md p-4 rounded-xl shadow-lg text-center">
          <img
            src={tshirt.image}
            alt={tshirt.title}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold">{tshirt.title}</h2>
          <p className="text-sm text-gray-300 mb-2">{tshirt.description}</p>
          <p className="text-lg font-bold text-blue-400">{tshirt.price}</p>

          <button
            onClick={handlePayment}
            className="mt-4 bg-gradient-to-r from-red-500 to-orange-600 text-white py-3 px-6 rounded-lg shadow-md hover:from-red-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-105"
          >
            👕 Buy Now ₹799
          </button>
        </div>
      </div>
    </div>
  );
}
