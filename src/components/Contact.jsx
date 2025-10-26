import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 text-white select-none"
      style={{ fontFamily: "Poppins" }}
    >
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
          Get in <span className="text-teal-400">Touch</span> <br />
          OR <span className="text-teal-400">Request Course</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4 sm:mt-5 text-sm sm:text-base">
          Have questions or collaboration ideas? Reach out to us — we’d love to
          hear from you.
        </p>
      </div>

      {/* Main Content */}
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 px-4 sm:px-6 md:px-10"
        style={{ fontFamily: "Montserrat" }}
      >
        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Mail className="text-teal-400 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-gray-300 text-sm sm:text-base">
              support@skillnest.com
            </span>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <Phone className="text-teal-400 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-gray-300 text-sm sm:text-base">
              +1 243 6478242
            </span>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <MapPin className="text-teal-400 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-gray-300 text-sm sm:text-base">
              New York, United States
            </span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 pt-4 sm:pt-6 justify-center md:justify-start">
            <a href="#" className="text-gray-400 hover:text-teal-400 transition">
              <i className="fab fa-facebook-f text-lg sm:text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition">
              <i className="fab fa-twitter text-lg sm:text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition">
              <i className="fab fa-instagram text-lg sm:text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition">
              <i className="fab fa-linkedin-in text-lg sm:text-xl"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-gray-900/90 p-6 sm:p-8 rounded-2xl border border-l border-teal-600/80 space-y-5 sm:space-y-6 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_40px_10px_rgba(13,148,136,0.4)]">
          <div>
            <label className="block text-xs sm:text-sm text-gray-400 mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-teal-500 outline-none transition text-sm sm:text-base"
              required
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm text-gray-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-teal-500 outline-none transition text-sm sm:text-base"
              required
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm text-gray-400 mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Type your message..."
              className="w-full p-2.5 sm:p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-teal-500 outline-none transition resize-none text-sm sm:text-base"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-teal-600 hover:bg-teal-700 py-2.5 sm:py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition text-sm sm:text-base"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
