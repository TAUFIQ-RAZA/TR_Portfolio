import React from "react";

function Resume() {
  return (
    <section className="w-full min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">

        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">My Resume</h2>

          <a
            href="/resume.pdf"
            download
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Download PDF
          </a>
        </div>

        {/* Resume Viewer */}
        <div className="w-full">

          {/* Desktop / Tablet View */}
          <iframe
            src="/resume.pdf"
            title="Resume Desktop"
            className="
              hidden sm:block
              w-full
              h-[80vh] md:h-[85vh]
              border-0
            "
          />

          {/* Mobile View */}
          <iframe
            src="/resume.pdf#view=FitH"
            title="Resume Mobile"
            className="
              block sm:hidden
              w-full
              h-[100vh]
              border-0
            "
          />

        </div>

      </div>
    </section>
  );
}

export default Resume;
