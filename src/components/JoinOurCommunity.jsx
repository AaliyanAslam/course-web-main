import { useState } from "react";
import { X, Users, Send, CheckCircle2 } from "lucide-react";
import "@fontsource/poppins";

export default function JoinCommunityModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
    }, 2500);
  };

  return (
    <>
      {/* 🌟 Button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-teal-600 hover:bg-teal-700 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md cursor-pointer font-semibold text-sm sm:text-base text-white transition duration-300 shadow-[0_0_15px_rgba(13,148,136,0.5)] hover:shadow-[0_0_25px_rgba(13,148,136,0.8)]"
      >
        Join Our Community
      </button>

      {/* 🌌 Modal Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-3 sm:px-6"
          onClick={() => setIsOpen(false)}
        >
          {/* 💫 Modal Box */}
          <div
            className="relative bg-gradient-to-br from-gray-900 via-black to-teal-950 border border-teal-600/50 rounded-2xl p-5 sm:p-8 w-full max-w-sm sm:max-w-md text-white shadow-[0_0_50px_rgba(13,148,136,0.4)]"
            onClick={(e) => e.stopPropagation()}
            style={{ fontFamily: "Poppins" }}
          >
            {/* ❌ Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-teal-400 transition cursor-pointer"
            >
              <X size={22} />
            </button>

            {/* 🔄 Conditional Rendering */}
            {!submitted ? (
              <>
                {/* 🧠 Modal Header */}
                <div className="text-center mb-6">
                  <Users className="w-10 sm:w-12 h-10 sm:h-12 text-teal-400 mx-auto mb-3 animate-pulse" />
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                    Join Our <span className="text-teal-400">Community</span>
                  </h2>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Be part of a growing network of learners and innovators.
                  </p>
                </div>

                {/* 📬 Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-teal-500 outline-none text-white transition text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-teal-500 outline-none text-white transition text-sm sm:text-base"
                    />
                  </div>

                  <button
                    type="submit"
                    className="cursor-pointer w-full bg-teal-600 hover:bg-teal-700 py-2.5 sm:py-3 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm sm:text-base transition mt-4"
                  >
                    <Send className="w-4 h-4" />
                    Join Now
                  </button>
                </form>
              </>
            ) : (
              // ✅ Success Message
              <div className="text-center space-y-4">
                <CheckCircle2 className="w-14 sm:w-16 h-14 sm:h-16 text-teal-400 mx-auto animate-bounce" />
                <h2 className="text-xl sm:text-2xl font-semibold text-teal-400">
                  Thanks for joining!
                </h2>
                <p className="text-gray-300 text-sm sm:text-base">
                  We’ll add you to our community as soon as possible 💫
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
