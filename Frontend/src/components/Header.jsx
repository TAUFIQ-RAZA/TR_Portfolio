import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Camera,
  FileText,
  Mic,
  Mail,
  User,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsOpen(false);
    navigate("/login");
  };

  const menuItems = [
    { id: "home", label: "Home", icon: <Camera size={18} /> },
    { id: "about", label: "About", icon: <User size={18} /> },
    { id: "skills", label: "Skills", icon: <Mic size={18} /> },
    { id: "projects", label: "Projects", icon: <FileText size={18} /> },
    { id: "experience", label: "Experience", icon: <FileText size={18} /> },
    { id: "contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  const handleNavClick = (id) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm px-4 py-3 sticky top-0 z-50 transition-colors duration-300 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
            <Link to="/" onClick={() => handleNavClick("home")}>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                TAUFIQ <span className="text-blue-600">RAZA</span>
              </span>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center space-x-9 text-[15px] font-bold tracking-tight text-slate-600 dark:text-slate-400">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="relative group hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 py-2"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* DESKTOP RIGHT */}
          <div className="hidden md:flex items-center gap-5">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 group shadow-inner"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={18} className="group-hover:-rotate-12 transition-transform" /> : <Sun size={18} className="group-hover:rotate-45 transition-transform" />}
            </button>

            <Link
              to="/resume"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-2xl text-sm font-extrabold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20 active:scale-95"
            >
              Resume
            </Link>

            {token ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 rounded-2xl text-sm font-extrabold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 shadow-xl active:scale-95"
              >
                <LogOut size={16} />
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 rounded-2xl text-sm font-extrabold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 shadow-xl active:scale-95"
              >
                Login
              </button>
            )}
          </div>

          {/* MOBILE TOGGLE & THEME */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              className="p-2 text-slate-900 dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="
              fixed top-[72px] right-4 left-4 z-50
              p-8
              bg-white dark:bg-slate-900
              rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800
              space-y-6
              animate-in slide-in-from-top-8 duration-500
            "
          >
            <div className="grid grid-cols-2 gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex flex-col items-center justify-center p-4 rounded-[1.5rem] bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-95 gap-2 border border-slate-100 dark:border-slate-800"
                >
                  <span className="p-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                    {React.cloneElement(item.icon, { size: 20 })}
                  </span>
                  <span className="text-xs font-black uppercase tracking-widest">{item.label}</span>
                </button>
              ))}
            </div>

            <div className="pt-4 space-y-3">
              <Link
                to="/resume"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center bg-blue-600 text-white py-4 rounded-[1.5rem] text-sm font-black uppercase tracking-widest hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
              >
                Download Resume
              </Link>

              {token ? (
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-[1.5rem] text-sm font-black uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95 shadow-xl"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/login");
                  }}
                  className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-[1.5rem] text-sm font-black uppercase tracking-widest shadow-xl"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
