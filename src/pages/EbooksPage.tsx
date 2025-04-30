import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") || "";

const EbooksPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const orderResponse = await fetch(`${API_BASE_URL}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 5900 }),
      });

      if (!orderResponse.ok) throw new Error("Failed to create order.");

      const { id: orderId, key: razorpayKey } = await orderResponse.json();

      const options = {
        key: razorpayKey,
        amount: 5900,
        currency: "INR",
        name: "Greek God Squad",
        description: "Shred Like a Greek God - EBook",
        image: "./wlogo.jpeg",
        order_id: orderId,
        handler: async function (response: any) {
          try {
            const verifyResponse = await fetch(`${API_BASE_URL}/api/payment/verify-payment`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            if (!verifyResponse.ok) throw new Error("Payment verification failed.");

            const verifyData = await verifyResponse.json();

            if (verifyData.message === "Payment verified successfully") {
              toast.success("Payment successful and verified!");
              navigate("/success", { state: { downloadUrl: verifyData.downloadUrl } });
            } else {
              toast.error("Payment verification failed.");
              navigate("/failure");
            }
          } catch (error) {
            console.error(error);
            toast.error("Payment verification failed. Please try again.");
            navigate("/failure");
          } finally {
            setLoading(false);
          }
        },
        theme: { color: "#EF4444" },
        modal: {
          ondismiss: () => {
            toast("Transaction cancelled.", { icon: "⚡" });
            setLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.on("payment.failed", function (response: any) {
        console.error("Payment Failed:", response.error);
        toast.error("Payment failed. Please try again.");
        navigate("/failure");
      });

      razorpay.open();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6 relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 bg-white/10 border border-white/20 text-white py-2 px-4 rounded-lg hover:bg-white/20 transition"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold text-center mb-10">EBooks Library</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white/10 border border-white/20 rounded-xl p-6 shadow-xl backdrop-blur-sm transition hover:scale-105 hover:shadow-2xl duration-300">
          <img
            src="./ebook1.jpeg"
            alt="Ebook Cover"
            className="w-full aspect-[9/10] object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">Greek God chest workout</h3>
          <p className="text-gray-300 text-sm mb-4">
            A complete guide of four week greekgod chest workout. Progressive overload to peak chest development.
          </p>
          <button
            onClick={handlePayment}
            disabled={loading}
            className={`$ {
              loading ? "bg-gray-400" : "bg-gradient-to-r from-red-500 to-orange-600"
            } text-white py-3 px-6 rounded-lg shadow-md hover:from-red-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-105`}
          >
            {loading ? "Processing..." : "👑 Buy Now ₹59"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EbooksPage;