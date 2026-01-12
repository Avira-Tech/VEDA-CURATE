// import { useState, useRef, useEffect } from "react";

// export default function Services() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeCard, setActiveCard] = useState(null);
//   const cardRefs = useRef([]);

//   const services = [
//     {
//       id: "branding",
//       title: "Branding",
//       icon: "◆",
//       description:
//         "Create a powerful brand identity that resonates with your audience and sets you apart from competitors.",
//       features: ["Logo Design", "Brand Strategy", "Visual Identity", "Brand Guidelines"],
//       color: "#ff9800",
//       hoverEffect: "icon-morph",
//     },
//     {
//       id: "uiux",
//       title: "UI/UX Design",
//       icon: "◈",
//       description:
//         "Design intuitive user experiences with beautiful interfaces that users love to interact with.",
//       features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
//       color: "#ff5722",
//       hoverEffect: "gradient-border",
//     },
//     {
//       id: "development",
//       title: "Web Development",
//       icon: "⬡",
//       description:
//         "Build fast, scalable, and secure websites using modern technologies and best practices.",
//       features: ["Frontend Development", "Backend Integration", "CMS Development", "API Integration"],
//       color: "#ff9800",
//       hoverEffect: "3d-tilt",
//     },
//     {
//       id: "maintenance",
//       title: "Maintenance",
//       icon: "⚙",
//       description:
//         "Keep your digital presence running smoothly with our comprehensive maintenance and support services.",
//       features: ["Performance Optimization", "Security Updates", "Content Updates", "24/7 Support"],
//       color: "#ff5722",
//       hoverEffect: "glow-hover",
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

//     cardRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => observer.disconnect();
//   }, []);

//   // 3D Tilt effect handler
//   const handleMouseMove = (e, cardId) => {
//     if (cardId !== "development") return;

//     const card = cardRefs.current.find((ref) => ref?.dataset.id === cardId);
//     if (!card) return;

//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     const rotateX = ((y - centerY) / centerY) * -10;
//     const rotateY = ((x - centerX) / centerX) * 10;

//     card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
//   };

//   const handleMouseLeave = (cardId) => {
//     if (cardId !== "development") return;

//     const card = cardRefs.current.find((ref) => ref?.dataset.id === cardId);
//     if (card) {
//       card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
//     }
//   };

//   return (
//     <section
//       id="services"
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
//           top: "-50%",
//           right: "-20%",
//           width: "600px",
//           height: "600px",
//           background: "radial-gradient(circle, rgba(255, 152, 0, 0.08) 0%, transparent 70%)",
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
//             Our Services
//           </span>
//         </div>
//         <h2
//           style={{
//             fontSize: "2.8rem",
//             fontWeight: "700",
//             marginBottom: "15px",
//           }}
//         >
//           <span style={{ color: "white" }}>How We </span>
//           <span
//             style={{
//               background: "linear-gradient(135deg, #ff9800, #ff5722)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             Help You Grow
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
//           Comprehensive digital solutions tailored to elevate your brand and
//           drive business growth.
//         </p>
//       </div>

//       {/* Services Grid */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 1fr)",
//           gap: "30px",
//           maxWidth: "1200px",
//           margin: "0 auto",
//         }}
//       >
//         {services.map((service, index) => (
//           <div
//             key={service.id}
//             ref={(el) => (cardRefs.current[index] = el)}
//             data-id={service.id}
//             onMouseEnter={() => setActiveCard(service.id)}
//             onMouseLeave={() => {
//               setActiveCard(null);
//               handleMouseLeave(service.id);
//             }}
//             onMouseMove={(e) => handleMouseMove(e, service.id)}
//             style={{
//               background: "#1a1a1a",
//               border: "1px solid #333",
//               borderRadius: "24px",
//               padding: "40px",
//               position: "relative",
//               overflow: "hidden",
//               cursor: "pointer",
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible
//                 ? "translateY(0)"
//                 : "translateY(50px)",
//               transition: `all 0.6s ease ${index * 0.15}s`,
//               transformStyle: "preserve-3d",
//               perspective: "1000px",
//             }}
//             className={`service-card ${service.hoverEffect}`}
//           >
//             {/* Gradient Border for UI/UX */}
//             {service.hoverEffect === "gradient-border" && (
//               <div
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   borderRadius: "24px",
//                   padding: "1px",
//                   background: `linear-gradient(135deg, ${service.color}, transparent 50%, ${service.color})`,
//                   opacity: activeCard === service.id ? 1 : 0,
//                   transition: "opacity 0.3s ease",
//                   WebkitMask:
//                     "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//                   WebkitMaskComposite: "xor",
//                   maskComposite: "exclude",
//                   pointerEvents: "none",
//                 }}
//               />
//             )}

