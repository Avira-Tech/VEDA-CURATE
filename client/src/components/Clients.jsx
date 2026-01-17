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
//            Industry Leaders
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);

  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const statTargets = [98, 150, 20, 24]; 

  const clientLogos = [
    { name: "AviraTech", initial: "AviraTech" },
    { name: "Inkrid Studio", initial: "Inkrid Studio" },
    { name: "Toynikk", initial: "Toynik" },
    { name: "Dynamic Technosoft", initial: "Dynamic Technosoft" },
    { name: "Pivotalerp", initial: "Pivotalerp" },
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
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTestimonialChange = (index) => {
    if (index === activeTestimonial || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTestimonial(index);
      setIsTransitioning(false);
    }, 450);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleTestimonialChange((activeTestimonial + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [activeTestimonial, isTransitioning]);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2500;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = 1 - Math.pow(1 - progress, 4); // Stronger ease-out
      setCounts(statTargets.map(t => Math.floor(easeProgress * t)));
      if (frame === totalFrames) clearInterval(timer);
    }, frameDuration);
    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section id="clients" ref={sectionRef} style={{
      minHeight: "100vh",
      padding: "140px 8%",
      position: "relative",
      // background: "#080808",
      overflow: "hidden"
    }}>
      
      {/* Immersive Background Elements */}
      {/* <div className="client-mesh-gradient" /> */}
      <div className="floating-orb" />

      {/* Header */}
      <div className="client-header" style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)"
      }}>
        <div className="impact-badge-top">Our Clients</div>
        <h2 className="client-hero-title">
          Trusted by <span className="text-shimmer">Industry Leaders</span>
        </h2>
      </div>

      {/* Kinetic Logo Ribbon */}
      <div className="logo-ribbon-wrapper">
        <div className="logo-slide-track">
          {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
            <div key={i} className="logo-capsule">
              <span className="logo-inner-text">{logo.initial}</span>
              <div className="logo-glow-effect" />
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Theatre */}
      <div className="theatre-outer" style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(60px)",
        transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s"
      }}>
        <div className={`theatre-main ${isTransitioning ? 'switching' : ''}`}>
          <div className="theatre-decoration">
            <div className="stars-row">★★★★★</div>
            <div className="giant-quote">“</div>
          </div>
          
          <p className="quote-text">{testimonials[activeTestimonial].quote}</p>
          
          <div className="theatre-profile-row">
            <div className="profile-identity">
              <div className="profile-circle">{testimonials[activeTestimonial].image}</div>
              <div className="profile-text">
                <h4 className="name-h4">{testimonials[activeTestimonial].name}</h4>
                <p className="role-p">{testimonials[activeTestimonial].role}</p>
              </div>
            </div>
            <div className="success-tag">
              <div className="tag-pulse" />
              {testimonials[activeTestimonial].impact}
            </div>
          </div>

          {/* Custom Pagination Bars */}
          <div className="theatre-pagination-bars">
            {testimonials.map((_, i) => (
              <div 
                key={i} 
                className={`pagination-bar ${i === activeTestimonial ? 'active' : ''}`}
                onClick={() => handleTestimonialChange(i)}
              >
                <div className="bar-progress" style={{ 
                    animationDuration: i === activeTestimonial ? '8s' : '0s' 
                }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Kinetic Impact Stats */}
      <div className="impact-grid">
        {[
          { v: `${counts[0]}%`, l: "Customer Happiness", delay: "0.6s" },
          { v: `${counts[1]}+`, l: "Projects Shipped", delay: "0.7s" },
          { v: `${counts[2]}+`, l: "Global Partners", delay: "0.8s" },
          { v: counts[3] === 24 ? "24/7" : `${counts[3]}/7`, l: "Reliable Support", delay: "0.9s" }
        ].map((stat, i) => (
          <div key={i} className="impact-box" style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${stat.delay}`
          }}>
            <div className="impact-hover-line" />
            <h3 className="impact-val">{stat.v}</h3>
            <p className="impact-lab">{stat.l}</p>
          </div>
        ))}
      </div>

      <style>{`
        .client-mesh-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 70% 30%, rgba(255, 152, 0, 0.08) 0%, transparent 60%);
          z-index: 0;
        }

        .floating-orb {
          position: absolute;
          width: 400px;
          height: 400px;
          background: rgba(255, 87, 34, 0.03);
          filter: blur(80px);
          border-radius: 50%;
          top: 10%;
          left: -10%;
          animation: floatOrb 20s infinite alternate ease-in-out;
        }

        @keyframes floatOrb {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(100px, 50px) scale(1.2); }
        }

        .client-header { text-align: center; margin-bottom: 100px; position: relative; z-index: 2; }
        .client-hero-title { font-size: clamp(3rem, 7vw, 5rem); font-weight: 900; color: #fff; letter-spacing: -2px; line-height: 1; }
        .text-shimmer {
          background: linear-gradient(90deg, #ff9800, #ff5722, #ffcc33, #ff9800);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerFlow 5s linear infinite;
        }

        @keyframes shimmerFlow { to { background-position: 200% center; } }

        .impact-badge-top {
          display: inline-block; padding: 6px 14px; background: rgba(255, 152, 0, 0.1);
          border: 1px solid rgba(255, 152, 0, 0.25); border-radius: 4px; color: #ff9800;
          font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 4px; margin-bottom: 25px;
        }

        /* Ribbon Styles */
        .logo-ribbon-wrapper { overflow: hidden; padding: 30px 0; margin-bottom: 80px; mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); }
        .logo-slide-track { display: flex; width: max-content; gap: 40px; animation: slideTrack 40s linear infinite; }
        .logo-capsule {
          position: relative; width: 220px; height: 110px; background: #0c0c0c;
          border: 1px solid rgba(255,255,255,0.05); border-radius: 24px; display: flex; align-items: center; justify-content: center;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1); cursor: pointer;
        }
        .logo-capsule:hover { transform: translateY(-10px) scale(1.05); border-color: #ff980070; background: #111; }
        .logo-inner-text { font-size: 1.3rem; font-weight: 800; color: rgba(255,255,255,0.15); transition: 0.4s; z-index: 1; }
        .logo-capsule:hover .logo-inner-text { color: #fff; }

        @keyframes slideTrack { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }

        /* Theatre UI */
        .theatre-outer { max-width: 1100px; margin: 0 auto; position: relative; z-index: 2; }
        .theatre-main {
          background: rgba(13, 13, 13, 0.4); backdrop-filter: blur(30px); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 48px; padding: 70px; transition: all 0.5s ease;
        }
        .switching { filter: blur(15px); opacity: 0; transform: scale(0.97); }
        
        .theatre-decoration { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
        .stars-row { color: #ff9800; letter-spacing: 6px; font-size: 1.3rem; }
        .giant-quote { font-size: 8rem; font-family: 'Times New Roman', serif; color: rgba(255,152,0,0.08); line-height: 0; }
        
        .quote-text { font-size: 2.2rem; line-height: 1.4; color: #fff; font-weight: 600; margin-bottom: 60px; letter-spacing: -0.5px; }
        
        .theatre-profile-row { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 30px; }
        .profile-identity { display: flex; align-items: center; gap: 24px; }
        .profile-circle { width: 72px; height: 72px; background: rgba(255,152,0,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.2rem; border: 1px solid rgba(255,152,0,0.3); }
        .name-h4 { color: #fff; margin: 0; font-size: 1.5rem; font-weight: 800; }
        .role-p { color: rgba(255,255,255,0.5); margin: 5px 0 0; font-size: 0.95rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }

        .success-tag {
          position: relative; padding: 14px 28px; background: linear-gradient(135deg, #ff9800, #ff5722); color: #fff; border-radius: 14px;
          font-weight: 900; font-size: 1rem; box-shadow: 0 10px 20px rgba(255, 87, 34, 0.2);
        }
        .tag-pulse { position: absolute; inset: 0; border-radius: 14px; background: inherit; animation: pulseTag 2.5s infinite; z-index: -1; }
        @keyframes pulseTag { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.4); opacity: 0; } }

        .theatre-pagination-bars { display: flex; gap: 15px; margin-top: 50px; }
        .pagination-bar { height: 6px; flex: 1; background: rgba(255,255,255,0.05); border-radius: 10px; cursor: pointer; overflow: hidden; position: relative; }
        .bar-progress { position: absolute; left: 0; top: 0; height: 100%; background: #ff9800; width: 0; }
        .pagination-bar.active .bar-progress { animation: progressFill linear forwards; }
        @keyframes progressFill { from { width: 0; } to { width: 100%; } }

        /* Impact Stats */
        .impact-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; margin-top: 100px; }
        .impact-box { 
          position: relative; padding: 45px 25px; background: #0a0a0a; border-radius: 32px; 
          border: 1px solid rgba(255,255,255,0.03); text-align: center; overflow: hidden;
          transition: all 0.4s ease;
        }
        .impact-box:hover { background: #0f0f0f; border-color: rgba(255,152,0,0.2); transform: translateY(-5px); }
        .impact-hover-line { position: absolute; top: 0; left: 0; width: 0; height: 4px; background: #ff9800; transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .impact-box:hover .impact-hover-line { width: 100%; }
        
        .impact-val { display: block; font-size: 3.5rem; font-weight: 900; color: #fff; margin-bottom: 8px; letter-spacing: -1px; }
        .impact-lab { font-size: 0.85rem; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 2px; font-weight: 800; }

        @media (max-width: 1024px) {
          .impact-grid { grid-template-columns: repeat(2, 1fr); }
          .theatre-main { padding: 50px; }
          .quote-text { font-size: 1.6rem; }
        }

        @media (max-width: 600px) {
          .impact-grid { grid-template-columns: 1fr; }
          .theatre-profile-row { flex-direction: column; align-items: flex-start; }
          .success-tag { width: 100%; text-align: center; }
          .logo-capsule { width: 160px; height: 80px; }
        }
      `}</style>
    </section>
  );
}