import "@fontsource/poppins";
import "@fontsource/roboto";
import "@fontsource/montserrat";
import { useNavigate } from "react-router-dom";
import JoinCommunityModal from "./JoinOurCommunity";

export default function About() {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="text-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col items-center justify-center text-center select-none"
      style={{ fontFamily: "Poppins" }}
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
        About <span className="text-teal-400">SkillNest</span>
      </h2>

      {/* Description */}
      <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-md sm:max-w-2xl md:max-w-3xl mb-10 leading-relaxed px-2 sm:px-4">
        SkillNest is an innovative online learning platform dedicated to helping
        students, professionals, and creators master high-demand skills.  
        We focus on practical, project-based learning experiences that empower
        you to grow your career and achieve your goals — anytime, anywhere.{" "}
        <span className="ml-2 sm:ml-5 hover:text-teal-600 cursor-pointer">
          See more...
        </span>
      </p>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-md sm:max-w-3xl md:max-w-5xl mt-6 sm:mt-10 w-full px-4">
        {[
          { id: 1, value: "250K+", label: "Students Taught" },
          { id: 2, value: "20+", label: "Expert Instructors" },
          { id: 3, value: "595K+", label: "YouTube Subscribers" },
        ].map((item) => (
          <div
            key={item.id}
            className="bg-gray-800/50 rounded-2xl p-6 sm:p-8 hover:bg-gray-800/80 transition border border-teal-200/20 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_40px_10px_rgba(13,148,136,0.2)] flex flex-col items-center justify-center"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-400">
              {item.value}
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mt-2 sm:mt-3">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mt-10 sm:mt-12">
        <JoinCommunityModal />

        <button
          onClick={() => {
            navigate("/more-about-us");
          }}
          className="bg-teal-600 hover:bg-teal-700 px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold transition cursor-pointer hover:shadow-[0_0_25px_rgba(13,148,136,0.8)]"
        >
          More About Us
        </button>
      </div>
    </section>
  );
}
