// import { useState, useEffect, useRef } from "react";

// export default function Clients() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeTestimonial, setActiveTestimonial] = useState(0);
//   const carouselRef = useRef(null);

//   const clientLogos = [
//     { name: "TechCorp", initial: "TC" },
//     { name: "StartupX", initial: "SX" },
//     { name: "GlobalBrand", initial: "GB" },
//     { name: "InnovateLab", initial: "IL" },
//     { name: "DigitalWave", initial: "DW" },
//     { name: "FutureScale", initial: "FS" },
//     { name: "CloudNine", initial: "CN" },
//     { name: "NextGen", initial: "NG" },
//   ];

//   const testimonials = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       role: "CEO, TechCorp",
//       image: "👩‍💼",
//       quote:
//         "Vedacurate transformed our digital presence completely. Their attention to detail and creative vision exceeded all our expectations. The new website has increased our conversions by 45%.",
//       rating: 5,
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       role: "Founder, StartupX",
//       image: "👨‍💻",
//       quote:
//         "Working with Vedacurate was a game-changer for our startup. They delivered a stunning brand identity that helped us secure funding. Truly professional and innovative team.",
//       rating: 5,
//     },
//     {
//       id: 3,
//       name: "Emily Davis",
//       role: "Marketing Director, GlobalBrand",
//       image: "👩‍💻",
//       quote:
//         "The team at Vedacurate doesn't just build websites - they create experiences. Our e-commerce platform redesign resulted in a 60% increase in engagement within the first month.",
//       rating: 5,
//     },
//     {
//       id: 4,
//       name: "David Park",
//       role: "CTO, InnovateLab",
//       image: "👨‍💼",
//       quote:
//         "Impressed by their technical expertise and creative approach. They built a complex SaaS dashboard that's both powerful and beautiful. Highly recommend!",
//       rating: 5,
//     },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     const section = document.querySelector("#clients");
//     if (section) observer.observe(section);

//     return () => observer.disconnect();
//   }, []);

