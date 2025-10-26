import { useState } from "react";
import "@fontsource/poppins";
import "@fontsource/roboto";
import "@fontsource/montserrat";
import { LoaderPinwheel } from "lucide-react";
import Stats from "./Stats";
import BuyAllCoursesOfferModal from "./BuyAllCourses";

export default function Hero() {
  const [search, setSearch] = useState("");
  const courses = [
    { id: 1, title: "Python for Beginners" },
    { id: 2, title: "Advanced JavaScript" },
    { id: 3, title: "UI/UX Design Mastery" },
    { id: 4, title: "Digital Marketing Basics" },
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      id="home"
      className="text-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-24 py-24 sm:py-32 md:py-40"
    >
      {/* Hero Text */}
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        style={{ fontFamily: 'Poppins' }}
      >
        Learn New Skills Anytime, Anywhere{" "}
        <LoaderPinwheel
          size={40}
          className="text-teal-600 animate-spin [animation-duration:2s]"
        />
      </h1>

      <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 text-center max-w-md sm:max-w-lg md:max-w-2xl">
        Explore our curated courses and boost your career with high-quality
        online learning.
      </p>

      {/* 🎬 Course Intro Video */}
      <div className="relative w-full max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl aspect-video mb-12 rounded-2xl overflow-hidden border border-teal-400/40 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_40px_10px_rgba(13,148,136,0.4)]">
        <div className="absolute inset-0 rounded-2xl bg-teal-600/25 blur-2xl animate-pulse opacity-80"></div>

        <iframe
          className="relative w-full h-full rounded-2xl z-10"
          src="https://www.youtube.com/embed/wHKNNpXHjns?si=e_6pmXIssvxh3C91"
          title="Course Intro Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <BuyAllCoursesOfferModal />
      </div>

      <div className="w-full flex justify-center px-2 sm:px-4 md:px-8">
        <Stats />
      </div>
    </div>
  );
}
