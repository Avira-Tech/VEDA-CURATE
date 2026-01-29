// // import { useEffect, useRef } from "react";
// // import gsap from "gsap";

// // export default function Preloader({ onComplete }) {
// //   const containerRef = useRef(null);
// //   const fullWordRef = useRef(null);
// //   const text = "VEDACURATE".split("");

// //   useEffect(() => {
// //     const tl = gsap.timeline({
// //       onComplete: () => onComplete?.()
// //     });

// //     gsap.set(".single-char", { opacity: 0, scale: 0.8, filter: "blur(10px)" });
// //     gsap.set(fullWordRef.current, { opacity: 0, y: 20 });

// //     text.forEach((_, i) => {
// //       tl.to(`.char-${i}`, {
// //         opacity: 1,
// //         scale: 1.1,
// //         filter: "blur(0px)",
// //         duration: 0.3,
// //         ease: "power2.out",
// //       })
// //       .to(`.char-${i}`, {
// //         opacity: 0,
// //         scale: 1.2,
// //         filter: "blur(5px)",
// //         duration: 0.2,
// //         ease: "power2.in",
// //       }, "+=0.1");
// //     });

// //     tl.to(fullWordRef.current, {
// //       opacity: 1,
// //       y: 0,
// //       duration: 0.8,
// //       ease: "expo.out",
// //     }, "+=0.2");

// //     tl.to(fullWordRef.current, {
// //       letterSpacing: "12px",
// //       duration: 1.5,
// //       ease: "power1.inOut"
// //     }, "-=0.5");

// //     tl.to(containerRef.current, {
// //       yPercent: -100,
// //       duration: 1,
// //       ease: "power4.inOut"
// //     }, "+=0.5");

// //     return () => tl.kill();
// //   }, [onComplete, text]);

// //   return (
// //     <div className="fixed inset-0 z-[99999] bg-[#050505] flex items-center justify-center overflow-hidden" ref={containerRef}>
// //       <div className="flex items-center justify-center relative">
// //         {text.map((char, i) => (
// //           <div 
// //             key={`single-${i}`} 
// //             className={`absolute text-[clamp(3rem,10vw,6rem)] font-black text-brand-orange-400 uppercase tracking-wider drop-shadow-[0_0_30px_rgba(255,152,0,0.6)] pointer-events-none char-${i}`}
// //           >
// //             {char}
// //           </div>
// //         ))}
// //         <div 
// //           className="flex text-[clamp(2rem,6vw,4rem)] font-black text-white uppercase tracking-[4px]" 
// //           ref={fullWordRef}
// //         >
// //           {text.map((char, i) => (
// //             <span 
// //               key={`full-${i}`} 
// //               className={i < 4 ? "text-brand-orange-400" : ""}
// //             >
// //               {char}
// //             </span>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function Preloader({ onComplete }) {
//   const containerRef = useRef(null);
//   const fullWordRef = useRef(null);
//   const leftPanelRef = useRef(null);
//   const rightPanelRef = useRef(null);
//   const text = "VEDACURATE".split("");

//   useEffect(() => {
//     const tl = gsap.timeline({
//       onComplete: () => onComplete?.()
//     });

//     // Initial States
//     gsap.set(".single-char", { opacity: 0, scale: 0.8, filter: "blur(10px)" });
//     gsap.set(fullWordRef.current, { opacity: 0, y: 20 });

//     // 1. Individual Character Sequence
//     text.forEach((_, i) => {
//       tl.to(`.char-${i}`, {
//         opacity: 1,
//         scale: 1.1,
//         filter: "blur(0px)",
//         duration: 0.3,
//         ease: "power2.out",
//       })
//       .to(`.char-${i}`, {
//         opacity: 0,
//         scale: 1.2,
//         filter: "blur(5px)",
//         duration: 0.2,
//         ease: "power2.in",
//       }, "+=0.1");
//     });

//     // 2. Full Word Reveal & Expansion
//     tl.to(fullWordRef.current, {
//       opacity: 1,
//       y: 0,
//       duration: 0.8,
//       ease: "expo.out",
//     }, "+=0.2")
//     .to(fullWordRef.current, {
//       letterSpacing: "12px",
//       duration: 1.5,
//       ease: "power1.inOut"
//     }, "-=0.5");

//     // 3. THE SPLIT & ZOOM TRANSITION
//     // We zoom the text into the camera while the panels slide away
//     tl.to(fullWordRef.current, {
//       scale: 4,
//       opacity: 0,
//       filter: "blur(20px)",
//       duration: 1,
//       ease: "power2.in"
//     }, "+=0.2");

//     tl.to(leftPanelRef.current, {
//       xPercent: -100,
//       duration: 1.2,
//       ease: "expo.inOut"
//     }, "-=0.8");

//     tl.to(rightPanelRef.current, {
//       xPercent: 100,
//       duration: 1.2,
//       ease: "expo.inOut"
//     }, "<"); // Starts at the same time as left panel

