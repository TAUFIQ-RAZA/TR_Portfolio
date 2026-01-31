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
      <nav className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-sm fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b border-slate-200/50 dark:border-slate-700/30">
        <div className="container-custom py-2 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-6 h-6 rounded-full" />
            <Link to="/" onClick={() => handleNavClick("home")}>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                TAUFIQ <span className="text-blue-600">RAZA</span>
              </span>
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center space-x-7 text-[14px] font-bold tracking-tight text-slate-500 dark:text-slate-400">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="relative group hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 ease-in-out py-1.5 active:scale-[0.98] motion-reduce:transition-none"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 ease-in-out group-hover:w-full shadow-sm group-hover:shadow-blue-500/50"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* DESKTOP RIGHT */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 ease-in-out group active:scale-[0.98] motion-reduce:transition-none"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={16} className="group-hover:-rotate-12 transition-transform duration-300" /> : <Sun size={16} className="group-hover:rotate-45 transition-transform duration-300" />}
            </button>

            <Link
              to="/resume"
              className="bg-blue-600 text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300 ease-in-out active:scale-[0.98] shadow-sm motion-reduce:transition-none"
            >
              Resume
            </Link>

            {token ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2 rounded-xl text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-100 hover:shadow-md transition-all duration-300 ease-in-out active:scale-[0.98] motion-reduce:transition-none"
              >
                <LogOut size={14} />
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2 rounded-xl text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-100 hover:shadow-md transition-all duration-300 ease-in-out active:scale-[0.98] motion-reduce:transition-none"
              >
                Login
              </button>
            )}
          </div>


          {/* MOBILE TOGGLE & THEME */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all active:scale-[0.98] motion-reduce:transition-none"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              className="p-2 text-slate-900 dark:text-white active:scale-[0.98] motion-reduce:transition-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <Menu size={28} />
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
              fixed top-4 right-4 w-[280px] max-w-[calc(100vw-2rem)] max-h-[85vh] z-50
              p-5 pt-12
              bg-white/95 dark:bg-slate-900/95
              backdrop-blur-lg
              shadow-2xl border border-white/20 dark:border-slate-700/30 rounded-2xl
              flex flex-col gap-2
              animate-in fade-in zoom-in-95 duration-300
              motion-reduce:animate-none
            "
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 active:scale-[0.98] motion-reduce:transition-none"
              aria-label="Close Menu"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center gap-3 p-2.5 min-h-[44px] w-full rounded-xl bg-slate-50/50 dark:bg-slate-800/30 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/30 transition-all duration-200 ease-in-out active:scale-[0.98] border border-slate-100/50 dark:border-slate-800/50 motion-reduce:transition-none"
                >
                  <span className="p-1.5 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                    {React.cloneElement(item.icon, { size: 16 })}
                  </span>
                  <span className="text-[12px] font-bold uppercase tracking-widest">{item.label}</span>
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-700/30 space-y-3">
              <Link
                to="/resume"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center bg-blue-600 text-white min-h-[44px] w-full rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-200 ease-in-out active:scale-[0.98] shadow-sm motion-reduce:transition-none"
              >
                Resume
              </Link>

              {token ? (
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 min-h-[44px] rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-100 hover:shadow-md transition-all duration-200 ease-in-out active:scale-[0.98] shadow-md motion-reduce:transition-none"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/login");
                  }}
                  className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 min-h-[44px] rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-100 hover:shadow-md transition-all duration-200 ease-in-out active:scale-[0.98] shadow-md motion-reduce:transition-none"
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
