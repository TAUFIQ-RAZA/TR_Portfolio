import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "P Tap School Management System",
    desc: "Smart school management system to manage students, teachers, attendance, and academic records with role-based dashboards and AI insights.",
    tech: "React, Node.js, Express.js, MongoDB, AI",
    code: "https://github.com/TAUFIQ-RAZA",
    live: "#",
    img: "/projects/ptap-school.png",
  },
  {
    title: "AI Resume Analyzer",
    desc: "AI-powered system that analyzes resumes against job descriptions and provides skill match scores and improvement suggestions.",
    tech: "React, Node.js, MongoDB, AI",
    code: "https://github.com/TAUFIQ-RAZA",
    live: "#",
    img: "/projects/resume-analyzer.png",
  },
  {
    title: "AI Medical Assistant",
    desc: "AI-based medical assistant that provides preliminary health guidance based on user symptoms with secure data handling.",
    tech: "React, Node.js, MongoDB, AI",
    code: "https://github.com/TAUFIQ-RAZA",
    live: "#",
    img: "/projects/medical-ai.png",
  },
  {
    title: "AI Deepfake Detection System",
    desc: "Award-winning academic project that detects deepfake videos using AI-based analysis techniques.",
    tech: "AI, Python, Machine Learning",
    code: "https://github.com/TAUFIQ-RAZA",
    live: "#",
    img: "/projects/deepfake.png",
  },
  {
    title: "Personal Portfolio Website",
    desc: "Responsive personal portfolio to showcase skills, projects, and contact information with modern UI design.",
    tech: "React, Tailwind CSS",
    code: "https://github.com/TAUFIQ-RAZA",
    live: "#",
    img: "/projects/portfolio.png",
  },
  {
    title: "City School",
    desc: "Currently Working On this project",
    tech: "Node.js, Express.js, MongoDB, JWT",
    code: "https://github.com/TAUFIQ-RAZA",
    live: "#",
    img: "/projects/mern-api.png",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-white dark:bg-gray-900 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Projects based on real-world experience and learning
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-44 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {project.desc}
                </p>

                <p className="text-sm text-blue-600 mb-4">
                  {project.tech}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm"
                  >
                    <Github size={16} /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-black dark:border-white text-black dark:text-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition text-sm"
                  >
                    <ExternalLink size={16} /> Run
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
