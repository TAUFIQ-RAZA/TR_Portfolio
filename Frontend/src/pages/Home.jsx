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
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-blue-600 uppercase bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
            Available for Projects
          </div>

          <h1 className="text-[2.75rem] md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
            Transforming Ideas into <span className="text-blue-600">Reality.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-medium">
            Hi, I’m <span className="font-bold text-slate-900 dark:text-white">TAUFIQ RAZA</span>,
            a Full-Stack Developer specializing in building exceptional digital experiences
            with the MERN stack.
          </p>

          <div className="flex flex-wrap gap-6 mt-10">
            <button
              onClick={scrollToContact}
              className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-blue-500/20 transition-all active:scale-95"
            >
              Get in Touch
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("projects");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all active:scale-95"
            >
              View Work
            </button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-12">
            {[
              { href: "http://www.linkedin.com/in/taufiq-raza/", icon: <Linkedin />, color: "hover:text-blue-600" },
              { href: "https://github.com/TAUFIQ-RAZA", icon: <Github />, color: "hover:text-black dark:hover:text-white" },
              { href: "https://www.instagram.com", icon: <Instagram />, color: "hover:text-pink-500" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`p-3 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 shadow-sm border border-slate-100 dark:border-slate-700 transition ${social.color} hover:shadow-md`}
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
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            {/* Background Decorations */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>

            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2.5rem] rotate-6 opacity-10"></div>
            <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 rounded-[2.5rem] -rotate-3 transition-colors duration-300"></div>

            {/* Profile Image */}
            <img
              src="/profile.png"
              alt="Taufiq Raza"
              className="relative w-full h-full object-cover rounded-[2.5rem] border-4 border-white dark:border-slate-700 shadow-2xl z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
