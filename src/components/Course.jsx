import "@fontsource/poppins";
import "@fontsource/roboto";
import "@fontsource/montserrat";
import { useNavigate } from "react-router-dom";

export default function Course() {
  const navigate = useNavigate();

  const goToAllCourses = () => {
    navigate("/all-courses");
  };

  const courses = [
    {
      id: 1,
      title: "Data Science and Analytics with GenAI",
      image: "/images/datascience.png",
      language: "ENGLISH",
      status: "Coming Soon",
      price: "$99",
      oldPrice: "$210",
      discount: "46% OFF",
      tag: "COMING SOON",
      buttonText: "Coming Soon",
      buttonDisabled: true,
    },
    {
      id: 2,
      title: "Website Development With AI: Web + DSA ",
      image: "/images/websitedevelopment.png",
      language: "ENGLISH",
      batch: "LIVE BATCH",
      price: "$60 (+VAT)",
      oldPrice: "120",
      discount: "50% OFF",
      tag: "JOB READY",
      buttonText: "View Details",
      buttonDisabled: false,
    },
    {
      id: 3,
      title: "DSA Domination",
      image: "/images/dsa.png",
      language: "ENGLISH",
      batch: "LIVE BATCH",
      price: "$72 (+VAT)",
      oldPrice: "$80",
      discount: "12% OFF",
      tag: "LOGIC BUILDING",
      buttonText: "View Details",
      buttonDisabled: false,
    },
    {
      id: 4,
      title: "Job Ready AI Powered : Web + DSA ",
      image: "/images/ai.png",
      language: "ENGLISH",
      batch: "LIVE BATCH",
      price: "$70 (+VAT)",
      oldPrice: "$140",
      discount: "50% OFF",
      tag: "JOB READY",
      buttonText: "View Details",
      buttonDisabled: false,
    },
  ];

  return (
    <div
      className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 md:px-10 text-white select-none"
      style={{ fontFamily: "Poppins" }}
      id="courses"
    >
      {/* Section Header */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6">
        Explore Our <span className="text-teal-400">Courses</span>
      </h2>
      <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base md:text-lg">
        Choose from our top-rated cohorts and boost your career with real-world
        skills.
      </p>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mx-4 md:mx-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-900/90 border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-teal-500/20 transition-transform duration-300 hover:scale-105"
          >
            {/* Course Image */}
            <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              {course.tag && (
                <span className="absolute top-2 right-2 bg-teal-600 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-semibold">
                  {course.tag}
                </span>
              )}
              {course.status === "Coming Soon" && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-sm sm:text-lg font-semibold text-white bg-black/40 px-2 sm:px-3 py-1 rounded-lg">
                    Coming Soon
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 flex flex-col justify-between h-[230px] sm:h-[260px]">
              <div>
                {course.batch && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="bg-red-600 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-md font-semibold">
                      {course.batch}
                    </span>
                    <span className="bg-gray-700 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-md font-semibold">
                      {course.language}
                    </span>
                  </div>
                )}
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-white leading-snug">
                  {course.title}
                </h3>
                <p className="text-teal-400 text-xs sm:text-sm mb-1">
                  Limited Time Discount
                </p>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="text-white font-semibold">
                    {course.price}{" "}
                    <span className="text-gray-400 line-through font-normal ml-2">
                      {course.oldPrice}
                    </span>
                  </div>
                  <span className="bg-white text-black text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded font-bold">
                    {course.discount}
                  </span>
                </div>
              </div>

              <button
                disabled={course.buttonDisabled}
                className={`mt-3 sm:mt-4 w-full text-center text-white py-2 sm:py-2.5 rounded-lg font-semibold transition cursor-pointer
                ${
                  course.buttonDisabled
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-teal-600 hover:bg-teal-700"
                }`}
              >
                {course.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center py-8">
        <button
          onClick={goToAllCourses}
          className="cursor-pointer hidden md:block bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-teal-500/20 duration-300 hover:scale-105 animate-bounce"
        >
          Explore More Courses
        </button>
      </div>
    </div>
  );
}
