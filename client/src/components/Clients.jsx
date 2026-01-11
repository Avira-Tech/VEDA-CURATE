import { useState, useEffect, useRef } from "react";

export default function Clients() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const carouselRef = useRef(null);

  const clientLogos = [
    { name: "TechCorp", initial: "TC" },
    { name: "StartupX", initial: "SX" },
    { name: "GlobalBrand", initial: "GB" },
    { name: "InnovateLab", initial: "IL" },
    { name: "DigitalWave", initial: "DW" },
    { name: "FutureScale", initial: "FS" },
    { name: "CloudNine", initial: "CN" },
    { name: "NextGen", initial: "NG" },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      image: "👩‍💼",
      quote:
        "Vedacurate transformed our digital presence completely. Their attention to detail and creative vision exceeded all our expectations. The new website has increased our conversions by 45%.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, StartupX",
      image: "👨‍💻",
      quote:
        "Working with Vedacurate was a game-changer for our startup. They delivered a stunning brand identity that helped us secure funding. Truly professional and innovative team.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Marketing Director, GlobalBrand",
      image: "👩‍💻",
      quote:
        "The team at Vedacurate doesn't just build websites - they create experiences. Our e-commerce platform redesign resulted in a 60% increase in engagement within the first month.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Park",
      role: "CTO, InnovateLab",
      image: "👨‍💼",
      quote:
        "Impressed by their technical expertise and creative approach. They built a complex SaaS dashboard that's both powerful and beautiful. Highly recommend!",
      rating: 5,
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

    const section = document.querySelector("#clients");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      id="clients"
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
          top: "20%",
          left: "-10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(255, 152, 0, 0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255, 87, 34, 0.04) 0%, transparent 70%)",
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
            Our Clients
          </span>
        </div>
        <h2
          style={{
            fontSize: "2.8rem",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          <span style={{ color: "white" }}>Trusted by </span>
          <span
            style={{
              background: "linear-gradient(135deg, #ff9800, #ff5722)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Industry Leaders
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
          We've had the privilege of working with amazing companies across industries.
        </p>
      </div>

      {/* Logo Carousel */}
      <div
        style={{
          marginBottom: "80px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease 0.2s",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            padding: "20px 0",
          }}
        >
          <div
            ref={carouselRef}
            style={{
              display: "flex",
              gap: "50px",
              animation: "marquee 20s linear infinite",
              width: "max-content",
            }}
          >
            {/* Duplicate logos for seamless loop */}
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={i}
                style={{
                  width: "140px",
                  height: "80px",
                  background: "#1a1a1a",
                  border: "1px solid #333",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#ff9800";
                  e.currentTarget.style.boxShadow = "0 5px 20px rgba(255, 152, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#333";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    background: "linear-gradient(135deg, #ff9800, #ff5722)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {logo.initial}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease 0.4s",
        }}
      >
        <div
          style={{
            background: "#1a1a1a",
            border: "1px solid #333",
            borderRadius: "24px",
            padding: "50px",
            position: "relative",
          }}
        >
          {/* Decorative Quote */}
          <div
            style={{
              position: "absolute",
              top: "30px",
              left: "40px",
              fontSize: "4rem",
              color: "rgba(255, 152, 0, 0.2)",
              fontFamily: "Georgia, serif",
              lineHeight: 1,
            }}
          >
            "
          </div>

          {/* Testimonial Content */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Stars */}
            <div
              style={{
                display: "flex",
                gap: "5px",
                marginBottom: "25px",
              }}
            >
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    color: "#ff9800",
                    fontSize: "1.2rem",
                  }}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Quote */}
            <p
              style={{
                fontSize: "1.3rem",
                lineHeight: "1.8",
                color: "#e0e0e0",
                marginBottom: "35px",
              }}
            >
              {testimonials[activeTestimonial].quote}
            </p>

            {/* Author */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "linear-gradient(135deg, rgba(255, 152, 0, 0.2), rgba(255, 87, 34, 0.1))",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                }}
              >
                {testimonials[activeTestimonial].image}
              </div>
              <div>
                <h4
                  style={{
                    color: "white",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    marginBottom: "5px",
                  }}
                >
                  {testimonials[activeTestimonial].name}
                </h4>
                <p
                  style={{
                    color: "#888",
                    fontSize: "0.95rem",
                  }}
                >
                  {testimonials[activeTestimonial].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              marginTop: "40px",
            }}
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                style={{
                  width: index === activeTestimonial ? "30px" : "10px",
                  height: "10px",
                  borderRadius: "5px",
                  background: index === activeTestimonial
                    ? "linear-gradient(135deg, #ff9800, #ff5722)"
                    : "rgba(255, 152, 0, 0.2)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "30px",
          marginTop: "80px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease 0.6s",
        }}
      >
        {[
          { value: "98%", label: "Client Satisfaction" },
          { value: "150+", label: "Projects Completed" },
          { value: "50+", label: "Active Clients" },
          { value: "24/7", label: "Support Available" },
        ].map((stat, index) => (
          <div
            key={index}
            style={{
              textAlign: "center",
              padding: "30px 20px",
              background: "rgba(255, 152, 0, 0.03)",
              border: "1px solid rgba(255, 152, 0, 0.1)",
              borderRadius: "16px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.borderColor = "rgba(255, 152, 0, 0.3)";
              e.currentTarget.style.background = "rgba(255, 152, 0, 0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(255, 152, 0, 0.1)";
              e.currentTarget.style.background = "rgba(255, 152, 0, 0.03)";
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                fontWeight: "800",
                background: "linear-gradient(135deg, #ff9800, #ff5722)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "10px",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                color: "#888",
                fontSize: "0.95rem",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 1024px) {
          #clients > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          #clients > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

