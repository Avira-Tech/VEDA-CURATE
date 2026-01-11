import { useState, useRef, useEffect } from "react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const cardRefs = useRef([]);

  const services = [
    {
      id: "branding",
      title: "Branding",
      icon: "◆",
      description:
        "Create a powerful brand identity that resonates with your audience and sets you apart from competitors.",
      features: ["Logo Design", "Brand Strategy", "Visual Identity", "Brand Guidelines"],
      color: "#ff9800",
      hoverEffect: "icon-morph",
    },
    {
      id: "uiux",
      title: "UI/UX Design",
      icon: "◈",
      description:
        "Design intuitive user experiences with beautiful interfaces that users love to interact with.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      color: "#ff5722",
      hoverEffect: "gradient-border",
    },
    {
      id: "development",
      title: "Web Development",
      icon: "⬡",
      description:
        "Build fast, scalable, and secure websites using modern technologies and best practices.",
      features: ["Frontend Development", "Backend Integration", "CMS Development", "API Integration"],
      color: "#ff9800",
      hoverEffect: "3d-tilt",
    },
    {
      id: "maintenance",
      title: "Maintenance",
      icon: "⚙",
      description:
        "Keep your digital presence running smoothly with our comprehensive maintenance and support services.",
      features: ["Performance Optimization", "Security Updates", "Content Updates", "24/7 Support"],
      color: "#ff5722",
      hoverEffect: "glow-hover",
    },
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
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // 3D Tilt effect handler
  const handleMouseMove = (e, cardId) => {
    if (cardId !== "development") return;

    const card = cardRefs.current.find((ref) => ref?.dataset.id === cardId);
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  };

  const handleMouseLeave = (cardId) => {
    if (cardId !== "development") return;

    const card = cardRefs.current.find((ref) => ref?.dataset.id === cardId);
    if (card) {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
    }
  };

  return (
    <section
      id="services"
      style={{
        minHeight: "100vh",
        padding: "120px 10%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Effects */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-20%",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(255, 152, 0, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Section Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
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
            Our Services
          </span>
        </div>
        <h2
          style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          <span style={{ color: "white" }}>How We </span>
          <span
            style={{
              background: "linear-gradient(135deg, #ff9800, #ff5722)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Help You Grow
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
          Comprehensive digital solutions tailored to elevate your brand and
          drive business growth.
        </p>
      </div>

      {/* Services Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (cardRefs.current[index] = el)}
            data-id={service.id}
            onMouseEnter={() => setActiveCard(service.id)}
            onMouseLeave={() => {
              setActiveCard(null);
              handleMouseLeave(service.id);
            }}
            onMouseMove={(e) => handleMouseMove(e, service.id)}
            style={{
              background: "#1a1a1a",
              border: "1px solid #333",
              borderRadius: "24px",
              padding: "40px",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateY(0)"
                : "translateY(50px)",
              transition: `all 0.6s ease ${index * 0.15}s`,
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
            className={`service-card ${service.hoverEffect}`}
          >
            {/* Gradient Border for UI/UX */}
            {service.hoverEffect === "gradient-border" && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "24px",
                  padding: "1px",
                  background: `linear-gradient(135deg, ${service.color}, transparent 50%, ${service.color})`,
                  opacity: activeCard === service.id ? 1 : 0,
                  transition: "opacity 0.3s ease",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  pointerEvents: "none",
                }}
              />
            )}

            {/* Glow Effect for Maintenance */}
            {service.hoverEffect === "glow-hover" && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "24px",
                  background: `radial-gradient(circle at center, ${service.color}15 0%, transparent 70%)`,
                  opacity: activeCard === service.id ? 1 : 0,
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                }}
              />
            )}

            {/* Icon */}
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "16px",
                background:
                  service.hoverEffect === "icon-morph"
                    ? activeCard === service.id
                      ? "linear-gradient(135deg, #ff9800, #ff5722)"
                      : "rgba(255, 152, 0, 0.1)"
                    : "rgba(255, 152, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                color:
                  service.hoverEffect === "icon-morph" && activeCard === service.id
                    ? "white"
                    : service.color,
                marginBottom: "25px",
                transition: "all 0.4s ease",
                transform:
                  service.hoverEffect === "icon-morph" && activeCard === service.id
                    ? "scale(1.1) rotate(45deg)"
                    : "scale(1) rotate(0deg)",
              }}
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: "1.6rem",
                fontWeight: "700",
                color: "white",
                marginBottom: "15px",
                transition: "color 0.3s ease",
              }}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p
              style={{
                color: "#b0b0b0",
                fontSize: "1rem",
                lineHeight: "1.7",
                marginBottom: "25px",
              }}
            >
              {service.description}
            </p>

            {/* Features List */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {service.features.map((feature, i) => (
                <span
                  key={i}
                  style={{
                    padding: "6px 14px",
                    background: "rgba(255, 152, 0, 0.08)",
                    border: "1px solid rgba(255, 152, 0, 0.15)",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    color: "#ff9800",
                    transition: "all 0.3s ease",
                  }}
                  className="feature-tag"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Hover Arrow */}
            <div
              style={{
                position: "absolute",
                bottom: "40px",
                right: "40px",
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                background:
                  activeCard === service.id
                    ? "linear-gradient(135deg, #ff9800, #ff5722)"
                    : "rgba(255, 152, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: activeCard === service.id ? "white" : "#ff9800",
                fontSize: "1.2rem",
                transition: "all 0.3s ease",
                transform:
                  activeCard === service.id
                    ? "translateX(-5px)"
                    : "translateX(0)",
              }}
            >
              →
            </div>
          </div>
        ))}
      </div>

      {/* Service Card Styles */}
      <style>{`
        .service-card.branding:hover {
          border-color: #ff9800;
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(255, 152, 0, 0.15);
        }
        .service-card.branding:hover .feature-tag {
          background: rgba(255, 152, 0, 0.2);
          border-color: rgba(255, 152, 0, 0.4);
        }
        .service-card.uiux:hover {
          transform: translateY(-10px);
        }
        .service-card.uiux:hover .feature-tag {
          background: rgba(255, 87, 34, 0.15);
          border-color: rgba(255, 87, 34, 0.3);
        }
        .service-card.development:hover {
          transform: translateY(-10px);
        }
        .service-card.maintenance:hover {
          border-color: rgba(255, 87, 34, 0.5);
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(255, 87, 34, 0.2);
        }
        .service-card.maintenance:hover .feature-tag {
          background: rgba(255, 87, 34, 0.15);
          border-color: rgba(255, 87, 34, 0.3);
        }
        @media (max-width: 968px) {
          #services > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

