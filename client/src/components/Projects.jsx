// import { useState, useEffect, useRef } from "react";
// import ayushPortfolioImg from "../assets/projects/ayush-portfolio.jpg";
// import inkridStudiosImg from "../assets/projects/inkrid-studios.jpg";
// import xrExperiencesImg from "../assets/projects/xr-experiences.jpg";

// export default function Projects() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const sectionRef = useRef(null);

//   const projects = [
//     {
//       id: 1,
//       title: "Mine VR & Space VR",
//       category: "XR Experience",
//       icon: "🕶️",
//       image: xrExperiencesImg,
//       role: "Creative Director",
//       description: "Pushing the limits of spatial awareness and presence in VR.",
//       fullDescription: "Built to explore how presence alone shapes emotion. Mine VR focuses on the tension of confinement, while Space VR explores the psychological impact of vast isolation.",
//       tech: ["Unity", "Meta SDK", "C#", "Spatial Audio"],
//       results: ["Pacing & Presence Testing", "Environmental Storytelling"],
//       client: "Personal Project",
//       year: "2025",
//     },
//     {
//       id: 2,
//       title: "Inkrid Studios",
//       category: "Narrative Systems",
//       icon: "🎮",
//       image: inkridStudiosImg,
//       role: "Narrative Designer",
//       description: "Interactive systems blending deep storytelling with user agency.",
//       fullDescription: "A creative playground for long-term narrative experiments. We build interactive systems where the story reacts dynamically to the player's presence.",
//       tech: ["Unreal Engine 5", "Blueprint", "C++", "XR Systems"],
//       results: ["Dynamic Story Branching", "Immersive Systems"],
//       client: "Inkrid Studios",
//       year: "2024",
//     },
//     {
//       id: 3,
//       title: "Ayush Raj Brand",
//       category: "Visual Identity",
//       icon: "🎨",
//       image: ayushPortfolioImg,
//       role: "UI/UX & 3D Lead",
//       description: "Cohesive branding system integrating 2D and 3D design.",
//       fullDescription: "A visual identity system designed to showcase multi-disciplinary talent. We unified branding, UI/UX, and 3D modeling into one seamless digital experience.",
//       tech: ["Figma", "Blender", "After Effects", "Webflow"],
//       results: ["Unified Design System", "Custom 3D Assets"],
//       client: "Ayush Raj",
//       year: "2024",
//     },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) setIsVisible(true);
//     }, { threshold: 0.1 });
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section 
//       id="projects" 
//       ref={sectionRef}
//       className="min-h-screen py-[120px] px-[8%] relative overflow-hidden"
//     >
//       {/* Background Mesh Overlay */}
//       <div 
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: `
//             radial-gradient(at 0% 0%, rgba(255, 152, 0, 0.05) 0px, transparent 50%),
//             radial-gradient(at 100% 100%, rgba(255, 87, 34, 0.05) 0px, transparent 50%)
//           `
//         }}
//       />

//       {/* Header */}
//       <div 
//         className={`text-center mb-[80px] transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
//           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//         }`}
//       >
//         <div className="inline-block px-4 py-1.5 rounded-lg bg-brand-orange-400/10 border border-brand-orange-400/20 text-brand-orange-400 text-xs font-bold uppercase tracking-[3px] mb-5">
//           Portfolio
//         </div>
//         <h2 className="text-[clamp(3rem,7vw,5rem)] font-black text-white tracking-tight" style={{ letterSpacing: "-2px" }}>
//           Selected <span className="text-transparent bg-gradient-to-r from-brand-orange-400 to-brand-orange-600 bg-clip-text">Masterpieces</span>
//         </h2>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
//         {projects.map((project, index) => (
//           <div
//             key={project.id}
//             onClick={() => setSelectedProject(project)}
//             className={`group cursor-pointer rounded-3xl overflow-hidden transition-all duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-15"
//             }`}
//             style={{ transitionDelay: `${index * 0.15}s` }}
//           >
//             {/* Card Visual */}
//             <div className="h-[280px] overflow-hidden relative bg-black">
//               <img 
//                 src={project.image} 
//                 alt={project.title} 
//                 className="w-full h-full object-cover opacity-80 transition-all duration-600 group-hover:scale-110 group-hover:opacity-100"
//               />
//               <div className="absolute inset-0 bg-brand-orange-400/20 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center">
//                 <span className="px-6 py-3 bg-white rounded-full text-sm font-bold text-black opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
//                   Explore Project
//                 </span>
//               </div>
//             </div>

