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
    <section id="experience" className="w-full py-24 bg-white dark:bg-slate-900 transition-colors duration-300 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
            Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Experience & <span className="text-blue-600">Education.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3 mb-10">
              <span className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600"><Briefcase size={24} /></span>
              Work Experience
            </h3>
            {experienceData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800"
              >
                <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 shadow-sm"></div>
                <div className="bg-slate-50 dark:bg-slate-800/40 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all group">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{item.title}</h4>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full">{item.period}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-bold text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider">
                    <span className="flex items-center gap-1"><MapPin size={14} /> {item.location}</span>
                    <span className="h-1 w-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
                    <span>{item.company}</span>
                  </div>
                  <ul className="space-y-3">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-[15px] leading-relaxed">
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
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3 mb-10">
              <span className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600"><GraduationCap size={24} /></span>
              Education
            </h3>
            {educationData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800"
              >
                <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-900 shadow-sm"></div>
                <div className="bg-slate-50 dark:bg-slate-800/40 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-indigo-500/30 transition-all group">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-full">{item.period}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-bold text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider">
                    <span className="flex items-center gap-1"><MapPin size={14} /> {item.location}</span>
                    <span className="h-1 w-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
                    <span>{item.company}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-[15px] leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600 shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="inline-block p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                    <div className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Score</div>
                    <div className="text-lg font-black text-indigo-600">{item.stats}</div>
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
