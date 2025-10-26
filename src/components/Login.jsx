// src/components/LoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 800));
      console.log("submit", { email, password });
    } catch (err) {
      setError("Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 md:py-0 select-none">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Branding / Illustration */}
        <div className="hidden md:flex flex-col gap-6 px-6 lg:px-8">
          <div className="flex items-center gap-3" style={{ fontFamily: "Poppins" }}>
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-teal-400 to-teal-500 p-1">
              <div className="bg-black h-full w-full rounded-lg flex items-center justify-center">
                <img src="/images/greentreasure.png" alt="logo" className="w-7 h-7 object-contain" />
              </div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight" style={{ fontFamily: "Poppins" }}>
                Skill<span className="text-teal-300">Nest</span>
              </h3>
              <p className="text-sm text-gray-300">Learn. Grow. Master.</p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2" style={{ fontFamily: "Poppins" }}>
              Welcome back 👋
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              Sign in to continue learning with SkillNest. New here?{" "}
              <span
                onClick={() => {
                  navigate("/signup");
                }}
                className="text-teal-200 font-medium cursor-pointer hover:underline"
              >
                Create an account
              </span>
            </p>
          </div>
        </div>

        {/* Right: Card */}
        <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-3xl mt-12 p-6 sm:p-8 shadow-2xl">
          <h1
            className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2"
            style={{ fontFamily: "montserrat" }}
          >
            Sign in
          </h1>
          <p className="text-sm sm:text-base text-gray-300 mb-6" style={{ fontFamily: "montserrat" }}>
            Enter your credentials to access your dashboard.
          </p>

          {error && <div className="text-sm text-red-400 mb-4">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4" style={{ fontFamily: "montserrat" }}>
            <label className="block">
              <span className="text-xs text-gray-300">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="you@example.com"
              />
            </label>

            <label className="block relative">
              <span className="text-xs text-gray-300">Password</span>
              <input
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 w-full px-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 pr-12"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPass((s) => !s)}
                className="absolute right-3 top-[38px] text-sm text-gray-400 hover:text-white"
              >
                {showPass ? "Hide" : "Show"}
              </button>
            </label>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-gray-300">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-600 bg-gray-700" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-teal-200 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full mt-2 inline-flex items-center justify-center gap-3 px-4 py-3 rounded-2xl bg-teal-600 hover:bg-teal-500 active:scale-95 transition font-semibold text-white/90"
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin [animation-duration:0.8s] h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a12 12 0 00-12 12h4z"
                  />
                </svg>
              ) : null}
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-300">or continue with</div>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-black border border-white/10 bg-white/90 hover:bg-white/80 cursor-pointer">
              <img src="/images/google.png" alt="g" className="w-4 h-4" /> Google
            </button>
            <button className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-black border border-white/10 bg-white/90 hover:bg-white/80 cursor-pointer">
              <img src="/images/github.png" alt="gh" className="w-4 h-4" /> GitHub
            </button>
          </div>

          <p className="text-center text-sm text-gray-400 mt-6 flex justify-center flex-wrap gap-1">
            Don't have an account?
            <span
              className="text-teal-200 font-medium cursor-pointer hover:underline"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
