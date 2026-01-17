import { useState, useRef, useEffect } from "react";

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  // SEO-rich services with target keywords
  const services = [
    {
      id: "branding",
      title: "Branding",
      icon: "✦",
      description: "We craft powerful brand identities that resonate with your audience. Our freelance branding services include strategic logo design, comprehensive visual identity systems, and compelling brand voice development that sets you apart in the marketplace.",
      features: ["Logo Design", "Visual Strategy", "Brand Voice", "Brand Guidelines"],
      color: "#ff9800",
      keywords: "branding services, logo design, brand identity, visual identity, brand strategy, freelance branding"
    },
    {
      id: "social",
      title: "Social Media",
      icon: "◈",
      description: "Scroll-stopping visuals and narrative-driven content designed to convert followers into fans. Our freelance social media design services encompass content strategy, motion graphics, and creative ad campaigns that drive engagement.",
      features: ["Content Strategy", "Motion Graphics", "Ad Creative", "Visual Design"],
      color: "#ff5722",
      keywords: "social media design, social media marketing, content design, freelance social media, ad creative"
    },
    {
      id: "dev",
      title: "Web Development",
      icon: "⬡",
      description: "High-performance, scalable websites built with cutting-edge technology. Our freelance web development services include React/Next.js development, API design, e-commerce solutions, and responsive design for all devices.",
      features: ["React / Next.js", "API Design", "E-commerce", "Responsive Design"],
      color: "#ff9800",
      keywords: "web development, website design, freelance web developer, react development, nextjs, ecommerce development"
    },
    {
      id: "arvr",
      title: "AR / VR",
      icon: "⌬",
      description: "Immersive spatial experiences that bring your boldest ideas to life in the digital realm. Our freelance AR/VR development services include 3D modeling, interactive spatial design, and metaverse experiences.",
      features: ["3D Modeling", "Spatial Design", "Metaverse", "Interactive VR"],
      color: "#ff5722",
      keywords: "AR VR development, augmented reality, virtual reality, 3D design, spatial computing, metaverse, freelance AR VR"
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      role="region"
      aria-label="Our Services"
      style={{
        minHeight: "100vh",
        padding: "120px 8%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dynamic Cursor Spotlight */}
      <div style={{
        position: "fixed",
        top: mousePos.y,
        left: mousePos.x,
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(255, 87, 34, 0.07) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 0,
        transition: "transform 0.1s ease-out"
      }} />

      {/* Header Section */}
      <div style={{
        textAlign: "center",
        marginBottom: "100px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
        position: "relative",
        zIndex: 1
      }}>
        <div className="modern-badge">Expertise</div>
        <h2 className="services-title">
          Fueling Your <br />
          <span className="shimmer-text">Digital Evolution</span>
        </h2>
        <p className="services-subtitle">
          Comprehensive freelance design and development services tailored to elevate your brand and drive business growth.
        </p>
      </div>

      {/* Grid */}
      <div className="services-grid" role="list">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="card-container"
            role="listitem"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(60px)",
              transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`,
            }}
          >
            <article className="service-card">
              {/* Border Beam Effect */}
              <div className="border-beam" style={{ background: service.color }} />
              
              <div className="card-content">
                <div className="icon-wrapper" style={{ color: service.color }}>
                  <div className="icon-inner" aria-hidden="true">{service.icon}</div>
                  <div className="icon-pulse" style={{ background: service.color }} />
                </div>

                <h3 className="s-title">{service.title}</h3>
                <p className="s-desc">{service.description}</p>

                <div className="s-features" role="list">
                  {service.features.map((f, i) => (
                    <span key={i} className="s-tag" role="listitem">{f}</span>
                  ))}
                </div>

                <div className="s-footer">
                  <div className="s-link">Explore Case Study</div>
                  <div className="s-arrow" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* Service Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Services by Vedacurate",
          "description": "Professional freelance services including branding, social media design, web development, and AR/VR experiences.",
          "url": "https://vedacurate.com#services",
          "numberOfItems": services.length,
          "itemListElement": services.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": service.title,
            "description": service.description,
            "keywords": service.keywords,
            "url": `https://vedacurate.com#${service.id}`
          }))
        })
      }} />

      <style>{`
        .services-title {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 900;
          color: #fff;
          line-height: 1;
          letter-spacing: -2px;
        }

        .shimmer-text {
          background: linear-gradient(90deg, #fff, #ff9800, #ff5722, #fff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 4s linear infinite;
        }

        @keyframes shimmer {
          to { background-position: 200% center; }
        }

        .services-subtitle {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: rgba(255,255,255,0.5);
          max-width: 600px;
          margin: 20px auto 0;
          line-height: 1.6;
        }

        .modern-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(255, 152, 0, 0.1);
          border: 1px solid rgba(255, 152, 0, 0.2);
          border-radius: 6px;
          color: #ff9800;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 20px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          position: relative;
          z-index: 2;
        }

        .service-card {
          position: relative;
          background: #0d0d0d;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 24px;
          padding: 40px;
          height: 100%;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Border Glow Animation */
        .border-beam {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 2px;
          opacity: 0;
          transition: 0.4s ease;
        }

        .service-card:hover {
          transform: translateY(-10px);
          border-color: rgba(255, 152, 0, 0.3);
          background: #111;
        }

        .service-card:hover .border-beam { opacity: 1; }

        .icon-wrapper {
          position: relative;
          width: 60px;
          height: 60px;
          margin-bottom: 30px;
        }

        .icon-inner {
          position: relative;
          z-index: 2;
          font-size: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .service-card:hover .icon-inner { transform: rotateY(180deg) scale(1.2); }

        .icon-pulse {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border-radius: 50%;
          opacity: 0.15;
          filter: blur(10px);
        }

        .s-title { font-size: 1.8rem; font-weight: 800; color: #fff; margin-bottom: 15px; }
        .s-desc { font-size: 1rem; color: rgba(255,255,255,0.5); line-height: 1.6; margin-bottom: 30px; }

        .s-features { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 40px; }
        .s-tag {
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255,255,255,0.6);
          background: rgba(255,255,255,0.03);
          padding: 6px 12px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .s-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 25px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .s-link { font-size: 0.9rem; font-weight: 700; color: #fff; opacity: 0.4; transition: 0.3s; }
        .service-card:hover .s-link { opacity: 1; }

        .s-arrow {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: 0.4s;
        }

        .service-card:hover .s-arrow { transform: translate(3px, -3px) scale(1.1); color: #ff9800; }

        @media (max-width: 768px) {
          #services { padding: 80px 5%; }
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

