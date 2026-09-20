import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, FileText, ExternalLink, GraduationCap, Award, Calendar, MapPin, Eye, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, TIMELINE_DATA, TimelineItem } from '../portfolioData';

export const ResumeSection: React.FC = () => {
  const [showPdfViewer, setShowPdfViewer] = useState(false);

  const educationItems = TIMELINE_DATA.filter((item) => item.type === 'education');
  const certItems = TIMELINE_DATA.filter((item) => item.type === 'certification');

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#090D14] border border-[#A855F7]/30 text-xs font-mono text-[#A855F7] mb-3">
            <span>[04 // CREDENTIALS & TIMELINE]</span>
            <span className="text-slate-600">•</span>
            <span>CURRICULUM_VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">
            Academic & Professional <span className="text-[#A855F7]">Trajectory</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            Verified academic milestones, coursework records, and ongoing certification objectives.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Samvrith_Babu_Resume.pdf"
              className="px-5 py-2.5 rounded-lg bg-[#00FF9C] text-[#05070A] font-mono font-semibold text-xs hover:bg-[#00FF9C]/90 shadow-[0_0_15px_rgba(0,255,156,0.3)] transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF (resume.pdf)</span>
            </a>

            <button
              onClick={() => setShowPdfViewer(!showPdfViewer)}
              className="px-5 py-2.5 rounded-lg bg-[#090D14] border border-slate-700 text-slate-200 font-mono text-xs hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>{showPdfViewer ? 'Hide Document Preview' : 'Interactive Document Preview'}</span>
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer / Interactive Document Preview */}
        {showPdfViewer && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-14 overflow-hidden rounded-xl bg-[#090D14] border border-slate-700 shadow-2xl"
          >
            {/* Document Header Bar */}
            <div className="bg-[#0D131F] px-5 py-3 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-[#00FF9C]">
                <FileText className="w-4 h-4" />
                <span>Samvrith_Babu_CV_v1.0.pdf [PREVIEW]</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <span>Format: PDF / A4</span>
                <a
                  href={PERSONAL_INFO.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00E5FF] hover:underline flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Tab</span>
                </a>
              </div>
            </div>

            {/* Document Body (Clean high-contrast digital CV preview) */}
            <div className="p-6 sm:p-10 max-w-4xl mx-auto bg-[#070A0F] my-4 rounded-lg border border-slate-800 text-slate-200 font-sans shadow-inner">
              {/* Header */}
              <div className="border-b border-slate-800 pb-5 mb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="text-2xl font-bold font-mono text-white">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-[#00FF9C] font-mono mt-0.5">{PERSONAL_INFO.role}</p>
                  <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {PERSONAL_INFO.location}
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-400 space-y-1">
                  <div>Email: <span className="text-slate-200">{PERSONAL_INFO.email}</span></div>
                  <div>GitHub: <span className="text-[#00E5FF]">github.com/samvrith-babu</span></div>
                  <div>LinkedIn: <span className="text-[#00E5FF]">linkedin.com/in/samvrith-babu-p-27644740b</span></div>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-5">
                <h4 className="text-xs font-mono font-bold text-[#00FF9C] uppercase tracking-wider mb-2">
                  // Professional Profile
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  First-year undergraduate specializing in Cybersecurity at the B.Tech level in Kannur, Kerala. Strong fundamentals in Linux environment, TCP/IP networking protocols, and Python automation for security tooling. Eager to contribute to ethical security operations and research teams.
                </p>
              </div>

              {/* Education section in preview */}
              <div className="mb-5">
                <h4 className="text-xs font-mono font-bold text-[#00E5FF] uppercase tracking-wider mb-2">
                  // Education
                </h4>
                <div className="space-y-3">
                  {educationItems.map((edu) => (
                    <div key={edu.id} className="text-xs">
                      <div className="flex justify-between font-semibold text-white">
                        <span>{edu.title}</span>
                        <span className="font-mono text-slate-400">{edu.period}</span>
                      </div>
                      <div className="text-slate-400 italic mb-1">{edu.organization}, {edu.location}</div>
                      <ul className="list-disc list-inside text-slate-300 text-[11px] space-y-0.5">
                        {edu.description.map((desc, dIdx) => (
                          <li key={dIdx}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications preview */}
              <div>
                <h4 className="text-xs font-mono font-bold text-[#A855F7] uppercase tracking-wider mb-2">
                  // Certifications & Learning Milestones
                </h4>
                <div className="space-y-2 text-xs">
                  {certItems.map((cert) => (
                    <div key={cert.id} className="p-2.5 rounded bg-[#090D14] border border-slate-800">
                      <div className="flex justify-between font-medium text-slate-200">
                        <span>{cert.title}</span>
                        <span className="font-mono text-slate-400 text-[11px]">{cert.period}</span>
                      </div>
                      <div className="text-slate-400 text-[11px]">{cert.organization}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Timeline Grid: Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <div className="rounded-xl bg-[#090D14]/85 border border-slate-800 p-6 sm:p-8 backdrop-blur-md">
            <div className="flex items-center gap-3 pb-5 border-b border-slate-800 mb-6">
              <div className="p-2 rounded-lg bg-[#05070A] border border-slate-800">
                <GraduationCap className="w-5 h-5 text-[#00FF9C]" />
              </div>
              <div>
                <h3 className="text-lg font-mono font-semibold text-white">Education History</h3>
                <p className="text-xs text-slate-400">Academic journey & foundational studies</p>
              </div>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
              {educationItems.map((item, idx) => (
                <div key={item.id} className="relative pl-9 group">
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-1.5 w-3.5 h-3.5 -translate-x-1/2 rounded-full bg-[#05070A] border-2 border-[#00FF9C] group-hover:bg-[#00FF9C] transition-colors" />

                  <div className="p-4 rounded-lg bg-[#0C121D]/70 border border-slate-800/80 group-hover:border-[#00FF9C]/40 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="font-mono text-sm font-bold text-white group-hover:text-[#00FF9C] transition-colors">
                        {item.title}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400">
                        <Calendar className="w-3 h-3 text-[#00E5FF]" />
                        {item.period}
                      </span>
                    </div>

                    <div className="text-xs text-[#00E5FF] font-mono mb-2 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{item.organization}</span>
                      <span className="text-slate-600">•</span>
                      <span>{item.location}</span>
                    </div>

                    <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                      {item.description.map((desc, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="text-[#00FF9C] font-mono">&gt;</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Goals Timeline */}
          <div className="rounded-xl bg-[#090D14]/85 border border-slate-800 p-6 sm:p-8 backdrop-blur-md">
            <div className="flex items-center gap-3 pb-5 border-b border-slate-800 mb-6">
              <div className="p-2 rounded-lg bg-[#05070A] border border-slate-800">
                <Award className="w-5 h-5 text-[#A855F7]" />
              </div>
              <div>
                <h3 className="text-lg font-mono font-semibold text-white">Certifications & Milestones</h3>
                <p className="text-xs text-slate-400">Verified credentials & active preparation</p>
              </div>
            </div>

            <div className="space-y-6">
              {certItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-lg bg-[#0C121D]/70 border border-slate-800 hover:border-[#A855F7]/40 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h4 className="font-mono text-sm font-semibold text-white">
                      {item.title}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#05070A] border border-slate-700 text-[#A855F7]">
                      {item.status || 'Active'}
                    </span>
                  </div>

                  <div className="text-xs text-slate-400 font-mono mb-2">
                    {item.organization} • {item.period}
                  </div>

                  <ul className="space-y-1 text-xs text-slate-300 font-sans">
                    {item.description.map((desc, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF9C] shrink-0 mt-0.5" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Editable Placeholder Callout */}
              <div className="p-4 rounded-lg bg-[#05070A] border border-dashed border-slate-700 text-xs text-slate-400 font-mono space-y-1">
                <div className="text-[#00FF9C] font-semibold">// CUSTOMIZATION NOTE</div>
                <p>
                  As you acquire certifications (e.g. CEH, CompTIA Security+, CCNA, TryHackMe streaks), simply update the <span className="text-white">TIMELINE_DATA</span> array in <span className="text-[#00E5FF]">portfolioData.ts</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
