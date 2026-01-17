// import { useState, useEffect } from "react";

// export default function About() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [counters, setCounters] = useState({
//     projects: 0,
//     clients: 0,
//     years: 0,
//   });

//   const targets = {
//     projects: 150,
//     clients: 50,
//     years: 8,
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     const section = document.querySelector("#about");
//     if (section) observer.observe(section);

//     return () => observer.disconnect();
//   }, []);

//   // Animate counters
//   useEffect(() => {
//     if (!isVisible) return;

//     const duration = 2000;
//     const steps = 60;
//     const interval = duration / steps;

//     const timers = [];

//     Object.keys(targets).forEach((key) => {
//       const increment = targets[key] / steps;
//       let current = 0;

//       const timer = setInterval(() => {
//         current += increment;
//         if (current >= targets[key]) {
//           current = targets[key];
//           clearInterval(timer);
//         }
//         setCounters((prev) => ({
//           ...prev,
//           [key]: Math.floor(current),
//         }));
//       }, interval);

//       timers.push(timer);
//     });

//     return () => timers.forEach(clearInterval);
//   }, [isVisible]);

//   return (
//     <section
//       id="about"
//       style={{
//         minHeight: "100vh",
//         padding: "120px 10%",
//         display: "flex",
//         alignItems: "center",
//         position: "relative",
//       }}
//     >
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           gap: "80px",
//           alignItems: "center",
//           width: "100%",
//           maxWidth: "1400px",
//           margin: "0 auto",
//         }}
//         className="about-container"
//       >
//         {/* Left: Text Content */}
//         <div
//           style={{
//             opacity: isVisible ? 1 : 0,
//             transform: isVisible ? "translateX(0)" : "translateX(-50px)",
//             transition: "all 0.8s ease",
//           }}
//         >
//           <div
//             style={{
//               display: "inline-block",
//               padding: "8px 20px",
//               background: "rgba(255, 152, 0, 0.1)",
//               border: "1px solid rgba(255, 152, 0, 0.3)",
//               borderRadius: "30px",
//               marginBottom: "25px",
//             }}
//           >
//             <span
//               style={{
//                 color: "#ff9800",
//                 fontSize: "0.9rem",
//                 fontWeight: "600",
//               }}
//             >
//               About Vedacurate
//             </span>
//           </div>

//           <h2
//             style={{
//               fontSize: "2.8rem",
//               fontWeight: "700",
//               marginBottom: "25px",
//               lineHeight: "1.2",
//             }}
//           >
//             <span style={{ color: "white" }}>We Create </span>
//             <span
//               style={{
//                 background: "linear-gradient(135deg, #ff9800, #ff5722)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Digital Magic
//             </span>
//           </h2>

//           <p
//             style={{
//               color: "#b0b0b0",
//               fontSize: "1.1rem",
//               lineHeight: "1.8",
//               marginBottom: "20px",
//             }}
//           >
//             Vedacurate is a creative digital studio passionate about transforming
//             brands through innovative design and cutting-edge technology. We
//             believe that great design is not just about aesthetics—it's about
//             solving real problems and creating meaningful connections.
//           </p>

//           <p
//             style={{
//               color: "#b0b0b0",
//               fontSize: "1.1rem",
//               lineHeight: "1.8",
//               marginBottom: "30px",
//             }}
//           >
//             Our team of experienced designers and developers works closely with
//             clients to understand their vision and bring it to life with
//             pixel-perfect precision and seamless user experiences.
//           </p>

