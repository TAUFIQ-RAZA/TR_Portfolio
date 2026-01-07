import React from "react";
import { Linkedin, Github, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <section className="min-h-[90vh] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Hi,
            <br />
            I’m <span className="text-blue-600">TAUFIQ RAZA</span>
            <br />
            <span className="text-gray-600 text-3xl md:text-4xl font-semibold">
              Full-Stack Developer
            </span>
          </h1>

          <p className="mt-5 text-gray-600 max-w-md leading-relaxed">
            I build modern, scalable, and user-friendly web applications using
            MERN Stack technologies.
          </p>

          {/* BUTTON */}
          {!token ? (
            <button
              onClick={() => navigate("/login")}
              className="mt-7 bg-blue-600 hover:bg-blue-700 transition-all duration-200 
                         px-8 py-3 rounded-full font-semibold shadow-lg text-white
                         hover:shadow-xl active:scale-95"
            >
              Explore
            </button>
          ) : (
            <button
              onClick={() => navigate("/contact")}
              className="mt-7 bg-black hover:bg-gray-900 transition-all duration-200 
                         px-8 py-3 rounded-full font-semibold shadow-lg text-white
                         hover:shadow-xl active:scale-95"
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
                className="p-2 rounded-full bg-white shadow hover:shadow-md transition"
              >
                <Linkedin className="hover:text-blue-600 transition" />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white shadow hover:shadow-md transition"
              >
                <Instagram className="hover:text-pink-500 transition" />
              </a>

              <a
                href="https://github.com/TAUFIQ-RAZA"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white shadow hover:shadow-md transition"
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
                className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-600 
                rounded-full blur-[1px]
                [clip-path:polygon(60%_0%,100%_30%,90%_70%,60%_100%,20%_90%,0%_60%,10%_20%)]"
              ></div>
            </div>

            {/* Profile Image */}
            <img
              src="/profile.png"
              alt="Profile"
              className="relative w-full h-full rounded-full object-cover 
                         bg-gray-200 border-4 border-white shadow-xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
