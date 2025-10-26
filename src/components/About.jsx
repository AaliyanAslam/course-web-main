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
      className=" text-white py-20 px-6 flex flex-col items-center justify-center text-center select-none"
      style={{ fontFamily: "Poppins" }}
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        About <span className="text-teal-400">SkillNest</span>
      </h2>

      {/* Description */}
      <p className="text-gray-300 max-w-3xl mb-10 leading-relaxed">
        SkillNest is an innovative online learning platform dedicated to helping
        students, professionals, and creators master high-demand skills.  
        We focus on practical, project-based learning experiences that empower
        you to grow your career and achieve your goals — anytime, anywhere. <span className="ml-5 hover:text-teal-600 cursor-pointer">See more...</span>
      </p>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mt-10">
        <div className="bg-gray-800/50 rounded-2xl p-8 hover:bg-gray-800/80 transition  border-teal-200/20 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_40px_10px_rgba(13,148,136,0.2)]">
          <h3 className="text-4xl font-bold text-teal-400">250K+</h3>
          <p className="text-gray-300 mt-2">Students Taught</p>
        </div>

        <div className="bg-gray-800/50 rounded-2xl p-8 hover:bg-gray-800/80 transition  border-teal-200/20 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_40px_10px_rgba(13,148,136,0.2)]">
          <h3 className="text-4xl font-bold text-teal-400">20+</h3>
          <p className="text-gray-300 mt-2">Expert Instructors</p>
        </div>

        <div className="bg-gray-800/50 rounded-2xl p-8 hover:bg-gray-800/80 transition  border-teal-200/20 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_40px_10px_rgba(13,148,136,0.2)]">
          <h3 className="text-4xl font-bold text-teal-400">595K+</h3>
          <p className="text-gray-300 mt-2">YouTube Subscribers</p>
        </div>
      </div>

      {/* CTA Button */}
      
     <div className="space-x-2">
      <JoinCommunityModal/>

       <button onClick={()=> {
        navigate("/more-about-us")
       }} className="mt-12 bg-teal-600 hover:bg-teal-700 px-10 py-3 rounded-lg font-semibold transition cursor-pointer hover:shadow-[0_0_25px_rgba(13,148,136,0.8)]">
        More About Us
      </button>

     </div>

    
    </section>
  );
}
