import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Shield, Terminal, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-900 bg-[#05070A] py-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity & Terminal Status */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1.5">
          <div className="flex items-center gap-2 font-mono text-sm font-bold text-white">
            <Shield className="w-4 h-4 text-[#00FF9C]" />
            <span>{PERSONAL_INFO.name}</span>
            <span className="text-slate-600">|</span>
            <span className="text-xs text-slate-400 font-normal">Cybersecurity Portfolio</span>
          </div>

          <div className="font-mono text-xs text-slate-400 flex items-center gap-2">
            <span className="text-[#00FF9C]">&gt;</span>
            <span>system status: <span className="text-[#00FF9C]">secure</span></span>
            <span className="text-slate-700">::</span>
            <span className="text-[11px] text-slate-400">tls_v1.3_aes256_gcm</span>
          </div>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg bg-[#090D14] border border-slate-800 text-slate-400 hover:text-[#00FF9C] hover:border-[#00FF9C]/40 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg bg-[#090D14] border border-slate-800 text-slate-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Email"
            className="p-2 rounded-lg bg-[#090D14] border border-slate-800 text-slate-400 hover:text-[#A855F7] hover:border-[#A855F7]/40 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Credits & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="text-xs font-mono text-slate-400 text-center md:text-right">
            <span>Designed & Engineered by</span>{' '}
            <span className="text-slate-200">{PERSONAL_INFO.name}</span>
          </div>

          <button
            onClick={scrollToTop}
            title="Scroll to Top"
            className="p-2.5 rounded-lg bg-[#090D14] border border-slate-800 text-slate-400 hover:text-[#00FF9C] hover:border-[#00FF9C]/50 hover:shadow-[0_0_12px_rgba(0,255,156,0.3)] transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
