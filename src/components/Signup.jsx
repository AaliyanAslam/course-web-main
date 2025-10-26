// src/components/SignupPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!name || !email || !password || !confirmPass) {
      setError("Please fill all fields.");
      return;
    }
    if (password !== confirmPass) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1000)); // fake delay
      console.log("Sign Up:", { name, email, password });
      alert("🎉 Account created successfully!");
    } catch {
      setError("Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10 sm:py-16 md:py-20 lg:py-24 select-none">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        
        {/* LEFT SECTION */}
        <div className="hidden md:flex flex-col gap-6 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-500 p-1">
              <div className="bg-black h-full w-full rounded-lg flex items-center justify-center">
                <img src="/images/greentreasure.png" alt="logo" className="w-7 h-7 object-contain" />
              </div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight" style={{ fontFamily: "Poppins" }}>
                Skill<span className="text-teal-300">Nest</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">Learn. Grow. Master.</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2" style={{ fontFamily: "Poppins" }}>
              Create Your Account 🚀
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Join SkillNest and start learning new tech skills today.
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-black/60 backdrop-blur-md border mt-10 border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: "Montserrat" }}>
            Sign Up
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 mb-6" style={{ fontFamily: "Montserrat" }}>
            Create your SkillNest account to get started.
          </p>

          {error && <div className="text-sm text-red-400 mb-4">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4" style={{ fontFamily: "Montserrat" }}>
            <label className="block">
              <span className="text-xs text-gray-300">Full Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
                className="mt-1 w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </label>

            <label className="block">
              <span className="text-xs text-gray-300">Email Address</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </label>

            <label className="block relative">
              <span className="text-xs text-gray-300">Password</span>
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Create password"
                className="mt-1 w-full px-4 py-3 pr-12 rounded-xl bg-gray-800 text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <button
                type="button"
                onClick={() => setShowPass((s) => !s)}
                className="absolute right-3 top-[38px] text-xs sm:text-sm text-gray-400 hover:text-white"
              >
                {showPass ? "Hide" : "Show"}
              </button>
            </label>

            <label className="block">
              <span className="text-xs text-gray-300">Confirm Password</span>
              <input
                type={showPass ? "text" : "password"}
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                required
                placeholder="Confirm your password"
                className="mt-1 w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </label>

            <button
              type="submit"
              className="cursor-pointer w-full mt-2 inline-flex items-center justify-center gap-3 px-4 py-3 rounded-xl sm:rounded-2xl bg-teal-600 hover:bg-teal-500 active:scale-95 transition font-semibold text-white/90 text-sm sm:text-base"
              disabled={loading}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a12 12 0 00-12 12h4z" />
                </svg>
              ) : null}
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          <div className="mt-6 text-center text-xs sm:text-sm text-gray-300">or sign up with</div>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-black border border-white/10 bg-white/90 hover:bg-white/80 cursor-pointer text-sm">
              <img src="/images/google.png" alt="g" className="w-4 h-4" /> Google
            </button>
            <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-black border border-white/10 bg-white/90 hover:bg-white/80 cursor-pointer text-sm">
              <img src="/images/github.png" alt="gh" className="w-4 h-4" /> GitHub
            </button>
          </div>

          <p className="text-center text-xs sm:text-sm text-gray-400 mt-6 flex flex-wrap justify-center gap-1">
            Already have an account?{" "}
            <span
              className="text-teal-200 font-medium hover:underline cursor-pointer"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
