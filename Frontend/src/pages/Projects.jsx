import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "P Tap School Management System",
    desc: "Smart school management system to manage students, teachers, attendance, and academic records with role-based dashboards and AI insights.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "AI"],
    code: "https://github.com/TAUFIQ-RAZA",
    live: "#",
    img: "/projects/ptap-school.png",
  },
  {
    title: "AI Resume Analyzer",
    desc: "AI-powered system that analyzes resumes against job descriptions and provides skill match scores and improvement suggestions.",
    tech: ["React", "Node.js", "MongoDB", "AI"],
    code: "https://github.com/TAUFIQ-RAZA",
    live: "#",
    img: "/projects/resume-analyzer.png",
  },
  {
    title: "AI Medical Assistant",
    desc: "AI-based medical assistant that provides preliminary health guidance based on user symptoms with secure data handling.",
    tech: ["React", "Node.js", "MongoDB", "AI"],
    code: "https://github.com/TAUFIQ-RAZA",
    live: "#",
    img: "/projects/medical-ai.png",
  },
  {
    title: "AI Deepfake Detection",
    desc: "Award-winning academic project that detects deepfake videos using AI-based analysis techniques.",
    tech: ["AI", "Python", "Machine Learning"],
    code: "https://github.com/TAUFIQ-RAZA",
    live: "#",
    img: "/projects/deepfake.png",
  },
  {
    title: "Premium Portfolio v2",
    desc: "Responsive personal portfolio showcasing skills and projects with a modern, high-performance architecture.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    code: "https://github.com/TAUFIQ-RAZA",
    live: "#",
    img: "/projects/portfolio.png",
  },
  {
    title: "City School API",
    desc: "Backend infrastructure for school management with secure authentication and complex data models.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    code: "https://github.com/TAUFIQ-RAZA",
    live: "#",
    img: "/projects/mern-api.png",
  },
];

function Projects() {
  return (
    <section id="projects" className="w-full py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Featured <span className="text-blue-600">Projects.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
            A selection of my recent works, ranging from AI applications to complex management systems.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="flex gap-4">
                    <a href={project.code} target="_blank" rel="noreferrer" className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-white/40 transition">
                      <Github size={20} />
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="p-3 bg-blue-600 rounded-xl text-white hover:bg-blue-700 transition">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-blue-400 py-1 px-2 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                  {project.desc}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                  <a href={project.code} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition">
                    <Code2 size={16} /> Source Code
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-xs font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 transition flex items-center gap-1 group/btn">
                    Live Demo <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Added ArrowRight import needed for demo button
import { ArrowRight } from "lucide-react";

export default Projects;
