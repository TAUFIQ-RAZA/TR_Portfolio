import React from "react";
import { Linkedin, Github, Instagram, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <div className="inline-block px-3 py-1.5 mb-6 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-lg">
              Available for New Projects
            </div>

            <h1 className="mb-6 font-black tracking-tight text-slate-900 dark:text-white">
              Transforming Ideas into <span className="text-blue-600">Digital Reality.</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Hi, I’m <span className="font-bold text-slate-900 dark:text-white">Taufiq Raza</span>,
              a Full-Stack Developer bridging the gap between design and functionality
              with the modern MERN stack.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-10">
              <button
                onClick={scrollToContact}
                className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/10 transition-all active:scale-95 text-sm"
              >
                Get in Touch
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-8 py-3.5 rounded-xl font-bold hover:shadow-md transition-all active:scale-95 text-sm"
              >
                View My Work
              </button>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center lg:justify-start gap-3 mt-12">
              {[
                { href: "http://www.linkedin.com/in/taufiq-raza/", icon: <Linkedin size={18} />, label: "LinkedIn" },
                { href: "https://github.com/TAUFIQ-RAZA", icon: <Github size={18} />, label: "GitHub" },
                { href: "https://www.instagram.com", icon: <Instagram size={18} />, label: "Instagram" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-xl bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 shadow-sm border border-slate-100 dark:border-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[360px] md:h-[360px]">
              {/* Background Decorations */}
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-indigo-400/10 rounded-full blur-2xl animate-pulse delay-700"></div>

              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2rem] rotate-6 opacity-5"></div>
              <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-[2rem] -rotate-3 transition-colors duration-300"></div>

              {/* Profile Image */}
              <img
                src="/profile.png"
                alt="Taufiq Raza"
                className="relative w-full h-full object-cover rounded-[2rem] border-2 border-white dark:border-slate-700 shadow-xl z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

}

export default Home;

