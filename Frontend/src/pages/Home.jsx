import React from "react";
import { Linkedin, Github, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <section className="min-h-[90vh] bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Hi,
            <br />
            I’m <span className="text-blue-600">TAUFIQ RAZA</span>
            <br />
            <span className="text-gray-600 text-3xl md:text-4xl">
              Full-Stack Developer
            </span>
          </h1>

          <p className="mt-4 text-gray-600 max-w-md">
            I build modern, scalable, and user-friendly web applications using
            MERN Stack technologies.
          </p>

          {/* BUTTON */}
          {!token ? (
            <button
              onClick={() => navigate("/login")}
              className="mt-6 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full font-medium shadow-md text-white"
            >
              Explore
            </button>
          ) : (
            <button
              onClick={() => navigate("/contact")}
              className="mt-6 bg-black hover:bg-gray-900 transition px-6 py-3 rounded-full font-medium shadow-md text-white"
            >
              Contact
            </button>
          )}

          {/* SOCIAL ICONS (VISIBLE ONLY AFTER LOGIN) */}
          {token && (
            <div className="flex gap-6 mt-8 text-gray-700">
              <a
                href="http://www.linkedin.com/in/taufiq-raza/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="hover:text-blue-600 transition" />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="hover:text-pink-500 transition" />
              </a>

              <a
                href="https://github.com/TAUFIQ-RAZA"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="hover:text-gray-900 transition" />
              </a>
            </div>
          )}
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-80 md:h-80">

            {/* Blob Shape */}
            <div className="absolute inset-0">
              <div
                className="w-full h-full bg-gray-800 rounded-full
                [clip-path:polygon(60%_0%,100%_30%,90%_70%,60%_100%,20%_90%,0%_60%,10%_20%)]"
              ></div>
            </div>

            {/* Profile Image */}
            <img
              src="/profile.png"
              alt="Profile"
              className="relative w-full h-full rounded-full object-cover bg-gray-200"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
