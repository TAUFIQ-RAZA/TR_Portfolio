import React from "react";
import { motion } from "framer-motion";

// skill data (easy to maintain)
const skills = [
  { name: "HTML", img: "/skills/HTML.jpg" },
  { name: "CSS", img: "/skills/CSS.webp" },
  { name: "JavaScript", img: "/skills/JS.png" },
  { name: "React", img: "/skills/REACT.png" },
  { name: "Node.js", img: "/skills/NODEJS.jpg" },
  { name: "MongoDB", img: "/skills/MongoDB.jpg" },
  { name: "Tailwind CSS", img: "/skills/TailwindCss.jpeg" },
  { name: "Git & GitHub", img: "/skills/github.jpg" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="w-full min-h-screen 
                 bg-gradient-to-br from-gray-50 to-gray-100 
                 dark:from-gray-900 dark:to-gray-800 
                 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            My Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg">
            Technologies I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="group bg-white dark:bg-gray-800 
                         rounded-2xl shadow-xl p-7 
                         flex flex-col items-center cursor-pointer
                         transition-all duration-200
                         hover:shadow-2xl"
            >
              {/* Icon wrapper */}
              <div
                className="w-20 h-20 mb-4 rounded-full 
                           bg-gray-100 dark:bg-gray-700 
                           flex items-center justify-center
                           group-hover:scale-110 transition"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
