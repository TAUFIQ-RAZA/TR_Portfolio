import React from "react";
import { Mail, Linkedin, Github, Heart } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 py-10 transition-colors duration-300">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="text-lg font-black text-slate-900 dark:text-white mb-1.5">
              TAUFIQ <span className="text-blue-600">RAZA</span>
            </div>
            <p className="text-[13px] text-slate-500 dark:text-slate-400 font-medium tracking-tight">Building digital products with passion.</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {[
              { href: "mailto:taufiq.dev2025@gmail.com", icon: <Mail size={18} />, label: "Email" },
              { href: "http://www.linkedin.com/in/taufiq-raza/", icon: <Linkedin size={18} />, label: "LinkedIn" },
              { href: "https://github.com/TAUFIQ-RAZA", icon: <Github size={18} />, label: "GitHub" },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel="noreferrer"
                className="p-2.5 bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all hover:scale-105 shadow-sm border border-slate-100 dark:border-slate-800"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center gap-1.5 text-[13px] text-slate-500 dark:text-slate-400 font-bold mb-1">
              Made with <Heart size={12} className="text-red-500 fill-red-500" /> by Taufiq
            </div>
            <p className="text-[10px] text-slate-400 dark:text-slate-600 font-black tracking-widest uppercase">
              © {currentYear} ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
