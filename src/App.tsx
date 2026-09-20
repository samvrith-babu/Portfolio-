/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { MatrixBackground } from './components/MatrixBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EasterEggModal } from './components/EasterEggModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);

  // Global key sequence detector for "hack"
  useEffect(() => {
    let typedBuffer = '';
    const secretCode = 'hack';

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't capture when typing into form fields
      const activeTag = (document.activeElement?.tagName || '').toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      typedBuffer = (typedBuffer + e.key.toLowerCase()).slice(-secretCode.length);
      if (typedBuffer === secretCode) {
        setIsEasterEggOpen(true);
        typedBuffer = '';
      }

      if (e.key === 'Escape') {
        setIsEasterEggOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#05070A] text-slate-100 font-sans relative selection:bg-[#00FF9C]/30 selection:text-[#00FF9C]">
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Custom Cursor (Desktop only) */}
      <CustomCursor />

      {/* Cyber Digital Rain & Grid Background */}
      <MatrixBackground />

      {/* Sticky Glass Navbar */}
      <Navbar onOpenEasterEgg={() => setIsEasterEggOpen(true)} />

      {/* Main Single-Page Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Easter Egg Cyber CLI Modal */}
      <EasterEggModal
        isOpen={isEasterEggOpen}
        onClose={() => setIsEasterEggOpen(false)}
      />
    </div>
  );
}