//             {/* Glow Effect for Maintenance */}
//             {service.hoverEffect === "glow-hover" && (
//               <div
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   borderRadius: "24px",
//                   background: `radial-gradient(circle at center, ${service.color}15 0%, transparent 70%)`,
//                   opacity: activeCard === service.id ? 1 : 0,
//                   transition: "opacity 0.3s ease",
//                   pointerEvents: "none",
//                 }}
//               />
//             )}

//             {/* Icon */}
//             <div
//               style={{
//                 width: "70px",
//                 height: "70px",
//                 borderRadius: "16px",
//                 background:
//                   service.hoverEffect === "icon-morph"
//                     ? activeCard === service.id
//                       ? "linear-gradient(135deg, #ff9800, #ff5722)"
//                       : "rgba(255, 152, 0, 0.1)"
//                     : "rgba(255, 152, 0, 0.1)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: "2rem",
//                 color:
//                   service.hoverEffect === "icon-morph" && activeCard === service.id
//                     ? "white"
//                     : service.color,
//                 marginBottom: "25px",
//                 transition: "all 0.4s ease",
//                 transform:
//                   service.hoverEffect === "icon-morph" && activeCard === service.id
//                     ? "scale(1.1) rotate(45deg)"
//                     : "scale(1) rotate(0deg)",
//               }}
//             >
//               {service.icon}
//             </div>

//             {/* Title */}
//             <h3
//               style={{
//                 fontSize: "1.6rem",
//                 fontWeight: "700",
//                 color: "white",
//                 marginBottom: "15px",
//                 transition: "color 0.3s ease",
//               }}
//             >
//               {service.title}
//             </h3>

//             {/* Description */}
//             <p
//               style={{
//                 color: "#b0b0b0",
//                 fontSize: "1rem",
//                 lineHeight: "1.7",
//                 marginBottom: "25px",
//               }}
//             >
//               {service.description}
//             </p>

//             {/* Features List */}
//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "10px",
//               }}
//             >
//               {service.features.map((feature, i) => (
//                 <span
//                   key={i}
//                   style={{
//                     padding: "6px 14px",
//                     background: "rgba(255, 152, 0, 0.08)",
//                     border: "1px solid rgba(255, 152, 0, 0.15)",
//                     borderRadius: "20px",
//                     fontSize: "0.85rem",
//                     color: "#ff9800",
//                     transition: "all 0.3s ease",
//                   }}
//                   className="feature-tag"
//                 >
//                   {feature}
//                 </span>
//               ))}
//             </div>

//             {/* Hover Arrow */}
//             <div
//               style={{
//                 position: "absolute",
//                 bottom: "40px",
//                 right: "40px",
//                 width: "45px",
//                 height: "45px",
//                 borderRadius: "50%",
//                 background:
//                   activeCard === service.id
//                     ? "linear-gradient(135deg, #ff9800, #ff5722)"
//                     : "rgba(255, 152, 0, 0.1)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 color: activeCard === service.id ? "white" : "#ff9800",
//                 fontSize: "1.2rem",
//                 transition: "all 0.3s ease",
//                 transform:
//                   activeCard === service.id
//                     ? "translateX(-5px)"
//                     : "translateX(0)",
//               }}
//             >
//               →
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Service Card Styles */}
//       <style>{`
//         .service-card.branding:hover {
//           border-color: #ff9800;
//           transform: translateY(-10px);
//           box-shadow: 0 20px 60px rgba(255, 152, 0, 0.15);
//         }
//         .service-card.branding:hover .feature-tag {
//           background: rgba(255, 152, 0, 0.2);
//           border-color: rgba(255, 152, 0, 0.4);
//         }
//         .service-card.uiux:hover {
//           transform: translateY(-10px);
//         }
//         .service-card.uiux:hover .feature-tag {
//           background: rgba(255, 87, 34, 0.15);
//           border-color: rgba(255, 87, 34, 0.3);
//         }
//         .service-card.development:hover {
//           transform: translateY(-10px);
//         }
//         .service-card.maintenance:hover {
//           border-color: rgba(255, 87, 34, 0.5);
//           transform: translateY(-10px);
//           box-shadow: 0 20px 60px rgba(255, 87, 34, 0.2);
//         }
//         .service-card.maintenance:hover .feature-tag {
//           background: rgba(255, 87, 34, 0.15);
//           border-color: rgba(255, 87, 34, 0.3);
//         }
//         @media (max-width: 968px) {
//           #services > div:nth-child(2) {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

