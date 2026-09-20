import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Shield, Lock } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const bootSequence = [
      'INITIALIZING SECURE HANDSHAKE (TLS 1.3)...',
      'CONNECTING TO KANNUR_NODE_01 [AUTH_VERIFIED]',
      'MOUNTING CYBER_SECURITY_KERNEL: SAMVRITH_OS v1.0',
      'DECRYPTING PORTFOLIO MODULES & SYSTEM ASSETS...',
      'ALL SECURITY PROTOCOLS ENFORCED. ACCESS GRANTED.',
    ];

    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines((prev) => [...prev, bootSequence[currentLine]]);
        currentLine++;
        setProgress(Math.min(100, Math.round((currentLine / bootSequence.length) * 100)));
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 350);
      }
    }, 280);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-[#05070A] flex flex-col items-center justify-center p-6 select-none"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {/* Subtle background glow */}
        <div className="absolute w-96 h-96 bg-[#00FF9C]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Terminal Container */}
        <div className="w-full max-w-xl bg-[#090D14]/90 border border-[#00FF9C]/30 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md">
          {/* Terminal Window Header */}
          <div className="bg-[#0D131F] px-4 py-3 border-b border-[#00FF9C]/20 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#00FF9C] inline-block" />
              <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#00FF9C]" />
                sec_kernel_init.sh
              </span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono text-[#00E5FF]">
              <Lock className="w-3 h-3" />
              ENCRYPTED_SESSION
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-xs md:text-sm space-y-2.5 min-h-[190px]">
            <div className="text-slate-400 text-xs flex items-center gap-2 pb-1 border-b border-slate-800/80">
              <Terminal className="w-4 h-4 text-[#00FF9C]" />
              <span>host: kannur.node.cyber // user: guest // ip: 127.0.0.1</span>
            </div>

            {lines.map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className="flex items-start gap-2 text-[#00FF9C]"
              >
                <span className="text-[#00E5FF] select-none">&gt;</span>
                <span className={idx === lines.length - 1 && progress === 100 ? 'text-[#00E5FF] font-semibold' : 'text-slate-300'}>
                  {line}
                </span>
              </motion.div>
            ))}

            {/* Blinking Prompt Cursor */}
            <div className="flex items-center gap-2 text-[#00FF9C] pt-1">
              <span className="text-[#00E5FF]">&gt;</span>
              <span className="w-2 h-4 bg-[#00FF9C] animate-pulse" />
            </div>
          </div>

          {/* Progress Bar Footer */}
          <div className="bg-[#0B101A] px-6 py-3 border-t border-slate-800/80 flex items-center justify-between gap-4">
            <div className="flex-1 bg-slate-900 rounded-full h-1.5 overflow-hidden border border-slate-800">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00FF9C] to-[#00E5FF]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <div className="font-mono text-xs text-[#00FF9C] whitespace-nowrap">
              {progress}%
            </div>
            <button
              onClick={onComplete}
              className="text-[11px] font-mono text-slate-400 hover:text-[#00FF9C] transition-colors underline decoration-dotted"
            >
              [SKIP]
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
