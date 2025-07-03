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
  const [loadingEbook, setLoadingEbook] = useState<string | null>(null);
  const [errorCount, setErrorCount] = useState(0);
  const [showQRModal, setShowQRModal] = useState(false);
  const [qrRevealed, setQrRevealed] = useState(false);

  const ebooks = [
    {
      id: 'shred-like-a-god',
      title: 'Shred Like a Greek God',
      image: './ebook.webp',
      subtitle: 'A complete four-week guide for peak development and definition.',
      price: 79,
      originalPrice: 299,
      rating: 4.8,
      reviews: '1200+',
      offer: 'Classic',
      amountInPaise: 7900,
      description: 'Shred Like a Greek God - EBook',
      ebookKey: 'ebook1-training.pdf',
    },
    {
      id: 'chest-workout',
      title: 'Greek God Back Workout',
      image: './ebook2.webp',
      subtitle: 'The ultimate 4-week program for building a powerful, chiseled back.',
      price: 79,
      originalPrice: 499,
      offer: 'Limited Offer',
      amountInPaise: 7900,
      description: 'Greek God Back Workout - EBook',
      ebookKey: 'ebook2-training.pdf',
    }
  ];

  const handlePayment = async (ebook: (typeof ebooks)[0] & { ebookKey?: string }) => {
    setLoadingEbook(ebook.id);

    try {
      const orderResponse = await fetch(`${API_BASE_URL}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: ebook.amountInPaise }),
      });

      if (!orderResponse.ok) throw new Error("Failed to create order.");

      const { id: orderId, key: razorpayKey } = await orderResponse.json();

      const options = {
        key: razorpayKey,
        amount: ebook.amountInPaise,
        currency: "INR",
        name: "Greek God Squad",
        description: ebook.description,
        image: ebook.image,
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
                  ebookKey: ebook.ebookKey,
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
            setLoadingEbook(null);
          }
        },
        theme: { color: "#EF4444" },
        modal: {
          ondismiss: () => {
            toast("Transaction cancelled.", { icon: "⚡" });
            setLoadingEbook(null);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.on("payment.failed", (resp: any) => {
        console.error("Payment Failed:", resp.error);
        toast.error("Payment failed. Please try again.");
        navigate("/failure");
        setLoadingEbook(null);
      });

      razorpay.open();
    } catch (err) {
      console.error(err);
      const newCount = errorCount + 1;
      setErrorCount(newCount);
      toast.error("An error occurred. Please try again.");
      setLoadingEbook(null);
      if (newCount >= 3) setShowQRModal(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans overflow-x-hidden antialiased relative">
      {/* Subtle background grid */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 bg-white/10 border border-white/20 text-white py-2 px-4 rounded-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-sm font-medium"
        >
          ← Go Back
        </button>

        <main className="container mx-auto px-4 py-20 sm:py-24 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300">
            FORGE YOUR LEGEND
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl text-center mb-12">
            This isn't just an ebook. It's your blueprint to building a god-like
            physique that commands respect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {ebooks.map(ebook => (
               <div key={ebook.id} className="bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(239,68,68,0.2)]">
                <div className="relative w-full mb-4">
                  <img
                    src={ebook.image}
                    alt={`Ebook Cover - ${ebook.title}`}
                    className="w-full aspect-[4/5] object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/10 rounded-lg group-hover:bg-transparent transition-colors"></div>
                  {ebook.offer && (
                    <div className={`absolute top-4 -right-4 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${ebook.offer === 'Limited Offer' ? 'bg-red-600 animate-pulse' : 'bg-blue-600'}`}>
                      {ebook.offer}
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  {ebook.title}
                </h3>
                <div className="flex items-center justify-center gap-2 text-yellow-400 mb-3 h-6">
                  {ebook.rating ? (
                    <>
                      <span>★★★★</span>
                      <span className="text-yellow-600">★</span>
                      <span className="text-white/70 text-sm font-medium">
                        {ebook.rating} ({ebook.reviews} Sold)
                      </span>
                    </>
                  ) : (
                    <span className="text-white/90 text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                      🔥 New Release!
                    </span>
                  )}
                </div>
                <p className="text-gray-300 text-sm mb-6 px-4 h-16">
                  {ebook.subtitle}
                </p>

                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="text-2xl text-gray-400 line-through">
                    ₹{ebook.originalPrice}
                  </span>
                  <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                    ₹{ebook.price}
                  </span>
                </div>

                <button
                  onClick={() => handlePayment(ebook)}
                  disabled={loadingEbook !== null}
                  className={`w-full mt-auto py-3 px-4 rounded-lg font-bold text-lg transition-all duration-300 transform
                    ${
                      loadingEbook === ebook.id
                        ? "bg-gray-500 cursor-wait"
                        : loadingEbook !== null && loadingEbook !== ebook.id
                        ? "bg-gray-700 cursor-not-allowed"
                        : "bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-400 hover:to-orange-500 hover:scale-105 shadow-[0_0_20px_rgba(239,68,68,0.5)]"
                    }`}
                >
                  {loadingEbook === ebook.id ? "Processing..." : "GET INSTANT ACCESS"}
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-24 w-full max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-10">Praised By Warriors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-gray-300 mb-4">"I've seen more chest gains in 4 weeks than I did in the last 6 months. This guide is pure gold."</p>
                <p className="font-semibold text-right">- Arjun P.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-gray-300 mb-4">"The workouts are brutal but effective. The pump is insane. 10/10 would recommend."</p>
                <p className="font-semibold text-right">- Vikram S.</p>
              </div>
            </div>
          </div>

        </main>
      </div>

      {showQRModal && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
          <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-md" />
          <div className="relative z-10 bg-gray-900 border border-white/20 text-white rounded-2xl p-6 w-full max-w-sm mx-auto flex flex-col items-center shadow-2xl">
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
                    Tap to Reveal QR
                  </span>
                </div>
              )}
            </div>
            <h3 className="text-xl font-bold mb-2 text-center mt-4">
              Alternate Payment
            </h3>
            <p className="text-sm text-gray-300 text-center mb-4 px-2">
              Scan & Pay → Take Screenshot → Send to{" "}
              <b className="text-white font-semibold">+91 91604 27763</b>
            </p>
            <a
              href="https://wa.me/919160427763"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg mb-2 w-full text-center hover:bg-green-600 transition-transform transform hover:scale-105"
            >
              Contact on WhatsApp
            </a>
            <button
              onClick={() => setShowQRModal(false)}
              className="mt-2 py-2 w-full bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition-transform transform hover:scale-105"
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
