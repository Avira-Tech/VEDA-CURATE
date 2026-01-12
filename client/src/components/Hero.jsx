// import { useState, useEffect, useRef } from "react";

// /* =========================
//    LETTER BY LETTER COMPONENT
//    Creates smooth reveal animation with backdrop blur
// ========================= */
// function LetterByLetter({ text, delay = 0, className = "", style = {} }) {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     // Stagger the reveal
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, delay);
//     return () => clearTimeout(timer);
//   }, [delay]);

//   if (!text) return null;

//   return (
//     <span
//       className={`letter-by-letter ${className}`}
//       style={{
//         display: "inline-block",
//         ...style
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {text.split("").map((char, index) => (
//         <span
//           key={index}
//           className="letter"
//           style={{
//             display: "inline-block",
//             opacity: isLoaded ? 1 : 0,
//             transform: isLoaded ? "translateY(0)" : "translateY(30px)",
//             filter: isLoaded ? "blur(0)" : "blur(10px)",
//             transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1)`,
//             transitionDelay: `${index * 0.03}s`,
//             position: "relative",
//           }}
//         >
//           {/* Backdrop blur layer during reveal */}
//           <span
//             style={{
//               position: "absolute",
//               inset: 0,
//               background: "linear-gradient(135deg, #ff9800, #ff5722)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//               opacity: isHovered ? 1 : isLoaded ? 0 : 0,
//               transition: "opacity 0.3s ease",
//               zIndex: 2,
//             }}
//           >
//             {char}
//           </span>

//           {/* Main text */}
//           <span
//             style={{
//               position: "relative",
//               zIndex: 1,
//               color: isLoaded && !isHovered ? "inherit" : "inherit",
//               transition: "color 0.3s ease",
//             }}
//           >
//             {char === " " ? "\u00A0" : char}
//           </span>
//         </span>
//       ))}
//     </span>
//   );
// }

// /* =========================
//    WORD BLOCK COMPONENT
//    Reveals entire words at once
// ========================= */
// function WordBlock({ words, delay = 0, gradient = false }) {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoaded(true);
//     }, delay);
//     return () => clearTimeout(timer);
//   }, [delay]);

//   const wordArray = Array.isArray(words) ? words : words.split(" ");

//   return (
//     <span style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.3em" }}>
//       {wordArray.map((word, wordIndex) => (
//         <span
//           key={wordIndex}
//           style={{
//             display: "inline-block",
//             opacity: isLoaded ? 1 : 0,
//             transform: isLoaded ? "translateY(0)" : "translateY(20px)",
//             filter: isLoaded ? "blur(0)" : "blur(6px)",
//             transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1)`,
//             transitionDelay: `${wordIndex * 0.1}s`,
//             background: gradient
//               ? "linear-gradient(135deg, #ff9800, #ff5722)"
//               : "transparent",
//             WebkitBackgroundClip: gradient ? "text" : "unset",
//             WebkitTextFillColor: gradient ? "transparent" : "inherit",
//             backgroundClip: gradient ? "text" : "unset",
//           }}
//         >
//           {word}
//         </span>
//       ))}
//     </span>
//   );
// }

// export default function Hero() {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [particles, setParticles] = useState([]);
//   const heroRef = useRef(null);

//   // Mouse move effect for glow
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { clientX, clientY } = e;
//       setMousePos({ x: clientX, y: clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   // Trigger animations on load
//   useEffect(() => {
//     // Start loading animation
//     setIsLoaded(false);

//     const loadTimer = setTimeout(() => {
//       setIsLoaded(true);
//     }, 100);

//     // Create floating particles
//     const newParticles = Array.from({ length: 20 }, (_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       size: Math.random() * 4 + 2,
//       duration: Math.random() * 10 + 10,
//       delay: Math.random() * 5,
//     }));
//     setParticles(newParticles);

//     return () => clearTimeout(loadTimer);
//   }, []);

//   // Parallax offset
//   const [parallaxOffset, setParallaxOffset] = useState(0);
//   useEffect(() => {
//     const handleScroll = () => {
//       setParallaxOffset(window.scrollY * 0.3);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (href) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       id="hero"
//       ref={heroRef}
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         position: "relative",
//         overflow: "hidden",
//         padding: "120px 10% 100px",
//       }}
//     >
//       {/* Animated Background Gradient Glow */}
//       <div
//         style={{
//           position: "absolute",
//           width: "600px",
//           height: "600px",
//           borderRadius: "50%",
//           background: "radial-gradient(circle, rgba(255, 152, 0, 0.15) 0%, transparent 70%)",
//           top: "50%",
//           left: "50%",
//           transform: `translate(-50%, -50%) translate(${mousePos.x - window.innerWidth / 2}px, ${mousePos.y - window.innerHeight / 2}px)`,
//           transition: "transform 0.3s ease-out",
//           pointerEvents: "none",
//           zIndex: 0,
//         }}
//       />

//       {/* Floating Particles */}
//       {particles.map((particle) => (
//         <div
//           key={particle.id}
//           style={{
//             position: "absolute",
//             width: `${particle.size}px`,
//             height: `${particle.size}px`,
//             background: "linear-gradient(135deg, #ff9800, #ff5722)",
//             borderRadius: "50%",
//             left: `${particle.x}%`,
//             top: `${particle.y}%`,
//             opacity: 0.3,
//             animation: `float ${particle.duration}s ease-in-out infinite`,
//             animationDelay: `${particle.delay}s`,
//             zIndex: 0,
//           }}
//         />
//       ))}

//       {/* Parallax Background Shapes */}
//       <div
//         style={{
//           position: "absolute",
//           top: "15%",
//           right: "10%",
//           width: "300px",
//           height: "300px",
//           border: "1px solid rgba(255, 152, 0, 0.1)",
//           borderRadius: "50%",
//           transform: `translateY(${parallaxOffset * 0.5}px)`,
//           zIndex: 0,
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           bottom: "20%",
//           left: "5%",
//           width: "200px",
//           height: "200px",
//           background: "linear-gradient(135deg, rgba(255, 152, 0, 0.05), rgba(255, 87, 34, 0.05))",
//           borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
//           transform: `translateY(${parallaxOffset * 0.3}px)`,
//           zIndex: 0,
//         }}
//       />

//       {/* Main Content */}
//       <div
//         style={{
//           position: "relative",
//           zIndex: 1,
//           maxWidth: "800px",
//         }}
//       >
//         {/* Animated Badge */}
//         <div
//           style={{
//             display: "inline-flex",
//             alignItems: "center",
//             gap: "10px",
//             background: "rgba(255, 152, 0, 0.1)",
//             border: "1px solid rgba(255, 152, 0, 0.3)",
//             borderRadius: "30px",
//             padding: "8px 20px",
//             marginBottom: "30px",
//             opacity: isLoaded ? 1 : 0,
//             transform: isLoaded ? "translateY(0)" : "translateY(20px)",
//             transition: "all 0.6s ease",
//           }}
//         >
//           <span
//             style={{
//               width: "8px",
//               height: "8px",
//               background: "#ff9800",
//               borderRadius: "50%",
//               animation: "pulse 2s infinite",
//             }}
//           />
// <span style={{ color: "#ff9800", fontSize: "1.1rem", fontWeight: "500" }}>
//             Available for new projects
//           </span>
//         </div>

//         {/* Main Heading with Letter-by-Letter Animation */}
//         <h1
//           style={{
// fontSize: "clamp(3rem, 6vw, 5.5rem)",
//             fontWeight: "800",
//             lineHeight: "1.1",
//             marginBottom: "25px",
//             opacity: isLoaded ? 1 : 0,
//             transform: isLoaded ? "translateY(0)" : "translateY(30px)",
//             transition: "all 0.8s ease 0.2s",
//           }}
//         >
//           <WordBlock
//             words={["Designing"]}
//             delay={400}
//           />
//           <span style={{ color: "white" }}> </span>
//           <WordBlock
//             words={["Brands."]}
//             delay={500}
//             gradient={true}
//           />
//           <br />
//           <WordBlock
//             words={["Building"]}
//             delay={700}
//           />
//           <span style={{ color: "white" }}> </span>
//           <WordBlock
//             words={["Digital Experiences."]}
//             delay={800}
//             gradient={true}
//           />
//         </h1>

//         {/* Subtitle with blur reveal */}
//         <p
//           style={{
// fontSize: "1.5rem",
//             color: "#b0b0b0",
//             marginBottom: "40px",
//             maxWidth: "600px",
//             opacity: isLoaded ? 1 : 0,
//             filter: isLoaded ? "blur(0)" : "blur(10px)",
//             transform: isLoaded ? "translateY(0)" : "translateY(20px)",
//             transition: "all 0.6s ease 1s",
//           }}
//         >
//           We craft premium digital experiences that transform brands and drive
//           growth. From stunning UI/UX to powerful web development.
//         </p>

//         {/* CTA Buttons */}
//         <div
//           style={{
//             display: "flex",
//             gap: "20px",
//             flexWrap: "wrap",
//             opacity: isLoaded ? 1 : 0,
//             transform: isLoaded ? "translateY(0)" : "translateY(20px)",
//             transition: "all 0.6s ease 1.2s",
//           }}
//         >
//           <button
//             onClick={() => scrollToSection("#projects")}
//             style={{
//               background: "linear-gradient(135deg, #ff9800, #ff5722)",
//               border: "none",
//               padding: "16px 36px",
//               color: "white",
// borderRadius: "10px",
//               fontWeight: "600",
//               fontSize: "1.15rem",
//               cursor: "pointer",
//               position: "relative",
//               overflow: "hidden",
//               transition: "all 0.3s ease",
//               boxShadow: "0 4px 25px rgba(255, 152, 0, 0.4)",
//             }}
//             className="cta-primary"
//             onMouseEnter={(e) => {
//               e.target.style.transform = "translateY(-3px)";
//               e.target.style.boxShadow = "0 8px 35px rgba(255, 152, 0, 0.5)";
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = "translateY(0)";
//               e.target.style.boxShadow = "0 4px 25px rgba(255, 152, 0, 0.4)";
//             }}
//           >
//             <span style={{ position: "relative", zIndex: 1 }}>View Our Work</span>
//             {/* Ripple Effect */}
//             <style>{`
//               .cta-primary::before {
//                 content: '';
//                 position: absolute;
//                 top: 50%;
//                 left: 50%;
//                 width: 0;
//                 height: 0;
//                 background: rgba(255, 255, 255, 0.2);
//                 border-radius: 50%;
//                 transform: translate(-50%, -50%);
//                 transition: width 0.6s ease, height 0.6s ease;
//               }
//               .cta-primary:hover::before {
//                 width: 300px;
//                 height: 300px;
//               }
//             `}</style>
//           </button>

//           <button
//             onClick={() => scrollToSection("#contact")}
//             style={{
//               background: "transparent",
//               border: "2px solid rgba(255, 152, 0, 0.5)",
//               padding: "14px 34px",
//               color: "#ff9800",
// borderRadius: "10px",
//               fontWeight: "600",
//               fontSize: "1.15rem",
//               cursor: "pointer",
//               position: "relative",
//               overflow: "hidden",
//               transition: "all 0.3s ease",
//             }}
//             className="cta-secondary"
//             onMouseEnter={(e) => {
//               e.target.style.background = "rgba(255, 152, 0, 0.1)";
//               e.target.style.borderColor = "#ff9800";
//               e.target.style.transform = "translateY(-3px)";
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = "transparent";
//               e.target.style.borderColor = "rgba(255, 152, 0, 0.5)";
//               e.target.style.transform = "translateY(0)";
//             }}
//           >
//             Contact Us
//           </button>
//         </div>

//         {/* Stats Row */}
//         <div
//           style={{
//             display: "flex",
//             gap: "60px",
//             marginTop: "60px",
//             paddingTop: "40px",
//             borderTop: "1px solid rgba(255, 152, 0, 0.1)",
//             opacity: isLoaded ? 1 : 0,
//             transform: isLoaded ? "translateY(0)" : "translateY(20px)",
//             transition: "all 0.6s ease 1.4s",
//           }}
//         >
//           <div>
//             <h3
//               style={{
// fontSize: "3rem",
//                 fontWeight: "700",
//                 background: "linear-gradient(135deg, #ff9800, #ff5722)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               150+
//             </h3>
// <p style={{ color: "#666", fontSize: "1.1rem" }}>Projects Delivered</p>
//           </div>
//           <div>
//             <h3
//               style={{
// fontSize: "3rem",
//                 fontWeight: "700",
//                 background: "linear-gradient(135deg, #ff9800, #ff5722)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               50+
//             </h3>
// <p style={{ color: "#666", fontSize: "1.1rem" }}>Happy Clients</p>
//           </div>
//           <div>
//             <h3
//               style={{
// fontSize: "3rem",
//                 fontWeight: "700",
//                 background: "linear-gradient(135deg, #ff9800, #ff5722)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               8+
//             </h3>
// <p style={{ color: "#666", fontSize: "1.1rem" }}>Years Experience</p>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: "40px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           opacity: isLoaded ? 1 : 0,
//           transition: "all 0.6s ease 1.6s",
//         }}
//       >
//         <div
//           style={{
//             width: "30px",
//             height: "50px",
//             border: "2px solid rgba(255, 152, 0, 0.3)",
//             borderRadius: "15px",
//             position: "relative",
//           }}
//         >
//           <div
//             style={{
//               width: "6px",
//               height: "6px",
//               background: "linear-gradient(135deg, #ff9800, #ff5722)",
//               borderRadius: "50%",
//               position: "absolute",
//               left: "50%",
//               top: "10px",
//               transform: "translateX(-50%)",
//               animation: "scrollDown 2s infinite",
//             }}
//           />
//         </div>
//       </div>

//       {/* Keyframe Animations */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
//           50% { transform: translateY(-20px) scale(1.2); opacity: 0.5; }
//         }
//         @keyframes scrollDown {
//           0% { top: 10px; opacity: 1; }
//           100% { top: 30px; opacity: 0; }
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.5; }
//         }
//       `}</style>
//     </section>
//   );
// }

// import { useState, useEffect, useRef } from "react";

// /* =========================
//    LETTER BY LETTER COMPONENT
//    Refined with subtle letter-spacing and smoother easing
// ========================= */
// function LetterByLetter({ text, delay = 0, className = "", style = {} }) {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoaded(true), delay);
//     return () => clearTimeout(timer);
//   }, [delay]);

//   if (!text) return null;

//   return (
//     <span
//       className={`letter-by-letter ${className}`}
//       style={{ display: "inline-block", ...style }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {text.split("").map((char, index) => (
//         <span
//           key={index}
//           style={{
//             display: "inline-block",
//             opacity: isLoaded ? 1 : 0,
//             transform: isLoaded ? "translateY(0)" : "translateY(20px)",
//             filter: isLoaded ? "blur(0)" : "blur(8px)",
//             transition: `all 0.6s cubic-bezier(0.23, 1, 0.32, 1)`,
//             transitionDelay: `${index * 0.02}s`,
//             position: "relative",
//             color: isHovered ? "#ff9800" : "inherit",
//           }}
//         >
//           {char === " " ? "\u00A0" : char}
//         </span>
//       ))}
//     </span>
//   );
// }

// /* =========================
//    WORD BLOCK COMPONENT
//    Enhanced with text-shadow and deeper gradients
// ========================= */
// function WordBlock({ words, delay = 0, gradient = false }) {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoaded(true), delay);
//     return () => clearTimeout(timer);
//   }, [delay]);

//   const wordArray = Array.isArray(words) ? words : words.split(" ");

//   return (
//     <span style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.25em" }}>
//       {wordArray.map((word, wordIndex) => (
//         <span
//           key={wordIndex}
//           style={{
//             display: "inline-block",
//             opacity: isLoaded ? 1 : 0,
//             transform: isLoaded ? "scale(1) translateY(0)" : "scale(0.95) translateY(15px)",
//             filter: isLoaded ? "blur(0)" : "blur(4px)",
//             transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1)`,
//             transitionDelay: `${wordIndex * 0.08}s`,
//             background: gradient
//               ? "linear-gradient(to right, #ff9800, #ff5722, #ffcc33)"
//               : "transparent",
//             WebkitBackgroundClip: gradient ? "text" : "unset",
//             WebkitTextFillColor: gradient ? "transparent" : "inherit",
//             fontWeight: "900",
//             letterSpacing: "-0.02em"
//           }}
//         >
//           {word}
//         </span>
//       ))}
//     </span>
//   );
// }

// export default function Hero() {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [isLoaded, setIsLoaded] = useState(false);
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", handleMouseMove);
//     setIsLoaded(true);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const scrollToSection = (href) => {
//     document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="hero"
//       ref={heroRef}
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         position: "relative",
//         overflow: "hidden",
//         padding: "100px 8%",
//         background: "#080808", // Deep luxury black
//         color: "#fff"
//       }}
//     >
//       {/* Background Mesh Gradient */}
//       <div style={{
//         position: "absolute",
//         inset: 0,
//         background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 152, 0, 0.08) 0%, transparent 40%)`,
//         zIndex: 0,
//         pointerEvents: "none"
//       }} />

//       <div style={{ position: "relative", zIndex: 1, maxWidth: "1000px" }}>

//         {/* Modern Glass Badge */}
//         <div
//           style={{
//             display: "inline-flex",
//             alignItems: "center",
//             gap: "12px",
//             background: "rgba(255, 152, 0, 0.05)",
//             backdropFilter: "blur(10px)",
//             border: "1px solid rgba(255, 152, 0, 0.2)",
//             borderRadius: "100px",
//             padding: "10px 24px",
//             marginBottom: "40px",
//             opacity: isLoaded ? 1 : 0,
//             transform: isLoaded ? "translateX(0)" : "translateX(-20px)",
//             transition: "all 0.8s ease",
//           }}
//         >
//           <div style={{ width: "10px", height: "10px", background: "#ff9800", borderRadius: "50%", boxShadow: "0 0 15px #ff9800" }} />
//           <span style={{ color: "#ff9800", fontSize: "0.9rem", fontWeight: "600", letterSpacing: "1px", textTransform: "uppercase" }}>
//             Open for collaborations
//           </span>
//         </div>

//         {/* Hero Title */}
//         <h1 style={{
//           fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
//           lineHeight: "0.95",
//           marginBottom: "30px",
//           color: "#fff"
//         }}>
//           <WordBlock words={["Designing"]} delay={200} />
//           <WordBlock words={["Magic."]} delay={400} gradient />
//           <br />
//           <WordBlock words={["Engineering"]} delay={600} />
//           <WordBlock words={["Growth."]} delay={800} gradient />
//         </h1>

//         <p style={{
//           fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
//           color: "rgba(255,255,255,0.6)",
//           marginBottom: "50px",
//           maxWidth: "650px",
//           lineHeight: "1.6",
//           opacity: isLoaded ? 1 : 0,
//           transform: isLoaded ? "translateY(0)" : "translateY(20px)",
//           transition: "all 0.8s ease 1s"
//         }}>
//           Vedacurate is a creative powerhouse blending <span style={{color: "#fff"}}>strategic design</span> with <span style={{color: "#fff"}}>cutting-edge code</span> to build brands that lead.
//         </p>

//         {/* Action Group */}
//         <div style={{
//           display: "flex",
//           gap: "24px",
//           opacity: isLoaded ? 1 : 0,
//           transition: "all 0.8s ease 1.2s"
//         }}>
//           <button
//             onClick={() => scrollToSection("#work")}
//             className="btn-primary"
//             style={{
//               background: "linear-gradient(135deg, #ff9800, #ff5722)",
//               color: "#fff",
//               border: "none",
//               padding: "20px 42px",
//               borderRadius: "12px",
//               fontWeight: "700",
//               fontSize: "1.1rem",
//               cursor: "pointer",
//               boxShadow: "0 10px 30px rgba(255, 87, 34, 0.3)",
//               transition: "transform 0.3s ease"
//             }}
//           >
//             Start a Project
//           </button>

//           <button
//             onClick={() => scrollToSection("#about")}
//             style={{
//               background: "rgba(255,255,255,0.03)",
//               color: "#fff",
//               border: "1px solid rgba(255,255,255,0.1)",
//               backdropFilter: "blur(10px)",
//               padding: "20px 42px",
//               borderRadius: "12px",
//               fontWeight: "600",
//               fontSize: "1.1rem",
//               cursor: "pointer",
//               transition: "all 0.3s ease"
//             }}
//             onMouseEnter={(e) => e.target.style.background = "rgba(255,255,255,0.08)"}
//             onMouseLeave={(e) => e.target.style.background = "rgba(255,255,255,0.03)"}
//           >
//             Our Story
//           </button>
//         </div>

//         {/* Luxury Stats Bar */}
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "40px",
//           marginTop: "80px",
//           paddingTop: "60px",
//           borderTop: "1px solid rgba(255,255,255,0.05)",
//           opacity: isLoaded ? 1 : 0,
//           transition: "all 1s ease 1.4s"
//         }}>
//           {[
//             { num: "150+", label: "Successful Launches" },
//             { num: "50+", label: "Global Partners" },
//             { num: "8+", label: "Years of Craft" }
//           ].map((stat, i) => (
//             <div key={i} style={{ group: "stat" }}>
//               <h4 style={{
//                 fontSize: "2.5rem",
//                 fontWeight: "800",
//                 marginBottom: "5px",
//                 background: "linear-gradient(to bottom, #fff, rgba(255,255,255,0.4))",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent"
//               }}>
//                 {stat.num}
//               </h4>
//               <p style={{ color: "rgba(255,255,255,0.4)", fontWeight: "500", fontSize: "0.95rem" }}>{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Side Decorative Text (Vertical) */}
//       <div style={{
//         position: "absolute",
//         right: "40px",
//         top: "50%",
//         transform: "translateY(-50%) rotate(90deg)",
//         fontSize: "0.7rem",
//         letterSpacing: "4px",
//         color: "rgba(255,255,255,0.2)",
//         fontWeight: "700",
//         textTransform: "uppercase",
//         pointerEvents: "none"
//       }}>
//         Vedacurate © 2026 • Digital Agency
//       </div>

//       <style>{`
//         .btn-primary:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 15px 40px rgba(255, 87, 34, 0.5);
//         }
//         @media (max-width: 768px) {
//           #hero { padding: 120px 5% 60px; }
//           .Luxury Stats Bar { grid-template-columns: 1fr; gap: 30px; }
//         }
//       `}</style>
//     </section>
//   );
// }

import { useState, useEffect, useRef } from "react";

/* =========================
   LETTER BY LETTER COMPONENT
   Refined with subtle letter-spacing and smoother easing
========================= */
function LetterByLetter({ text, delay = 0, className = "", style = {} }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!text) return null;

  return (
    <span
      className={`letter-by-letter ${className}`}
      style={{ display: "inline-block", ...style }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(20px)",
            filter: isLoaded ? "blur(0)" : "blur(8px)",
            transition: `all 0.6s cubic-bezier(0.23, 1, 0.32, 1)`,
            transitionDelay: `${index * 0.02}s`,
            position: "relative",
            color: isHovered ? "#ff9800" : "inherit",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

/* =========================
   WORD BLOCK COMPONENT
   Updated with Client-Attraction Motion: 
   - Shimmering Gradient Wave
   - Magnetic Organic Float
========================= */
function WordBlock({ words, delay = 0, gradient = false }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const wordArray = Array.isArray(words) ? words : words.split(" ");

  return (
    <span style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.25em" }}>
      {wordArray.map((word, wordIndex) => (
        <span
          key={wordIndex}
          style={{
            display: "inline-block",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded
              ? "scale(1) translateY(0)"
              : "scale(0.9) translateY(30px)",
            filter: isLoaded ? "blur(0)" : "blur(12px)",
            transition: `all 1.2s cubic-bezier(0.16, 1, 0.3, 1)`,
            transitionDelay: `${wordIndex * 0.1}s`,
            background: gradient
              ? "linear-gradient(90deg, #ff9800, #ff5722, #ffcc33, #ff9800)"
              : "transparent",
            backgroundSize: "300% auto",
            WebkitBackgroundClip: gradient ? "text" : "unset",
            WebkitTextFillColor: gradient ? "transparent" : "inherit",
            fontWeight: "900",
            letterSpacing: "-0.03em",
            animation: gradient
              ? `textShimmer 4s linear infinite, floatText 6s ease-in-out infinite`
              : "none",
            animationDelay: gradient ? `${delay}ms` : "0s",
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    setIsLoaded(true);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "100px 8%",
        background: "#080808",
        color: "#fff",
      }}
    >
      {/* Dynamic Background Mesh */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 152, 0, 0.08) 0%, transparent 40%)`,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1000px" }}>
        {/* Modern Glass Badge */}

        {/* Attraction Badge */}
        <div
          style={{
            display: "inline-flex",
            padding: "6px 12px",
            background: "rgba(255, 152, 0, 0.1)",
            border: "1px solid rgba(255, 152, 0, 0.2)",
            borderRadius: "6px",
            fontSize: "0.75rem",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#ff9800",
            marginBottom: "20px",
            animation: "pulseGlow 2s infinite",
          }}
        >
          Design • Tech • Growth
        </div>
        {/* Hero Title with Motion Update */}
        <h1
          style={{
            fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
            lineHeight: "0.95",
            marginBottom: "30px",
            color: "#fff",
          }}
        >
          <WordBlock words={["Designing"]} delay={200} />
          <WordBlock words={["Magic."]} delay={400} gradient />
          <br />
          <WordBlock words={["Engineering"]} delay={600} />
          <WordBlock words={["Growth."]} delay={800} gradient />
        </h1>

        <p
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "50px",
            maxWidth: "650px",
            lineHeight: "1.6",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 1s",
          }}
        >
          Vedacurate is a creative powerhouse blending{" "}
          <span style={{ color: "#fff" }}>strategic design</span> with{" "}
          <span style={{ color: "#fff" }}>cutting-edge code</span> to build
          brands that lead.
        </p>

        {/* Action Group */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            opacity: isLoaded ? 1 : 0,
            transition: "all 0.8s ease 1.2s",
          }}
        >
          <button
            onClick={() => scrollToSection("#work")}
            className="btn-primary"
            style={{
              background: "linear-gradient(135deg, #ff9800, #ff5722)",
              color: "#fff",
              border: "none",
              padding: "20px 42px",
              borderRadius: "12px",
              fontWeight: "700",
              fontSize: "1.1rem",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(255, 87, 34, 0.3)",
              transition: "transform 0.3s ease",
            }}
          >
            Start a Project
          </button>

          <button
            onClick={() => scrollToSection("#about")}
            style={{
              background: "rgba(255,255,255,0.03)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              padding: "20px 42px",
              borderRadius: "12px",
              fontWeight: "600",
              fontSize: "1.1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Our Story
          </button>
        </div>

        {/* Stats Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
            marginTop: "80px",
            paddingTop: "60px",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            opacity: isLoaded ? 1 : 0,
            transition: "all 1s ease 1.4s",
          }}
        >
          {[
            { num: "150+", label: "Successful Launches" },
            { num: "10+", label: "Global Partners" },
            { num: "4+", label: "Years of Craft" },
          ].map((stat, i) => (
            <div key={i} className="stat-item">
              <h4
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "800",
                  marginBottom: "5px",
                  background:
                    "linear-gradient(to bottom, #fff, rgba(255,255,255,0.4))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.num}
              </h4>
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontWeight: "500",
                  fontSize: "0.95rem",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Text Motion Keyframes */
        @keyframes textShimmer {
          to { background-position: 300% center; }
        }

        @keyframes floatText {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(0.5deg); }
        }

        /* Button & Stat Hover States */
        .btn-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(255, 87, 34, 0.5);
        }

        .stat-item:hover h4 {
           text-shadow: 0 0 20px rgba(255, 152, 0, 0.3);
           transform: scale(1.05);
           transition: all 0.4s ease;
        }

        @media (max-width: 768px) {
          #hero { padding: 120px 5% 60px; text-align: center; }
          #hero div { align-items: center; justify-content: center; margin-inline: auto; }
          h1 { line-height: 1.1; }
          div[style*="gridTemplateColumns"] { grid-template-columns: 1fr; gap: 30px; }
        }
      `}</style>
    </section>
  );
}
