import "@fontsource/poppins";
import "@fontsource/montserrat";
import { Users, Target, Rocket, Star, Globe, Code, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MoreAbout() {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="min-h-screen text-white py-20 px-4 sm:px-6 lg:px-10 xl:px-16 select-none"
      style={{ fontFamily: "Poppins" }}
    >
      {/* 🌟 Hero Section */}
      <div className="text-center py-16 sm:py-20 md:py-24 relative">
        <div className="absolute inset-0 blur-3xl opacity-50 animate-pulse"></div>
        <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          About <span className="text-teal-400">SkillNest</span>
        </h1>
        <p className="relative text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-2 sm:px-0">
          Empowering learners to master the skills of tomorrow — from coding and design
          to artificial intelligence. We believe in accessible, engaging, and practical
          education that transforms lives.
        </p>
      </div>

      {/* 🌍 Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center max-w-6xl mx-auto py-10 sm:py-12">
        {[
          { label: "Students Enrolled", value: "25,000+" },
          { label: "Expert Mentors", value: "120+" },
          { label: "Countries Reached", value: "15+" },
          { label: "Courses Published", value: "40+" },
        ].map((item, i) => (
          <div
            key={i}
            className="border border-teal-600/40 p-6 rounded-2xl shadow-lg hover:shadow-teal-600/30 transition-transform duration-300 hover:scale-105 bg-gray-900/60"
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-teal-400">
              {item.value}
            </h3>
            <p className="text-gray-300 mt-2 text-sm sm:text-base">{item.label}</p>
          </div>
        ))}
      </div>

      {/* 🎯 Mission and Vision */}
      <div className="max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        <div className="bg-gray-900/70 border border-teal-600/30 rounded-2xl p-6 sm:p-10 shadow-lg hover:shadow-teal-600/30 transition">
          <Target className="text-teal-400 w-8 h-8 sm:w-10 sm:h-10 mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-teal-400">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Our mission is to make high-quality, hands-on learning accessible for everyone.
            Whether you’re a student, professional, or lifelong learner, we aim to provide you
            with the tools to learn, build, and succeed in the fast-changing digital world.
          </p>
        </div>

        <div className="bg-gray-900/70 border border-teal-600/30 rounded-2xl p-6 sm:p-10 shadow-lg hover:shadow-teal-600/30 transition">
          <Rocket className="text-teal-400 w-8 h-8 sm:w-10 sm:h-10 mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-teal-400">
            Our Vision
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            We envision a global community where knowledge has no boundaries.
            A world where learners from all backgrounds can connect, collaborate, and
            build the future using creativity and technology.
          </p>
        </div>
      </div>

      {/* 💡 Why Choose Us */}
      <div className="text-center py-14 sm:py-16 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
          Why <span className="text-teal-400">Choose Us?</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 sm:mb-12 text-sm sm:text-base">
          We stand out because we combine innovative teaching, real-world projects,
          and community-driven learning.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {[
            { icon: Brain, title: "AI-Powered Learning", desc: "Smart, adaptive content personalized to your pace." },
            { icon: Code, title: "Project-Based Courses", desc: "Build real-world projects guided by industry mentors." },
            { icon: Users, title: "Supportive Community", desc: "Collaborate and grow with thousands of learners." },
            { icon: Star, title: "Expert Mentorship", desc: "Learn from professionals who’ve done it in the field." },
            { icon: Rocket, title: "Career Growth Focused", desc: "Job-ready paths to help you land your dream role." },
            { icon: Globe, title: "Global Network", desc: "Join an international community of tech enthusiasts." },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-gray-900/70 border border-teal-600/30 p-6 rounded-2xl hover:shadow-[0_0_25px_rgba(13,148,136,0.5)] transition-transform hover:scale-105"
            >
              <card.icon className="text-teal-400 w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4 mx-auto" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-teal-400">
                {card.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 👩‍🏫 Team Section */}
      <div className="py-16 sm:py-20 mt-6 sm:mt-10 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          Meet Our <span className="text-teal-400">Team</span>
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-10 max-w-6xl mx-auto px-4 sm:px-6">
          {[
            { name: "Michael Carter", role: "Founder & CEO", country: "USA", img: "/images/michel.png" },
            { name: "Emily Johnson", role: "Head of Design", country: "UK", img: "/images/emly.png" },
            { name: "David Brown", role: "Lead Developer", country: "UK", img: "/images/david.png" },
            { name: "Olivia Martinez", role: "AI Researcher", country: "USA", img: "/images/olivia.png" },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-gray-900/70 border border-teal-600/30 rounded-2xl p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_25px_rgba(13,148,136,0.4)]"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full object-cover border-2 border-teal-500 mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-teal-400">
                {member.name}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">{member.role}</p>
              <span className="inline-block px-3 py-1 text-[10px] sm:text-xs font-semibold bg-teal-600/20 text-teal-300 border border-teal-500/40 rounded-full">
                {member.country}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 🌐 Footer CTA */}
      <div className="text-center py-12 sm:py-16 px-4 sm:px-6">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">
          Join the <span className="text-teal-400">TechSpark Revolution</span>
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
          Whether you're a beginner or a professional, start your journey with us and
          shape the future of technology.
        </p>
        <button
          onClick={() => navigate("/all-courses")}
          className="bg-teal-600 hover:bg-teal-700 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition cursor-pointer text-sm sm:text-base"
        >
          Explore Our Courses
        </button>
      </div>
    </section>
  );
}
