// import { useState, useEffect, useRef } from "react";

// export default function Projects() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [selectedProject, setSelectedProject] = useState(null);
//   const projectRefs = useRef([]);

//   const projects = [
//     {
//       id: 1,
//       title: "E-Commerce Platform",
//       category: "web",
//       image: "🛒",
//       description:
//         "A modern e-commerce platform with seamless checkout experience and inventory management.",
//       fullDescription:
//         "Built a full-featured e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard. The platform handles thousands of concurrent users with sub-second page load times.",
//       tech: ["React", "Node.js", "MongoDB", "Stripe"],
//       client: "RetailTech Inc.",
//       year: "2024",
//       results: ["40% increase in conversions", "50% faster load times", "99.9% uptime"],
//     },
//     {
//       id: 2,
//       title: "Fitness App UI",
//       category: "design",
//       image: "💪",
//       description:
//         "Sleek and intuitive fitness tracking app interface with gamification elements.",
//       fullDescription:
//         "Designed a comprehensive fitness tracking app with workout plans, progress tracking, and social features. The gamification elements increased user engagement by 60%.",
//       tech: ["Figma", "Prototyping", "User Research"],
//       client: "FitLife Co.",
//       year: "2024",
//       results: ["60% increase in engagement", "4.8★ app store rating", "100K+ downloads"],
//     },
//     {
//       id: 3,
//       title: "Brand Identity",
//       category: "branding",
//       image: "✨",
//       description:
//         "Complete brand overhaul including logo, guidelines, and marketing materials.",
//       fullDescription:
//         "Created a comprehensive brand identity system including logo design, color palette, typography, and extensive brand guidelines. The new identity helped the client secure $2M in funding.",
//       tech: ["Logo Design", "Brand Strategy", "Print Design"],
//       client: "StartupXYZ",
//       year: "2023",
//       results: ["$2M funding secured", "Brand recognition up 80%", "Featured in 3 design publications"],
//     },
//     {
//       id: 4,
//       title: "SaaS Dashboard",
//       category: "web",
//       image: "📊",
//       description:
//         "Analytics dashboard with real-time data visualization and reporting.",
//       fullDescription:
//         "Built a powerful analytics dashboard with real-time data updates, customizable widgets, and automated reporting. The intuitive interface reduced time-to-insight by 70%.",
//       tech: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
//       client: "DataViz Corp",
//       year: "2024",
//       results: ["70% faster insights", "Saved 20hrs/week", "NPS score of 72"],
//     },
//     {
//       id: 5,
//       title: "Restaurant App",
//       category: "design",
//       image: "🍽️",
//       description:
//         "Mobile app for restaurant reservations and menu browsing.",
//       fullDescription:
//         "Designed a beautiful mobile app for restaurant chain with online ordering, table reservations, and loyalty program integration. The app increased orders by 35%.",
//       tech: ["Mobile Design", "UX Research", "Prototyping"],
//       client: "FoodChain Ltd",
//       year: "2023",
//       results: ["35% more orders", "50K+ app installs", "4.6★ rating"],
//     },
//     {
//       id: 6,
//       title: "Corporate Rebrand",
//       category: "branding",
//       image: "🏢",
//       description:
//         "Full corporate rebrand for a tech startup going global.",
//       fullDescription:
//         "Executed a complete corporate rebrand for a scaling tech startup, including visual identity, messaging framework, and internal brand guidelines. The rebrand supported their expansion into 5 new markets.",
//       tech: ["Brand Strategy", "Visual Identity", "Guidelines"],
//       client: "TechScale Startup",
//       year: "2024",
//       results: ["5-market expansion", "Brand value up 3x", "Team alignment at 95%"],
//     },
//   ];

//   const filters = [
//     { id: "all", label: "All Projects" },
//     { id: "web", label: "Web Dev" },
//     { id: "design", label: "UI/UX Design" },
//     { id: "branding", label: "Branding" },
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
//       { threshold: 0.1 }
//     );

//     projectRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const filteredProjects =
//     activeFilter === "all"
//       ? projects
//       : projects.filter((p) => p.category === activeFilter);