//           {/* Feature Points */}
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "15px",
//               marginTop: "30px",
//             }}
//           >
//             {[
//               "Award-winning design solutions",
//               "Client-focused approach",
//               "On-time delivery guarantee",
//               "Post-launch support & maintenance",
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "15px",
//                   opacity: isVisible ? 1 : 0,
//                   transform: isVisible ? "translateY(0)" : "translateY(20px)",
//                   transition: `all 0.5s ease ${0.3 + index * 0.1}s`,
//                 }}
//               >
//                 <div
//                   style={{
//                     width: "24px",
//                     height: "24px",
//                     background: "linear-gradient(135deg, #ff9800, #ff5722)",
//                     borderRadius: "50%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     flexShrink: 0,
//                   }}
//                 >
//                   <span style={{ color: "white", fontSize: "0.8rem" }}>✓</span>
//                 </div>
//                 <span style={{ color: "#e0e0e0", fontSize: "1rem" }}>{item}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right: Animated Counters */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: "30px",
//             opacity: isVisible ? 1 : 0,
//             transform: isVisible ? "translateX(0)" : "translateX(50px)",
//             transition: "all 0.8s ease 0.2s",
//           }}
//         >
//           {/* Counter Cards */}
//           <div
//             style={{
//               background: "linear-gradient(135deg, rgba(255, 152, 0, 0.1), rgba(255, 87, 34, 0.05))",
//               border: "1px solid rgba(255, 152, 0, 0.2)",
//               borderRadius: "20px",
//               padding: "40px 30px",
//               textAlign: "center",
//               transition: "all 0.3s ease",
//             }}
//             className="counter-card"
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "translateY(-5px)";
//               e.currentTarget.style.boxShadow = "0 10px 40px rgba(255, 152, 0, 0.2)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "translateY(0)";
//               e.currentTarget.style.boxShadow = "none";
//             }}
//           >
//             <div
//               style={{
//                 fontSize: "3.5rem",
//                 fontWeight: "800",
//                 background: "linear-gradient(135deg, #ff9800, #ff5722)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//                 marginBottom: "10px",
//               }}
//             >
//               {counters.projects}+
//             </div>
//             <div
//               style={{
//                 color: "#b0b0b0",
//                 fontSize: "1rem",
//                 fontWeight: "500",
//               }}
//             >
//               Projects Delivered
//             </div>
//           </div>

//           <div
//             style={{
//               background: "#1a1a1a",
//               border: "1px solid #333",
//               borderRadius: "20px",
//               padding: "40px 30px",
//               textAlign: "center",
//               transition: "all 0.3s ease",
//             }}
//             className="counter-card"
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "translateY(-5px)";
//               e.currentTarget.style.borderColor = "#ff9800";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "translateY(0)";
//               e.currentTarget.style.borderColor = "#333";
//             }}
//           >
//             <div
//               style={{
//                 fontSize: "3.5rem",
//                 fontWeight: "800",
//                 background: "linear-gradient(135deg, #ff9800, #ff5722)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//                 marginBottom: "10px",
//               }}
//             >
//               {counters.clients}+
//             </div>
//             <div
//               style={{
//                 color: "#b0b0b0",
//                 fontSize: "1rem",
//                 fontWeight: "500",
//               }}
//             >
//               Happy Clients
//             </div>
//           </div>

//           <div
//             style={{
//               background: "#1a1a1a",
//               border: "1px solid #333",
//               borderRadius: "20px",
//               padding: "40px 30px",
//               textAlign: "center",
//               gridColumn: "span 2",
//               transition: "all 0.3s ease",
//             }}
//             className="counter-card"
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "translateY(-5px)";
//               e.currentTarget.style.borderColor = "#ff9800";
//               e.currentTarget.style.boxShadow = "0 10px 40px rgba(255, 152, 0, 0.15)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "translateY(0)";
//               e.currentTarget.style.borderColor = "#333";
//               e.currentTarget.style.boxShadow = "none";
//             }}
//           >
//             <div
//               style={{
//                 fontSize: "3.5rem",
//                 fontWeight: "800",
//                 background: "linear-gradient(135deg, #ff9800, #ff5722)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//                 marginBottom: "10px",
//               }}
//             >
//               {counters.years}+
//             </div>
//             <div
//               style={{
//                 color: "#b0b0b0",
//                 fontSize: "1rem",
//                 fontWeight: "500",
//               }}
//             >
//               Years of Experience
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Responsive */}
//       <style>{`
//         @media (max-width: 968px) {
//           .about-container {
//             grid-template-columns: 1fr !important;
//             gap: 60px !important;
//           }
//         }
//         @media (max-width: 500px) {
//           .about-container > div:last-child {
//             grid-template-columns: 1fr !important;
//           }
//           .counter-card[style*="grid-column: span 2"] {
//             grid-column: span 1 !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// import { useState, useEffect, useRef } from "react";

// export default function About() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0 });
//   const sectionRef = useRef(null);

//   const targets = { projects: 150, clients: 20, years: 4 };

//   // Intersection Observer to trigger animations when section is in view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   // Counter Animation Logic
//   useEffect(() => {
//     if (!isVisible) return;

//     const duration = 2000; // 2 seconds
//     const steps = 60;
//     const interval = duration / steps;

//     const timers = Object.keys(targets).map((key) => {
//       let current = 0;
//       const increment = targets[key] / steps;

//       return setInterval(() => {
//         current += increment;
//         if (current >= targets[key]) {
//           current = targets[key];
//           clearInterval(timers[key]);
//         }
//         setCounters((prev) => ({
//           ...prev,
//           [key]: Math.floor(current),
//         }));
//       }, interval);
//     });

