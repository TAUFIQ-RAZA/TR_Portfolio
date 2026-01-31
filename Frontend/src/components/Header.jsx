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
      <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-colors duration-300 border-b border-slate-100 dark:border-slate-800">
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
                  className="relative group hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 py-1.5"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-0 h-[1.5px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* DESKTOP RIGHT */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 group"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={16} className="group-hover:-rotate-12 transition-transform" /> : <Sun size={16} className="group-hover:rotate-45 transition-transform" />}
            </button>

            <Link
              to="/resume"
              className="bg-blue-600 text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-sm"
            >
              Resume
            </Link>

            {token ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2 rounded-xl text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all active:scale-95"
              >
                <LogOut size={14} />
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2 rounded-xl text-xs font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all active:scale-95"
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
              fixed top-1/2 -translate-y-1/2 right-4 h-auto max-h-[75vh] w-[260px] z-50
              p-5 pt-14
              bg-white dark:bg-slate-900
              shadow-2xl border border-slate-100 dark:border-slate-800 rounded-[2.5rem]
              flex flex-col gap-1.5
              animate-in fade-in zoom-in-95 duration-300
            "
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col gap-1.5">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center gap-3 p-2.5 min-h-[44px] w-full rounded-xl bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-95 border border-slate-100 dark:border-slate-800"
                >
                  <span className="p-1.5 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                    {React.cloneElement(item.icon, { size: 16 })}
                  </span>
                  <span className="text-[12px] font-bold uppercase tracking-widest">{item.label}</span>
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <Link
                to="/resume"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center bg-blue-600 text-white min-h-[44px] w-full rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all active:scale-95 shadow-md shadow-blue-500/10"
              >
                Resume
              </Link>

              {token ? (
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 min-h-[44px] rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all active:scale-95 shadow-md"
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
                  className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 min-h-[44px] rounded-xl text-[11px] font-black uppercase tracking-widest shadow-md"
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
