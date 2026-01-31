import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Layout, Database, Terminal, Smartphone } from "lucide-react";
import profilePic from "../assets/aboutPic.png";

function About() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techStack = [
    { name: "React", icon: <Layout className="text-blue-500" /> },
    { name: "Node.js", icon: <Server className="text-green-500" /> },
    { name: "Express", icon: <Terminal className="text-slate-500" /> },
    { name: "MongoDB", icon: <Database className="text-emerald-500" /> },
    { name: "JavaScript", icon: <Code2 className="text-yellow-500" /> },
    { name: "Tailwind", icon: <Smartphone className="text-sky-400" /> },
  ];

  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Done", value: "15+" },
    { label: "Happy Clients", value: "10+" },
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="container-custom section-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-12 lg:gap-14 items-center">

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group max-w-[300px] md:max-w-[350px] lg:max-w-none mx-auto w-full"
          >
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-white dark:bg-slate-800 p-2.5 rounded-[2rem] shadow-xl overflow-hidden transition-colors border border-slate-50 dark:border-slate-800">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full aspect-[4/5] object-cover rounded-[1.5rem]"
              />
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-4 -right-4 md:-right-6 bg-blue-600 text-white p-4 md:p-5 rounded-2xl shadow-xl border-2 border-white dark:border-slate-900">
              <div className="text-2xl md:text-3xl font-black">2+</div>
              <div className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest opacity-80">Years Exp</div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-blue-600"></span>
              <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-[10px]">Who I Am</span>
            </div>

            <h2 className="mb-6 font-black text-slate-900 dark:text-white">
              Engineering <span className="text-blue-600">Full-Stack</span> Solutions That Scale.
            </h2>

            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8 max-w-xl">
              I'm <span className="text-slate-800 dark:text-white font-bold">Taufiq Raza</span>, a dedicated MERN Stack Developer.
              I specialize in architecture-first development, ensuring every line of code serves a purpose
              and every application provides a premium user experience.
            </p>

            {/* Tech Stack Grid */}
            <div className="mb-8">
              <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">Mastered Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {techStack.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800 transition-all hover:bg-white dark:hover:bg-slate-800">
                    <span className="p-1.5 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                      {React.cloneElement(tech.icon, { size: 14 })}
                    </span>
                    <span className="text-[13px] font-bold text-slate-700 dark:text-slate-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Breakdown */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-5 md:p-6 rounded-2xl bg-blue-50/50 dark:bg-blue-900/5 border border-blue-100/50 dark:border-blue-900/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xl md:text-2xl font-black text-blue-600 dark:text-blue-400 mb-0.5">{stat.value}</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95 text-sm shadow-md"
              >
                Hire Me Now
              </button>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white rounded-xl font-bold hover:border-blue-600 dark:hover:border-blue-500 transition-all active:scale-95 text-center text-sm flex items-center justify-center"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

