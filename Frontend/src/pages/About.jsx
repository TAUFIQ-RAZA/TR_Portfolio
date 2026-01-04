import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/aboutPic.png"; // update path if needed

function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-white dark:bg-gray-900 flex items-center px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-72 h-72 object-cover rounded-full border-4 border-gray-300 dark:border-gray-700 shadow-xl"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg mb-5 leading-relaxed">
            I am a{" "}
            <span className="font-semibold text-black dark:text-white">
              MERN Stack Developer
            </span>{" "}
            passionate about building modern, responsive, and user-friendly web
            applications.
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
            I enjoy working with React, Node.js, MongoDB, Tailwind CSS, and
            continuously improving my skills to build scalable real-world
            projects.
          </p>

          <div className="flex gap-4">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition inline-block"
            >
              Download CV
            </a>

            <a
              href="/contact"
              className="px-6 py-3 border border-black dark:border-white text-black dark:text-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition inline-block"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