//   return (
//     <section
//       id="projects"
//       style={{
//         minHeight: "100vh",
//         padding: "120px 10%",
//         position: "relative",
//       }}
//     >
//       {/* Background Effect */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: "-30%",
//           left: "-20%",
//           width: "600px",
//           height: "600px",
//           background: "radial-gradient(circle, rgba(255, 152, 0, 0.06) 0%, transparent 70%)",
//           borderRadius: "50%",
//           pointerEvents: "none",
//         }}
//       />

//       {/* Section Header */}
//       <div
//         style={{
//           textAlign: "center",
//           marginBottom: "50px",
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
//             Our Work
//           </span>
//         </div>
//         <h2
//           style={{
//             fontSize: "2.8rem",
//             fontWeight: "700",
//             marginBottom: "15px",
//           }}
//         >
//           <span style={{ color: "white" }}>Featured </span>
//           <span
//             style={{
//               background: "linear-gradient(135deg, #ff9800, #ff5722)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             Projects
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
//           A selection of our recent work across web development, design, and branding.
//         </p>
//       </div>

//       {/* Filter Buttons */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "15px",
//           marginBottom: "50px",
//           flexWrap: "wrap",
//           opacity: isVisible ? 1 : 0,
//           transform: isVisible ? "translateY(0)" : "translateY(20px)",
//           transition: "all 0.6s ease 0.2s",
//         }}
//       >
//         {filters.map((filter) => (
//           <button
//             key={filter.id}
//             onClick={() => setActiveFilter(filter.id)}
//             style={{
//               padding: "12px 28px",
//               borderRadius: "30px",
//               border: activeFilter === filter.id
//                 ? "none"
//                 : "1px solid rgba(255, 152, 0, 0.3)",
//               background: activeFilter === filter.id
//                 ? "linear-gradient(135deg, #ff9800, #ff5722)"
//                 : "transparent",
//               color: activeFilter === filter.id ? "white" : "#b0b0b0",
//               fontWeight: "600",
//               fontSize: "0.95rem",
//               cursor: "pointer",
//               transition: "all 0.3s ease",
//             }}
//             onMouseEnter={(e) => {
//               if (activeFilter !== filter.id) {
//                 e.target.style.borderColor = "#ff9800";
//                 e.target.style.color = "#ff9800";
//               }
//             }}
//             onMouseLeave={(e) => {
//               if (activeFilter !== filter.id) {
//                 e.target.style.borderColor = "rgba(255, 152, 0, 0.3)";
//                 e.target.style.color = "#b0b0b0";
//               }
//             }}
//           >
//             {filter.label}
//           </button>
//         ))}
//       </div>

//       {/* Projects Grid */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "30px",
//           maxWidth: "1200px",
//           margin: "0 auto",
//         }}
//       >
//         {filteredProjects.map((project, index) => (
//           <div
//             key={project.id}
//             ref={(el) => (projectRefs.current[index] = el)}
//             onClick={() => setSelectedProject(project)}
//             style={{
//               background: "#1a1a1a",
//               borderRadius: "20px",
//               overflow: "hidden",
//               cursor: "pointer",
//               opacity: isVisible ? 1 : 0,
//               transform: isVisible
//                 ? "translateY(0)"
//                 : "translateY(30px)",
//               transition: `all 0.6s ease ${index * 0.1}s`,
//               position: "relative",
//             }}
//             className="project-card"
//           >
//             {/* Image Placeholder */}
//             <div
//               style={{
//                 height: "200px",
//                 background: "linear-gradient(135deg, rgba(255, 152, 0, 0.1), rgba(255, 87, 34, 0.05))",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: "4rem",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//               <span style={{ transform: "scale(1)", transition: "transform 0.5s ease" }}>
//                 {project.image}
//               </span>
              
//               {/* Hover Overlay */}
//               <div
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   background: "rgba(11, 11, 11, 0.9)",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   opacity: 0,
//                   transition: "opacity 0.3s ease",
//                 }}
//                 className="project-overlay"
//               >
//                 <span
//                   style={{
//                     padding: "12px 24px",
//                     background: "linear-gradient(135deg, #ff9800, #ff5722)",
//                     borderRadius: "8px",
//                     color: "white",
//                     fontWeight: "600",
//                     fontSize: "0.9rem",
//                   }}
//                 >
//                   View Details
//                 </span>
//               </div>
//             </div>