//     return () => timers.forEach(clearInterval);
//   }, [isVisible]);

//   return (
//     <section
//       id="about"
//       ref={sectionRef}
//       style={{
//         minHeight: "100vh",
//         padding: "100px 8%",
//         background: "transparent", // Ensuring global background animation is visible
//         position: "relative",
//         overflow: "hidden",
//         display: "flex",
//         alignItems: "center",
//       }}
//     >
//       <div
//         className="about-wrapper"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1.2fr 0.8fr",
//           gap: "60px",
//           position: "relative",
//           zIndex: 1,
//           width: "100%",
//         }}
//       >
//         {/* Left Content Area */}
//         <div
//           style={{
//             opacity: isVisible ? 1 : 0,
//             transform: isVisible ? "translateY(0)" : "translateY(40px)",
//             transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
//           }}
//         >
//           {/* Branded Badge */}
//           <div className="about-badge">
//             <span className="pulse-dot" />
//             <span className="badge-text">About Vedacurate</span>
//           </div>

//           {/* Motion Text Heading */}
//           <h2 className="about-heading">
//             We Create <br />
//             <span className="liquid-motion-text">Digital Magic</span>
//           </h2>

//           <p className="about-description">
//             We don’t just design — we build brands and experiences.
// From scroll-stopping social media creatives and unique brand identities to product design, modern websites, and interactive AR/VR experiences, we help businesses stand out in a world full of noise. We blend creativity, strategy, and technology to deliver work that looks great and performs even better.
//           </p>

//           {/* Feature List */}
//           <div className="benefit-list">
//             {[
//               "Award-winning UI/UX Design",
//               "Scalable Web Development",
//               "Strategic Brand Identity",
//               "Continuous Support & Growth",
//             ].map((benefit, i) => (
//               <div key={i} className="benefit-item">
//                 <div className="benefit-icon">✓</div>
//                 <span className="benefit-text">{benefit}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Stats Area */}
//         <div
//           className="stats-container"
//           style={{
//             opacity: isVisible ? 1 : 0,
//             transform: isVisible ? "scale(1)" : "scale(0.9)",
//             transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
//           }}
//         >
//           {/* Main Large Stat Card */}
//           <div className="glass-card main-stat">
//             <h3 className="stat-number">{counters.projects}+</h3>
//             <p className="stat-label">Projects Delivered</p>
//           </div>

//           {/* Smaller Sub-Stats Grid */}
//           <div className="stat-subgrid">
//             <div className="glass-card">
//               <h3 className="stat-number-small">{counters.clients}+</h3>
//               <p className="stat-label">Happy Clients</p>
//             </div>
//             <div className="glass-card">
//               <h3 className="stat-number-small">{counters.years}+</h3>
//               <p className="stat-label">Years Active</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         /* 1. LIQUID MOTION TEXT EFFECT */
//         .about-wrapper {
//           display: grid;
//           grid-template-columns: 1.2fr 0.8fr;
//           gap: 60px;
//         }

//         @media (max-width: 1024px) {
//           .about-wrapper {
//             grid-template-columns: 1fr;
//             gap: 40px;
//             text-align: center;
//           }
//           .benefit-list {
//             justify-content: center;
//           }
//           .about-badge {
//             margin: 0 auto 35px;
//           }
//           .stats-container {
//             flex-direction: row;
//             flex-wrap: wrap;
//             justify-content: center;
//           }
//           .stat-subgrid {
//             width: 100%;
//           }
//         }

//         @media (max-width: 768px) {
//           .about-heading {
//             font-size: 2.5rem;
//           }
//           .stats-container {
//             flex-direction: column;
//           }
//           .benefit-list {
//             grid-template-columns: 1fr;
//             text-align: left;
//           }
//         }

//         .about-heading {
//           font-size: clamp(2.8rem, 5vw, 4.8rem);
//           font-weight: 900;
//           line-height: 1.1;
//           color: #fff;
//           margin-bottom: 30px;
//         }

//         .liquid-motion-text {
//           position: relative;
//           color: transparent;
//           -webkit-text-stroke: 1px rgba(255, 152, 0, 0.4);
//           background: linear-gradient(
//             to right,
//             #ff9800,
//             #ff5722,
//             #ffcc33,
//             #ff5722,
//             #ff9800
//           );
//           background-size: 200% auto;
//           -webkit-background-clip: text;
//           background-clip: text;
//           animation: liquidFlow 4s linear infinite;
//         }

