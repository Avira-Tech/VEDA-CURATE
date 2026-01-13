import { useState, useEffect, useRef } from "react";
import ayushPortfolioImg from "../assets/projects/ayush-portfolio.jpg";
import inkridStudiosImg from "../assets/projects/inkrid-studios.jpg";
import xrExperiencesImg from "../assets/projects/xr-experiences.jpg";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Mine VR & Space VR",
      category: "xr",
      icon: "🕶️",
      image: xrExperiencesImg,
      role: "Project Lead & Creative Director",
      description: "Two exploratory VR experiences into scale, risk, and human presence.",
      fullDescription: "Driven by curiosity rather than briefs. Both Mine VR and Space VR were built to push the limits of how virtual environments can communicate danger, isolation, and spatial awareness without relying on heavy narration or instruction.",
      intent: "Understand how presence alone can shape emotion and decision-making.",
      experiences: [
        {
          title: "Mine VR",
          description: "Explores confined underground spaces where visibility, scale, and sound shape tension. Focused on uncertainty and environmental storytelling.",
          url: "https://vimeo.com/1085310303?share=copy"
        },
        {
          title: "Space VR",
          description: "Shifts to vastness and isolation. Emptiness and silence become narrative tools, emphasizing scale, vulnerability, and psychological distance.",
          url: "https://vimeo.com/1084626476?share=copy"
        }
      ],
      medium: "Virtual Reality (used for spatial storytelling and experiential testing)",
      reflection: "Clarified interest in building experiences where environment carries meaning. Tested ideas around pacing, presence, and how much information an experience truly needs to convey.",
      roles: ["Project management", "Concept development", "Idea direction", "Selective development contributions"],
      challenge: "To understand how presence alone can shape emotion and decision-making without relying on heavy narration.",
      solution: "Mine VR explores confined underground spaces where visibility, scale, and sound play a critical role in shaping tension. Space VR shifts the context to vastness and isolation, where emptiness and silence become narrative tools.",
      tech: ["Virtual Reality", "Spatial Storytelling", "Experiential Testing"],
      client: "Personal Project",
      year: "2025",
      results: ["Pacing & Presence Testing", "Environmental Storytelling", "Spatial Awareness"],
      projectLinks: [
        { label: "Watch Mine VR", url: "https://vimeo.com/1085310303?share=copy" },
        { label: "Watch Space VR", url: "https://vimeo.com/1084626476?share=copy" }
      ]
    },
    {
      id: 3,
      title: "Inkrid Studios",
      category: "design",
      icon: "🎮",
      image: inkridStudiosImg,
      role: "Interactive Developer & Narrative Designer",
      link: "https://chisel-dinghy-e5e.notion.site/About-ME-2d2f082c7900800ab818e196d6ec9e18",
      description: "Narrative-driven experiences and interactive systems.",
      fullDescription: "A creative space focused on narrative-driven experiences, experimentation, and long-term thinking across interactive media. Working with Games, XR, and Interactive Systems to build immersive worlds.",
      challenge: "Creating immersive narrative experiences that blend technical systems with storytelling while maintaining user agency.",
      solution: "Built interactive worlds that respond dynamically to user input using Unreal Engine and XR technologies to enhance presence and emotional connection.",
      tech: ["Unreal Engine", "Unity", "XR", "Interactive Systems"],
      client: "Inkrid Studios",
      year: "2024",
      results: ["Innovative Storytelling", "Immersive Worlds", "Interactive Media"],
    },
    {
      id: 2,
      title: "Ayush Raj Portfolio",
      category: "branding",
      icon: "🎨",
      image: ayushPortfolioImg,
      role: "UI/UX Designer & 3D Artist",
      link: "https://bento.me/rajayush014",
      description: "Branding, UI/UX, and 3D modeling showcase.",
      fullDescription: "Creative and versatile Graphic Designer with expertise in branding, UI/UX, and 3D modeling. Translating concepts into visually compelling assets across games, startups, and social media platforms.",
      challenge: "Showcasing a diverse skillset across branding, UI/UX, and 3D modeling in a cohesive portfolio that doesn't feel disjointed.",
      solution: "Designed a unified visual identity system that seamlessly integrates 2D and 3D assets, using consistent typography and color palettes to tie different disciplines together.",
      tech: ["Adobe Suite", "Blender", "Figma", "3D Modeling"],
      client: "Personal Brand",
      year: "2024",
      results: ["Visual Identity System", "3D Asset Creation", "Cross-Platform Design"],
    },
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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

      {/* Grid */}
      <div className="portfolio-grid">
        {projects.map((project, index) => (
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
               {project.image ? (
                 <img src={project.image} alt={project.title} className="project-image" />
               ) : (
                 <div className="project-icon-glow">{project.icon}</div>
               )}
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
               {selectedProject.image ? (
                 <img src={selectedProject.image} alt={selectedProject.title} className="modal-hero-image" />
               ) : (
                 <div className="modal-hero-icon">{selectedProject.icon}</div>
               )}
            </div>

            <div className="modal-body">
               <div className="modal-header-info">
                  <span className="project-category">{selectedProject.category}</span>
                  <h2 className="modal-title">{selectedProject.title}</h2>
                  {selectedProject.role && <div className="project-role">{selectedProject.role}</div>}
               </div>

               <p className="modal-desc">{selectedProject.fullDescription}</p>

               {selectedProject.intent && (
                 <div className="modal-text-block" style={{ marginBottom: 30 }}>
                   <h4>Intent</h4>
                   <p>{selectedProject.intent}</p>
                 </div>
               )}

               {selectedProject.experiences && selectedProject.experiences.length > 0 && (
                 <div className="modal-text-block" style={{ marginBottom: 30 }}>
                   <h4>The Experiences</h4>
                   <div className="experiences-list">
                     {selectedProject.experiences.map((exp, i) => (
                       <div key={i} className="experience-item">
                         <div className="experience-header">
                           <span className="experience-title">{exp.title}</span>
                           {exp.url && (
                             <a href={exp.url} target="_blank" rel="noopener noreferrer" className="view-project-btn" style={{ padding: "8px 16px", fontSize: "0.85rem" }}>
                               Watch <span className="arrow">↗</span>
                             </a>
                           )}
                         </div>
                         <p className="experience-desc">{exp.description}</p>
                       </div>
                     ))}
                   </div>
                 </div>
               )}

               {(selectedProject.medium || selectedProject.reflection) && (
                 <div className="modal-section-grid">
                   {selectedProject.medium && (
                     <div className="modal-text-block">
                       <h4>Medium</h4>
                       <p>{selectedProject.medium}</p>
                     </div>
                   )}
                   {selectedProject.reflection && (
                     <div className="modal-text-block">
                       <h4>Reflection</h4>
                       <p>{selectedProject.reflection}</p>
                     </div>
                   )}
                 </div>
               )}

               {selectedProject.roles && selectedProject.roles.length > 0 && (
                 <div className="modal-text-block" style={{ marginBottom: 30 }}>
                   <h4>My Role</h4>
                   <ul className="roles-list">
                     {selectedProject.roles.map((r, i) => (
                       <li key={i}>{r}</li>
                     ))}
                   </ul>
                 </div>
               )}

               {(selectedProject.challenge || selectedProject.solution) && (
                 <div className="modal-section-grid">
                    {selectedProject.challenge && (
                      <div className="modal-text-block">
                        <h4>The Challenge</h4>
                        <p>{selectedProject.challenge}</p>
                      </div>
                    )}
                    {selectedProject.solution && (
                      <div className="modal-text-block">
                        <h4>The Solution</h4>
                        <p>{selectedProject.solution}</p>
                      </div>
                    )}
                 </div>
               )}

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
                  {selectedProject.projectLinks ? (
                    <div className="project-links-container">
                      {selectedProject.projectLinks.map((link, idx) => (
                        <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="view-project-btn" style={{width: 'auto', fontSize: '0.9rem', padding: '10px 20px'}}>
                          {link.label} <span className="arrow">↗</span>
                        </a>
                      ))}
                    </div>
                  ) : selectedProject.link && (
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                      View Project <span className="arrow">↗</span>
                    </a>
                  )}
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
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1200px;
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
          overflow: hidden;
        }
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .project-glass-card:hover .project-image {
          transform: scale(1.1);
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
          display: flex;
          flex-direction: column;
        }
        .modal-hero {
          width: 100%;
          height: auto;
          min-height: 250px;
          max-height: 500px;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
        }
        .modal-hero-image {
          width: 100%;
          height: 100%;
          max-height: 500px;
          object-fit: contain;
        }
        .modal-hero-icon { font-size: 8rem; filter: drop-shadow(0 0 30px #ff9800); }
        .modal-body { 
          padding: 50px; 
          overflow-y: auto; 
          flex: 1;
        }
        .modal-title { font-size: 3rem; font-weight: 900; color: #fff; margin-bottom: 10px; }
        .project-role { font-size: 1.1rem; color: #ff9800; font-weight: 600; margin-bottom: 25px; }
        .modal-desc { font-size: 1.2rem; color: rgba(255,255,255,0.7); line-height: 1.8; margin-bottom: 40px; }

        .modal-section-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px; }
        .modal-text-block h4 { color: #fff; margin-bottom: 10px; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 1px; }
        .modal-text-block p { color: rgba(255,255,255,0.7); line-height: 1.6; font-size: 0.95rem; }

        .modal-details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px; }
        .detail-col h4 { color: #ff9800; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 20px; font-size: 0.9rem; }
        .result-item { display: flex; align-items: center; gap: 10px; color: #fff; margin-bottom: 12px; }
        .dot { width: 6px; height: 6px; background: #ff9800; border-radius: 50%; }

        .experiences-list { display: flex; flex-direction: column; gap: 16px; }
        .experience-item { border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 16px; background: rgba(255,255,255,0.03); }
        .experience-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
        .experience-title { color: #fff; font-weight: 800; letter-spacing: 0.5px; }
        .experience-desc { color: rgba(255,255,255,0.7); line-height: 1.6; font-size: 0.95rem; }
        .roles-list { margin: 10px 0 0; padding-left: 18px; color: rgba(255,255,255,0.85); }

        .modal-tech-list { display: flex; flex-wrap: wrap; gap: 10px; }
        .modal-tech-tag { padding: 8px 16px; background: rgba(255,255,255,0.05); border-radius: 12px; color: #fff; }

        .modal-footer { display: flex; gap: 60px; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.1); align-items: center; }
        .client-info label { display: block; color: rgba(255,255,255,0.4); font-size: 0.8rem; margin-bottom: 5px; }
        .client-info span { color: #fff; font-weight: 700; font-size: 1.2rem; }

        .project-links-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-left: auto;
        }

        .view-project-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          background: #ff9800;
          color: #fff;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 700;
          transition: all 0.3s ease;
          margin-left: auto;
        }
        .view-project-btn:hover { background: #ff5722; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(255, 87, 34, 0.3); }
        .view-project-btn .arrow { font-size: 1.2rem; }

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

        @media (max-width: 992px) {
          .portfolio-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .modal-content { max-width: 90%; }
        }

        @media (max-width: 768px) {
          .portfolio-grid { grid-template-columns: 1fr; }
          .modal-body { padding: 30px; }
          .modal-details-grid { grid-template-columns: 1fr; gap: 20px; }
          .modal-section-grid { grid-template-columns: 1fr; gap: 20px; }
          .modal-title { font-size: 2rem; }
          .modal-hero { min-height: 200px; max-height: 350px; }
          .modal-hero-icon { font-size: 6rem; }
          .view-project-btn { width: 100%; justify-content: center; margin-left: 0; }
          .experience-header { flex-direction: column; align-items: flex-start; gap: 10px; }
        }

        @media (max-width: 480px) {
          .modal-body { padding: 20px; }
          .modal-title { font-size: 1.8rem; }
          .modal-hero { min-height: 180px; max-height: 300px; }
          .modal-hero-icon { font-size: 4rem; }
          .modal-footer { gap: 30px; flex-direction: column; }
          .close-btn { top: 15px; right: 15px; width: 40px; height: 40px; font-size: 1.2rem; }
          .project-info { padding: 20px; }
          .project-title { font-size: 1.4rem; }
          .project-links-container { margin-left: 0; width: 100%; }
        }
      `}</style>
    </section>
  );
}
