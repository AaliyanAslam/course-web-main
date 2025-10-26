// src/components/FreeCourses.jsx
import "@fontsource/poppins";
import "@fontsource/montserrat";

export default function FreeCourses() {
  const freeCourses = [
    {
      id: 1,
      title: "HTML & CSS Fundamentals",
      image: "/images/htmlcss.png",
      category: "Web Development",
      duration: "4 Hours",
      level: "Beginner",
      tag: "FREE",
    },
    {
      id: 2,
      title: "JavaScript Essentials",
      image: "/images/jsessentials.png",
      category: "Programming",
      duration: "6 Hours",
      level: "Beginner",
      tag: "FREE",
    },
    {
      id: 3,
      title: "Python for Everyone",
      image: "/images/python.png",
      category: "Data & AI",
      duration: "5 Hours",
      level: "Beginner",
      tag: "FREE",
    },
    {
      id: 4,
      title: "Tailwind CSS Crash Course",
      image: "/images/tailwindcss.png",
      category: "Frontend",
      duration: "3 Hours",
      level: "Intermediate",
      tag: "FREE",
    },
    {
      id: 5,
      title: "Introduction to Git & GitHub",
      image: "/images/gitandgithub.png",
      category: "Development Tools",
      duration: "2.5 Hours",
      level: "Beginner",
      tag: "FREE",
    },
    {
      id: 6,
      title: "Figma for UI/UX Designers",
      image: "/images/figmaintro.png",
      category: "Design",
      duration: "4.5 Hours",
      level: "Beginner",
      tag: "FREE",
    },
    {
      id: 7,
      title: "AI Prompt Engineering Basics",
      image: "/images/aitools.png",
      category: "AI & ML",
      duration: "3.5 Hours",
      level: "Beginner",
      tag: "FREE",
    },
    {
      id: 8,
      title: "SEO Fundamentals",
      image: "/images/seo.png",
      category: "Digital Marketing",
      duration: "2 Hours",
      level: "Beginner",
      tag: "FREE",
    },
    {
      id: 9,
      title: "React Basics",
      image: "/images/reactbasics.png",
      category: "Frontend",
      duration: "5 Hours",
      level: "Beginner",
      tag: "FREE",
    },
    {
      id: 10,
      title: "Database Essentials with MySQL",
      image: "/images/mysql.png",
      category: "Backend",
      duration: "6 Hours",
      level: "Intermediate",
      tag: "FREE",
    },
    {
      id: 11,
      title: "AI Tools for Productivity",
      image: "/images/aitools.png",
      category: "Productivity",
      duration: "3 Hours",
      level: "Beginner",
      tag: "FREE",
    },
    {
      id: 12,
      title: "Portfolio Building Workshop",
      image: "/images/workshop.png",
      category: "Career",
      duration: "2 Hours",
      level: "All Levels",
      tag: "FREE",
    },
  ];

  return (
    <section
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-10 text-white select-none"
      style={{ fontFamily: "Poppins" }}
    >
      {/* 🌟 Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-teal-400">Free Courses</span> to Kickstart Your Learning 🚀
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-sm sm:text-base md:text-lg">
          Start your journey with our beginner-friendly and totally free tech courses — no payment, no limits, just learning!
        </p>
      </div>

      {/* 📚 Courses Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mx-auto max-w-7xl">
        {freeCourses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col h-full bg-gray-900/90 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(13,148,136,0.4)] hover:scale-105 transition-transform duration-300"
          >
            {/* Thumbnail */}
            <div className="relative w-full h-44 sm:h-52 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <span className="absolute top-3 right-3 bg-teal-600 text-xs sm:text-sm px-3 py-1 rounded-full font-bold shadow-lg">
                {course.tag}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-4 sm:p-5 justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white leading-snug">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3">{course.category}</p>

                <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm text-gray-400 mb-4 gap-1">
                  <span>⏱ {course.duration}</span>
                  <span>🎯 {course.level}</span>
                </div>
              </div>

              <button className="cursor-pointer w-full py-2 sm:py-2.5 bg-teal-600 hover:bg-teal-700 rounded-lg font-semibold transition-all shadow-[0_0_15px_rgba(13,148,136,0.4)] hover:shadow-[0_0_25px_rgba(13,148,136,0.6)] text-sm sm:text-base">
                Start Learning
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Placeholder */}
      <div className="flex justify-center mt-16"></div>
    </section>
  );
}
