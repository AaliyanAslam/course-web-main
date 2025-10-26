import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoginPage from "./components/Login";
import Course from "./components/Course";
import About from "./components/About";
import AllCourses from "./components/AllCourses";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop"; // 👈 import
import Footer from "./components/Footer";
import MoreAbout from "./components/MoreAboutUs";
import SignupPage from "./components/Signup";
import FreeCourses from "./components/FreeCourses";

function App() {
  return (
    <>
      <ScrollToTop />
    
      {/* Navbar stays on all pages */}
      <Navbar />

      {/* Define routes */}
      <Routes>
  <Route
  path="/"
  element={
    <>
      <Hero />
      <About/>
      <Course />
      <Contact/>
    </>
  }
/>


        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/free-courses" element={<FreeCourses />} />
        <Route path="/more-about-us" element={<MoreAbout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
