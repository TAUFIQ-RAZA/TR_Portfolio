import React from "react";
import { motion } from "framer-motion";

function Experience() {
  return (
    <section
      id="experience"
      className="w-full min-h-screen 
                 bg-gradient-to-br from-white to-gray-100 
                 dark:from-gray-900 dark:to-gray-800 
                 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-18"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Experience & Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
            Professional experience and academic qualification
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* EXPERIENCE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white dark:bg-gray-800 
                       rounded-3xl shadow-xl p-9 
                       border border-gray-100 dark:border-gray-700
                       hover:shadow-2xl transition"
          >
            {/* Badge */}
            <span className="absolute -top-4 left-6 bg-blue-600 text-white 
                             text-sm font-semibold px-4 py-1 rounded-full shadow">
              Work
            </span>

            <h3 className="text-2xl font-bold text-blue-600 mb-5">
              Work Experience
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              Full Stack Developer
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-5">
              P Tap Technology · Oct 2024 – Present
            </p>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside leading-relaxed">
              <li>
                Built scalable MERN stack applications with React and Node.js.
              </li>
              <li>
                Developed RESTful APIs and managed MongoDB databases.
              </li>
              <li>
                Implemented AI-powered features for automation and insights.
              </li>
              <li>
                Worked in Agile teams with code reviews and deployments.
              </li>
            </ul>
          </motion.div>

          {/* EDUCATION CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-white dark:bg-gray-800 
                       rounded-3xl shadow-xl p-9 
                       border border-gray-100 dark:border-gray-700
                       hover:shadow-2xl transition"
          >
            {/* Badge */}
            <span className="absolute -top-4 left-6 bg-green-600 text-white 
                             text-sm font-semibold px-4 py-1 rounded-full shadow">
              Education
            </span>

            <h3 className="text-2xl font-bold text-blue-600 mb-5">
              Education
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              Bachelor of Engineering
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Information Science Engineering
            </p>

            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Agdi College, Karnataka
            </p>

            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Graduated: 2024
            </p>

            <p className="mt-5 text-gray-900 dark:text-white font-semibold text-lg">
              CGPA: 8.0 / 10
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Experience;
