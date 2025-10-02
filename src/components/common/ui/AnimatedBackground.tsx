'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedBackground = () => {
  const gradientRef = useRef(null);

  useEffect(() => {
    // Анімація градієнта
    if (gradientRef.current) {
      gsap.to(gradientRef.current, {
        backgroundPosition: '200% 200%',
        duration: 20,
        ease: 'linear',
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Градієнтний шар */}
      <div
        ref={gradientRef}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at top left, #24C0F4 0%, transparent 60%),
            radial-gradient(circle at bottom right, #7F00FF 0%, transparent 60%)
          `,
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 0%',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;

AnimatedBackground.displayName = 'AnimatedBackground';