//             {/* Card Details */}
//             <div className="p-8 bg-[#111] border border-white/5">
//               <div className="flex justify-between items-center mb-3">
//                 <span className="text-xs font-bold text-brand-orange-400 uppercase tracking-wider">{project.category}</span>
//                 <span className="text-xs font-medium text-white/30">{project.year}</span>
//               </div>
//               <h3 className="text-[1.8rem] font-bold text-white mb-4">{project.title}</h3>
//               <div className="flex flex-wrap gap-2">
//                 {project.tech.slice(0, 3).map((t, i) => (
//                   <span 
//                     key={i} 
//                     className="text-[0.7rem] bg-white/5 text-white/60 px-3 py-1.5 rounded-lg"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Detail Modal */}
//       {selectedProject && (
//         <div 
//           className="fixed inset-0 z-[100] flex items-center justify-center p-10 bg-black/95 backdrop-blur-xl"
//           onClick={() => setSelectedProject(null)}
//         >
//           <div 
//             className="w-full max-w-[1200px] h-[85vh] rounded-[40px] border border-brand-orange-400/20 bg-[#0d0d0d] relative overflow-hidden animate-modal-fade lg:h-auto lg:max-h-[95vh] lg:overflow-y-auto"
//             onClick={e => e.stopPropagation()}
//           >
//             {/* Close Button */}
//             <button 
//               className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/10 border-0 text-white text-xl cursor-pointer transition-all duration-300 hover:bg-brand-orange-600 hover:scale-110 z-10"
//               onClick={() => setSelectedProject(null)}
//             >
//               ✕
//             </button>

//             <div className="flex h-full lg:flex-col">
//               {/* Sidebar */}
//               <div className="w-[40%] bg-black p-10 flex flex-col gap-8 border-r border-white/5 lg:w-full lg:border-r-0 lg:border-b">
//                 <img 
//                   src={selectedProject.image} 
//                   alt={selectedProject.title} 
//                   className="w-full rounded-2xl object-cover h-[250px]"
//                 />
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="p-4 rounded-xl bg-white/5">
//                     <label className="block text-[0.7rem] font-bold text-white/30 uppercase tracking-wider mb-1">Year</label>
//                     <span className="text-white font-semibold">{selectedProject.year}</span>
//                   </div>
//                   <div className="p-4 rounded-xl bg-white/5">
//                     <label className="block text-[0.7rem] font-bold text-white/30 uppercase tracking-wider mb-1">Role</label>
//                     <span className="text-white font-semibold">{selectedProject.role}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Main Content */}
//               <div className="w-[60%] p-12 overflow-y-auto lg:w-full lg:p-8 md:p-6">
//                 <span className="text-sm font-bold text-brand-orange-400 uppercase tracking-wider">{selectedProject.category}</span>
//                 <h2 className="text-[3.5rem] font-black text-white mt-2 mb-6 tracking-tight md:text-3xl" style={{ letterSpacing: "-2px" }}>
//                   {selectedProject.title}
//                 </h2>
//                 <p className="text-[1.25rem] text-white/60 leading-relaxed mb-10">
//                   {selectedProject.fullDescription}
//                 </p>
                
//                 {/* Technologies */}
//                 <div className="mb-10">
//                   <h3 className="text-sm font-bold text-white uppercase tracking-[2px] mb-5">Technologies</h3>
//                   <div className="flex flex-wrap gap-3">
//                     {selectedProject.tech.map((t, i) => (
//                       <span 
//                         key={i} 
//                         className="px-4 py-2 rounded-full bg-brand-orange-400/10 text-brand-orange-400 font-semibold text-sm"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Results */}
//                 <div className="mb-10">
//                   <h3 className="text-sm font-bold text-white uppercase tracking-[2px] mb-5">Key Deliverables</h3>
//                   <div className="space-y-3">
//                     {selectedProject.results.map((r, i) => (
//                       <div key={i} className="flex items-center gap-3 text-white font-medium">
//                         <span className="w-2 h-2 rounded-full bg-brand-orange-400"></span>
//                         {r}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <a 
//                   href="#" 
//                   className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-orange-400 text-white font-bold no-underline transition-all duration-300 hover:bg-brand-orange-600 hover:scale-105 hover:shadow-lg hover:shadow-brand-orange-600/30"
//                 >
//                   Launch Case Study ↗
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

