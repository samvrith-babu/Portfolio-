import React, { useEffect, useRef, useState } from 'react';

interface MatrixBackgroundProps {
  intensity?: 'normal' | 'intense' | 'minimal';
}

export const MatrixBackground: React.FC<MatrixBackgroundProps> = ({ intensity = 'normal' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Matrix characters: Binary, Hex, Katakana, and cyber symbols
    const chars = '0123456789ABCDEF<>/{}[];:!@#$%&*+=-~アイウエオカキクケコサシスセソタチツテト';
    const charArray = chars.split('');

    const fontSize = 14;
    let columns = Math.floor(width / fontSize);
    let drops: number[] = [];

    // Initialize drops
    const initDrops = () => {
      columns = Math.floor(width / fontSize);
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -50);
      }
    };
    initDrops();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initDrops();
    };

    window.addEventListener('resize', handleResize);

    // Animation loop with frame rate throttling (~30fps for silky smooth low CPU)
    let lastTime = 0;
    const fpsInterval = 1000 / 30;

    const render = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(render);

      if (isPaused) return;

      const elapsed = currentTime - lastTime;
      if (elapsed < fpsInterval) return;
      lastTime = currentTime - (elapsed % fpsInterval);

      // Translucent black trail for fade effect
      const fadeAlpha = intensity === 'minimal' ? 0.12 : 0.07;
      ctx.fillStyle = `rgba(5, 7, 10, ${fadeAlpha})`;
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      const dropSkipRate = intensity === 'minimal' ? 2 : 1;

      for (let i = 0; i < drops.length; i += dropSkipRate) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Leading character is bright cyan/white, tail is cyber green
        if (Math.random() > 0.88) {
          ctx.fillStyle = '#00E5FF'; // Electric Cyan lead
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#00E5FF';
        } else {
          ctx.fillStyle = intensity === 'minimal' ? 'rgba(0, 255, 156, 0.35)' : 'rgba(0, 255, 156, 0.7)';
          ctx.shadowBlur = 3;
          ctx.shadowColor = '#00FF9C';
        }

        ctx.fillText(text, x, y);

        // Reset shadow
        ctx.shadowBlur = 0;

        if (y > height && Math.random() > 0.985) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [intensity, isPaused]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
        aria-hidden="true"
      />
      {/* Radial vignette mask to make center readable */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(5,7,10,0.7) 0%, rgba(5,7,10,0.92) 70%, #05070A 100%)'
        }}
      />
      {/* Cyber Grid Lines */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      {/* Scanline CRT overlay */}
      <div className="absolute inset-0 scanline-overlay opacity-20 pointer-events-none" />
    </div>
  );
};
