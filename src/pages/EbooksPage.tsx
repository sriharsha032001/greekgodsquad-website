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
  const [errorCount, setErrorCount] = useState(0);
  const [showQRModal, setShowQRModal] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const orderResponse = await fetch(`${API_BASE_URL}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 7900 }),
      });

      if (!orderResponse.ok) throw new Error("Failed to create order.");

      const { id: orderId, key: razorpayKey } = await orderResponse.json();

      const options = {
        key: razorpayKey,
        amount: 7900,
        currency: "INR",
        name: "Greek God Squad",
        description: "Shred Like a Greek God - EBook",
        image: "./ebook.webp",
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
      const newErrorCount = errorCount + 1;
      setErrorCount(newErrorCount);
      toast.error("An error occurred. Please try again.");
      setLoading(false);
      if (newErrorCount >= 3) setShowQRModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 bg-white/10 border border-white/20 text-white py-2 px-4 rounded-lg hover:bg-white/20 transition"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold text-center mb-10">EBooks Library</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        <div className="bg-white/10 border border-white/20 rounded-xl p-4 sm:p-5 shadow-lg backdrop-blur-sm transition hover:scale-105 hover:shadow-2xl duration-300">
          <img
            src="./ebook.webp"
            alt="Ebook Cover"
            className="w-full aspect-[9/10] object-contain rounded-lg mb-4 bg-white"
          />
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Greek God chest workout</h3>
          <p className="text-gray-300 text-xs sm:text-sm mb-4">
            A complete guide of four week greekgod chest workout. Progressive overload to peak chest development.
          </p>
          <button
            onClick={handlePayment}
            disabled={loading}
            className={`${
              loading ? "bg-gray-400" : "bg-gradient-to-r from-red-500 to-orange-600"
            } text-white py-2 px-4 rounded-lg shadow-md hover:from-red-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto`}
          >
            {loading ? "Processing..." : "👑 Buy Now ₹79"}
          </button>
        </div>
      </div>

      {/* QR Payment Modal */}
      {showQRModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-[2px]" />
          <div className="relative z-10 bg-black text-white rounded-2xl p-6 shadow-2xl w-full max-w-xs sm:max-w-sm flex flex-col items-center">
            <img
              src="./qr-code.jpeg" // <-- Add your QR code image here
              alt="QR Code for payment"
              className="w-48 h-48 rounded-lg mb-4 border-2 border-gray-300 object-contain"
            />
            <h3 className="text-lg font-bold mb-2 text-center">Alternate Payment Option</h3>
            <p className="text-sm text-white-700 text-center mb-2">
              Send Payment → Take Screenshot → Send to <b>+91 9160427763</b>
            </p>
            <a
              href="https://wa.me/919160427763"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg mt-2 mb-2 flex items-center justify-center gap-2 hover:bg-green-600 transition"
            >
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.004 2c-5.514 0-9.999 4.486-9.999 10 0 1.768.461 3.489 1.336 5.009l-1.409 5.176 5.298-1.392c1.468.799 3.124 1.207 4.774 1.207h.001c5.514 0 9.999-4.486 9.999-10s-4.485-10-9.999-10zm0 18.164c-1.486 0-2.95-.386-4.227-1.119l-.304-.175-3.145.827.842-3.091-.198-.317c-.82-1.308-1.253-2.814-1.253-4.289 0-4.411 3.589-8 8.001-8 4.412 0 8.001 3.589 8.001 8 0 4.411-3.589 8-8.001 8zm4.348-6.608c-.238-.119-1.406-.695-1.625-.774-.219-.08-.379-.119-.539.119-.159.238-.619.774-.76.934-.14.159-.279.179-.517.06-.238-.119-1.006-.371-1.917-1.184-.708-.631-1.187-1.409-1.327-1.648-.139-.238-.015-.366.104-.485.106-.105.238-.278.357-.417.119-.139.159-.238.238-.397.08-.159.04-.298-.02-.417-.06-.119-.539-1.299-.739-1.778-.194-.471-.392-.408-.539-.417-.14-.009-.299-.011-.458-.011s-.417.06-.636.298c-.219.238-.857.838-.857 2.038 0 1.2.877 2.358 1.001 2.518.119.159 1.723 2.634 4.181 3.591.584.2 1.039.319 1.394.407.586.149 1.12.128 1.542.078.471-.059 1.406-.573 1.604-1.127.199-.553.199-1.027.139-1.127-.06-.1-.218-.159-.457-.278z"/>
              </svg>
              WhatsApp Now
            </a>
            <button
              onClick={() => setShowQRModal(false)}
              className="mt-2 px-4 py-2 bg-white-600 text-white rounded-lg font-medium shadow hover:bg-white-700 transition"
              >
              Close
              </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default EbooksPage;
