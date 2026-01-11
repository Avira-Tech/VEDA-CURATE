import { useState, useEffect, useRef } from "react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const projectRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "🛒",
      description:
        "A modern e-commerce platform with seamless checkout experience and inventory management.",
      fullDescription:
        "Built a full-featured e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard. The platform handles thousands of concurrent users with sub-second page load times.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      client: "RetailTech Inc.",
      year: "2024",
      results: ["40% increase in conversions", "50% faster load times", "99.9% uptime"],
    },
    {
      id: 2,
      title: "Fitness App UI",
      category: "design",
      image: "💪",
      description:
        "Sleek and intuitive fitness tracking app interface with gamification elements.",
      fullDescription:
        "Designed a comprehensive fitness tracking app with workout plans, progress tracking, and social features. The gamification elements increased user engagement by 60%.",
      tech: ["Figma", "Prototyping", "User Research"],
      client: "FitLife Co.",
      year: "2024",
      results: ["60% increase in engagement", "4.8★ app store rating", "100K+ downloads"],
    },
    {
      id: 3,
      title: "Brand Identity",
      category: "branding",
      image: "✨",
      description:
        "Complete brand overhaul including logo, guidelines, and marketing materials.",
      fullDescription:
        "Created a comprehensive brand identity system including logo design, color palette, typography, and extensive brand guidelines. The new identity helped the client secure $2M in funding.",
      tech: ["Logo Design", "Brand Strategy", "Print Design"],
      client: "StartupXYZ",
      year: "2023",
      results: ["$2M funding secured", "Brand recognition up 80%", "Featured in 3 design publications"],
    },
    {
      id: 4,
      title: "SaaS Dashboard",
      category: "web",
      image: "📊",
      description:
        "Analytics dashboard with real-time data visualization and reporting.",
      fullDescription:
        "Built a powerful analytics dashboard with real-time data updates, customizable widgets, and automated reporting. The intuitive interface reduced time-to-insight by 70%.",
      tech: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      client: "DataViz Corp",
      year: "2024",
      results: ["70% faster insights", "Saved 20hrs/week", "NPS score of 72"],
    },
    {
      id: 5,
      title: "Restaurant App",
      category: "design",
      image: "🍽️",
      description:
        "Mobile app for restaurant reservations and menu browsing.",
      fullDescription:
        "Designed a beautiful mobile app for restaurant chain with online ordering, table reservations, and loyalty program integration. The app increased orders by 35%.",
      tech: ["Mobile Design", "UX Research", "Prototyping"],
      client: "FoodChain Ltd",
      year: "2023",
      results: ["35% more orders", "50K+ app installs", "4.6★ rating"],
    },
    {
      id: 6,
      title: "Corporate Rebrand",
      category: "branding",
      image: "🏢",
      description:
        "Full corporate rebrand for a tech startup going global.",
      fullDescription:
        "Executed a complete corporate rebrand for a scaling tech startup, including visual identity, messaging framework, and internal brand guidelines. The rebrand supported their expansion into 5 new markets.",
      tech: ["Brand Strategy", "Visual Identity", "Guidelines"],
      client: "TechScale Startup",
      year: "2024",
      results: ["5-market expansion", "Brand value up 3x", "Team alignment at 95%"],
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Dev" },
    { id: "design", label: "UI/UX Design" },
    { id: "branding", label: "Branding" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        padding: "120px 10%",
        position: "relative",
      }}
    >
      {/* Background Effect */}
      <div
        style={{
          position: "absolute",
          bottom: "-30%",
          left: "-20%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(255, 152, 0, 0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Section Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "50px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 20px",
            background: "rgba(255, 152, 0, 0.1)",
            border: "1px solid rgba(255, 152, 0, 0.3)",
            borderRadius: "30px",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              color: "#ff9800",
              fontSize: "0.9rem",
              fontWeight: "600",
            }}
          >
            Our Work
          </span>
        </div>
        <h2
          style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          <span style={{ color: "white" }}>Featured </span>
          <span
            style={{
              background: "linear-gradient(135deg, #ff9800, #ff5722)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Projects
          </span>
        </h2>
        <p
          style={{
            color: "#b0b0b0",
            fontSize: "1.1rem",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          A selection of our recent work across web development, design, and branding.
        </p>
      </div>

      {/* Filter Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginBottom: "50px",
          flexWrap: "wrap",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.6s ease 0.2s",
        }}
      >
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            style={{
              padding: "12px 28px",
              borderRadius: "30px",
              border: activeFilter === filter.id
                ? "none"
                : "1px solid rgba(255, 152, 0, 0.3)",
              background: activeFilter === filter.id
                ? "linear-gradient(135deg, #ff9800, #ff5722)"
                : "transparent",
              color: activeFilter === filter.id ? "white" : "#b0b0b0",
              fontWeight: "600",
              fontSize: "0.95rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              if (activeFilter !== filter.id) {
                e.target.style.borderColor = "#ff9800";
                e.target.style.color = "#ff9800";
              }
            }}
            onMouseLeave={(e) => {
              if (activeFilter !== filter.id) {
                e.target.style.borderColor = "rgba(255, 152, 0, 0.3)";
                e.target.style.color = "#b0b0b0";
              }
            }}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            onClick={() => setSelectedProject(project)}
            style={{
              background: "#1a1a1a",
              borderRadius: "20px",
              overflow: "hidden",
              cursor: "pointer",
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateY(0)"
                : "translateY(30px)",
              transition: `all 0.6s ease ${index * 0.1}s`,
              position: "relative",
            }}
            className="project-card"
          >
            {/* Image Placeholder */}
            <div
              style={{
                height: "200px",
                background: "linear-gradient(135deg, rgba(255, 152, 0, 0.1), rgba(255, 87, 34, 0.05))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "4rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span style={{ transform: "scale(1)", transition: "transform 0.5s ease" }}>
                {project.image}
              </span>
              
              {/* Hover Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(11, 11, 11, 0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
                className="project-overlay"
              >
                <span
                  style={{
                    padding: "12px 24px",
                    background: "linear-gradient(135deg, #ff9800, #ff5722)",
                    borderRadius: "8px",
                    color: "white",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                  }}
                >
                  View Details
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: "25px" }}>
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  background: "rgba(255, 152, 0, 0.1)",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  color: "#ff9800",
                  marginBottom: "12px",
                  textTransform: "capitalize",
                }}
              >
                {project.category}
              </div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  color: "white",
                  marginBottom: "10px",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  color: "#888",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                }}
              >
                {project.description}
              </p>

              {/* Tech Stack */}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                  marginTop: "15px",
                }}
              >
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "4px 10px",
                      background: "rgba(255, 152, 0, 0.08)",
                      border: "1px solid rgba(255, 152, 0, 0.15)",
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      color: "#cc8500",
                    }}
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span
                    style={{
                      padding: "4px 10px",
                      background: "rgba(255, 152, 0, 0.08)",
                      border: "1px solid rgba(255, 152, 0, 0.15)",
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      color: "#cc8500",
                    }}
                  >
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000,
            padding: "20px",
            backdropFilter: "blur(10px)",
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            style={{
              background: "#1a1a1a",
              borderRadius: "24px",
              maxWidth: "800px",
              width: "100%",
              maxHeight: "90vh",
              overflow: "auto",
              position: "relative",
              border: "1px solid rgba(255, 152, 0, 0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255, 152, 0, 0.1)",
                border: "1px solid rgba(255, 152, 0, 0.3)",
                color: "#ff9800",
                fontSize: "1.2rem",
                cursor: "pointer",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✕
            </button>

            {/* Modal Image */}
            <div
              style={{
                height: "250px",
                background: "linear-gradient(135deg, rgba(255, 152, 0, 0.15), rgba(255, 87, 34, 0.08))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "6rem",
              }}
            >
              {selectedProject.image}
            </div>

            {/* Modal Content */}
            <div style={{ padding: "40px" }}>
              <div
                style={{
                  display: "inline-block",
                  padding: "6px 16px",
                  background: "rgba(255, 152, 0, 0.1)",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  color: "#ff9800",
                  marginBottom: "20px",
                  textTransform: "capitalize",
                }}
              >
                {selectedProject.category}
              </div>

              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                {selectedProject.title}
              </h2>

              <p
                style={{
                  color: "#b0b0b0",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  marginBottom: "30px",
                }}
              >
                {selectedProject.fullDescription}
              </p>

              {/* Tech Stack */}
              <div style={{ marginBottom: "30px" }}>
                <h4
                  style={{
                    color: "white",
                    fontSize: "1rem",
                    marginBottom: "15px",
                  }}
                >
                  Technologies Used
                </h4>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "8px 16px",
                        background: "rgba(255, 152, 0, 0.1)",
                        border: "1px solid rgba(255, 152, 0, 0.3)",
                        borderRadius: "8px",
                        fontSize: "0.9rem",
                        color: "#ff9800",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div
                style={{
                  background: "rgba(255, 152, 0, 0.05)",
                  borderRadius: "16px",
                  padding: "25px",
                  border: "1px solid rgba(255, 152, 0, 0.1)",
                }}
              >
                <h4
                  style={{
                    color: "white",
                    fontSize: "1rem",
                    marginBottom: "15px",
                  }}
                >
                  Key Results
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {selectedProject.results.map((result, i) => (
                    <div
                      key={i}
                      style={{ display: "flex", alignItems: "center", gap: "12px" }}
                    >
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          background: "linear-gradient(135deg, #ff9800, #ff5722)",
                          borderRadius: "50%",
                        }}
                      />
                      <span style={{ color: "#b0b0b0" }}>{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Info */}
              <div
                style={{
                  display: "flex",
                  gap: "40px",
                  marginTop: "30px",
                  paddingTop: "25px",
                  borderTop: "1px solid #333",
                }}
              >
                <div>
                  <span
                    style={{
                      color: "#666",
                      fontSize: "0.85rem",
                      display: "block",
                      marginBottom: "5px",
                    }}
                  >
                    Client
                  </span>
                  <span style={{ color: "white", fontWeight: "600" }}>
                    {selectedProject.client}
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      color: "#666",
                      fontSize: "0.85rem",
                      display: "block",
                      marginBottom: "5px",
                    }}
                  >
                    Year
                  </span>
                  <span style={{ color: "white", fontWeight: "600" }}>
                    {selectedProject.year}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Styles */}
      <style>{`
        .project-card:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 20px 60px rgba(255, 152, 0, 0.15);
        }
        .project-card:hover .project-overlay {
          opacity: 1 !important;
        }
        .project-card:hover img,
        .project-card:hover span:first-child {
          transform: scale(1.1) !important;
        }
        @media (max-width: 1024px) {
          #projects > div:nth-child(4) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          #projects > div:nth-child(4) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

