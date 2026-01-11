import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [particles, setParticles] = useState([]);
  const heroRef = useRef(null);

  // Mouse move effect for glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePos({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Trigger animations on load
  useEffect(() => {
    setIsLoaded(true);

    // Create floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  // Parallax offset
  const [parallaxOffset, setParallaxOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setParallaxOffset(window.scrollY * 0.3);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 10% 100px",
      }}
    >
      {/* Animated Background Gradient Glow */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 152, 0, 0.15) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) translate(${mousePos.x - window.innerWidth / 2}px, ${mousePos.y - window.innerHeight / 2}px)`,
          transition: "transform 0.3s ease-out",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          style={{
            position: "absolute",
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: "linear-gradient(135deg, #ff9800, #ff5722)",
            borderRadius: "50%",
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: 0.3,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            zIndex: 0,
          }}
        />
      ))}

      {/* Parallax Background Shapes */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: "300px",
          height: "300px",
          border: "1px solid rgba(255, 152, 0, 0.1)",
          borderRadius: "50%",
          transform: `translateY(${parallaxOffset * 0.5}px)`,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "200px",
          height: "200px",
          background: "linear-gradient(135deg, rgba(255, 152, 0, 0.05), rgba(255, 87, 34, 0.05))",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          transform: `translateY(${parallaxOffset * 0.3}px)`,
          zIndex: 0,
        }}
      />

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "800px",
        }}
      >
        {/* Animated Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(255, 152, 0, 0.1)",
            border: "1px solid rgba(255, 152, 0, 0.3)",
            borderRadius: "30px",
            padding: "8px 20px",
            marginBottom: "30px",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              background: "#ff9800",
              borderRadius: "50%",
              animation: "pulse 2s infinite",
            }}
          />
          <span style={{ color: "#ff9800", fontSize: "0.9rem", fontWeight: "500" }}>
            Available for new projects
          </span>
        </div>

        {/* Main Heading with Gradient */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: "800",
            lineHeight: "1.1",
            marginBottom: "25px",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease 0.2s",
          }}
        >
          <span style={{ color: "white" }}>Designing </span>
          <span
            style={{
              background: "linear-gradient(135deg, #ff9800, #ff5722)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Brands.
          </span>
          <br />
          <span style={{ color: "white" }}>Building </span>
          <span
            style={{
              background: "linear-gradient(135deg, #ff9800, #ff5722)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Digital Experiences.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "1.2rem",
            color: "#b0b0b0",
            marginBottom: "40px",
            maxWidth: "600px",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease 0.4s",
          }}
        >
          We craft premium digital experiences that transform brands and drive
          growth. From stunning UI/UX to powerful web development.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease 0.6s",
          }}
        >
          <button
            onClick={() => scrollToSection("#projects")}
            style={{
              background: "linear-gradient(135deg, #ff9800, #ff5722)",
              border: "none",
              padding: "16px 36px",
              color: "white",
              borderRadius: "10px",
              fontWeight: "600",
              fontSize: "1rem",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 25px rgba(255, 152, 0, 0.4)",
            }}
            className="cta-primary"
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 8px 35px rgba(255, 152, 0, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 25px rgba(255, 152, 0, 0.4)";
            }}
          >
            <span style={{ position: "relative", zIndex: 1 }}>View Our Work</span>
            {/* Ripple Effect */}
            <style>{`
              .cta-primary::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                transition: width 0.6s ease, height 0.6s ease;
              }
              .cta-primary:hover::before {
                width: 300px;
                height: 300px;
              }
            `}</style>
          </button>

          <button
            onClick={() => scrollToSection("#contact")}
            style={{
              background: "transparent",
              border: "2px solid rgba(255, 152, 0, 0.5)",
              padding: "14px 34px",
              color: "#ff9800",
              borderRadius: "10px",
              fontWeight: "600",
              fontSize: "1rem",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.3s ease",
            }}
            className="cta-secondary"
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255, 152, 0, 0.1)";
              e.target.style.borderColor = "#ff9800";
              e.target.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.borderColor = "rgba(255, 152, 0, 0.5)";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Contact Us
          </button>
        </div>

        {/* Stats Row */}
        <div
          style={{
            display: "flex",
            gap: "60px",
            marginTop: "60px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(255, 152, 0, 0.1)",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease 0.8s",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                background: "linear-gradient(135deg, #ff9800, #ff5722)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              150+
            </h3>
            <p style={{ color: "#666", fontSize: "0.9rem" }}>Projects Delivered</p>
          </div>
          <div>
            <h3
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                background: "linear-gradient(135deg, #ff9800, #ff5722)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              50+
            </h3>
            <p style={{ color: "#666", fontSize: "0.9rem" }}>Happy Clients</p>
          </div>
          <div>
            <h3
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                background: "linear-gradient(135deg, #ff9800, #ff5722)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              8+
            </h3>
            <p style={{ color: "#666", fontSize: "0.9rem" }}>Years Experience</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: isLoaded ? 1 : 0,
          transition: "all 0.6s ease 1s",
        }}
      >
        <div
          style={{
            width: "30px",
            height: "50px",
            border: "2px solid rgba(255, 152, 0, 0.3)",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              background: "linear-gradient(135deg, #ff9800, #ff5722)",
              borderRadius: "50%",
              position: "absolute",
              left: "50%",
              top: "10px",
              transform: "translateX(-50%)",
              animation: "scrollDown 2s infinite",
            }}
          />
        </div>
      </div>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 0.5; }
        }
        @keyframes scrollDown {
          0% { top: 10px; opacity: 1; }
          100% { top: 30px; opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}

