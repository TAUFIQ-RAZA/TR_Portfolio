import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, ArrowRight } from "lucide-react";

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
    <section id="projects" className="w-full bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container-custom section-spacing">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1.5 mb-5 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-lg">
            Selected Works
          </div>
          <h2 className="mb-5 font-black text-slate-900 dark:text-white">
            Engineering <span className="text-blue-600">Impactful Projects.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A selection of my recent full-stack applications and AI-driven solutions
            designed to solve real-world problems.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium group overflow-hidden h-full flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <a href={project.code} target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 shadow-xl">
                    <Github size={18} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75 shadow-xl">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 py-1 px-2.5 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-2">
                  {project.desc}
                </p>

                <div className="flex items-center justify-between pt-5 border-t border-slate-100 dark:border-slate-800 mt-auto">
                  <a href={project.code} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-blue-600 transition">
                    <Code2 size={16} /> Source
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-xs font-bold text-blue-600 hover:text-blue-700 transition flex items-center gap-1.5 group/btn">
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

export default Projects;

