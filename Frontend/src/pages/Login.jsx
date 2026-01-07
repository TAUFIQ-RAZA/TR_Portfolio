import React, { useState, useEffect } from "react";
import { loginUser } from "../service/authService";
import { useNavigate, Link } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-96 border border-gray-100"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Welcome Back
        </h2>

        {error && (
          <p className="text-red-600 text-sm mb-4 text-center bg-red-50 py-2 rounded">
            {error}
          </p>
        )}

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/60 transition"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-5">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/60 transition"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          className="w-full bg-black text-white py-3 rounded-lg font-semibold 
                     hover:bg-gray-800 transition duration-200 shadow-md"
        >
          Login
        </button>

        {/* Register Navigation */}
        <p className="text-sm text-center mt-5 text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-black font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
