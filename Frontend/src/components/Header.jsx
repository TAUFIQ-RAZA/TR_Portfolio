import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Camera, FileText, Mic, Mail, User } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-800">
              TAUFIQ RAZA
            </span>
          </div>

          {/* BEFORE LOGIN */}
          {!token && (
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Login
            </button>
          )}

          {/* AFTER LOGIN */}
          {token && (
            <>
              {/* DESKTOP MENU */}
              <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
                {["/", "/about", "/skills", "/projects", "/experience", "/contact"].map(
                  (path, i) => (
                    <li key={i}>
                      <Link to={path} className="hover:text-blue-600">
                        {path === "/" ? "Home" : path.replace("/", "")}
                      </Link>
                    </li>
                  )
                )}
              </ul>

              {/* DESKTOP RIGHT */}
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  to="/resume"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Resume
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-black text-white px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              </div>

              {/* MOBILE ICON (☰ ↔ ❌) */}
              <button
                className="md:hidden text-gray-800"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </>
          )}
        </div>
      </nav>

      {/* ================= FLOATING MOBILE MENU ================= */}
      {token && isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Floating Menu */}
          <div className="fixed top-20 right-4 z-50 bg-[#0f172a] text-white rounded-2xl shadow-xl w-64 p-5 space-y-4 animate-menu-open">

            
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-4">
              <Camera size={20} /> <span>Home</span>
            </Link>

            <Link to="/about" onClick={() => setIsOpen(false)} className="flex items-center gap-4">
              <User size={20} /> <span>About</span>
            </Link>

            <Link to="/projects" onClick={() => setIsOpen(false)} className="flex items-center gap-4">
              <FileText size={20} /> <span>Projects</span>
            </Link>

            <Link to="/skills" onClick={() => setIsOpen(false)} className="flex items-center gap-4">
              <Mic size={20} /> <span>Skills</span>
            </Link>

            <Link to="/contact" onClick={() => setIsOpen(false)} className="flex items-center gap-4">
              <Mail size={20} /> <span>Contact</span>
            </Link>

            <Link
              to="/resume"
              onClick={() => setIsOpen(false)}
              className="block mt-3 text-center bg-blue-600 py-2 rounded-lg"
            >
              Resume
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