import { useState, useRef, useEffect } from "react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  const services = [
    {
      id: "branding",
      title: "Branding",
      icon: "◆",
      description: "We sculpt unique brand identities that command attention and foster deep emotional connections with your audience.",
      features: ["Logo Design", "Visual Strategy", "Brand Voice"],
      color: "#ff9800",
    },
    {
      id: "social media",
      title: "Social Media Design",
      icon: "◈",
      description: "Intuitive interfaces blended with frictionless user journeys, ensuring your digital product is as functional as it is beautiful.",
      features: ["User Research", "Prototyping", "Design Systems"],
      color: "#ff5722",
    },
    {
      id: "development",
      title: "Web Development",
      icon: "⬡",
      description: "High-performance, scalable web solutions built with the latest tech stacks to ensure speed, security, and stability.",
      features: ["React/Next.js", "API Design", "E-commerce"],
      color: "#ff9800",
    },
    {
      id: "AR/VR",
      title: "AR/VR",
      icon: "◈",
      description: "Immersive experiences that bring your ideas to life in virtual and augmented reality environments.",
      features: ["3D Modeling", "Interactive Design", "Spatial Computing"],
      color: "#ff5722",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        padding: "100px 8%",
        position: "relative",
        background: "transparent",
        overflow: "hidden",
      }}
    >
      {/* Dynamic Background Spotlight */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        width: "80%",
        height: "60%",
        background: "radial-gradient(circle, rgba(255, 152, 0, 0.03) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      {/* Section Header */}
      <div style={{
        textAlign: "center",
        marginBottom: "80px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
        position: "relative",
        zIndex: 1
      }}>
        <div className="section-badge">Our Expertise</div>
        <h2 style={{
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: "900",
          color: "#fff",
          lineHeight: "1.1"
        }}>
          How We <span className="gradient-text">Help You Grow</span>
        </h2>
      </div>

      {/* Services Grid */}
      <div className="services-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "30px",
        position: "relative",
        zIndex: 1
      }}>
        {services.map((service, index) => (
          <div
            key={service.id}
            onMouseEnter={() => setActiveCard(service.id)}
            onMouseLeave={() => setActiveCard(null)}
            className="glass-service-card"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(50px)",
              transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
            }}
          >
            {/* Interactive Glow */}
            <div className="card-glow" style={{ background: `radial-gradient(circle at center, ${service.color}20 0%, transparent 70%)` }} />

            {/* Icon Box */}
            <div className="icon-box" style={{ 
              color: service.color, 
              borderColor: `${service.color}40`,
              background: activeCard === service.id ? `${service.color}20` : 'transparent'
            }}>
              {service.icon}
            </div>

            <h3 className="card-title">{service.title}</h3>
            <p className="card-desc">{service.description}</p>

            <div className="feature-tags">
              {service.features.map((f, i) => (
                <span key={i} className="f-tag">{f}</span>
              ))}
            </div>

            {/* Bottom Interaction */}
            <div className="card-footer">
              <span className="learn-more">Learn More</span>
              <div className="arrow-circle" style={{ background: activeCard === service.id ? service.color : 'rgba(255,255,255,0.05)' }}>
                →
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #ff9800, #ff5722);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(255, 152, 0, 0.08);
          border: 1px solid rgba(255, 152, 0, 0.2);
          border-radius: 100px;
          color: #ff9800;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.75rem;
          margin-bottom: 25px;
        }

        .glass-service-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 32px;
          padding: 45px;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }

        .glass-service-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 152, 0, 0.4);
          transform: translateY(-12px) !important;
          box-shadow: 0 30px 60px rgba(0,0,0,0.4);
        }

        .card-glow {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
        }
        .glass-service-card:hover .card-glow { opacity: 1; }

        .icon-box {
          width: 70px;
          height: 70px;
          border: 1px solid;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.2rem;
          margin-bottom: 30px;
          transition: all 0.5s ease;
        }
        .glass-service-card:hover .icon-box {
          transform: rotateY(180deg) scale(1.1);
        }

        .card-title { font-size: 1.8rem; font-weight: 800; color: #fff; margin-bottom: 15px; }
        .card-desc { font-size: 1.05rem; color: rgba(255,255,255,0.5); line-height: 1.7; margin-bottom: 30px; }

        .feature-tags { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 40px; }
        .f-tag {
          padding: 6px 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 50px;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.8);
          font-weight: 600;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
        }
        .learn-more { color: #fff; font-weight: 700; font-size: 0.9rem; letter-spacing: 0.5px; opacity: 0.6; transition: opacity 0.3s; }
        .glass-service-card:hover .learn-more { opacity: 1; }

        .arrow-circle {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1.2rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glass-service-card:hover .arrow-circle { transform: translateX(5px); }
      `}</style>
    </section>
  );
}