//             {/* Content */}
//             <div style={{ padding: "25px" }}>
//               <div
//                 style={{
//                   display: "inline-block",
//                   padding: "4px 12px",
//                   background: "rgba(255, 152, 0, 0.1)",
//                   borderRadius: "20px",
//                   fontSize: "0.8rem",
//                   color: "#ff9800",
//                   marginBottom: "12px",
//                   textTransform: "capitalize",
//                 }}
//               >
//                 {project.category}
//               </div>
//               <h3
//                 style={{
//                   fontSize: "1.3rem",
//                   fontWeight: "700",
//                   color: "white",
//                   marginBottom: "10px",
//                 }}
//               >
//                 {project.title}
//               </h3>
//               <p
//                 style={{
//                   color: "#888",
//                   fontSize: "0.95rem",
//                   lineHeight: "1.6",
//                 }}
//               >
//                 {project.description}
//               </p>

//               {/* Tech Stack */}
//               <div
//                 style={{
//                   display: "flex",
//                   gap: "8px",
//                   flexWrap: "wrap",
//                   marginTop: "15px",
//                 }}
//               >
//                 {project.tech.slice(0, 3).map((tech, i) => (
//                   <span
//                     key={i}
//                     style={{
//                       padding: "4px 10px",
//                       background: "rgba(255, 152, 0, 0.08)",
//                       border: "1px solid rgba(255, 152, 0, 0.15)",
//                       borderRadius: "6px",
//                       fontSize: "0.75rem",
//                       color: "#cc8500",
//                     }}
//                   >
//                     {tech}
//                   </span>
//                 ))}
//                 {project.tech.length > 3 && (
//                   <span
//                     style={{
//                       padding: "4px 10px",
//                       background: "rgba(255, 152, 0, 0.08)",
//                       border: "1px solid rgba(255, 152, 0, 0.15)",
//                       borderRadius: "6px",
//                       fontSize: "0.75rem",
//                       color: "#cc8500",
//                     }}
//                   >
//                     +{project.tech.length - 3}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Project Modal */}
//       {selectedProject && (
//         <div
//           style={{
//             position: "fixed",
//             inset: 0,
//             background: "rgba(0, 0, 0, 0.9)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             zIndex: 2000,
//             padding: "20px",
//             backdropFilter: "blur(10px)",
//           }}
//           onClick={() => setSelectedProject(null)}
//         >
//           <div
//             style={{
//               background: "#1a1a1a",
//               borderRadius: "24px",
//               maxWidth: "800px",
//               width: "100%",
//               maxHeight: "90vh",
//               overflow: "auto",
//               position: "relative",
//               border: "1px solid rgba(255, 152, 0, 0.2)",
//             }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setSelectedProject(null)}
//               style={{
//                 position: "absolute",
//                 top: "20px",
//                 right: "20px",
//                 width: "40px",
//                 height: "40px",
//                 borderRadius: "50%",
//                 background: "rgba(255, 152, 0, 0.1)",
//                 border: "1px solid rgba(255, 152, 0, 0.3)",
//                 color: "#ff9800",
//                 fontSize: "1.2rem",
//                 cursor: "pointer",
//                 zIndex: 1,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               ✕
//             </button>

//             {/* Modal Image */}
//             <div
//               style={{
//                 height: "250px",
//                 background: "linear-gradient(135deg, rgba(255, 152, 0, 0.15), rgba(255, 87, 34, 0.08))",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: "6rem",
//               }}
//             >
//               {selectedProject.image}
//             </div>

//             {/* Modal Content */}
//             <div style={{ padding: "40px" }}>
//               <div
//                 style={{
//                   display: "inline-block",
//                   padding: "6px 16px",
//                   background: "rgba(255, 152, 0, 0.1)",
//                   borderRadius: "20px",
//                   fontSize: "0.85rem",
//                   color: "#ff9800",
//                   marginBottom: "20px",
//                   textTransform: "capitalize",
//                 }}
//               >
//                 {selectedProject.category}
//               </div>

