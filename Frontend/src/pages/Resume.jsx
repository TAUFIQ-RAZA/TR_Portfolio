import React from "react";

function Resume() {
  return (
    <section className="w-full min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">My Resume</h2>
          <a
            href="/resume.pdf"
            download
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Download PDF
          </a>
        </div>

        {/* Iframe */}
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="w-full h-[85vh]"
        />
      </div>
    </section>
  );
}

export default Resume;