//   // Auto-rotate testimonials
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   return (
//     <section
//       id="clients"
//       style={{
//         minHeight: "100vh",
//         padding: "120px 10%",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background Effects */}
//       <div
//         style={{
//           position: "absolute",
//           top: "20%",
//           left: "-10%",
//           width: "400px",
//           height: "400px",
//           background: "radial-gradient(circle, rgba(255, 152, 0, 0.05) 0%, transparent 70%)",
//           borderRadius: "50%",
//           pointerEvents: "none",
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           bottom: "10%",
//           right: "-10%",
//           width: "500px",
//           height: "500px",
//           background: "radial-gradient(circle, rgba(255, 87, 34, 0.04) 0%, transparent 70%)",
//           borderRadius: "50%",
//           pointerEvents: "none",
//         }}
//       />

//       {/* Section Header */}
//       <div
//         style={{
//           textAlign: "center",
//           marginBottom: "60px",
//           opacity: isVisible ? 1 : 0,
//           transform: isVisible ? "translateY(0)" : "translateY(30px)",
//           transition: "all 0.8s ease",
//         }}
//       >
//         <div
//           style={{
//             display: "inline-block",
//             padding: "8px 20px",
//             background: "rgba(255, 152, 0, 0.1)",
//             border: "1px solid rgba(255, 152, 0, 0.3)",
//             borderRadius: "30px",
//             marginBottom: "20px",
//           }}
//         >
//           <span
//             style={{
//               color: "#ff9800",
//               fontSize: "0.9rem",
//               fontWeight: "600",
//             }}
//           >
//             Our Clients
//           </span>
//         </div>
//         <h2
//           style={{
//             fontSize: "2.8rem",
//             fontWeight: "700",
//             marginBottom: "15px",
//           }}
//         >
//           <span style={{ color: "white" }}>Trusted by </span>
//           <span
//             style={{
//               background: "linear-gradient(135deg, #ff9800, #ff5722)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             Industry Leaders
//           </span>
//         </h2>
//         <p
//           style={{
//             color: "#b0b0b0",
//             fontSize: "1.1rem",
//             maxWidth: "600px",
//             margin: "0 auto",
//           }}
//         >
//           We've had the privilege of working with amazing companies across industries.
//         </p>
//       </div>

//       {/* Logo Carousel */}
//       <div
//         style={{
//           marginBottom: "80px",
//           opacity: isVisible ? 1 : 0,
//           transform: isVisible ? "translateY(0)" : "translateY(20px)",
//           transition: "all 0.8s ease 0.2s",
//         }}
//       >
//         <div
//           style={{
//             overflow: "hidden",
//             padding: "20px 0",
//           }}
//         >
//           <div
//             ref={carouselRef}
//             style={{
//               display: "flex",
//               gap: "50px",
//               animation: "marquee 20s linear infinite",
//               width: "max-content",
//             }}
//           >
//             {/* Duplicate logos for seamless loop */}
//             {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
//               <div
//                 key={i}
//                 style={{
//                   width: "140px",
//                   height: "80px",
//                   background: "#1a1a1a",
//                   border: "1px solid #333",
//                   borderRadius: "12px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   flexShrink: 0,
//                   transition: "all 0.3s ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.borderColor = "#ff9800";
//                   e.currentTarget.style.boxShadow = "0 5px 20px rgba(255, 152, 0, 0.15)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.borderColor = "#333";
//                   e.currentTarget.style.boxShadow = "none";
//                 }}
//               >
//                 <span
//                   style={{
//                     fontSize: "1.5rem",
//                     fontWeight: "700",
//                     background: "linear-gradient(135deg, #ff9800, #ff5722)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                     backgroundClip: "text",
//                   }}
//                 >
//                   {logo.initial}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Testimonials */}
//       <div
//         style={{
//           maxWidth: "900px",
//           margin: "0 auto",
//           opacity: isVisible ? 1 : 0,
//           transform: isVisible ? "translateY(0)" : "translateY(30px)",
//           transition: "all 0.8s ease 0.4s",
//         }}
//       >
//         <div
//           style={{
//             background: "#1a1a1a",
//             border: "1px solid #333",
//             borderRadius: "24px",
//             padding: "50px",
//             position: "relative",
//           }}
//         >
//           {/* Decorative Quote */}
//           <div
//             style={{
//               position: "absolute",
//               top: "30px",
//               left: "40px",
//               fontSize: "4rem",
//               color: "rgba(255, 152, 0, 0.2)",
//               fontFamily: "Georgia, serif",
//               lineHeight: 1,
//             }}
//           >
//             "
//           </div>

//           {/* Testimonial Content */}
//           <div
//             style={{
//               position: "relative",
//               zIndex: 1,
//             }}
//           >
//             {/* Stars */}
//             <div
//               style={{
//                 display: "flex",
//                 gap: "5px",
//                 marginBottom: "25px",
//               }}
//             >
//               {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
//                 <span
//                   key={i}
//                   style={{
//                     color: "#ff9800",
//                     fontSize: "1.2rem",
//                   }}
//                 >
//                   ★
//                 </span>
//               ))}
//             </div>

//             {/* Quote */}
//             <p
//               style={{
//                 fontSize: "1.3rem",
//                 lineHeight: "1.8",
//                 color: "#e0e0e0",
//                 marginBottom: "35px",
//               }}
//             >
//               {testimonials[activeTestimonial].quote}
//             </p>

//             {/* Author */}
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "20px",
//               }}
//             >
//               <div
//                 style={{
//                   width: "60px",
//                   height: "60px",
//                   background: "linear-gradient(135deg, rgba(255, 152, 0, 0.2), rgba(255, 87, 34, 0.1))",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "1.8rem",
//                 }}
//               >
//                 {testimonials[activeTestimonial].image}
//               </div>
//               <div>
//                 <h4
//                   style={{
//                     color: "white",
//                     fontSize: "1.1rem",
//                     fontWeight: "600",
//                     marginBottom: "5px",
//                   }}
//                 >
//                   {testimonials[activeTestimonial].name}
//                 </h4>
//                 <p
//                   style={{
//                     color: "#888",
//                     fontSize: "0.95rem",
//                   }}
//                 >
//                   {testimonials[activeTestimonial].role}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Dots */}
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               gap: "12px",
//               marginTop: "40px",
//             }}
//           >
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveTestimonial(index)}
//                 style={{
//                   width: index === activeTestimonial ? "30px" : "10px",
//                   height: "10px",
//                   borderRadius: "5px",
//                   background: index === activeTestimonial
//                     ? "linear-gradient(135deg, #ff9800, #ff5722)"
//                     : "rgba(255, 152, 0, 0.2)",
//                   border: "none",
//                   cursor: "pointer",
//                   transition: "all 0.3s ease",
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Stats Row */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: "30px",
//           marginTop: "80px",
//           opacity: isVisible ? 1 : 0,
//           transform: isVisible ? "translateY(0)" : "translateY(20px)",
//           transition: "all 0.8s ease 0.6s",
//         }}
//       >
//         {[
//           { value: "98%", label: "Client Satisfaction" },
//           { value: "150+", label: "Projects Completed" },
//           { value: "50+", label: "Active Clients" },
//           { value: "24/7", label: "Support Available" },
//         ].map((stat, index) => (
//           <div
//             key={index}
//             style={{
//               textAlign: "center",
//               padding: "30px 20px",
//               background: "rgba(255, 152, 0, 0.03)",
//               border: "1px solid rgba(255, 152, 0, 0.1)",
//               borderRadius: "16px",
//               transition: "all 0.3s ease",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "translateY(-5px)";
//               e.currentTarget.style.borderColor = "rgba(255, 152, 0, 0.3)";
//               e.currentTarget.style.background = "rgba(255, 152, 0, 0.06)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "translateY(0)";
//               e.currentTarget.style.borderColor = "rgba(255, 152, 0, 0.1)";
//               e.currentTarget.style.background = "rgba(255, 152, 0, 0.03)";
//             }}
//           >
//             <div
//               style={{
//                 fontSize: "2.5rem",
//                 fontWeight: "800",
//                 background: "linear-gradient(135deg, #ff9800, #ff5722)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//                 marginBottom: "10px",
//               }}
//             >
//               {stat.value}
//             </div>
//             <div
//               style={{
//                 color: "#888",
//                 fontSize: "0.95rem",
//               }}
//             >
//               {stat.label}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Animations */}
//       <style>{`
//         @keyframes marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         @media (max-width: 1024px) {
//           #clients > div:last-child {
//             grid-template-columns: repeat(2, 1fr) !important;
//           }
//         }
//         @media (max-width: 640px) {
//           #clients > div:last-child {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

