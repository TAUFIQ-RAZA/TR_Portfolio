import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", img: "/skills/v2_html.png", level: "95%" },
  { name: "CSS", img: "/skills/v2_css.png", level: "90%" },
  { name: "JavaScript", img: "/skills/v2_js.png", level: "85%" },
  { name: "React", img: "/skills/v2_react.png", level: "90%" },
  { name: "Node.js", img: "/skills/v2_node.png", level: "80%" },
  { name: "MongoDB", img: "/skills/v2_mongodb.png", level: "80%" },
  { name: "Tailwind CSS", img: "/skills/v2_tailwind.png", level: "95%" },
  { name: "Git & GitHub", img: "/skills/v2_git.png", level: "85%" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="container-custom section-spacing">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1.5 mb-5 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-lg">
            Technical Expertise
          </div>
          <h2 className="mb-5 font-black text-slate-900 dark:text-white">
            Mastering the <span className="text-blue-600">Digital Stack.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of the specialized tools and technologies I use to build
            performance-driven applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-full">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card-premium group p-5 md:p-6"
            >
              <div
                className="w-16 h-16 mx-auto mb-6
                           flex items-center justify-center
                           group-hover:scale-110 transition-transform duration-500"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-14 h-14 md:w-16 md:h-16 object-contain filter drop-shadow-[0_0_15px_rgba(37,99,235,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all"
                />
              </div>

              <div className="text-center">
                <h3 className="text-[15px] font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>

                {/* Progress Bar Container */}
                <div className="mt-5 flex flex-col gap-1.5">
                  <div className="flex justify-between items-end">
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Level</span>
                    <span className="text-[9px] font-black text-blue-600 dark:text-blue-400">{skill.level}</span>
                  </div>
                  <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

