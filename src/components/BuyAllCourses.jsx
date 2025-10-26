import { useEffect, useState } from "react";
import { Check, X, Gift } from "lucide-react";

export default function BuyAllCoursesOfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [disabled, setDisabled] = useState(false);

  // Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
    const s = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="hidden lg:block">
      {/* 🔔 Floating Banner */}
      <div
        onClick={() => setIsOpen(true)}
        className="fixed top-24 right-4 bg-linear-to-r from-teal-600 to-teal-700 text-white font-semibold px-4 py-3 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-all flex items-center gap-3 z-50 animate-wiggle-offer"
      >
        <img
          src="/images/clock.gif"
          className="h-6 w-6 mix-blend-multiply"
          alt="Clock"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-xs opacity-90">Offer ends in</span>
          <span className="text-sm font-bold tracking-wide">
            {formatTime(timeLeft)}
          </span>
        </div>

        <div className="bg-linear-to-r from-yellow-100 to-teal-50 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1 ml-2 border border-teal-200">
          <span className="bg-teal-600 text-white text-[10px] px-2 py-1 rounded-full font-bold">
            NEW
          </span>
          <span className="flex items-center gap-1">
            <Gift size={18} /> Limited Offer
          </span>
        </div>
      </div>

      {/* 🧩 Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-xl flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-sm w-full p-8 relative">
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 bg-gray-200 rounded-lg p-1 cursor-pointer text-gray-600 hover:text-gray-800 transition"
            >
              <X />
            </button>

            {/* Header */}
            <div className="mb-4 text-center " style={{fontFamily : "montserrat"}}>
              <h3 className="text-xl font-semibold text-gray-800">
                All Courses Plan
              </h3>
              <p className="text-sm text-gray-500">Lifetime access for you</p>
            </div>

            {/* Pricing */}
            <div className="mb-6 text-center font-montserrat"  style={{fontFamily : "montserrat"}}>
              <span className="text-gray-400 text-sm line-through block">
                $1779
              </span>
              <span className="text-2xl font-bold text-teal-600 block">
                $1499
              </span>
              <span className="mt-1 inline-block bg-teal-50 text-teal-600 text-xs font-semibold px-2 py-1 rounded-full">
                Limited Time Offer
              </span>
            </div>

            {/* Countdown */}
            <div className="mb-4 text-sm font-semibold text-red-600 text-center "  style={{fontFamily : "montserrat"}}>
              Offer ends in: {formatTime(timeLeft)}
            </div>

            {/* ✅ Buy Button */}
            <button  style={{fontFamily : "montserrat"}}
              onClick={() => {
                alert("🚀 Redirecting to checkout...");
                setDisabled(true);
              }}
              disabled={timeLeft === 0 || disabled}
              className="w-full font-poppins text-white py-2 rounded-lg transition transform hover:scale-105 mb-4  cursor-pointer
                         bg-teal-600 hover:bg-teal-700 
                         disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {timeLeft === 0
                ? "Offer Expired"
                : disabled
                ? "Processing..."
                : "Buy All Courses Now"}
            </button>

            {/* Features */}
            <ul className="text-left text-gray-600 text-sm space-y-2 "  style={{fontFamily : "montserrat"}}>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-500" /> Access to 20+ premium
                courses
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-500" /> Certification prep
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-500" /> Goal-focused
                recommendations
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-500" /> AI-powered coding
                exercises
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
