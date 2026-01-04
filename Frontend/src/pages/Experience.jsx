import React from "react";
import { motion } from "framer-motion";

function Experience() {
  return (
    <section
      id="experience"
      className="w-full min-h-screen bg-white dark:bg-gray-900 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Experience & Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Professional experience and academic qualification
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* EXPERIENCE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Work Experience
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              Full Stack Developer
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              P Tap Technology · Oct 2024 – Present
            </p>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
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
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Education
            </h3>

            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              Bachelor of Engineering
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              Information Science Engineering
            </p>

            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Agdi College, Karnataka
            </p>

            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Graduated: 2024
            </p>

            <p className="mt-4 text-gray-900 dark:text-white font-medium">
              CGPA: 8.0 / 10
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Experience;
