import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="min-h-screen flex flex-col">
      {!hideLayout && <Header />}

      <main className="grow">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Portfolio */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Route>

        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;