//               <h2
//                 style={{
//                   fontSize: "2rem",
//                   fontWeight: "700",
//                   color: "white",
//                   marginBottom: "20px",
//                 }}
//               >
//                 {selectedProject.title}
//               </h2>

//               <p
//                 style={{
//                   color: "#b0b0b0",
//                   fontSize: "1.1rem",
//                   lineHeight: "1.8",
//                   marginBottom: "30px",
//                 }}
//               >
//                 {selectedProject.fullDescription}
//               </p>

//               {/* Tech Stack */}
//               <div style={{ marginBottom: "30px" }}>
//                 <h4
//                   style={{
//                     color: "white",
//                     fontSize: "1rem",
//                     marginBottom: "15px",
//                   }}
//                 >
//                   Technologies Used
//                 </h4>
//                 <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//                   {selectedProject.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       style={{
//                         padding: "8px 16px",
//                         background: "rgba(255, 152, 0, 0.1)",
//                         border: "1px solid rgba(255, 152, 0, 0.3)",
//                         borderRadius: "8px",
//                         fontSize: "0.9rem",
//                         color: "#ff9800",
//                       }}
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Results */}
//               <div
//                 style={{
//                   background: "rgba(255, 152, 0, 0.05)",
//                   borderRadius: "16px",
//                   padding: "25px",
//                   border: "1px solid rgba(255, 152, 0, 0.1)",
//                 }}
//               >
//                 <h4
//                   style={{
//                     color: "white",
//                     fontSize: "1rem",
//                     marginBottom: "15px",
//                   }}
//                 >
//                   Key Results
//                 </h4>
//                 <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//                   {selectedProject.results.map((result, i) => (
//                     <div
//                       key={i}
//                       style={{ display: "flex", alignItems: "center", gap: "12px" }}
//                     >
//                       <span
//                         style={{
//                           width: "8px",
//                           height: "8px",
//                           background: "linear-gradient(135deg, #ff9800, #ff5722)",
//                           borderRadius: "50%",
//                         }}
//                       />
//                       <span style={{ color: "#b0b0b0" }}>{result}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Client Info */}
//               <div
//                 style={{
//                   display: "flex",
//                   gap: "40px",
//                   marginTop: "30px",
//                   paddingTop: "25px",
//                   borderTop: "1px solid #333",
//                 }}
//               >
//                 <div>
//                   <span
//                     style={{
//                       color: "#666",
//                       fontSize: "0.85rem",
//                       display: "block",
//                       marginBottom: "5px",
//                     }}
//                   >
//                     Client
//                   </span>
//                   <span style={{ color: "white", fontWeight: "600" }}>
//                     {selectedProject.client}
//                   </span>
//                 </div>
//                 <div>
//                   <span
//                     style={{
//                       color: "#666",
//                       fontSize: "0.85rem",
//                       display: "block",
//                       marginBottom: "5px",
//                     }}
//                   >
//                     Year
//                   </span>
//                   <span style={{ color: "white", fontWeight: "600" }}>
//                     {selectedProject.year}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Styles */}
//       <style>{`
//         .project-card:hover {
//           transform: translateY(-10px) !important;
//           box-shadow: 0 20px 60px rgba(255, 152, 0, 0.15);
//         }
//         .project-card:hover .project-overlay {
//           opacity: 1 !important;
//         }
//         .project-card:hover img,
//         .project-card:hover span:first-child {
//           transform: scale(1.1) !important;
//         }
//         @media (max-width: 1024px) {
//           #projects > div:nth-child(4) {
//             grid-template-columns: repeat(2, 1fr) !important;
//           }
//         }
//         @media (max-width: 640px) {
//           #projects > div:nth-child(4) {
//             grid-template-columns: 1fr !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

