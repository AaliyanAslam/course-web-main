import "@fontsource/poppins";
import "@fontsource/montserrat";
import { Users, Target, Rocket, Star, Globe, Code, Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MoreAbout() {
    const navigate = useNavigate()
  return (
    <section
      id="about"
      className="min-h-screen text-white py-35 select-none"
      style={{ fontFamily: "Poppins" }}
    >
      {/* 🌟 Hero Section */}
      <div className="text-center py-24 px-6 relative">
        <div className="absolute inset-0 blur-3xl opacity-50 animate-pulse"></div>
        <h1 className="relative text-5xl md:text-6xl font-bold mb-6">
          About <span className="text-teal-400">SkillNest</span>
        </h1>
        <p className="relative text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          Empowering learners to master the skills of tomorrow — from coding and design
          to artificial intelligence. We believe in accessible, engaging, and practical education
          that transforms lives.
        </p>
      </div>

      {/* 🌍 Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto py-12 px-6">
        {[
          { label: "Students Enrolled", value: "25,000+" },
          { label: "Expert Mentors", value: "120+" },
          { label: "Countries Reached", value: "15+" },
          { label: "Courses Published", value: "40+" },
        ].map((item, i) => (
          <div
            key={i}
            className=" border border-teal-600/40 p-6 rounded-2xl shadow-lg hover:shadow-teal-600/30 transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-3xl font-extrabold text-teal-400">{item.value}</h3>
            <p className="text-gray-300 mt-2">{item.label}</p>
          </div>
        ))}
      </div>

      {/* 🎯 Mission and Vision */}
      <div className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gray-900/70 border border-teal-600/30 rounded-2xl p-10 shadow-lg hover:shadow-teal-600/30 transition">
          <Target className="text-teal-400 w-10 h-10 mb-4" />
          <h2 className="text-3xl font-bold mb-4 text-teal-400">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            Our mission is to make high-quality, hands-on learning accessible for everyone.
            Whether you’re a student, professional, or lifelong learner, we aim to provide you
            with the tools to learn, build, and succeed in the fast-changing digital world.
          </p>
        </div>

        <div className="bg-gray-900/70 border border-teal-600/30 rounded-2xl p-10 shadow-lg hover:shadow-teal-600/30 transition">
          <Rocket className="text-teal-400 w-10 h-10 mb-4" />
          <h2 className="text-3xl font-bold mb-4 text-teal-400">Our Vision</h2>
          <p className="text-gray-300 leading-relaxed">
            We envision a global community where knowledge has no boundaries.
            A world where learners from all backgrounds can connect, collaborate, and
            build the future using creativity and technology.
          </p>
        </div>
      </div>

      {/* 💡 Why Choose Us */}
      <div className="text-center py-16 px-6">
        <h2 className="text-4xl font-bold mb-6">
          Why <span className="text-teal-400">Choose Us?</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          We stand out because we combine innovative teaching, real-world projects,
          and community-driven learning.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
              <card.icon className="text-teal-400 w-10 h-10 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-teal-400">{card.title}</h3>
              <p className="text-gray-300 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 👩‍🏫 Team Section */}
   <div className="py-20 mt-10 text-white" style={{ fontFamily: "Poppins" }}>
  <h2 className="text-4xl font-bold text-center mb-12">
    Meet Our <span className="text-teal-400">Team</span>
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
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
        {/* 👤 Image */}
        <img
          src={member.img}
          alt={member.name}
          className="w-28 h-28 mx-auto rounded-full object-cover border-2 border-teal-500 mb-4"
        />

        {/* 🧠 Name */}
        <h3 className="text-xl font-semibold text-teal-400">{member.name}</h3>

        {/* 💼 Role */}
        <p className="text-gray-400 text-sm mb-3">{member.role}</p>

        {/* 🇺🇸 Country Badge */}
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-teal-600/20 text-teal-300 border border-teal-500/40 rounded-full">
          {member.country}
        </span>
      </div>
    ))}
  </div>
</div>


      {/* 🌐 Footer CTA */}
      <div className="text-center py-16 ">
        <h3 className="text-3xl font-semibold mb-4">
          Join the <span className="text-teal-400">TechSpark Revolution</span>
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Whether you're a beginner or a professional, start your journey with us and
          shape the future of technology.
        </p>
        <button onClick={()=> {
            navigate("/all-courses")
        }} className="bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-lg font-semibold transition cursor-pointer">
          Explore Our Courses
        </button>
      </div>
    </section>
  );
}
