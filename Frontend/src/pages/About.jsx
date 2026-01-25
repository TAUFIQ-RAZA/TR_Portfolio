import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/aboutPic.png";

function About() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="w-full min-h-screen py-24 flex items-center px-6 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group max-w-[280px] md:max-w-none mx-auto"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-2xl transition-colors duration-300 overflow-hidden">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full aspect-[4/5] object-cover rounded-xl"
            />
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
            <div className="text-3xl font-black">2+</div>
            <div className="text-xs font-bold uppercase tracking-tight">Years Exp</div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-blue-600"></span>
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">About Me</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8">
            Crafting Digital Solutions with <span className="text-blue-600">Purpose.</span>
          </h2>

          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              I am a specialized <span className="font-bold text-slate-900 dark:text-white">MERN Stack Developer</span> with a track record of building robust web applications. My focus is on creating seamless user experiences powered by efficient back-end systems.
            </p>
            <p>
              Beyond coding, I'm dedicated to staying at the forefront of technology, constantly exploring new frameworks and architectural patterns to deliver the best possible results for every project.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 my-10">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700 transition-colors duration-300">
              <h4 className="text-slate-900 dark:text-white font-bold mb-1">Modern UI/UX</h4>
              <p className="text-sm text-slate-500 dark:text-slate-500">Creating intuitive interfaces that users love.</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700 transition-colors duration-300">
              <h4 className="text-slate-900 dark:text-white font-bold mb-1">Efficient Code</h4>
              <p className="text-sm text-slate-500 dark:text-slate-500">Writing clean, maintainable, and scalable solutions.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-5">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              Contact Me
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-full font-bold hover:border-blue-600 dark:hover:border-blue-500 transition-all active:scale-95 text-center"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
