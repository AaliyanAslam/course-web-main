import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BuyAllCoursesOfferModal from "./BuyAllCourses.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const goToLogin = () => {
    setOpen(false);
    navigate("/login");
  };

  const handleNavClick = (id) => {
    setOpen(false); // close menu on mobile
    navigate(`/#${id}`);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const courses = [
    "Python for Beginners",
    "Advanced JavaScript",
    "UI/UX Design Mastery",
    "Digital Marketing Basics",
    "React Crash Course",
    "Tailwind CSS Deep Dive",
  ];

  const filteredCourses = courses.filter((course) =>
    course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <nav className="backdrop-blur-md text-white fixed w-full z-50 shadow-md select-none border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo */}
        <div
          className="flex items-center gap-3 select-none cursor-pointer group"
          style={{ fontFamily: "Poppins" }}
          onClick={() => handleNavClick("home")}
        >
          <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br from-teal-600 to-teal-500 p-0.5 group-hover:scale-105 transition-transform duration-300">
            <div className="bg-black w-full h-full rounded-xl flex items-center justify-center">
              <img
                src="/images/greentreasure.png"
                alt="SkillNest Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-xl md:text-2xl font-semibold text-white tracking-wide">
              Skill<span className="text-teal-400">Nest</span>
            </span>
            <span className="text-xs text-gray-400 hidden md:block">
              Learn. Grow. Master.
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex gap-8 text-gray-300 font-medium"
          style={{ fontFamily: "Montserrat" }}
        >
          <li className="hover:text-white cursor-pointer" onClick={() => handleNavClick("home")}>
            Home
          </li>

          <li
            className="relative cursor-pointer text-gray-300 animate-wiggle hover:text-teal-400 transition duration-300 group"
            onClick={() => handleNavClick("courses")}
          >
            <span className="flex items-center gap-1 group-hover:scale-105 transition-transform duration-300">
              Courses
              <span className="text-rose-500 text-lg font-extrabold animate-pulse">•</span>
            </span>
            <span className="absolute left-0 bottom-1 w-0 h-0.5 bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="hover:text-white cursor-pointer" onClick={() => handleNavClick("about")}>
            About
          </li>

          <li className="hover:text-white cursor-pointer" onClick={() => handleNavClick("contact")}>
            Contact
          </li>
        </ul>

        {/* Search Bar */}
        <div className="hidden md:flex flex-col relative w-64">
          <div className="flex items-center bg-gray-800/70 rounded-xl px-3 py-2 border border-teal-600/50 focus-within:ring-2 focus-within:ring-teal-500 transition">
            <Search size={18} className="text-teal-400 mr-2" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowDropdown(e.target.value.length > 0);
              }}
              placeholder="Search courses..."
              className="bg-transparent w-full text-sm outline-none text-white placeholder-gray-400"
            />
          </div>

          {showDropdown && (
            <div className="absolute top-12 left-0 w-full bg-gray-900/90 border border-gray-700 rounded-xl shadow-xl z-50 backdrop-blur-md">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setSearch(course);
                      setShowDropdown(false);
                    }}
                    className="px-4 py-2 text-gray-300 hover:bg-teal-600/20 hover:text-white cursor-pointer text-sm"
                  >
                    {course}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-400 text-sm">No results found 😔</div>
              )}
            </div>
          )}
        </div>

        {/* Login Button */}
        <button
          onClick={goToLogin}
          className="cursor-pointer hidden md:block bg-teal-600 hover:bg-teal-700 px-5 py-2 rounded-lg font-semibold transition"
        >
          Login
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 hover:text-white"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden h-screen text-gray-200 flex flex-col space-y-8 text-xl font-semibold z-50">
          <ul className="flex flex-col items-center gap-8">
            <li className="hover:text-teal-400 transition-all cursor-pointer" onClick={() => handleNavClick("home")}>
              Home
            </li>
            <li className="hover:text-teal-400 transition-all cursor-pointer" onClick={() => handleNavClick("courses")}>
              Courses
            </li>
            <li className="hover:text-teal-400 transition-all cursor-pointer" onClick={() => handleNavClick("about")}>
              About
            </li>
            <li className="hover:text-teal-400 transition-all cursor-pointer" onClick={() => handleNavClick("contact")}>
              Contact
            </li>
          </ul>
<BuyAllCoursesOfferModal/>
          <button
            onClick={goToLogin}
            className="mt-10 bg-teal-600 hover:bg-teal-700 px-10 py-3 mx-8 rounded-full text-white shadow-lg font-bold transition-transform hover:scale-105"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
