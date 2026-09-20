import React, { useState, useEffect } from 'react';
import { Shield, Terminal, Menu, X, Download, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../portfolioData';

interface NavbarProps {
  onOpenEasterEgg: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEasterEgg }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);

      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = ['contact', 'resume', 'projects', 'skills', 'about', 'hero'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070A]/85 backdrop-blur-md border-b border-[#00FF9C]/20 shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-[#090D14] border border-[#00FF9C]/30 flex items-center justify-center group-hover:border-[#00FF9C] group-hover:shadow-[0_0_12px_rgba(0,255,156,0.4)] transition-all">
            <Shield className="w-4.5 h-4.5 text-[#00FF9C] group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-slate-100 group-hover:text-[#00FF9C] transition-colors flex items-center gap-1.5">
              <span>SAMVRITH</span>
              <span className="text-[#00E5FF]">BABU</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 tracking-tight flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF9C] animate-ping inline-block" />
              CYBER_DEF_SYS
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#090D14]/70 p-1.5 rounded-full border border-slate-800 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-1.5 text-xs font-mono rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-[#00FF9C] font-semibold bg-[#00FF9C]/10 shadow-[0_0_12px_rgba(0,255,156,0.2)]'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00FF9C] mr-1.5 animate-pulse" />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Easter Egg Terminal Trigger */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Easter egg trigger */}
          <button
            onClick={onOpenEasterEgg}
            title="Open Interactive Cyber Shell (or type 'hack' anywhere)"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-[#00E5FF] bg-[#090D14] border border-slate-800 hover:border-[#00E5FF]/50 rounded-md transition-all group"
          >
            <Terminal className="w-3.5 h-3.5 text-[#00E5FF] group-hover:rotate-12 transition-transform" />
            <span className="text-[11px] text-slate-400 group-hover:text-slate-200">&gt; hack_cli</span>
          </button>

          {/* Quick Resume CTA */}
          <a
            href={PERSONAL_INFO.resumePath}
            download="Samvrith_Babu_Cybersecurity_Resume.pdf"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-[#05070A] bg-[#00FF9C] hover:bg-[#00FF9C]/90 rounded-md shadow-[0_0_15px_rgba(0,255,156,0.3)] transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenEasterEgg}
            aria-label="Open CLI Terminal"
            className="p-2 text-slate-300 hover:text-[#00E5FF] bg-[#090D14] border border-slate-800 rounded-lg"
          >
            <Terminal className="w-4 h-4 text-[#00E5FF]" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-slate-200 hover:text-[#00FF9C] bg-[#090D14] border border-slate-800 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070B12]/95 border-b border-[#00FF9C]/20 backdrop-blur-xl px-4 py-5 space-y-2">
          <div className="text-[11px] font-mono text-slate-400 px-3 pb-1 border-b border-slate-800 flex items-center justify-between">
            <span>&gt; NAVIGATION_SYSTEM</span>
            <span className="text-[#00FF9C]">NODE: CONNECTED</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-mono text-left transition-colors ${
                    isActive
                      ? 'bg-[#00FF9C]/15 text-[#00FF9C] border border-[#00FF9C]/40 font-semibold'
                      : 'bg-[#090D14] text-slate-300 border border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <span className="text-[#00E5FF]">&gt;</span>
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Samvrith_Babu_Cybersecurity_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-mono font-semibold bg-[#00FF9C] text-[#05070A]"
            >
              <Download className="w-3.5 h-3.5" />
              Download Resume (.PDF)
            </a>
          </div>
        </div>
      )}

      {/* Cyber Scroll Progress Line */}
      <div className="h-[2px] w-full bg-slate-900/50">
        <div
          className="h-full bg-gradient-to-r from-[#00FF9C] via-[#00E5FF] to-[#A855F7] transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};
