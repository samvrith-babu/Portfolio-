import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Shield, Terminal, ArrowDown, Download, Github, Linkedin, Mail, ExternalLink, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../portfolioData';

export const HeroSection: React.FC = () => {
  // Rotating tagline index
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayedTagline, setDisplayedTagline] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect for whoami
  const [whoamiText, setWhoamiText] = useState('');
  const fullWhoamiCommand = "whoami";
  const [commandFinished, setCommandFinished] = useState(false);

  // Initial terminal command typing
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullWhoamiCommand.length) {
        setWhoamiText(fullWhoamiCommand.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setCommandFinished(true);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  // Tagline typewriter effect
  useEffect(() => {
    if (!commandFinished) return;

    const currentFull = PERSONAL_INFO.taglines[taglineIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedTagline.length < currentFull.length) {
        timeout = setTimeout(() => {
          setDisplayedTagline(currentFull.slice(0, displayedTagline.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayedTagline.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedTagline(displayedTagline.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setTaglineIndex((prev) => (prev + 1) % PERSONAL_INFO.taglines.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [commandFinished, displayedTagline, isDeleting, taglineIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        {/* Status Chip */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#090D14]/90 border border-[#00FF9C]/30 text-xs font-mono text-slate-300 shadow-[0_0_15px_rgba(0,255,156,0.15)] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#00FF9C] shadow-[0_0_8px_#00FF9C] animate-pulse" />
          <span className="text-[#00FF9C] font-medium">CYBERSECURITY_STUDENTS</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-[#00E5FF]" />
            {PERSONAL_INFO.location}
          </span>
        </motion.div>

        {/* Hero Terminal Card for Identity Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-3xl bg-[#090D14]/90 border border-slate-800 hover:border-[#00FF9C]/40 rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl mb-8 text-left transition-colors group"
        >
          {/* Terminal Title Bar */}
          <div className="bg-[#0C121D] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#00FF9C]" />
                samvrith@cyber-sec-lab:~
              </span>
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              bash 5.2.21
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-5 sm:p-7 font-mono">
            {/* Terminal Command Line */}
            <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm mb-3">
              <span className="text-[#00FF9C] font-semibold">samvrith@kali:~$</span>
              <span className="text-slate-100">{whoamiText}</span>
              {!commandFinished && <span className="w-2 h-4 bg-[#00FF9C] animate-pulse" />}
            </div>

            {/* Output: Big High-Impact Name */}
            {commandFinished && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-mono font-bold tracking-tight text-white mb-2">
                  <span className="hover:text-[#00FF9C] transition-colors">{PERSONAL_INFO.name}</span>
                </h1>

                {/* Subtitle / Dynamic Tagline */}
                <div className="flex flex-wrap items-center gap-2 text-base sm:text-xl lg:text-2xl text-slate-300 min-h-[36px]">
                  <span className="text-[#00E5FF]">&gt;</span>
                  <span className="font-semibold text-white">
                    {displayedTagline}
                  </span>
                  <span className="w-2.5 h-5 bg-[#00E5FF] animate-pulse inline-block" />
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Role Description Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-base sm:text-lg text-slate-300 font-sans leading-relaxed mb-9"
        >
          {PERSONAL_INFO.role}. Exploring ethical hacking, defensive security architectures, and Python tooling to build a safer digital perimeter.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#00FF9C] text-[#05070A] font-mono font-semibold text-sm hover:bg-[#00FF9C]/90 hover:shadow-[0_0_20px_rgba(0,255,156,0.5)] transition-all flex items-center justify-center gap-2 group"
          >
            <Shield className="w-4 h-4 text-[#05070A] group-hover:rotate-12 transition-transform" />
            <span>View Projects</span>
          </button>

          <a
            href={PERSONAL_INFO.resumePath}
            download="Samvrith_Babu_Cybersecurity_Resume.pdf"
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#090D14] text-slate-100 font-mono text-sm border border-slate-700 hover:border-[#00E5FF] hover:text-[#00E5FF] hover:shadow-[0_0_20px_rgba(0,229,255,0.25)] transition-all flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Social Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-4"
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-lg bg-[#090D14] border border-slate-800 text-slate-400 hover:text-[#00FF9C] hover:border-[#00FF9C]/50 hover:shadow-[0_0_12px_rgba(0,255,156,0.3)] transition-all"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-lg bg-[#090D14] border border-slate-800 text-slate-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/50 hover:shadow-[0_0_12px_rgba(0,229,255,0.3)] transition-all"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Send Email"
            className="p-2.5 rounded-lg bg-[#090D14] border border-slate-800 text-slate-400 hover:text-[#A855F7] hover:border-[#A855F7]/50 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-all"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollTo('about')}
          aria-label="Scroll to About Section"
          className="mt-16 text-slate-500 hover:text-[#00FF9C] transition-colors flex flex-col items-center gap-1.5 focus:outline-none group"
        >
          <span className="text-[11px] font-mono tracking-widest text-slate-400 group-hover:text-[#00FF9C] transition-colors">
            EXPLORE_PROFILE
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#00FF9C]" />
        </button>
      </div>
    </section>
  );
};