//         @keyframes liquidFlow {
//           0% { background-position: 0% center; }
//           100% { background-position: 200% center; }
//         }

//         /* 2. UI COMPONENTS & BADGES */
//         .about-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 12px;
//           background: rgba(255, 152, 0, 0.08);
//           backdrop-filter: blur(5px);
//           padding: 10px 20px;
//           border-radius: 100px;
//           border: 1px solid rgba(255, 152, 0, 0.2);
//           margin-bottom: 35px;
//         }

//         .pulse-dot {
//           width: 8px;
//           height: 8px;
//           background: #ff9800;
//           border-radius: 50%;
//           box-shadow: 0 0 12px #ff9800;
//           animation: badgePulse 2s infinite;
//         }

//         @keyframes badgePulse {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.5; transform: scale(1.2); }
//         }

//         .badge-text {
//           color: #ff9800;
//           font-size: 0.85rem;
//           font-weight: 700;
//           text-transform: uppercase;
//           letter-spacing: 1.5px;
//         }

//         /* 3. TYPOGRAPHY */
//         .about-description {
//           font-size: 1.2rem;
//           color: rgba(255, 255, 255, 0.6);
//           line-height: 1.8;
//           margin-bottom: 45px;
//           max-width: 650px;
//         }

//         .text-white { color: #fff; font-weight: 600; }

//         .benefit-list { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
//         .benefit-item { display: flex; align-items: center; gap: 14px; }
        
//         .benefit-icon {
//           width: 22px;
//           height: 22px;
//           border-radius: 50%;
//           background: rgba(255, 152, 0, 0.15);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: #ff9800;
//           font-size: 0.75rem;
//           border: 1px solid rgba(255, 152, 0, 0.3);
//         }

//         .benefit-text { color: rgba(255, 255, 255, 0.85); font-weight: 500; font-size: 1rem; }

//         /* 4. GLASS STAT CARDS */
//         .stats-container { display: flex; flex-direction: column; gap: 24px; }
//         .stat-subgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }

//         .glass-card {
//           background: rgba(255, 255, 255, 0.02);
//           backdrop-filter: blur(15px);
//           -webkit-backdrop-filter: blur(15px);
//           border: 1px solid rgba(255, 255, 255, 0.08);
//           border-radius: 32px;
//           padding: 40px;
//           transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .glass-card:hover {
//           transform: translateY(-10px);
//           border-color: rgba(255, 152, 0, 0.4);
//           background: rgba(255, 255, 255, 0.05);
//           box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
//         }

//         .main-stat {
//           padding: 60px 45px;
//           background: linear-gradient(135deg, rgba(255, 152, 0, 0.08), rgba(255, 87, 34, 0.03));
//           border-color: rgba(255, 152, 0, 0.15);
//         }

//         .stat-number {
//           font-size: 4.8rem;
//           font-weight: 900;
//           color: #fff;
//           margin: 0;
//           letter-spacing: -3px;
//         }

//         .stat-number-small {
//           font-size: 3rem;
//           font-weight: 800;
//           color: #fff;
//           margin: 0;
//         }

//         .stat-label {
//           color: rgba(255, 255, 255, 0.4);
//           font-weight: 700;
//           text-transform: uppercase;
//           letter-spacing: 2px;
//           font-size: 0.8rem;
//           margin-top: 15px;
//         }

//         /* 5. RESPONSIVE DESIGN */
//         @media (max-width: 1100px) {
//           .about-wrapper { grid-template-columns: 1fr; gap: 80px; }
//           .about-description { max-width: 100%; }
//         }

//         @media (max-width: 650px) {
//           .benefit-list { grid-template-columns: 1fr; }
//           .stat-subgrid { grid-template-columns: 1fr; }
//           .about-heading { font-size: 2.8rem; }
//         }
//       `}</style>
//     </section>
//   );
// }

