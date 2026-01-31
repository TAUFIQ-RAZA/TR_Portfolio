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
    <section id="contact" className="w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="container-custom section-spacing">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3 py-1.5 mb-4 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-lg">
            Connection
          </div>
          <h2 className="font-black text-slate-900 dark:text-white">
            Let's <span className="text-blue-600">Connect.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-3 text-base md:text-lg max-w-xl mx-auto">
            Ready to start a new project or just want to say hi? Reach out and I'll get back to you soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Contact Information</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Feel free to reach out via any of these channels. I'm always open to discussing new projects or creative ideas.</p>
            </div>

            <div className="space-y-3">
              {[
                { icon: <Mail size={18} />, label: "Email", value: "taufiq.dev2025@gmail.com", href: "mailto:taufiq.dev2025@gmail.com" },
                { icon: <Phone size={18} />, label: "Phone", value: "+91 76763 56614", href: "tel:+917676356614" },
                { icon: <MapPin size={18} />, label: "Location", value: "Karnataka, India", href: "#" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">{item.label}</div>
                    <a href={item.href} className="text-[13px] text-slate-900 dark:text-white font-bold hover:text-blue-600 transition-colors">{item.value}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="relative bg-white dark:bg-slate-900 p-6 md:p-10 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden">
              {!token && (
                <div className="absolute inset-0 z-20 backdrop-blur-[2px] bg-white/10 dark:bg-slate-900/10 flex flex-col items-center justify-center p-6 text-center">
                  <div className="p-5 bg-white dark:bg-slate-800 rounded-full shadow-xl mb-5 relative">
                    <Lock className="text-blue-600" size={32} />
                    <div className="absolute -inset-2 border-2 border-blue-600/20 rounded-full animate-ping"></div>
                  </div>
                  <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">Authentication Required</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 max-w-[240px]">To prevent spam, please login before sending a message.</p>
                  <button
                    onClick={() => navigate("/login")}
                    className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-xl font-black shadow-lg hover:shadow-blue-500/10 transition-all active:scale-95 text-xs"
                  >
                    Login to Continue
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className={`space-y-5 ${!token ? 'opacity-20 pointer-events-none grayscale' : ''}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600/20 outline-none transition-all placeholder:text-slate-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Email / Phone</label>
                    <input
                      type="text"
                      name="contact"
                      value={form.contact}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600/20 outline-none transition-all placeholder:text-slate-400"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600/20 outline-none transition-all placeholder:text-slate-400"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-1">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none placeholder:text-slate-400"
                    placeholder="How can I help you today?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-black shadow-lg shadow-blue-600/10 transition-all active:scale-95 text-sm"
                >
                  🚀 Send Message
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                {status && (
                  <div className={`text-center p-3 rounded-lg text-xs font-bold ${status.includes('✅') ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'bg-red-100 dark:bg-red-900/30 text-red-600'}`}>
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
