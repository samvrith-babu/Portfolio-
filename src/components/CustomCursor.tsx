import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable on desktop with mouse pointer
    const checkDesktop = () => {
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      const isWideEnough = window.innerWidth >= 1024;
      setIsDesktop(hasFinePointer && isWideEnough);
      if (hasFinePointer && isWideEnough) {
        document.body.classList.add('has-custom-cursor');
      } else {
        document.body.classList.remove('has-custom-cursor');
      }
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if target or any parent is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.classList.contains('cursor-pointer')
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [isVisible]);

  if (!isDesktop || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Outer Targeting Ring / Crosshair */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border flex items-center justify-center pointer-events-none"
        style={{
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          borderColor: isHovered ? '#00E5FF' : '#00FF9C',
          backgroundColor: isHovered ? 'rgba(0, 229, 255, 0.08)' : 'rgba(0, 255, 156, 0.03)',
          boxShadow: isHovered
            ? '0 0 16px rgba(0, 229, 255, 0.6), inset 0 0 10px rgba(0, 229, 255, 0.3)'
            : '0 0 8px rgba(0, 255, 156, 0.4)',
        }}
        animate={{
          x: position.x - (isHovered ? 24 : 14),
          y: position.y - (isHovered ? 24 : 14),
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 400,
          mass: 0.2,
        }}
      >
        {/* Subtle crosshair brackets when hovering */}
        {isHovered && (
          <div className="relative w-full h-full">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-0.5 bg-[#00E5FF]" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-0.5 bg-[#00E5FF]" />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-1.5 bg-[#00E5FF]" />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-1.5 bg-[#00E5FF]" />
          </div>
        )}
      </motion.div>

      {/* Center Laser Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none"
        style={{
          width: 5,
          height: 5,
          backgroundColor: isHovered ? '#00E5FF' : '#00FF9C',
          boxShadow: isHovered ? '0 0 8px #00E5FF' : '0 0 6px #00FF9C',
        }}
        animate={{
          x: position.x - 2.5,
          y: position.y - 2.5,
        }}
        transition={{
          type: 'spring',
          damping: 45,
          stiffness: 900,
          mass: 0.05,
        }}
      />
    </div>
  );
};