import { useState, useEffect, useRef } from "react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      icon: "🛒",
      description: "Seamless checkout and inventory management.",
      fullDescription: "A high-performance e-commerce solution built for sub-second load times and massive concurrent traffic.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      client: "RetailTech Inc.",
      year: "2024",
      results: ["40% increase in conversions", "50% faster load times"],
    },
    {
      id: 2,
      title: "Fitness App UI",
      category: "design",
      icon: "💪",
      description: "Sleek and intuitive fitness tracking interface.",
      fullDescription: "A gamified fitness experience designed to maximize user retention and daily engagement.",
      tech: ["Figma", "Prototyping", "User Research"],
      client: "FitLife Co.",
      year: "2024",
      results: ["60% increase in engagement", "4.8★ rating"],
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "branding",
      icon: "✨",
      description: "Complete visual brand overhaul system.",
      fullDescription: "Strategic visual identity that secured client funding and market leadership.",
      tech: ["Brand Strategy", "Logo Design", "Guidelines"],
      client: "StartupXYZ",
      year: "2023",
      results: ["$2M funding secured", "80% brand recognition"],
    },
    {
      id: 4,
      title: "SaaS Dashboard",
      category: "web",
      icon: "📊",
      description: "Real-time analytics and data visualization.",
      fullDescription: "Complex data simplified into actionable insights through an intuitive web dashboard.",
      tech: ["Vue.js", "D3.js", "Python"],
      client: "DataViz Corp",
      year: "2024",
      results: ["70% faster insights", "NPS score of 72"],
    },
    {
      id: 5,
      title: "Restaurant App",
      category: "design",
      icon: "🍽️",
      description: "Mobile ordering and loyalty platform.",
      fullDescription: "Integrated ordering system designed for high-frequency restaurant chains.",
      tech: ["Mobile UX", "Figma", "Interaction"],
      client: "FoodChain Ltd",
      year: "2023",
      results: ["35% more orders", "50K+ installs"],
    },
    {
      id: 6,
      title: "Corporate Rebrand",
      category: "branding",
      icon: "🏢",
      description: "Global identity for tech-scale startups.",
      fullDescription: "Scaling a local brand into a global leader through unified messaging and visuals.",
      tech: ["Visual ID", "Messaging", "Scale Strategy"],
      client: "TechScale Startup",
      year: "2024",
      results: ["5-market expansion", "3x Brand Value"],
    },
  ];

  const filters = [
    { id: "all", label: "All Work" },
    { id: "web", label: "Web Dev" },
    { id: "design", label: "UI/UX Design" },
    { id: "branding", label: "Branding" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" ref={sectionRef} style={{
      minHeight: "100vh",
      padding: "100px 8%",
      position: "relative",
      background: "transparent"
    }}>
      {/* Dynamic Glow */}
      <div style={{
        position: "absolute",
        top: "40%",
        right: "-10%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(255, 152, 0, 0.04) 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      {/* Header */}
      <div style={{
        textAlign: "center",
        marginBottom: "60px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)"
      }}>
        <div className="portfolio-badge">Selected Work</div>
        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "900", color: "#fff" }}>
          Crafting <span className="gradient-text">Exceptional Results</span>
        </h2>
      </div>

      {/* Filters */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        marginBottom: "60px",
        flexWrap: "wrap",
        opacity: isVisible ? 1 : 0,
        transition: "all 0.8s ease 0.2s"
      }}>
        {filters.map(f => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`filter-btn ${activeFilter === f.id ? 'active' : ''}`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="portfolio-grid">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="project-glass-card"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(40px)",
              transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`
            }}
          >
            <div className="project-preview-box">
               <div className="project-icon-glow">{project.icon}</div>
               <div className="preview-overlay">
                  <span className="view-tag">View Case Study</span>
               </div>
            </div>

            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-summary">{project.description}</p>
              
              <div className="tech-stack-mini">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail View */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>✕</button>
            
            <div className="modal-hero">
               <div className="modal-hero-icon">{selectedProject.icon}</div>
            </div>

            <div className="modal-body">
               <div className="modal-header-info">
                  <span className="project-category">{selectedProject.category}</span>
                  <h2 className="modal-title">{selectedProject.title}</h2>
               </div>

               <p className="modal-desc">{selectedProject.fullDescription}</p>

               <div className="modal-details-grid">
                  <div className="detail-col">
                     <h4>Results</h4>
                     {selectedProject.results.map((r, i) => (
                       <div key={i} className="result-item">
                          <span className="dot" /> {r}
                       </div>
                     ))}
                  </div>
                  <div className="detail-col">
                     <h4>Stack</h4>
                     <div className="modal-tech-list">
                        {selectedProject.tech.map((t, i) => (
                          <span key={i} className="modal-tech-tag">{t}</span>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="modal-footer">
                  <div className="client-info">
                     <label>Client</label>
                     <span>{selectedProject.client}</span>
                  </div>
                  <div className="client-info">
                     <label>Year</label>
                     <span>{selectedProject.year}</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #ff9800, #ff5722);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .portfolio-badge {
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

        .filter-btn {
          padding: 10px 24px;
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
          color: rgba(255,255,255,0.6);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .filter-btn:hover { border-color: #ff9800; color: #ff9800; }
        .filter-btn.active { background: #ff9800; border-color: #ff9800; color: #fff; }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .project-glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 30px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-glass-card:hover {
          transform: translateY(-12px);
          border-color: rgba(255, 152, 0, 0.4);
          background: rgba(255, 255, 255, 0.06);
        }

        .project-preview-box {
          height: 240px;
          background: linear-gradient(135deg, rgba(255, 152, 0, 0.1), rgba(255, 87, 34, 0.05));
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .project-icon-glow {
          font-size: 5rem;
          filter: drop-shadow(0 0 20px rgba(255, 152, 0, 0.3));
          transition: transform 0.5s ease;
        }
        .preview-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .project-glass-card:hover .preview-overlay { opacity: 1; }
        .project-glass-card:hover .project-icon-glow { transform: scale(1.2) rotate(5deg); }

        .view-tag {
          padding: 10px 20px;
          background: #ff9800;
          color: #fff;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .project-info { padding: 30px; }
        .project-category {
          font-size: 0.75rem;
          font-weight: 800;
          color: #ff9800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .project-title { font-size: 1.6rem; color: #fff; margin: 10px 0; font-weight: 800; }
        .project-summary { color: rgba(255,255,255,0.5); line-height: 1.6; margin-bottom: 20px; }

        .tech-stack-mini { display: flex; flex-wrap: wrap; gap: 8px; }
        .tech-tag {
          padding: 4px 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          font-size: 0.7rem;
          color: rgba(255,255,255,0.7);
        }

        /* Modal */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(15px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }
        .modal-content {
          background: #0d0d0d;
          border: 1px solid rgba(255,152,0,0.2);
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          border-radius: 40px;
          overflow: hidden;
          position: relative;
        }
        .modal-hero {
          height: 300px;
          background: linear-gradient(135deg, rgba(255,152,0,0.2), rgba(0,0,0,1));
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-hero-icon { font-size: 8rem; filter: drop-shadow(0 0 30px #ff9800); }
        .modal-body { padding: 50px; overflow-y: auto; }
        .modal-title { font-size: 3rem; font-weight: 900; color: #fff; margin-bottom: 25px; }
        .modal-desc { font-size: 1.2rem; color: rgba(255,255,255,0.7); line-height: 1.8; margin-bottom: 40px; }

        .modal-details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px; }
        .detail-col h4 { color: #ff9800; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 20px; font-size: 0.9rem; }
        .result-item { display: flex; align-items: center; gap: 10px; color: #fff; margin-bottom: 12px; }
        .dot { width: 6px; height: 6px; background: #ff9800; border-radius: 50%; }

        .modal-tech-list { display: flex; flex-wrap: wrap; gap: 10px; }
        .modal-tech-tag { padding: 8px 16px; background: rgba(255,255,255,0.05); border-radius: 12px; color: #fff; }

        .modal-footer { display: flex; gap: 60px; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); }
        .client-info label { display: block; color: rgba(255,255,255,0.4); font-size: 0.8rem; margin-bottom: 5px; }
        .client-info span { color: #fff; font-weight: 700; font-size: 1.2rem; }

        .close-btn {
          position: absolute;
          top: 30px;
          right: 30px;
          background: rgba(255,255,255,0.1);
          border: none;
          color: #fff;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1.5rem;
          z-index: 10;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        @media (max-width: 768px) {
          .modal-body { padding: 30px; }
          .modal-details-grid { grid-template-columns: 1fr; }
          .modal-title { font-size: 2rem; }
        }
      `}</style>
    </section>
  );
}