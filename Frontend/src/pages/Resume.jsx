import React from "react";
import { ExternalLink, Download } from "lucide-react";

function Resume() {
  return (
    <section className="w-full min-h-screen bg-slate-50 dark:bg-slate-950 px-4 py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">

        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 justify-between items-center px-10 py-8 border-b border-slate-100 dark:border-slate-800">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Curriculum Vitae</h2>
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-1">Professional Background</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-5 py-3 rounded-2xl font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95"
            >
              <ExternalLink size={18} />
              Full Screen
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl font-extrabold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
            >
              <Download size={18} />
              Download
            </a>
          </div>
        </div>

        {/* Resume Viewer */}
        <div className="w-full bg-slate-100 dark:bg-slate-800/50 p-4 md:p-8">
          <div className="w-full h-[70vh] md:h-[85vh] rounded-2xl overflow-hidden shadow-inner bg-slate-200 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 relative">
            <iframe
              src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
              title="Resume Preview"
              className="w-full h-full border-0"
            />
            {/* Mobile Overlay Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden bg-slate-900/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest pointer-events-none">
              Pinch to Zoom • Scroll to View
            </div>
          </div>

          {/* Mobile Footer Message */}
          <div className="mt-6 text-center md:hidden">
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Trouble viewing? <a href="/resume.pdf" target="_blank" className="text-blue-600 font-bold underline">Open in full screen</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
