import { useState, useEffect } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    years: 0,
  });

  const targets = {
    projects: 150,
    clients: 50,
    years: 8,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector("#about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Animate counters
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timers = [];

    Object.keys(targets).forEach((key) => {
      const increment = targets[key] / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targets[key]) {
          current = targets[key];
          clearInterval(timer);
        }
        setCounters((prev) => ({
          ...prev,
          [key]: Math.floor(current),
        }));
      }, interval);

      timers.push(timer);
    });

    return () => timers.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        padding: "120px 10%",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
        className="about-container"
      >
        {/* Left: Text Content */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-50px)",
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
              marginBottom: "25px",
            }}
          >
            <span
              style={{
                color: "#ff9800",
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
            >
              About Vedacurate
            </span>
          </div>

          <h2
            style={{
              fontSize: "2.8rem",
              fontWeight: "700",
              marginBottom: "25px",
              lineHeight: "1.2",
            }}
          >
            <span style={{ color: "white" }}>We Create </span>
            <span
              style={{
                background: "linear-gradient(135deg, #ff9800, #ff5722)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Digital Magic
            </span>
          </h2>

          <p
            style={{
              color: "#b0b0b0",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            Vedacurate is a creative digital studio passionate about transforming
            brands through innovative design and cutting-edge technology. We
            believe that great design is not just about aesthetics—it's about
            solving real problems and creating meaningful connections.
          </p>

          <p
            style={{
              color: "#b0b0b0",
              fontSize: "1.1rem",
              lineHeight: "1.8",
              marginBottom: "30px",
            }}
          >
            Our team of experienced designers and developers works closely with
            clients to understand their vision and bring it to life with
            pixel-perfect precision and seamless user experiences.
          </p>

          {/* Feature Points */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              marginTop: "30px",
            }}
          >
            {[
              "Award-winning design solutions",
              "Client-focused approach",
              "On-time delivery guarantee",
              "Post-launch support & maintenance",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease ${0.3 + index * 0.1}s`,
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    background: "linear-gradient(135deg, #ff9800, #ff5722)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ color: "white", fontSize: "0.8rem" }}>✓</span>
                </div>
                <span style={{ color: "#e0e0e0", fontSize: "1rem" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Animated Counters */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(50px)",
            transition: "all 0.8s ease 0.2s",
          }}
        >
          {/* Counter Cards */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(255, 152, 0, 0.1), rgba(255, 87, 34, 0.05))",
              border: "1px solid rgba(255, 152, 0, 0.2)",
              borderRadius: "20px",
              padding: "40px 30px",
              textAlign: "center",
              transition: "all 0.3s ease",
            }}
            className="counter-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 40px rgba(255, 152, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                fontSize: "3.5rem",
                fontWeight: "800",
                background: "linear-gradient(135deg, #ff9800, #ff5722)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "10px",
              }}
            >
              {counters.projects}+
            </div>
            <div
              style={{
                color: "#b0b0b0",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              Projects Delivered
            </div>
          </div>

          <div
            style={{
              background: "#1a1a1a",
              border: "1px solid #333",
              borderRadius: "20px",
              padding: "40px 30px",
              textAlign: "center",
              transition: "all 0.3s ease",
            }}
            className="counter-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.borderColor = "#ff9800";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "#333";
            }}
          >
            <div
              style={{
                fontSize: "3.5rem",
                fontWeight: "800",
                background: "linear-gradient(135deg, #ff9800, #ff5722)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "10px",
              }}
            >
              {counters.clients}+
            </div>
            <div
              style={{
                color: "#b0b0b0",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              Happy Clients
            </div>
          </div>

          <div
            style={{
              background: "#1a1a1a",
              border: "1px solid #333",
              borderRadius: "20px",
              padding: "40px 30px",
              textAlign: "center",
              gridColumn: "span 2",
              transition: "all 0.3s ease",
            }}
            className="counter-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.borderColor = "#ff9800";
              e.currentTarget.style.boxShadow = "0 10px 40px rgba(255, 152, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "#333";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                fontSize: "3.5rem",
                fontWeight: "800",
                background: "linear-gradient(135deg, #ff9800, #ff5722)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "10px",
              }}
            >
              {counters.years}+
            </div>
            <div
              style={{
                color: "#b0b0b0",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              Years of Experience
            </div>
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 968px) {
          .about-container {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
        @media (max-width: 500px) {
          .about-container > div:last-child {
            grid-template-columns: 1fr !important;
          }
          .counter-card[style*="grid-column: span 2"] {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}

