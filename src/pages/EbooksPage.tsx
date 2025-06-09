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
  const [qrRevealed, setQrRevealed] = useState(false);

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
        handler: async (response: any) => {
          try {
            const verifyResponse = await fetch(
              `${API_BASE_URL}/api/payment/verify-payment`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              }
            );
            if (!verifyResponse.ok) throw new Error("Payment verification failed.");

            const verifyData = await verifyResponse.json();
            if (verifyData.message === "Payment verified successfully") {
              toast.success("Payment successful and verified!");
              navigate("/success", { state: { downloadUrl: verifyData.downloadUrl } });
            } else {
              toast.error("Payment verification failed.");
              navigate("/failure");
            }
          } catch (err) {
            console.error(err);
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
      razorpay.on("payment.failed", (resp: any) => {
        console.error("Payment Failed:", resp.error);
        toast.error("Payment failed. Please try again.");
        navigate("/failure");
      });

      razorpay.open();
    } catch (err) {
      console.error(err);
      const newCount = errorCount + 1;
      setErrorCount(newCount);
      toast.error("An error occurred. Please try again.");
      setLoading(false);
      if (newCount >= 3) setShowQRModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-8 px-4 sm:px-6 lg:px-8 relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-white/10 border border-white/20 text-white py-2 px-4 rounded-lg hover:bg-white/20 transition z-10"
      >
        ← Back
      </button>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
        EBooks Library
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white/10 border border-white/20 rounded-xl p-4 sm:p-6 shadow-lg backdrop-blur-sm transition hover:scale-105 hover:shadow-2xl duration-300">
          <img
            src="./ebook.webp"
            alt="Ebook Cover"
            className="w-full aspect-[4/5] object-contain rounded-lg mb-4 bg-white"
          />
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">
            Greek God Chest Workout
          </h3>
          <p className="text-gray-300 text-sm sm:text-base mb-4 text-center">
            A complete four-week guide. Progressive overload for peak chest development.
          </p>
          <button
            onClick={handlePayment}
            disabled={loading}
            className={`${
              loading ? "bg-gray-400" : "bg-gradient-to-r from-red-500 to-orange-600"
            } text-white py-2 px-4 rounded-lg shadow-md hover:from-red-400 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 w-full`}
          >
            {loading ? "Processing..." : "👑 Buy Now ₹79"}
          </button>
        </div>
      </div>

      {showQRModal && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
          <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-md" />
          <div className="relative z-10 bg-black text-white rounded-2xl p-6 w-full max-w-sm mx-auto flex flex-col items-center">
            <div
              className="relative w-full cursor-pointer"
              onClick={() => setQrRevealed(true)}
            >
              <img
                src="./qr-code.jpeg"
                alt="QR Code for payment"
                className={`w-full h-auto aspect-square rounded-lg border-2 border-gray-300 object-contain transition-filter duration-500 ${
                  qrRevealed ? "filter-none" : "filter blur-xl"
                }`}
              />
              {!qrRevealed && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white bg-opacity-80 text-black px-4 py-2 rounded-lg font-medium text-lg">
                    Generate QR
                  </span>
                </div>
              )}
            </div>
            <h3 className="text-lg font-bold mb-2 text-center mt-4">
              Alternate Payment
            </h3>
            <p className="text-sm text-gray-300 text-center mb-4 px-2">
              Send Payment → Take Screenshot → Send to <b>+91 91604 27763</b>
            </p>
            <a
              href="https://wa.me/919160427763"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg mb-2 w-full text-center hover:bg-green-600 transition"
            >
              WhatsApp Now
            </a>
            <button
              onClick={() => setShowQRModal(false)}
              className="mt-2 py-2 w-full bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition"
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
