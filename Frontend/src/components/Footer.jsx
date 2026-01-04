import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-3">
      <div className="flex flex-col items-center justify-center gap-2">

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="mailto:taufiq@example.com"
            className="flex items-center gap-1 hover:text-white transition text-sm"
          >
            <Mail size={16} />
            Email
          </a>

          <a
            href="http://www.linkedin.com/in/taufiq-raza/"
            target="_blank"
            className="flex items-center gap-1 hover:text-white transition text-sm"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>

          <a
            href="https://github.com/TAUFIQ-RAZA"
            target="_blank"
            className="flex items-center gap-1 hover:text-white transition text-sm"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} taufiq.dev2025
        </p>

      </div>
    </footer>
  );
}

export default Footer;
