import React, { useState, useEffect } from "react";
import { loginUser } from "../service/authService";
import { useNavigate, Link } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import { motion } from "framer-motion";
import { Mail, Lock, LogIn, ArrowRight } from "lucide-react";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const data = await loginUser(formData);

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        setError(data.message || "Login failed. Check your credentials.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white dark:bg-slate-900 p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative z-10 overflow-hidden"
      >
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full"></div>

        <div className="absolute top-6 left-6">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors group/home">
            <span className="p-2 bg-slate-50 dark:bg-slate-800 rounded-xl group-hover/home:bg-blue-50 dark:group-hover/home:bg-blue-900/30 transition-colors">
              <LogIn className="rotate-180" size={18} />
            </span>
            <span className="text-xs font-black uppercase tracking-widest hidden sm:inline">Back</span>
          </Link>
        </div>

        <div className="relative z-10 text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl mb-6 shadow-inner">
            <LogIn size={32} />
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-bold uppercase tracking-widest">
            Enter your credentials
          </p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600 dark:text-red-400 text-sm mb-6 text-center bg-red-50 dark:bg-red-900/20 py-3 px-4 rounded-2xl font-bold border border-red-100 dark:border-red-900/30"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">
              Email Address
            </label>
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                <Mail size={18} />
              </span>
              <input
                type="email"
                name="email"
                placeholder="hello@example.com"
                className="w-full pl-12 pr-6 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 font-medium"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">
              Password
            </label>
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                <Lock size={18} />
              </span>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full pl-12 pr-6 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 font-medium"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button
            disabled={isLoading}
            className="w-full group flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-[1.5rem] font-black shadow-xl shadow-blue-600/20 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? "Logging in..." : (
              <>
                Let's Go
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <p className="text-sm text-center mt-8 text-slate-500 dark:text-slate-400 font-bold">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors underline decoration-2 underline-offset-4"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
