import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", img: "/skills/HTML.jpg", level: "95%" },
  { name: "CSS", img: "/skills/CSS.webp", level: "90%" },
  { name: "JavaScript", img: "/skills/JS.png", level: "85%" },
  { name: "React", img: "/skills/REACT.png", level: "90%" },
  { name: "Node.js", img: "/skills/NODEJS.jpg", level: "80%" },
  { name: "MongoDB", img: "/skills/MongoDB.jpg", level: "80%" },
  { name: "Tailwind CSS", img: "/skills/TailwindCss.jpeg", level: "95%" },
  { name: "Git & GitHub", img: "/skills/github.jpg", level: "85%" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
            Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Technical <span className="text-blue-600">Profiency.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I specialize in to build high-performance applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-blue-600/30 dark:hover:border-blue-500/30 transition-all duration-300"
            >
              <div
                className="w-24 h-24 mx-auto mb-6 rounded-2xl 
                           bg-slate-50 dark:bg-slate-800 
                           flex items-center justify-center
                           group-hover:scale-110 transition-transform duration-500 overflow-hidden shadow-inner"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-16 h-16 object-contain filter group-hover:drop-shadow-lg"
                />
              </div>

              <div className="text-center">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>
                {/* Micro-Progress Bar */}
                <div className="mt-4 h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                    className="h-full bg-blue-600"
                  ></motion.div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 mt-2 block uppercase tracking-tighter">Skill Level: {skill.level}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
