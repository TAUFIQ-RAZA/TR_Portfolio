import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

function Contact() {
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

    // Validation
    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const isEmail = emailPattern.test(form.contact);
    if (!isEmail && isNaN(form.contact)) {
      setStatus("⚠️ Please enter a valid email or phone number.");
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
    <section
      id="contact"
      className="w-full min-h-screen 
                 bg-gradient-to-br from-white to-gray-100 
                 dark:from-gray-900 dark:to-gray-800 
                 px-6 py-20"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Contact Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
            Feel free to reach out for collaboration or opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 p-4 rounded-xl 
                            bg-white dark:bg-gray-800 shadow-md">
              <Mail className="text-blue-600" />
              <p className="text-gray-700 dark:text-gray-300">
                taufiq.dev2025@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl 
                            bg-white dark:bg-gray-800 shadow-md">
              <Phone className="text-blue-600" />
              <p className="text-gray-700 dark:text-gray-300">
                +91 76763 56614
              </p>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl 
                            bg-white dark:bg-gray-800 shadow-md">
              <MapPin className="text-blue-600" />
              <p className="text-gray-700 dark:text-gray-300">
                Karnataka, India
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 
                       p-9 rounded-3xl shadow-xl space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border 
                         border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-900 
                         text-gray-900 dark:text-white 
                         outline-none focus:ring-2 focus:ring-blue-600 
                         transition"
            />

            <input
              type="text"
              name="contact"
              placeholder="Your Email or Phone"
              value={form.contact}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border 
                         border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-900 
                         text-gray-900 dark:text-white 
                         outline-none focus:ring-2 focus:ring-blue-600 
                         transition"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border 
                         border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-900 
                         text-gray-900 dark:text-white 
                         outline-none focus:ring-2 focus:ring-blue-600 
                         transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border 
                         border-gray-300 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-900 
                         text-gray-900 dark:text-white 
                         outline-none focus:ring-2 focus:ring-blue-600 
                         transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 
                         transition-all duration-200 
                         text-white py-3 rounded-lg font-semibold 
                         shadow-md hover:shadow-lg active:scale-95"
            >
              🚀 Send Message
            </button>

            {status && (
              <p className="text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                {status}
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;
