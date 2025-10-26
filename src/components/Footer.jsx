import "@fontsource/poppins";
import "@fontsource/roboto";
import "@fontsource/montserrat";
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  // Smooth scroll to sections (like navbar)
  const scrollToSection = (id) => {
    navigate(`/#${id}`);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="backdrop-blur-2xl border-t border-white/10 text-gray-300 py-12 px-6 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* 🌐 Brand Section */}
        <div className="text-left sm:text-left">
          <h2
            className="text-2xl font-bold mb-3 text-white"
            style={{ fontFamily: "Poppins" }}
          >
            Skill<span className="text-teal-400">Nest</span>
          </h2>
          <p
            className="text-sm text-gray-400 mb-4 leading-relaxed"
            style={{ fontFamily: "Montserrat" }}
          >
            Learn new skills anytime, anywhere with expert-led online courses built for real-world success.
          </p>

          {/* Social Icons */}
          <div className="flex justify-start sm:justify-start gap-4 mt-4">
            <a href="#" className="hover:text-teal-400 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-teal-400 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-teal-400 transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-teal-400 transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* 📘 Quick Links */}
        <div style={{ fontFamily: "Montserrat" }} className="text-ledt sm:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li
              onClick={() => scrollToSection("home")}
              className="hover:text-teal-400 cursor-pointer transition"
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection("courses")}
              className="hover:text-teal-400 cursor-pointer transition"
            >
              Courses
            </li>
            <li
              onClick={() => scrollToSection("about")}
              className="hover:text-teal-400 cursor-pointer transition"
            >
              About
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="hover:text-teal-400 cursor-pointer transition"
            >
              Contact
            </li>
          </ul>
        </div>

        {/* 💡 Popular Categories */}
        <div style={{ fontFamily: "Montserrat" }} className="text-start sm:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Popular Categories</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-teal-400 cursor-pointer transition">Web Development</li>
            <li className="hover:text-teal-400 cursor-pointer transition">Data Science</li>
            <li className="hover:text-teal-400 cursor-pointer transition">AI & ML</li>
            <li className="hover:text-teal-400 cursor-pointer transition">UI/UX Design</li>
          </ul>
        </div>

        {/* 📞 Contact */}
        <div style={{ fontFamily: "Montserrat" }} className="text-start sm:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <Mail size={16} className="text-teal-400" /> support@skillnest.com
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <Phone size={16} className="text-teal-400" /> +1 243 6478242
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <MapPin size={16} className="text-teal-400" /> New York, United States
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400"
        style={{ fontFamily: "Montserrat" }}
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">AfterRender</span>. All rights reserved.
      </div>
    </footer>
  );
}
