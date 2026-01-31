import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const experienceData = [
  {
    type: "work",
    title: "Full Stack Developer",
    company: "P Tap Technology",
    period: "Oct 2024 – Present",
    location: "Remote/India",
    description: [
      "Built scalable MERN stack applications with React and Node.js.",
      "Developed RESTful APIs and managed MongoDB databases.",
      "Implemented AI-powered features for automation and insights.",
      "Worked in Agile teams with code reviews and deployments.",
    ],
    icon: <Briefcase className="text-blue-600" />,
    color: "blue"
  }
];

const educationData = [
  {
    type: "education",
    title: "Bachelor of Engineering",
    company: "Agdi College",
    period: "2020 – 2024",
    location: "Karnataka, India",
    description: [
      "Information Science Engineering",
      "Graduated with honors",
      "Focus on software engineering and data structures",
    ],
    stats: "CGPA: 8.0 / 10",
    icon: <GraduationCap className="text-indigo-600" />,
    color: "indigo"
  }
];

function Experience() {
  return (
    <section id="experience" className="w-full bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container-custom section-spacing">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1.5 mb-4 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-lg">
            Journey
          </div>
          <h2 className="font-black text-slate-900 dark:text-white">
            Experience & <span className="text-blue-600">Education.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-full">
          {/* Experience Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2.5 mb-8">
              <span className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600"><Briefcase size={18} /></span>
              Work Experience
            </h3>
            {experienceData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-6 border-l-2 border-slate-100 dark:border-slate-800"
              >
                <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 shadow-sm"></div>
                <div className="bg-slate-50 dark:bg-slate-800/40 p-6 md:p-7 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/10 transition-all group">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{item.title}</h4>
                    <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black rounded-lg">{item.period}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400 mb-5 uppercase tracking-wider">
                    <span className="flex items-center gap-1"><MapPin size={12} /> {item.location}</span>
                    <span className="h-1 w-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
                    <span className="text-slate-500 dark:text-slate-300">{item.company}</span>
                  </div>
                  <ul className="space-y-2.5">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-500 dark:text-slate-400 text-[13px] leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2.5 mb-8">
              <span className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600"><GraduationCap size={18} /></span>
              Education
            </h3>
            {educationData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-6 border-l-2 border-slate-100 dark:border-slate-800"
              >
                <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-900 shadow-sm"></div>
                <div className="bg-slate-50 dark:bg-slate-800/40 p-6 md:p-7 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-indigo-500/10 transition-all group">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                    <span className="px-2.5 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black rounded-lg">{item.period}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400 mb-5 uppercase tracking-wider">
                    <span className="flex items-center gap-1"><MapPin size={12} /> {item.location}</span>
                    <span className="h-1 w-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
                    <span className="text-slate-500 dark:text-slate-300">{item.company}</span>
                  </div>
                  <ul className="space-y-2.5 mb-5">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-500 dark:text-slate-400 text-[13px] leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600 shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-block px-4 py-2 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Academic Score</div>
                    <div className="text-sm font-black text-indigo-600 dark:text-indigo-400">{item.stats}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
