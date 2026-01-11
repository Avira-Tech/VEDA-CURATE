// // // import { useState, useEffect } from "react";

// // // export default function Preloader({ onComplete }) {
// // //   const name = "Vedacurate";
// // //   const letters = name.split("");
// // //   const [loadingWidth, setLoadingWidth] = useState(0);
// // //   const [isExiting, setIsExiting] = useState(false);

// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setLoadingWidth((prev) => {
// // //         if (prev >= 100) {
// // //           clearInterval(interval);
// // //           setTimeout(() => {
// // //             setIsExiting(true);
// // //             setTimeout(onComplete, 800); // Exit animation duration
// // //           }, 500);
// // //           return 100;
// // //         }
// // //         return prev + 0.8; // Smoother, slower increment
// // //       });
// // //     }, 20);

// // //     return () => clearInterval(interval);
// // //   }, [onComplete]);

// // //   return (
// // //     <div className={`preloader-overlay ${isExiting ? "exit-active" : ""}`}>
// // //       <div className="preloader-content">
// // //         {/* Kinetic Letters */}
// // //         <div className="letter-wrapper">
// // //           {letters.map((char, i) => (
// // //             <span 
// // //               key={i} 
// // //               className="kinetic-letter" 
// // //               style={{ 
// // //                 animationDelay: `${i * 0.08}s`,
// // //                 // Adding a slight individual drift
// // //                 transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.05}s`
// // //               }}
// // //             >
// // //               {char}
// // //             </span>
// // //           ))}
// // //         </div>

