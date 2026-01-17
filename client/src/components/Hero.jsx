import { useState, useEffect, useRef } from "react";

/* =========================
   WORD BLOCK COMPONENT
   Updated with:
   - Proper Spacing
   - Interactive Hover Scale & Glow
========================= */
function WordBlock({ words, delay = 0, gradient = false }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const wordArray = Array.isArray(words) ? words : words.split(" ");

  return (
    <span 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        display: "inline-flex", 
        flexWrap: "wrap", 
        gap: "0.25em",
        marginRight: "0.3em", // Added space between blocks
        cursor: gradient ? "pointer" : "default"
      }}
    >
      {wordArray.map((word, wordIndex) => (
        <span
          key={wordIndex}
          style={{
            display: "inline-block",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded
              ? isHovered && gradient 
                ? "scale(1.1) translateY(-5px)" // Hover motion
                : "scale(1) translateY(0)"
              : "scale(0.9) translateY(30px)",
            filter: isLoaded 
              ? (isHovered && gradient ? "drop-shadow(0 0 15px rgba(255, 87, 34, 0.6))" : "blur(0)") 
              : "blur(12px)",
            transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1)`,
            transitionDelay: isHovered ? "0s" : `${wordIndex * 0.1}s`,
            background: gradient
              ? "linear-gradient(90deg, #ff9800, #ff5722, #ffcc33, #ff9800)"
              : "transparent",
            backgroundSize: "300% auto",
            WebkitBackgroundClip: gradient ? "text" : "unset",
            WebkitTextFillColor: gradient ? "transparent" : "inherit",
            fontWeight: "900",
            letterSpacing: "-0.03em",
            animation: gradient
              ? `textShimmer ${isHovered ? '1.5s' : '4s'} linear infinite, floatText 6s ease-in-out infinite`
              : "none",
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      role="region"
      aria-label="Hero Section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "100px 8%",
        color: "#fff",
      }}
    >
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px" }}>
        
        {/* Attraction Badge */}
        <div
          style={{
            display: "inline-flex",
            padding: "8px 16px",
            background: "rgba(255, 152, 0, 0.1)",
            border: "1px solid rgba(255, 152, 0, 0.2)",
            borderRadius: "100px",
            fontSize: "0.7rem",
            fontWeight: "700",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#ff9800",
            marginBottom: "30px",
            animation: "pulseGlow 2s infinite",
          }}
        >
          Design • Tech • Growth
        </div>

        {/* Hero Title - SEO Optimized with Keywords */}
        <h1
          style={{
            fontSize: "clamp(3.5rem, 8vw, 7rem)",
            lineHeight: "1.1",
            marginBottom: "35px",
            color: "#fff",
            fontWeight: "900",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <WordBlock words="Designing" delay={200} />
            <WordBlock words="Magic." delay={400} gradient />
          </div>
          <div>
            <WordBlock words="Engineering" delay={600} />
            <WordBlock words="Growth." delay={800} gradient />
          </div>
        </h1>

        {/* SEO-optimized description with keywords */}
        <p
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
            color: "rgba(255,255,255,0.5)",
            marginBottom: "50px",
            maxWidth: "700px",
            lineHeight: "1.7",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 1s",
          }}
        >
          Vedacurate is a creative powerhouse blending{" "}
          <span style={{ color: "#fff", fontWeight: "600" }}>strategic design</span> with{" "}
          <span style={{ color: "#fff", fontWeight: "600" }}>cutting-edge code</span> to build
          digital experiences that convert. As a leading freelance agency, we specialize in
          website development, branding, AR/VR experiences, and social media design.
        </p>

        {/* Action Group */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            opacity: isLoaded ? 1 : 0,
            transition: "all 0.8s ease 1.2s",
          }}
        >
          <button
            onClick={() => scrollToSection("#work")}
            className="btn-primary"
            aria-label="View our portfolio and start a project"
            style={{
              background: "linear-gradient(135deg, #ff9800, #ff5722)",
              color: "#fff",
              border: "none",
              padding: "22px 48px",
              borderRadius: "15px",
              fontWeight: "800",
              fontSize: "1.1rem",
              cursor: "pointer",
              boxShadow: "0 15px 35px rgba(255, 87, 34, 0.25)",
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
            onMouseEnter={(e) => e.target.style.transform = "translateY(-5px) scale(1.02)"}
            onMouseLeave={(e) => e.target.style.transform = "translateY(0) scale(1)"}
          >
            Start a Project
          </button>

          <button
            onClick={() => scrollToSection("#about")}
            aria-label="Learn more about our company"
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              padding: "22px 48px",
              borderRadius: "15px",
              fontWeight: "600",
              fontSize: "1.1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => e.target.style.background = "rgba(255,255,255,0.1)"}
            onMouseLeave={(e) => e.target.style.background = "rgba(255,255,255,0.05)"}
          >
            Our Story
          </button>
        </div>

        {/* Stats Row - Social Proof for SEO */}
        <div
          className="hero-stats-grid"
          role="list"
          aria-label="Company statistics"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "50px",
            marginTop: "100px",
            paddingTop: "60px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            opacity: isLoaded ? 1 : 0,
            transition: "all 1s ease 1.4s",
          }}
        >
          {[
            { num: "150+", label: "Successful Launches", description: "Websites and applications delivered" },
            { num: "10+", label: "Global Partners", description: "International client collaborations" },
            { num: "4+", label: "Years of Craft", description: "Expertise in design and development" },
          ].map((stat, i) => (
            <div key={i} className="stat-item" role="listitem">
              <h4
                style={{
                  fontSize: "2.8rem",
                  fontWeight: "900",
                  marginBottom: "8px",
                  background: "linear-gradient(to bottom, #fff, rgba(255,255,255,0.3))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.num}
              </h4>
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontWeight: "600",
                  fontSize: "1rem",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}
                aria-label={stat.description}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes textShimmer {
          to { background-position: 300% center; }
        }

        @keyframes floatText {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(255, 152, 0, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(255, 152, 0, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 152, 0, 0); }
        }

        @media (max-width: 768px) {
          #hero { padding: 120px 5% 60px; text-align: center; }
          #hero div { align-items: center; justify-content: center; margin-inline: auto; }
          .hero-stats-grid { grid-template-columns: 1fr !important; gap: 40px; }
        }
      `}</style>
    </section>
  );
}

