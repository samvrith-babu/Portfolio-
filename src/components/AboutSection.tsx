import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Terminal, Cpu, ShieldCheck, MapPin, Sparkles, BookOpen, Layers } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_DATA } from '../portfolioData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'system' | 'philosophy' | 'focus'>('system');

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#090D14] border border-[#00FF9C]/30 text-xs font-mono text-[#00FF9C] mb-3">
            <span>[01 // IDENTITY]</span>
            <span className="text-slate-600">•</span>
            <span>SYSTEM_SPECIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">
            About <span className="text-[#00FF9C]">Samvrith</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl">
            First-year cse cybersecurity undergraduate architecting a resilient foundation in ethical defense and security automation.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-5 rounded-xl bg-[#090D14]/80 border border-slate-800 hover:border-[#00FF9C]/50 hover:shadow-[0_0_15px_rgba(0,255,156,0.15)] transition-all group backdrop-blur-sm"
            >
              <div className="text-[11px] font-mono text-slate-400 mb-1 group-hover:text-[#00FF9C] transition-colors">
                {stat.label}
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-sans">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Grid: Bio & Interactive Terminal Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bio & Core Interests */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl bg-[#090D14]/80 border border-slate-800 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-5 text-[#00E5FF]">
                <ShieldCheck className="w-5 h-5 text-[#00FF9C]" />
                <h3 className="font-mono text-lg font-semibold text-white">Professional Trajectory</h3>
              </div>

              <div className="space-y-4 text-slate-300 font-sans leading-relaxed text-sm sm:text-base">
                <p>
                  {ABOUT_DATA.shortBio}
                </p>
                <p className="text-slate-400">
                  {ABOUT_DATA.secondaryBio}
                </p>
              </div>

              {/* Badges / Highlights */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-md bg-[#05070A] border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#00E5FF]" />
                  Kerala
                </span>
                <span className="px-3 py-1 rounded-md bg-[#05070A] border border-slate-800 text-xs font-mono text-[#00FF9C] flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#00FF9C]" />
                  B.Tech CSE (Cybersecurity)
                </span>
                <span className="px-3 py-1 rounded-md bg-[#05070A] border border-slate-800 text-xs font-mono text-[#A855F7] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#A855F7]" />
                  Ethical Hacking Learner
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Specification Window */}
          <div className="lg:col-span-6">
            <div className="rounded-xl bg-[#090D14]/90 border border-slate-800 hover:border-[#00FF9C]/40 transition-colors overflow-hidden shadow-2xl backdrop-blur-md">
              {/* Terminal Window Chrome */}
              <div className="bg-[#0C121E] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-[#00FF9C]" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#00FF9C]" />
                    samvrith_profile.sh
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-[#05070A] p-0.5 rounded-lg border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab('system')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'system'
                        ? 'bg-[#00FF9C]/20 text-[#00FF9C] font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Specs
                  </button>
                  <button
                    onClick={() => setActiveTab('philosophy')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'philosophy'
                        ? 'bg-[#00E5FF]/20 text-[#00E5FF] font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Philosophy
                  </button>
                  <button
                    onClick={() => setActiveTab('focus')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'focus'
                        ? 'bg-[#A855F7]/20 text-[#A855F7] font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Focus
                  </button>
                </div>
              </div>

              {/* Terminal Tab Content */}
              <div className="p-6 font-mono text-xs sm:text-sm min-h-[300px]">
                {activeTab === 'system' && (
                  <div className="space-y-3">
                    <div className="text-slate-400 flex items-center gap-2 pb-2 border-b border-slate-800">
                      <span className="text-[#00FF9C]">&gt;</span>
                      <span>neofetch --stdout --profile samvrith</span>
                    </div>

                    <div className="space-y-2.5 pt-1">
                      {ABOUT_DATA.terminalSpecs.map((spec, i) => (
                        <div key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                          <span className="text-[#00E5FF] sm:w-36 shrink-0">{spec.key}:</span>
                          <span className="text-slate-200">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 text-[11px] text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9C] inline-block" />
                      Status: Ready for collaborative CTF rooms & projects
                    </div>
                  </div>
                )}

                {activeTab === 'philosophy' && (
                  <div className="space-y-4 text-slate-300">
                    <div className="text-[#00E5FF] flex items-center gap-2 pb-2 border-b border-slate-800">
                      <span>&gt;</span>
                      <span>cat /etc/security_principles.txt</span>
                    </div>
                    <blockquote className="border-l-2 border-[#00FF9C] pl-4 py-1 text-slate-300 italic">
                      "Security is not a single product or binary state, but a continuous discipline of curiosity, vigilance, and understanding root principles."
                    </blockquote>
                    <p className="text-slate-400 leading-relaxed">
                      As a first-year undergraduate, my approach emphasizes deep comprehension of how systems work at the byte, packet, and memory level before attempting to attack or harden them.
                    </p>
                  </div>
                )}

                {activeTab === 'focus' && (
                  <div className="space-y-3.5">
                    <div className="text-[#A855F7] flex items-center gap-2 pb-2 border-b border-slate-800">
                      <span>&gt;</span>
                      <span>grep -i "active_learning_goals" ~/.roadmap</span>
                    </div>
                    <ul className="space-y-2.5 text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-[#00FF9C] font-bold">1.</span>
                        <span>Mastering low-level networking (TCP handshake, ARP, DNS spoofing mechanics)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#00E5FF] font-bold">2.</span>
                        <span>Writing robust Python automation scripts for recon and triage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#A855F7] font-bold">3.</span>
                        <span>Daily CTF challenges in TryHackMe & HackTheBox (Linux & Web fundamentals)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-400 font-bold">4.</span>
                        <span>Preparing for industry security certifications (CompTIA Security+ / Google Cyber)</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Terminal Status Footer */}
              <div className="bg-[#0A0E18] px-5 py-2.5 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>session: active</span>
                <span className="text-[#00FF9C]">UTF-8 [SECURE]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
