import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Github, ExternalLink, ShieldAlert, Cpu, Check, Layers, X } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../portfolioData';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#090D14] border border-[#00FF9C]/30 text-xs font-mono text-[#00FF9C] mb-3">
            <span>[03 // EXPLOITS & TOOLS]</span>
            <span className="text-slate-600">•</span>
            <span>REPOSITORY_INDEX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">
            Security Projects & <span className="text-[#00FF9C]">Works</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Hands-on cybersecurity utilities, network inspection scripts, and cryptanalysis prototypes crafted during my first year.
          </p>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="rounded-xl bg-[#090D14]/90 border border-slate-800 hover:border-[#00FF9C]/60 hover:shadow-[0_0_25px_rgba(0,255,156,0.2)] transition-all duration-300 flex flex-col justify-between overflow-hidden group backdrop-blur-md"
            >
              <div>
                {/* Terminal Header */}
                <div className="bg-[#0C121E] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <span className="text-[11px] font-mono text-slate-400 ml-1.5 truncate max-w-[140px]">
                      {project.category}
                    </span>
                  </div>

                  {/* Status badge */}
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      project.status === 'Completed'
                        ? 'border-[#00FF9C]/40 text-[#00FF9C] bg-[#00FF9C]/10'
                        : 'border-[#00E5FF]/40 text-[#00E5FF] bg-[#00E5FF]/10'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-lg font-mono font-bold text-white group-hover:text-[#00FF9C] transition-colors mb-3 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Highlights / Features preview */}
                  <div className="space-y-1.5 mb-6">
                    {project.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-[#00FF9C] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded bg-[#05070A] border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-4 bg-[#0B101A] border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono text-[#00E5FF] hover:text-white transition-colors flex items-center gap-1"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Inspect Spec</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#05070A] border border-slate-800 text-slate-300 hover:text-[#00FF9C] hover:border-[#00FF9C]/50 transition-all"
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  {project.demoUrl && project.demoUrl !== '#' ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#05070A] border border-slate-800 text-slate-300 hover:text-[#00E5FF] hover:border-[#00E5FF]/50 transition-all"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-2 rounded-lg bg-[#05070A] border border-slate-800 text-slate-400 hover:text-white transition-all text-xs font-mono"
                      title="View Details"
                    >
                      CLI Details
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note on editing */}
        <div className="mt-10 text-center">
          <p className="text-xs font-mono text-slate-400">
            &gt; All projects are configurable in <span className="text-[#00FF9C]">portfolioData.ts</span> for seamless customization.
          </p>
        </div>
      </div>

      {/* Inspect Spec Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl bg-[#090D14] border border-[#00FF9C]/50 rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="bg-[#0D131F] px-5 py-3.5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-[#00FF9C]">
                  <Terminal className="w-4 h-4" />
                  <span>PROJECT_SPECIFICATION // {selectedProject.id}</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-5 font-mono">
                <div>
                  <span className="text-xs text-[#00E5FF]">{selectedProject.category}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{selectedProject.title}</h3>
                </div>

                <div className="p-4 rounded-lg bg-[#05070A] border border-slate-800 text-slate-300 text-sm leading-relaxed font-sans">
                  {selectedProject.description}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    Architectural Features & Security Mechanics:
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className="text-[#00FF9C]">&gt;</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Tech Stack & Dependencies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md bg-[#0C121D] border border-slate-700 text-xs text-[#00E5FF]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#00FF9C] text-[#05070A] font-bold text-xs hover:bg-[#00FF9C]/90 flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs hover:bg-slate-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
