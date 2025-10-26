import "@fontsource/poppins";
import "@fontsource/roboto";
import "@fontsource/montserrat";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import BuyAllCoursesOffer from "./BuyAllCourses";

export default function AllCourses() {
  const navigate = useNavigate()
  const courses = [
    // 🧠 Artificial Intelligence
    {
      id: 1,
      title: "AI Essentials for Beginners",
      image: "/images/ai.png",
      field: "Artificial Intelligence",
      price: "$90",
      oldPrice: "$150",
      discount: "40% OFF",
      tag: "AI BASICS",
      buttonText: "View Details",
    },
    {
      id: 2,
      title: "Machine Learning Mastery",
      image: "/images/machinelearning.png",
      field: "Artificial Intelligence",
      price: "$120",
      oldPrice: "$200",
      discount: "40% OFF",
      tag: "MACHINE LEARNING",
      buttonText: "View Details",
    },
    {
      id: 3,
      title: "Deep Learning with TensorFlow",
      image: "/images/deeplearning.png",
      field: "Artificial Intelligence",
      price: "$130",
      oldPrice: "$220",
      discount: "41% OFF",
      tag: "DEEP LEARNING",
      buttonText: "View Details",
    },
    {
      id: 4,
      title: "AI for Web Developers",
      image: "/images/aiforwebdevelopers.png",
      field: "Artificial Intelligence",
      price: "$80",
      oldPrice: "$150",
      discount: "46% OFF",
      tag: "AI + WEB",
      buttonText: "View Details",
    },

    // 💻 Web Development
    {
      id: 5,
      title: "Full Stack Development Bootcamp",
      image: "/images/websitedevelopment.png",
      field: "Web Development",
      price: "$95",
      oldPrice: "$190",
      discount: "50% OFF",
      tag: "FULL STACK",
      buttonText: "View Details",
    },
    {
      id: 6,
      title: "React + Tailwind Masterclass",
      image: "/images/reacttailwind.png",
      field: "Web Development",
      price: "$85",
      oldPrice: "$160",
      discount: "47% OFF",
      tag: "FRONTEND",
      buttonText: "View Details",
    },
    {
      id: 7,
      title: "Next.js Advanced Course",
      image: "/images/nextjsadvanced.png",
      field: "Web Development",
      price: "$100",
      oldPrice: "$200",
      discount: "50% OFF",
      tag: "ADVANCED",
      buttonText: "View Details",
    },
    {
      id: 8,
      title: "Website Automation with AI Tools",
      image: "/images/webautomation.png",
      field: "Web Development",
      price: "$110",
      oldPrice: "$180",
      discount: "39% OFF",
      tag: "AI IN WEB",
      buttonText: "View Details",
    },

    // 📊 Data Science
    {
      id: 9,
      title: "Python for Data Science",
      image: "/images/datascience.png",
      field: "Data Science",
      price: "$70",
      oldPrice: "$120",
      discount: "42% OFF",
      tag: "PYTHON",
      buttonText: "View Details",
    },
    {
      id: 10,
      title: "Data Analytics with Power BI",
      image: "/images/dataanalytics.png",
      field: "Data Science",
      price: "$80",
      oldPrice: "$140",
      discount: "43% OFF",
      tag: "ANALYTICS",
      buttonText: "View Details",
    },
    {
      id: 11,
      title: "SQL + Databases Bootcamp",
      image: "/images/sqldatabases.png",
      field: "Data Science",
      price: "$60",
      oldPrice: "$110",
      discount: "45% OFF",
      tag: "DATABASE",
      buttonText: "View Details",
    },
    {
      id: 12,
      title: "GenAI for Data Engineers",
      image: "/images/genai.png",
      field: "Data Science",
      price: "$115",
      oldPrice: "$190",
      discount: "39% OFF",
      tag: "GENAI",
      buttonText: "View Details",
    },

    // 🎨 Design & Creative
    {
      id: 13,
      title: "UI/UX Design Mastery",
      image: "/images/uiux.png",
      field: "Design",
      price: "$90",
      oldPrice: "$160",
      discount: "44% OFF",
      tag: "UI/UX",
      buttonText: "View Details",
    },
    {
      id: 14,
      title: "Figma Design for Beginners",
      image: "/images/figmadesign.png",
      field: "Design",
      price: "$55",
      oldPrice: "$100",
      discount: "45% OFF",
      tag: "FIGMA",
      buttonText: "View Details",
    },
    {
      id: 15,
      title: "3D Web Design with Blender",
      image: "/images/3dwebdesign.png",
      field: "Design",
      price: "$85",
      oldPrice: "$140",
      discount: "39% OFF",
      tag: "3D DESIGN",
      buttonText: "View Details",
    },
    {
      id: 16,
      title: "AI-Generated Design Systems",
      image: "/images/aigenerateddesign.png",
      field: "Design",
      price: "$99",
      oldPrice: "$180",
      discount: "45% OFF",
      tag: "AI DESIGN",
      buttonText: "View Details",
    },

    // 📣 Marketing
    {
      id: 17,
      title: "Digital Marketing Fundamentals",
      image: "/images/degitalmarkiting.png",
      field: "Marketing",
      price: "$65",
      oldPrice: "$110",
      discount: "41% OFF",
      tag: "DIGITAL",
      buttonText: "View Details",
    },
    {
      id: 18,
      title: "SEO Mastery Course",
      image: "/images/seocourse.png",
      field: "Marketing",
      price: "$75",
      oldPrice: "$130",
      discount: "42% OFF",
      tag: "SEO",
      buttonText: "View Details",
    },
    {
      id: 19,
      title: "Social Media Growth with AI",
      image: "/images/socialmediagrowth.png",
      field: "Marketing",
      price: "$95",
      oldPrice: "$160",
      discount: "41% OFF",
      tag: "AI MARKETING",
      buttonText: "View Details",
    },
    {
      id: 20,
      title: "YouTube Branding Strategy",
      image: "/images/ytmarket.png",
      field: "Marketing",
      price: "$80",
      oldPrice: "$140",
      discount: "43% OFF",
      tag: "BRANDING",
      buttonText: "View Details",
    },
  ];

  
  
function allPrice() {
  const total = courses.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price;
  }, 0);

  console.log("💰 Total Price:", total);
  return total;
}

  useEffect(() => {
    allPrice()
   
  }, [])
  return (
    <div
      className="min-h-screen py-35 px-6  text-white select-none "
      style={{ fontFamily: "Poppins" }}
    >
      {/* Section Header */}
    <div className="flex justify-between">
      <div></div>
      <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
        All <span className="text-teal-400">Courses</span>
      </h2>
      <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
        Browse through all our top categories and find the perfect course to boost your skills.
      </p>
      </div>
      <div>
        <BuyAllCoursesOffer/>
      </div>
    </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mx-10">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-900/90 border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-teal-500/20 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              {course.tag && (
                <span className="absolute top-2 right-2 bg-teal-600 text-xs px-3 py-1 rounded-full font-semibold">
                  {course.tag}
                </span>
              )}
            </div>

            <div className="p-5 flex flex-col justify-between h-[260px]">
              <div>
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{course.field}</p>

                <div className="flex items-center justify-between text-sm">
                  <div className="text-white font-semibold">
                    {course.price}{" "}
                    <span className="text-gray-400 line-through font-normal ml-2">
                      {course.oldPrice}
                    </span>
                  </div>
                  <span className="bg-white text-black text-xs px-2 py-0.5 rounded font-bold">
                    {course.discount}
                  </span>
                </div>
              </div>

              <button
                className="mt-4 w-full bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-lg font-semibold transition cursor-pointer"
              >
                {course.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
           <div className="flex justify-center mt-16">
        <button onClick={()=>{
          navigate("/free-courses")
        }} className="cursor-pointer bg-teal-600 hover:bg-teal-700 px-8 py-3 rounded-xl font-semibold shadow-[0_0_25px_rgba(13,148,136,0.6)] transition">
          Explore All Free Courses
        </button>
      </div>
    </div>
  );
}
