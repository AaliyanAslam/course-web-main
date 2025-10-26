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
      className="min-h-screen py-35 px-6 text-white select-none"
      style={{ fontFamily: "Poppins" }}
    >
      {/* 🌟 Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-teal-400">Free Courses</span> to Kickstart Your Learning 🚀
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4">
          Start your journey with our beginner-friendly and totally free tech courses — no payment, no limits, just learning!
        </p>
      </div>

      {/* 📚 Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mx-10">
        {freeCourses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-900/90 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(13,148,136,0.4)] hover:scale-105 transition-transform duration-300"
          >
            {/* Thumbnail */}
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <span className="absolute top-3 right-3 bg-teal-600 text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                {course.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-white">
                {course.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{course.category}</p>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span>⏱ {course.duration}</span>
                <span>🎯 {course.level}</span>
              </div>

              <button className="cursor-pointer w-full py-2.5 bg-teal-600 hover:bg-teal-700 rounded-lg font-semibold transition-all shadow-[0_0_15px_rgba(13,148,136,0.4)] hover:shadow-[0_0_25px_rgba(13,148,136,0.6)]">
                Start Learning
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-16">
     
      </div>
    </section>
  );
}