import { useState, useEffect, useRef } from "react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 1,
      type: "xr",
      title: "XR Research & Development",
      category: "AR/VR / Spatial Computing",
      image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80", 
      role: "XR Lead",
      description: "Immersive spatial experiments focusing on presence and psychological interaction.",
      fullDescription: "A dual-study in virtual presence. These projects explore how users interact with vast environments and confined spaces through spatial audio and haptic feedback.",
      links: [
        { label: "Watch Mine VR Demo", url: "https://vimeo.com/1085310303?fl=pl&fe=sh" },
        { label: "Watch Space VR Demo", url: "https://vimeo.com/1084626476?fl=pl&fe=sh" }
      ],
      tech: ["Unity", "Meta SDK", "Spatial Audio", "C#"],
      year: "2025",
    },
    {
      id: 2,
      type: "ecosystem",
      title: "Multidisciplinary Design",
      category: "Creative Ecosystem",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80",
      role: "Designer & Strategist",
      description: "A universe of social media art, 3D face modeling, and interactive board games.",
      fullDescription: "This ecosystem represents the intersection of digital art and physical play. It includes high-fidelity 3D environments, custom social media branding, 3D facial character design, and physical board game mechanics.",
      externalUrl: "https://bento.me/rajayush014",
      capabilities: [
        { label: "Social Media Post", icon: "📱" },
        { label: "3D Face Modeling", icon: "👤" },
        { label: "Board Games", icon: "🎲" },
        { label: "3D Environments", icon: "🌍" }
      ],
      year: "2024-2026",
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-[6%]">
      
      <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black text-white tracking-tighter">
          The <span className="text-brand-orange-500">Projects</span>
        </h2>
      </div>

      {/* Grid: Made max-width smaller and adjusted aspect ratio for smaller cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/5 bg-[#0a0a0a] transition-transform duration-500 hover:scale-[0.98]"
          >
            <img 
              src={project.image} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60" 
              alt={project.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-brand-orange-400 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">{project.category}</p>
              <h3 className="text-2xl font-bold text-white leading-tight">{project.title}</h3>
              <div className="mt-4 flex items-center gap-2 text-white/40 text-xs font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                Explore <span className="text-brand-orange-500">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="w-full max-w-4xl bg-[#0a0a0a] rounded-[2.5rem] border border-white/10 overflow-hidden relative max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-20" onClick={() => setSelectedProject(null)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-6">
                <div className="rounded-2xl overflow-hidden h-64 md:h-full relative">
                   <img src={selectedProject.image} className="w-full h-full object-cover" alt="" />
                </div>
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">{selectedProject.title}</h2>
                <p className="text-white/50 text-sm leading-relaxed mb-8">{selectedProject.fullDescription}</p>

                {selectedProject.type === "xr" ? (
                  <div className="space-y-3">
                    {selectedProject.links.map((link, i) => (
                      <a 
                        key={i}
                        href={link.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-orange-500 transition-colors group"
                      >
                        <span className="text-white text-sm font-bold">{link.label}</span>
                        <span className="text-brand-orange-500">↗</span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Fixed Error: Rendering capability label and icon correctly */}
                    <div className="grid grid-cols-2 gap-3">
                      {selectedProject.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/5">
                           <span className="text-sm">{cap.icon}</span>
                           <span className="text-[9px] font-bold text-white/60 uppercase">{cap.label}</span>
                        </div>
                      ))}
                    </div>
                    <a 
                      href={selectedProject.externalUrl}
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-block w-full py-4 bg-brand-orange-500 text-white text-center text-sm font-black rounded-xl transition-all hover:bg-brand-orange-600"
                    >
                      View All in Bento
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}