import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Camera,
  FileText,
  Mic,
  Mail,
  User,
  LogOut,
} from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsOpen(false);
    navigate("/login");
  };

  const menuItems = [
    { path: "/", label: "Home", icon: <Camera size={18} /> },
    { path: "/about", label: "About", icon: <User size={18} /> },
    { path: "/projects", label: "Projects", icon: <FileText size={18} /> },
    { path: "/skills", label: "Skills", icon: <Mic size={18} /> },
    { path: "/contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm px-4 py-2 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            <Link to='/'>
            <span className="text-lg font-bold tracking-wide text-gray-800">
              TAUFIQ RAZA
            </span>
            </Link>
          </div>

          {/* BEFORE LOGIN */}
          {!token && (
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
            >
              Login
            </button>
          )}

          {/* AFTER LOGIN */}
          {token && (
            <>
              {/* -------- DESKTOP MENU -------- */}
              <ul className="hidden md:flex items-center space-x-7 text-sm font-medium text-gray-700">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="relative group hover:text-blue-600 transition"
                    >
                      {item.label}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* -------- DESKTOP RIGHT -------- */}
              <div className="hidden md:flex items-center gap-3">
                <Link
                  to="/resume"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                >
                  Resume
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-black transition"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>

              {/* -------- MOBILE TOGGLE -------- */}
              <button
                className="md:hidden text-gray-800"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </>
          )}
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {token && isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Floating Menu */}
          <div
            className="
              fixed top-20 right-4 z-50
              w-72 p-5
              bg-slate-900 text-white
              rounded-2xl shadow-2xl
              space-y-4
              animate-[fadeIn_0.2s_ease-out]
            "
          >
            {/* NAV LINKS */}
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-sm hover:text-blue-400 transition"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}

            <div className="border-t border-gray-700 pt-4 space-y-3">
              {/* RESUME */}
              <Link
                to="/resume"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-blue-600 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
              >
                Resume
              </Link>

              {/* LOGOUT  ✅ FIXED */}
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 bg-red-600 py-2 rounded-lg text-sm hover:bg-red-700 transition"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