import { useState, useEffect, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0 });
  const sectionRef = useRef(null);

  const targets = { projects: 150, clients: 20, years: 4 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timers = Object.keys(targets).map((key) => {
      let current = 0;
      const increment = targets[key] / steps;

      return setInterval(() => {
        current += increment;
        if (current >= targets[key]) {
          current = targets[key];
          clearInterval(timers[key]);
        }
        setCounters((prev) => ({
          ...prev,
          [key]: Math.floor(current),
        }));
      }, interval);
    });

    return () => timers.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        padding: "120px 8%",
        // background: "#080808",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background Decorative Element */}
      <div className="about-bg-blur" />

      <div className="about-wrapper">
        {/* Left Content Area */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-50px)",
            transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="about-badge">
            <span className="pulse-dot" />
            <span className="badge-text">About Vedacurate</span>
          </div>

          <h2 className="about-heading">
            We Create <br />
            <span className="liquid-motion-text">Digital Magic</span>
          </h2>

          <p className="about-description">
            We don’t just design — we build brands and experiences.
            From <span className="highlight">scroll-stopping</span> social media creatives to 
            interactive <span className="highlight">AR/VR experiences</span>, we blend strategy 
            and code to make you unmissable.
          </p>

          <div className="benefit-list">
            {[
              "Award-winning UI/UX Design",
              "Scalable Web Development",
              "Strategic Brand Identity",
              "Interactive AR/VR Solutions",
            ].map((benefit, i) => (
              <div 
                key={i} 
                className="benefit-item"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s ease ${0.4 + i * 0.1}s`
                }}
              >
                <div className="benefit-icon">
                   <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4 8L11 1" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span className="benefit-text">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Stats Area */}
        <div className="stats-container">
          <div className={`glass-card main-stat ${isVisible ? 'animate-card' : ''}`}>
             <div className="stat-glow" />
            <h3 className="stat-number">{counters.projects}+</h3>
            <p className="stat-label">Projects Delivered</p>
          </div>

          <div className="stat-subgrid">
            <div className={`glass-card ${isVisible ? 'animate-card-delayed' : ''}`}>
              <h3 className="stat-number-small">{counters.clients}+</h3>
              <p className="stat-label">Happy Clients</p>
            </div>
            <div className={`glass-card ${isVisible ? 'animate-card-delayed-more' : ''}`}>
              <h3 className="stat-number-small">{counters.years}+</h3>
              <p className="stat-label">Years Active</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-wrapper {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .about-bg-blur {
          position: absolute;
          top: 20%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(255, 152, 0, 0.08) 0%, transparent 70%);
          filter: blur(60px);
          z-index: 1;
          animation: drift 10s ease-in-out infinite;
        }

        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 50px); }
        }

        .about-heading {
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 900;
          line-height: 1;
          color: #fff;
          margin-bottom: 30px;
          letter-spacing: -2px;
        }

        .liquid-motion-text {
          color: transparent;
          background: linear-gradient(90deg, #ff9800, #ff5722, #ffcc33, #ff9800);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          animation: liquidFlow 4s linear infinite;
        }

        @keyframes liquidFlow {
          to { background-position: 200% center; }
        }

        .about-description {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 600px;
        }

        .highlight { color: #fff; font-weight: 600; }

        .benefit-list { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .benefit-item { display: flex; align-items: center; gap: 15px; }
        .benefit-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: rgba(255, 152, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 152, 0, 0.2);
        }

        .benefit-text { color: rgba(255, 255, 255, 0.8); font-size: 0.95rem; font-weight: 500; }

        /* Stats Animations */
        .stats-container { display: flex; flex-direction: column; gap: 25px; }
        .stat-subgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; }

        .glass-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 30px;
          padding: 40px;
          overflow: hidden;
          transition: transform 0.4s ease, border-color 0.4s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .animate-card { animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s; }
        .animate-card-delayed { animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.4s; }
        .animate-card-delayed-more { animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.6s; }

        @keyframes reveal {
          to { opacity: 1; transform: translateY(0); }
        }

        .glass-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: rgba(255, 152, 0, 0.4);
          background: rgba(255, 255, 255, 0.05);
        }

        .stat-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 152, 0, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .main-stat { padding: 50px; border-color: rgba(255, 152, 0, 0.2); }
        .stat-number { font-size: 5rem; font-weight: 900; color: #fff; margin: 0; letter-spacing: -2px; }
        .stat-number-small { font-size: 3rem; font-weight: 800; color: #fff; margin: 0; }
        .stat-label { color: rgba(255, 255, 255, 0.3); font-weight: 700; text-transform: uppercase; letter-spacing: 2px; font-size: 0.75rem; margin-top: 10px; }

        /* Mobile Adjustments */
        @media (max-width: 1024px) {
          .about-wrapper { grid-template-columns: 1fr; gap: 60px; text-align: center; }
          .about-description, .benefit-list { margin-left: auto; margin-right: auto; }
          .benefit-item { justify-content: center; }
          .about-badge { margin: 0 auto 30px; }
        }

        @media (max-width: 600px) {
          .stat-subgrid { grid-template-columns: 1fr; }
          .benefit-list { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}