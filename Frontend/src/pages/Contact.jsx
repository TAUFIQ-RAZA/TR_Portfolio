import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

function Contact() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!token) {
      setStatus("Please login to send a message.");
      navigate("/login");
      return;
    }

    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    setStatus("Sending...");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          contact_info: form.contact,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setForm({ name: "", contact: "", subject: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("❌ Failed to send. Try again later.");
        }
      );
  };

  return (
    <section id="contact" className="w-full py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
            Connection
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
            Let's <span className="text-blue-600">Connect.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 text-lg max-w-xl mx-auto">
            Ready to start a new project or just want to say hi? Reach out and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Contact Information</h3>
              <p className="text-slate-500 dark:text-slate-400">Feel free to reach out via any of these channels. I'm always open to discussing new projects or creative ideas.</p>
            </div>

            <div className="space-y-4">
              {[
                { icon: <Mail />, label: "Email", value: "taufiq.dev2025@gmail.com", href: "mailto:taufiq.dev2025@gmail.com" },
                { icon: <Phone />, label: "Phone", value: "+91 76763 56614", href: "tel:+917676356614" },
                { icon: <MapPin />, label: "Location", value: "Karnataka, India", href: "#" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">{item.label}</div>
                    <a href={item.href} className="text-slate-900 dark:text-white font-bold hover:text-blue-600 transition-colors">{item.value}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="relative bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden">
              {/* Decorative Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full"></div>

              {!token && (
                <div className="absolute inset-0 z-20 backdrop-blur-[2px] bg-white/10 dark:bg-slate-900/10 flex flex-col items-center justify-center p-8 text-center">
                  <div className="p-6 bg-white dark:bg-slate-800 rounded-full shadow-2xl mb-6 relative">
                    <Lock className="text-blue-600" size={40} />
                    <div className="absolute -inset-2 border-2 border-blue-600/20 rounded-full animate-ping"></div>
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-3">Authentication Required</h4>
                  <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xs">To prevent spam, please login before sending a message.</p>
                  <button
                    onClick={() => navigate("/login")}
                    className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-4 rounded-full font-black shadow-xl hover:shadow-blue-500/20 transition-all active:scale-95"
                  >
                    Login to Continue
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className={`space-y-6 ${!token ? 'opacity-20 pointer-events-none grayscale' : ''}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Email / Phone</label>
                    <input
                      type="text"
                      name="contact"
                      value={form.contact}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-2xl text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    placeholder="How can I help you today?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black shadow-xl hover:shadow-blue-600/20 transition-all active:scale-95"
                >
                  🚀 Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                {status && (
                  <div className={`text-center p-4 rounded-xl text-sm font-bold ${status.includes('✅') ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'bg-red-100 dark:bg-red-900/30 text-red-600'}`}>
                    {status}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