//     // Hide the entire container after panels clear the screen
//     tl.set(containerRef.current, { display: "none" });

//     return () => tl.kill();
//   }, [onComplete, text]);

//   return (
//     <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden" ref={containerRef}>
      
//       {/* Background Panels (The Split) */}
//       <div ref={leftPanelRef} className="absolute inset-y-0 left-0 w-1/2 bg-[#050505] z-10" />
//       <div ref={rightPanelRef} className="absolute inset-y-0 right-0 w-1/2 bg-[#050505] z-10" />

//       {/* Center Content */}
//       <div className="relative z-20 flex items-center justify-center">
//         {text.map((char, i) => (
//           <div 
//             key={`single-${i}`} 
//             className={`absolute text-[clamp(3rem,10vw,6rem)] font-black text-brand-orange-400 uppercase tracking-wider drop-shadow-[0_0_30px_rgba(255,152,0,0.6)] pointer-events-none char-${i}`}
//           >
//             {char}
//           </div>
//         ))}
        
//         <div 
//           className="flex text-[clamp(2rem,6vw,4rem)] font-black text-white uppercase tracking-[4px]" 
//           ref={fullWordRef}
//         >
//           {text.map((char, i) => (
//             <span 
//               key={`full-${i}`} 
//               className={i < 4 ? "text-brand-orange-400" : ""}
//             >
//               {char}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }) {
  const containerRef = useRef(null);
  const fullWordRef = useRef(null);
  const leftHalfRef = useRef(null);
  const rightHalfRef = useRef(null);
  const text = "VEDACURATE".split("");

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete?.()
    });

    // Initial setup
    gsap.set(".char-anim", { opacity: 0, scale: 0.8, filter: "blur(10px)" });
    gsap.set(fullWordRef.current, { opacity: 0, y: 30, scale: 0.9 });

    // 1. Sequence the individual characters
    text.forEach((_, i) => {
      tl.to(`.char-${i}`, {
        opacity: 1,
        scale: 1.2,
        filter: "blur(0px)",
        duration: 0.25,
        ease: "back.out(1.7)",
      })
      .to(`.char-${i}`, {
        opacity: 0,
        scale: 1.5,
        filter: "blur(10px)",
        duration: 0.2,
        ease: "power2.in",
      }, "+=0.05");
    });

    // 2. Reveal full word with a slight pop
    tl.to(fullWordRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "expo.out",
    }, "-=0.2");

    // 3. THE GRAND FINALE: Zoom and Split
    // We zoom the logo "into" the camera while panels slide
    tl.to(fullWordRef.current, {
      scale: 3,
      opacity: 0,
      filter: "blur(20px)",
      duration: 1.2,
      ease: "power4.inOut"
    }, "+=0.4");

    tl.to(leftHalfRef.current, {
      xPercent: -100,
      duration: 1.5,
      ease: "expo.inOut",
    }, "-=1.1")
    .to(rightHalfRef.current, {
      xPercent: 100,
      duration: 1.5,
      ease: "expo.inOut",
    }, "<");

    // Final cleanup to remove preloader from DOM
    tl.set(containerRef.current, { pointerEvents: "none", display: "none" });

    return () => tl.kill();
  }, [onComplete, text]);

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden" ref={containerRef}>
      
      {/* Left Panel with Inner Glow edge */}
      <div 
        ref={leftHalfRef} 
        className="absolute top-0 left-0 w-1/2 h-full bg-[#050505] z-10 border-r border-white/10"
      >
        <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-brand-orange-400/50 to-transparent shadow-[0_0_15px_rgba(255,152,0,0.5)]" />
      </div>

      {/* Right Panel with Inner Glow edge */}
      <div 
        ref={rightHalfRef} 
        className="absolute top-0 right-0 w-1/2 h-full bg-[#050505] z-10 border-l border-white/10"
      >
        <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-brand-orange-400/50 to-transparent shadow-[0_0_15px_rgba(255,152,0,0.5)]" />
      </div>

      {/* Animating Content */}
      <div className="relative z-20 flex items-center justify-center">
        {text.map((char, i) => (
          <div 
            key={`single-${i}`} 
            className={`absolute text-[clamp(3rem,12vw,8rem)] font-black text-brand-orange-400 uppercase char-anim char-${i} drop-shadow-[0_0_40px_rgba(255,152,0,0.4)]`}
          >
            {char}
          </div>
        ))}

        <div 
          ref={fullWordRef}
          className="flex flex-col items-center"
        >
          <div className="flex text-[clamp(2.5rem,8vw,5.5rem)] font-black text-white uppercase tracking-[0.1em]">
            {text.map((char, i) => (
              <span key={`full-${i}`} className={i < 4 ? "text-brand-orange-400" : ""}>
                {char}
              </span>
            ))}
          </div>
          {/* Optional: Add a subtle loading line under the word */}
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-brand-orange-400 to-transparent mt-4 opacity-50" />
        </div>
      </div>
    </div>
  );
}