import { useState, useEffect, useRef } from "react";

export default function Clients() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRef = useRef(null);

  // Stats Logic: Count-up animation state
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const statTargets = [98, 100, 20, 24]; // Satisfaction, Projects, Clients, Support

  const clientLogos = [
    { name: "AviraTech", initial: "AviraTech" },
    { name: "Inkrid Studio", initial: "Inkrid Studio" },
    { name: "Toynikk", initial: "Toynik" },
    { name: "Dynamic Technosoft", initial: "Dynamic Technosoft" },
    { name: "Pivotalerp", initial: "Pivotalerp" },
    // { name: "FutureScale", initial: "FS" },
    // { name: "CloudNine", initial: "CN" },
    // { name: "NextGen", initial: "NG" },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      image: "👩‍💼",
      quote: "Vedacurate transformed our digital presence completely. Their attention to detail and creative vision exceeded all our expectations.",
      impact: "+45% Conversion"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, StartupX",
      image: "👨‍💻",
      quote: "Working with Vedacurate was a game-changer for our startup. They delivered a stunning brand identity that helped us secure funding.",
      impact: "$2M Raised"
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Director, GlobalBrand",
      image: "👩‍💻",
      quote: "They don't just build websites - they create digital experiences. Our redesign resulted in a massive engagement spike.",
      impact: "+60% Engagement"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Timer for Testimonial Rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Timer for Stat Count-up Animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic

      const nextCounts = statTargets.map(target => Math.floor(easeProgress * target));
      setCounts(nextCounts);

      if (frame === totalFrames) clearInterval(timer);
    }, frameDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const impactStats = [
    { v: `${counts[0]}%`, l: "Satisfaction" },
    { v: `${counts[1]}+`, l: "Launches" },
    { v: `${counts[2]}+`, l: "Active Clients" },
    { v: counts[3] === 24 ? "24/7" : `${counts[3]}/7`, l: "Support" }
  ];

  return (
    <section id="clients" ref={sectionRef} style={{
      minHeight: "100vh",
      padding: "100px 8%",
      position: "relative",
      background: "transparent",
      overflow: "hidden"
    }}>
      
      {/* Background Decorative Glow */}
      <div style={{ 
        position: "absolute", 
        top: "10%", 
        right: "-5%", 
        width: "400px", 
        height: "400px", 
        background: "radial-gradient(circle, rgba(255, 152, 0, 0.03) 0%, transparent 70%)", 
        pointerEvents: "none" 
      }} />

      {/* Header */}
      <div style={{
        textAlign: "center",
        marginBottom: "80px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)"
      }}>
        <div className="client-badge">Social Proof</div>
        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "900", color: "#fff" }}>
         Our  <span className="gradient-text">Clients</span>
        </h2>
      </div>

      {/* Infinite Logo Ribbon */}
      <div className="logo-ribbon-container" style={{
        opacity: isVisible ? 1 : 0,
        transition: "all 1.2s ease 0.3s"
      }}>
        <div className="logo-track">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div key={i} className="logo-card">
              <span className="logo-initial">{logo.initial}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Theatre */}
      <div className="testimonial-theatre" style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s"
      }}>
        <div className="glass-testimonial">
          <div className="quote-mark">“</div>
          <div className="testimonial-content">
             <div className="star-rating">★★★★★</div>
             <p className="main-quote">{testimonials[activeTestimonial].quote}</p>
             <div className="author-block">
                <div className="author-img">{testimonials[activeTestimonial].image}</div>
                <div className="author-meta">
                   <h4 className="author-name">{testimonials[activeTestimonial].name}</h4>
                   <p className="author-role">{testimonials[activeTestimonial].role}</p>
                </div>
                <div className="impact-tag">{testimonials[activeTestimonial].impact}</div>
             </div>
          </div>
          <div className="theatre-nav">
             {testimonials.map((_, i) => (
               <div key={i} 
                 onClick={() => setActiveTestimonial(i)}
                 className={`nav-bar ${i === activeTestimonial ? 'active' : ''}`} 
               />
             ))}
          </div>
        </div>
      </div>

      {/* Animated Impact Stats Grid */}
      <div className="impact-stats-grid">
        {impactStats.map((s, i) => (
          <div key={i} className="impact-stat-card" style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.7 + i * 0.1}s`
          }}>
            {/* Glow Trace Animation */}
            {isVisible && <div className="border-glow-trace" style={{ animationDelay: `${0.7 + i * 0.1}s` }} />}
            
            <div className="stat-v">{s.v}</div>
            <div className="stat-l">{s.l}</div>
          </div>
        ))}
      </div>

      <style>{`
        .gradient-text { background: linear-gradient(135deg, #ff9800, #ff5722); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        
        .client-badge {
          display: inline-block; padding: 8px 20px; background: rgba(255, 152, 0, 0.08);
          border: 1px solid rgba(255, 152, 0, 0.2); border-radius: 100px; color: #ff9800;
          font-weight: 700; text-transform: uppercase; letter-spacing: 2px; font-size: 0.7rem; margin-bottom: 25px;
        }

        /* Logo Ribbon */
        .logo-ribbon-container { overflow: hidden; padding: 40px 0; mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); }
        .logo-track { display: flex; width: max-content; gap: 40px; animation: scrollLogos 40s linear infinite; }
        .logo-card {
          width: 160px; height: 90px; background: rgba(255,255,255,0.02); backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; display: flex; align-items: center; justify-content: center;
          transition: 0.3s;
        }
        .logo-card:hover { border-color: #ff9800; background: rgba(255, 152, 0, 0.05); transform: translateY(-5px); }
        .logo-initial { font-size: 1.8rem; font-weight: 800; color: rgba(255,255,255,0.2); transition: 0.3s; }
        .logo-card:hover .logo-initial { color: #ff9800; }

        /* Testimonial Theatre */
        .testimonial-theatre { max-width: 1000px; margin: 40px auto; }
        .glass-testimonial {
          background: rgba(255,255,255,0.02); backdrop-filter: blur(25px); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 40px; padding: 60px; position: relative; overflow: hidden;
        }
        .quote-mark { position: absolute; top: -20px; left: 30px; font-size: 12rem; color: rgba(255, 152, 0, 0.03); font-family: serif; pointer-events: none; }
        .star-rating { color: #ff9800; margin-bottom: 20px; letter-spacing: 5px; }
        .main-quote { font-size: 1.6rem; line-height: 1.6; color: #fff; font-weight: 500; margin-bottom: 40px; }
        .author-block { display: flex; align-items: center; gap: 20px; }
        .author-img { width: 60px; height: 60px; background: rgba(255,152,0,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; }
        .author-name { color: #fff; font-size: 1.2rem; margin: 0; }
        .author-role { color: rgba(255,255,255,0.4); margin: 0; font-size: 0.9rem; }
        .impact-tag { margin-left: auto; padding: 8px 16px; background: rgba(255, 152, 0, 0.1); border: 1px solid rgba(255, 152, 0, 0.2); border-radius: 12px; color: #ff9800; font-weight: 700; font-size: 0.85rem; }

        .theatre-nav { display: flex; gap: 10px; margin-top: 50px; }
        .nav-bar { height: 4px; flex: 1; background: rgba(255,255,255,0.1); border-radius: 2px; cursor: pointer; transition: 0.4s; }
        .nav-bar.active { background: #ff9800; box-shadow: 0 0 15px rgba(255,152,0,0.5); }

        /* Animated Stats */
        .impact-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 60px; }
        .impact-stat-card {
          padding: 30px; background: rgba(255,152,0,0.03); border: 1px solid rgba(255,152,0,0.1); border-radius: 24px; 
          text-align: center; transition: 0.4s; position: relative; overflow: hidden;
        }
        .impact-stat-card:hover { transform: translateY(-8px) scale(1.02); border-color: rgba(255,152,0,0.3); background: rgba(255,152,0,0.08); box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .stat-v { font-size: 2.5rem; font-weight: 900; background: linear-gradient(to bottom, #fff, #ff9800); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 5px; }
        .stat-l { font-size: 0.8rem; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 2px; }

        .border-glow-trace {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 2px solid #ff9800; border-radius: 24px;
          opacity: 0; pointer-events: none; mask-image: linear-gradient(to right, black, transparent 50%); -webkit-mask-image: linear-gradient(to right, black, transparent 50%);
          animation: traceRotate 3s linear infinite;
        }

        @keyframes traceRotate {
          0% { transform: rotate(0deg); opacity: 0; }
          10% { opacity: 0.5; }
          100% { transform: rotate(360deg); opacity: 0; }
        }

        @keyframes scrollLogos { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        
        @media (max-width: 992px) {
          .impact-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .glass-testimonial { padding: 40px; }
          .author-block { flex-wrap: wrap; }
          .impact-tag { margin-left: 0; margin-top: 20px; width: 100%; text-align: center; }
        }

        @media (max-width: 480px) {
          .impact-stats-grid { grid-template-columns: 1fr; }
          .stat-v { font-size: 2rem; }
          .glass-testimonial { padding: 25px; }
          .main-quote { font-size: 1.2rem; }
          .quote-mark { font-size: 8rem; left: 10px; top: -10px; }
        }
      `}</style>
    </section>
  );
}