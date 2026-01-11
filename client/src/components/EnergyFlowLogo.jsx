import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const EnergyFlowLogo = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        // Reset
        await controls.start("hidden");
        
        // 1. Dots appear (top-left -> bottom-right)
        await controls.start("dotsVisible");
        
        // 2. V stroke draws
        await controls.start("vDraw");
        
        // 3. C stroke rotates & reveals
        await controls.start("cDraw");
        
        // 4. Dot burst & Final glow
        await controls.start("burst");
        
        // Hold for a moment
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Fade out to loop smoothly
        await controls.start("fadeOut");
      }
    };
    sequence();
  }, [controls]);

  // Animation Variants
  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    dotsVisible: (i) => ({
      opacity: 1,
      scale: [0, 1.2, 1],
      transition: { delay: i * 0.1, duration: 0.3 }
    }),
    fadeOut: { opacity: 0, transition: { duration: 0.5 } }
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    vDraw: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { duration: 1, ease: "easeInOut" } 
    },
    cDraw: { 
      pathLength: 1, 
      opacity: 1, 
      rotate: 0,
      transition: { duration: 1, ease: "easeInOut" } 
    },
    fadeOut: { opacity: 0, transition: { duration: 0.5 } }
  };

  const burstVariants = {
    hidden: { opacity: 0, scale: 0, x: 0, y: 0 },
    burst: (i) => ({
      opacity: [0, 1, 0],
      scale: [0, 1.5],
      x: (i % 2 === 0 ? 1 : -1) * 20,
      y: (i < 2 ? -1 : 1) * 20,
      transition: { duration: 0.5, ease: "easeOut" }
    }),
    fadeOut: { opacity: 0 }
  };

  const glowVariants = {
    hidden: { opacity: 0 },
    burst: { opacity: 0.5, scale: 1.1, transition: { duration: 0.5, yoyo: Infinity } },
    fadeOut: { opacity: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="flex items-center justify-center w-full h-full relative">
      <div className="relative w-64 h-64">
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-vc-orange blur-3xl rounded-full"
          variants={glowVariants}
          initial="hidden"
          animate={controls}
        />

        <svg viewBox="0 0 200 200" className="w-full h-full relative z-10 overflow-visible">
          <defs>
            <linearGradient id="vc-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFC300" />
              <stop offset="100%" stopColor="#FF6B00" />
            </linearGradient>
          </defs>

          {/* Initial Dots */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={`dot-${i}`}
              cx={20 + i * 15}
              cy={20 + i * 15}
              r="4"
              fill="url(#vc-gradient)"
              custom={i}
              variants={dotVariants}
              initial="hidden"
              animate={controls}
            />
          ))}

          {/* V Shape - Drawing top to bottom */}
          <motion.path
            d="M 40 40 L 80 140 L 120 40"
            stroke="url(#vc-gradient)"
            strokeWidth="20"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            variants={pathVariants}
            initial="hidden"
            animate={controls}
          />

          {/* C Shape - Drawing clockwise */}
          <motion.path
            d="M 170 60 A 50 50 0 1 0 170 140"
            stroke="url(#vc-gradient)"
            strokeWidth="20"
            strokeLinecap="round"
            fill="none"
            variants={pathVariants}
            initial={{ pathLength: 0, opacity: 0, rotate: -90, originX: 0.5, originY: 0.5 }} // Start rotated
            animate={controls}
          />

          {/* Burst Dots */}
          {[0, 1, 2, 3].map((i) => (
            <motion.circle
              key={`burst-${i}`}
              cx={180}
              cy={100}
              r="3"
              fill="#FF6B00"
              custom={i}
              variants={burstVariants}
              initial="hidden"
              animate={controls}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default EnergyFlowLogo;
