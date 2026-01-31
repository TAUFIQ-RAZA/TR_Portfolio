import React, { useState, useEffect } from "react";
import { registerUser } from "../service/authService";
import { useNavigate, Link } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import { motion } from "framer-motion";
import { Mail, Lock, User, UserPlus, ArrowRight } from "lucide-react";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
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
      const data = await registerUser(formData);

      if (data.message === "User registered successfully") {
        navigate("/login");
      } else {
        setError(data.message || "Registration failed. Try a different email.");
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
        className="w-full max-w-sm bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative z-10 overflow-hidden"
      >
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-600/5 blur-3xl rounded-full"></div>

        <div className="absolute top-5 left-5">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors group/home">
            <span className="p-1.5 bg-slate-50 dark:bg-slate-800 rounded-lg group-hover/home:bg-blue-50 dark:group-hover/home:bg-blue-900/30 transition-colors">
              <UserPlus className="scale-x-[-1]" size={14} />
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">Back</span>
          </Link>
        </div>

        <div className="relative z-10 text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl mb-5 shadow-inner">
            <UserPlus size={24} />
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-1.5 tracking-tight">
            Create Account
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-[0.1em]">
            Join the community
          </p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-600 dark:text-red-400 text-xs mb-5 text-center bg-red-50 dark:bg-red-900/20 py-2.5 px-4 rounded-xl font-bold border border-red-100 dark:border-red-900/30"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">
              Full Name
            </label>
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                <User size={16} />
              </span>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full pl-11 pr-5 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl text-[13px] text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600/10 outline-none transition-all placeholder:text-slate-400 font-medium"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">
              Email Address
            </label>
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                <Mail size={16} />
              </span>
              <input
                type="email"
                name="email"
                placeholder="hello@example.com"
                className="w-full pl-11 pr-5 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl text-[13px] text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600/10 outline-none transition-all placeholder:text-slate-400 font-medium"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">
              Password
            </label>
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                <Lock size={16} />
              </span>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full pl-11 pr-5 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl text-[13px] text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600/10 outline-none transition-all placeholder:text-slate-400 font-medium"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button
            disabled={isLoading}
            className="w-full group flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-black shadow-lg shadow-blue-600/10 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed text-[13px]"
          >
            {isLoading ? "Starting..." : (
              <>
                Create Account
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <p className="text-[13px] text-center mt-6 text-slate-500 dark:text-slate-400 font-bold">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors underline decoration-2 underline-offset-4"
            >
              Sign In
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}

export default Register;