// // //         {/* Minimalist Glowing Loading Line */}
// // //         <div className="track">
// // //           <div 
// // //             className="bar-glow" 
// // //             style={{ width: `${loadingWidth}%` }} 
// // //           />
// // //           <div className="percentage-counter">
// // //             {Math.floor(loadingWidth)}%
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <style>{`
// // //         .preloader-overlay {
// // //           position: fixed;
// // //           inset: 0;
// // //           z-index: 9999;
// // //           background: #080808;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           transition: transform 0.8s cubic-bezier(0.87, 0, 0.13, 1), opacity 0.8s ease;
// // //         }

// // //         .preloader-overlay.exit-active {
// // //           transform: translateY(-100%);
// // //           opacity: 0;
// // //         }

// // //         .preloader-content {
// // //           position: relative;
// // //           display: flex;
// // //           flex-direction: column;
// // //           align-items: center;
// // //           width: 100%;
// // //           max-width: 400px;
// // //         }

// // //         .letter-wrapper {
// // //           display: flex;
// // //           gap: 4px;
// // //           margin-bottom: 40px;
// // //         }

// // //         .kinetic-letter {
// // //           display: inline-block;
// // //           font-size: clamp(2.5rem, 6vw, 4rem);
// // //           font-weight: 900;
// // //           color: #fff;
// // //           letter-spacing: -2px;
// // //           text-transform: uppercase;
// // //           /* Motion Reveal: Blur -> Clear + Jump */
// // //           animation: kineticReveal 2.5s infinite;
// // //           filter: blur(10px);
// // //           opacity: 0;
// // //         }

// // //         @keyframes kineticReveal {
// // //           0% { transform: translateY(20px); filter: blur(10px); opacity: 0; }
// // //           20% { transform: translateY(0); filter: blur(0px); opacity: 1; }
// // //           80% { transform: translateY(0); filter: blur(0px); opacity: 1; }
// // //           100% { transform: translateY(-20px); filter: blur(10px); opacity: 0; }
// // //         }

// // //         .track {
// // //           width: 200px;
// // //           position: relative;
// // //           height: 1px;
// // //           background: rgba(255, 255, 255, 0.1);
// // //         }

// // //         .bar-glow {
// // //           height: 100%;
// // //           background: linear-gradient(90deg, transparent, #ff9800, #ff5722);
// // //           box-shadow: 0 0 20px #ff5722, 0 0 40px #ff9800;
// // //           position: relative;
// // //           transition: width 0.3s cubic-bezier(0.23, 1, 0.32, 1);
// // //         }

// // //         .percentage-counter {
// // //           position: absolute;
// // //           right: 0;
// // //           top: 15px;
// // //           font-family: monospace;
// // //           color: rgba(255, 152, 0, 0.6);
// // //           font-size: 0.8rem;
// // //           font-weight: 600;
// // //           letter-spacing: 2px;
// // //         }

// // //         /* Ambient background pulse */
// // //         .preloader-overlay::before {
// // //           content: '';
// // //           position: absolute;
// // //           width: 300px;
// // //           height: 300px;
// // //           background: radial-gradient(circle, rgba(255, 152, 0, 0.05) 0%, transparent 70%);
// // //           animation: ambientGlow 4s infinite alternate;
// // //         }

// // //         @keyframes ambientGlow {
// // //           from { transform: scale(1); opacity: 0.3; }
// // //           to { transform: scale(1.5); opacity: 0.6; }
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // }

// // import { useState, useEffect } from "react";

// // export default function Preloader({ onComplete }) {
// //   const name = "Vedacurate";
// //   const letters = name.split("");
// //   const [loadingWidth, setLoadingWidth] = useState(0);
// //   const [isExiting, setIsExiting] = useState(false);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setLoadingWidth((prev) => {
// //         if (prev >= 100) {
// //           clearInterval(interval);
// //           setTimeout(() => {
// //             setIsExiting(true);
// //             setTimeout(onComplete, 1000); // Wait for exit slide
// //           }, 600);
// //           return 100;
// //         }
// //         // Random incremental speed for a more "organic" feel
// //         return prev + (Math.random() * 0.8 + 0.4);
// //       });
// //     }, 30);

// //     return () => clearInterval(interval);
// //   }, [onComplete]);

// //   return (
// //     <div className={`preloader-overlay ${isExiting ? "exit-active" : ""}`}>
// //       {/* Background Decorative Mesh */}
// //       <div className="mesh-gradient" />
      
// //       <div className="preloader-content">
// //         {/* Smooth Motion Letters */}
// //         <div className="letter-wrapper">
// //           {letters.map((char, i) => (
// //             <div key={i} className="char-container">
// //               <span 
// //                 className="kinetic-letter" 
// //                 style={{ 
// //                   animationDelay: `${i * 0.07}s`,
// //                 }}
// //               >
// //                 {char}
// //               </span>
// //               {/* Subtle shadow letter for depth */}
// //               <span className="char-ghost" style={{ animationDelay: `${i * 0.07}s` }}>
// //                 {char}
// //               </span>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Liquid Loading Track */}
// //         <div className="track-container">
// //           <div className="track-base">
// //             <div 
// //               className="liquid-fill" 
// //               style={{ width: `${loadingWidth}%` }} 
// //             />
// //           </div>
// //           <div className="status-row">
// //             <span className="loading-text">INITIALIZING DIGITAL MAGIC</span>
// //             <span className="percentage">{Math.floor(loadingWidth)}%</span>
// //           </div>
// //         </div>
// //       </div>

// //       <style>{`
// //         .preloader-overlay {
// //           position: fixed;
// //           inset: 0;
// //           z-index: 9999;
// //           background: #020617; /* Very deep luxury blue */
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           overflow: hidden;
// //           transition: transform 1s cubic-bezier(0.85, 0, 0.15, 1);
// //         }

// //         .preloader-overlay.exit-active {
// //           transform: translateY(-100%);
// //         }

// //         /* Animated Mesh Background */
// //         .mesh-gradient {
// //           position: absolute;
// //           inset: 0;
// //           background-image: 
// //             radial-gradient(at 0% 0%, rgba(30, 58, 138, 0.3) 0, transparent 50%),
// //             radial-gradient(at 100% 100%, rgba(15, 23, 42, 0.5) 0, transparent 50%),
// //             radial-gradient(at 50% 50%, rgba(30, 64, 175, 0.1) 0, transparent 80%);
// //           filter: blur(100px);
// //           animation: meshMove 10s ease infinite alternate;
// //         }

// //         @keyframes meshMove {
// //           from { transform: scale(1); }
// //           to { transform: scale(1.2); }
// //         }

// //         .preloader-content {
// //           position: relative;
// //           z-index: 10;
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //         }

// //         .letter-wrapper {
// //           display: flex;
// //           margin-bottom: 50px;
// //         }

// //         .char-container {
// //           position: relative;
// //           display: flex;
// //           justify-content: center;
// //         }

// //         .kinetic-letter {
// //           display: inline-block;
// //           font-size: clamp(2.5rem, 8vw, 4.5rem);
// //           font-weight: 900;
// //           color: #fff;
// //           letter-spacing: -2px;
// //           text-transform: uppercase;
// //           animation: smoothReveal 2.5s cubic-bezier(0.19, 1, 0.22, 1) infinite;
// //           position: relative;
// //           z-index: 2;
// //         }

// //         .char-ghost {
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           font-size: clamp(2.5rem, 8vw, 4.5rem);
// //           font-weight: 900;
// //           color: rgba(59, 130, 246, 0.2);
// //           text-transform: uppercase;
// //           filter: blur(8px);
// //           animation: ghostReveal 2.5s cubic-bezier(0.19, 1, 0.22, 1) infinite;
// //           letter-spacing: -2px;
// //         }

// //         @keyframes smoothReveal {
// //           0% { opacity: 0; transform: translateY(30px) rotateX(-90deg); filter: blur(10px); }
// //           20%, 80% { opacity: 1; transform: translateY(0) rotateX(0deg); filter: blur(0); }
// //           100% { opacity: 0; transform: translateY(-30px) rotateX(90deg); filter: blur(10px); }
// //         }

// //         @keyframes ghostReveal {
// //           0% { opacity: 0; transform: translateY(40px) scale(1.2); }
// //           20%, 80% { opacity: 0.5; transform: translateY(0) scale(1); }
// //           100% { opacity: 0; transform: translateY(-40px) scale(0.8); }
// //         }

// //         .track-container {
// //           width: 280px;
// //         }

// //         .track-base {
// //           width: 100%;
// //           height: 2px;
// //           background: rgba(255, 255, 255, 0.05);
// //           border-radius: 4px;
// //           overflow: hidden;
// //           margin-bottom: 12px;
// //         }

// //         .liquid-fill {
// //           height: 100%;
// //           background: linear-gradient(90deg, #3b82f6, #60a5fa, #3b82f6);
// //           background-size: 200% 100%;
// //           box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
// //           transition: width 0.4s cubic-bezier(0.1, 0.5, 0.1, 1);
// //           animation: gradientShift 2s linear infinite;
// //         }

// //         @keyframes gradientShift {
// //           to { background-position: 200% center; }
// //         }

// //         .status-row {
// //           display: flex;
// //           justify-content: space-between;
// //           font-family: 'Inter', monospace;
// //         }

// //         .loading-text {
// //           font-size: 0.6rem;
// //           letter-spacing: 3px;
// //           color: rgba(255, 255, 255, 0.3);
// //           font-weight: 700;
// //         }

// //         .percentage {
// //           font-size: 0.7rem;
// //           color: #60a5fa;
// //           font-weight: 800;
// //           letter-spacing: 1px;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // import { useEffect, useState } from "react";

// // export default function LoadingScreen({ onComplete }) {
// //   const text = "Vedacurate";
// //   const [visibleCount, setVisibleCount] = useState(0);

// //   // Letter-by-letter animation
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setVisibleCount((prev) => {
// //         if (prev < text.length) {
// //           return prev + 1;
// //         } else {
// //           clearInterval(interval);

// //           // Wait after full word is visible, then go next page
// //           setTimeout(() => {
// //             onComplete && onComplete();
// //           }, 800); // delay after full load

// //           return prev;
// //         }
// //       });
// //     }, 200); // letter speed

// //     return () => clearInterval(interval);
// //   }, [onComplete, text.length]);

// //   return (
// //     <>
// //       {/* INLINE CSS */}
// //       <style>{`
// //         .loading-screen {
// //           position: fixed;
// //           inset: 0;
// //           z-index: 9999;
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //           backdrop-filter: blur(12px);
// //           background: rgba(0, 0, 0, 0.6);
// //         }

// //         .loading-text {
// //           font-size: 3rem;
// //           font-weight: 700;
// //           letter-spacing: 4px;
// //           color: white;
// //         }

// //         .loading-text span {
// //           opacity: 0;
// //           transform: translateY(12px);
// //           display: inline-block;
// //           transition: opacity 0.3s ease, transform 0.3s ease;
// //         }

// //         .loading-text span.visible {
// //           opacity: 1;
// //           transform: translateY(0);
// //         }
// //       `}</style>

// //       <div className="loading-screen">
// //         <div className="loading-text">
// //           {text.split("").map((char, index) => (
// //             <span
// //               key={index}
// //               className={index < visibleCount ? "visible" : ""}
// //             >
// //               {char}
// //             </span>
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function LoadingScreen({ onComplete }) {
//   const containerRef = useRef(null);
//   const lettersRef = useRef([]);
//   const logoRef = useRef(null);

//   const text = "VEDACURATE";

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         defaults: { ease: "power4.out" }
//       });

//       // Initial states
//       gsap.set(lettersRef.current, {
//         y: 40,
//         opacity: 0,
//         filter: "blur(10px)",
//         scale: 0.9
//       });

//       // Letters reveal
//       tl.to(lettersRef.current, {
//         y: 0,
//         opacity: 1,
//         filter: "blur(0px)",
//         scale: 1,
//         stagger: 0.08,
//         duration: 0.8
//       });

//       // Hold moment (luxury pause)
//       tl.to({}, { duration: 0.5 });

//       // Scale-up logo/text before exit
//       tl.to(containerRef.current, {
//         scale: 1.1,
//         duration: 0.6,
//         ease: "power3.inOut"
//       });

//       // Fade + slide up exit
//       tl.to(containerRef.current, {
//         yPercent: -100,
//         opacity: 0,
//         duration: 1,
//         ease: "power4.in"
//       });

//       // Complete
//       tl.call(() => {
//         onComplete && onComplete();
//       });
//     });

//     return () => ctx.revert();
//   }, [onComplete]);

//   return (
//     <>
//       <style>{`
//         .loading-screen {
//           position: fixed;
//           inset: 0;
//           z-index: 9999;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background: #000;
//           overflow: hidden;
//         }

//         .loading-inner {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           transform-origin: center;
//         }

//         .logo-text {
//           display: flex;
//           font-size: clamp(2.5rem, 6vw, 4rem);
//           font-weight: 900;
//           letter-spacing: 4px;
//           text-transform: uppercase;
//         }

//         .logo-text span {
//           background: linear-gradient(
//             90deg,
//             #FFC107,
//             #FF9800,
//             #F97316
//           );
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-size: 200% 100%;
//           animation: gradientMove 2.5s linear infinite;
//           display: inline-block;
//         }

//         @keyframes gradientMove {
//           0% { background-position: 0% center; }
//           100% { background-position: 200% center; }
//         }

//         .glow {
//           position: absolute;
//           width: 400px;
//           height: 400px;
//           background: radial-gradient(
//             circle,
//             rgba(255, 152, 0, 0.15),
//             transparent 70%
//           );
//           filter: blur(80px);
//           animation: pulse 4s ease-in-out infinite alternate;
//         }

//         @keyframes pulse {
//           from { transform: scale(1); opacity: 0.4; }
//           to { transform: scale(1.3); opacity: 0.7; }
//         }
//       `}</style>

//       <div className="loading-screen" ref={containerRef}>
//         <div className="glow" />
//         <div className="loading-inner" ref={logoRef}>
//           <div className="logo-text">
//             {text.split("").map((char, i) => (
//               <span
//                 key={i}
//                 ref={(el) => (lettersRef.current[i] = el)}
//               >
//                 {char}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);
  const [progress, setProgress] = useState(0);
  const text = "VEDACURATE";

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.out" }
    });

    // Initial states for letters
    gsap.set(lettersRef.current, {
      y: 40,
      opacity: 0,
      filter: "blur(10px)",
      scale: 0.9
    });

    // Animate letters one by one with stagger
    tl.to(lettersRef.current, {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      stagger: 0.08,
      duration: 0.8,
      onUpdate: () => {
        // Calculate approximate progress based on animation progress
        const progressFraction = tl.progress();
        setProgress(Math.min(progressFraction * 100, 100));
      }
    });

    // Hold moment
    tl.to({}, { duration: 0.5 });

    // Scale-up container before exit
    tl.to(containerRef.current, {
      scale: 1.1,
      duration: 0.6,
      ease: "power3.inOut"
    });

    // Fade + slide up exit
    tl.to(containerRef.current, {
      yPercent: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.in",
      onComplete: () => {
        onComplete && onComplete();
      }
    });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <>
      <style>{`
        .loading-screen {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #000;
          overflow: hidden;
        }

        .loading-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          transform-origin: center;
          width: 320px;
        }

        .logo-text {
          display: flex;
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 16px;
          position: relative;
          z-index: 2;
        }

        .logo-text span {
          background: linear-gradient(
            90deg,
            #FFC107,
            #FF9800,
            #F97316
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 100%;
          animation: gradientMove 2.5s linear infinite;
          display: inline-block;
        }

        @keyframes gradientMove {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        .loading-bar-container {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 0 8px rgba(255, 152, 0, 0.3);
        }

        .loading-bar-fill {
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, #FFC107, #FF9800, #F97316);
          box-shadow: 0 0 10px #FF9800, 0 0 20px #F97316;
          transition: width 0.1s ease-out;
          will-change: width;
        }

        .glow {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(
            circle,
            rgba(255, 152, 0, 0.15),
            transparent 70%
          );
          filter: blur(80px);
          animation: pulse 4s ease-in-out infinite alternate;
          z-index: 0;
        }

        @keyframes pulse {
          from { transform: scale(1); opacity: 0.4; }
          to { transform: scale(1.3); opacity: 0.7; }
        }
      `}</style>

      <div className="loading-screen" ref={containerRef}>
        <div className="glow" />
        <div className="loading-inner">
          <div className="logo-text">
            {text.split("").map((char, i) => (
              <span
                key={i}
                ref={(el) => (lettersRef.current[i] = el)}
              >
                {char}
              </span>
            ))}
          </div>

          <div className="loading-bar-container" aria-label="Loading progress bar">
            <div
              className="loading-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
