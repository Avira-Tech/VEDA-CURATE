import { useState, useEffect } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("idle"); // idle, loading, success, error

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

    const footer = document.querySelector("footer");
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubscribeStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubscribeStatus("success");
    setEmail("");

    setTimeout(() => setSubscribeStatus("idle"), 3000);
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Web Development", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Branding", href: "#services" },
      { name: "Maintenance", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Work", href: "#projects" },
      { name: "Testimonials", href: "#clients" },
      { name: "Careers", href: "#" },
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#projects" },
      { name: "FAQ", href: "#" },
      { name: "Support", href: "#contact" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: "𝕏", href: "#" },
    { name: "LinkedIn", icon: "in", href: "#" },
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "GitHub", icon: "⌘", href: "#" },
  ];

  return (
    <footer
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255, 152, 0, 0.1)",
        padding: "80px 10% 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "-200px",
          right: "-100px",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(255, 152, 0, 0.08) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Newsletter Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            padding: "50px",
            background: "linear-gradient(135deg, rgba(255, 152, 0, 0.08), rgba(255, 87, 34, 0.03))",
            border: "1px solid rgba(255, 152, 0, 0.15)",
            borderRadius: "24px",
            marginBottom: "60px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
          className="newsletter-section"
        >
          <div>
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "700",
                color: "white",
                marginBottom: "10px",
              }}
            >
              Stay in the <span style={{ background: "linear-gradient(135deg, #ff9800, #ff5722)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Loop</span>
            </h3>
            <p
              style={{
                color: "#888",
                fontSize: "1rem",
                lineHeight: "1.6",
              }}
            >
              Subscribe to our newsletter for the latest updates, design tips, and industry insights.
            </p>
          </div>

          <div>
            <form onSubmit={handleSubscribe} style={{ display: "flex", gap: "12px" }}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribeStatus === "loading" || subscribeStatus === "success"}
                style={{
                  flex: 1,
                  padding: "16px 20px",
                  background: "#1a1a1a",
                  border: "1px solid #333",
                  borderRadius: "10px",
                  color: "white",
                  fontSize: "1rem",
                  outline: "none",
                  transition: "all 0.3s ease",
                }}
              />
              <button
                type="submit"
                disabled={subscribeStatus === "loading" || subscribeStatus === "success"}
                style={{
                  padding: "16px 30px",
                  background: subscribeStatus === "success"
                    ? "linear-gradient(135deg, #22c55e, #16a34a)"
                    : "linear-gradient(135deg, #ff9800, #ff5722)",
                  border: "none",
                  borderRadius: "10px",
                  color: "white",
                  fontWeight: "600",
                  fontSize: "1rem",
                  cursor: subscribeStatus === "loading" || subscribeStatus === "success" ? "not-allowed" : "pointer",
                  transition: "all 0.3s ease",
                  minWidth: "140px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {subscribeStatus === "loading" ? (
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      border: "2px solid rgba(255,255,255,0.3)",
                      borderTopColor: "white",
                      borderRadius: "50%",
                      animation: "spin 1s linear infinite",
                    }}
                  />
                ) : subscribeStatus === "success" ? (
                  "✓ Subscribed"
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
            {subscribeStatus === "success" && (
              <p
                style={{
                  color: "#22c55e",
                  fontSize: "0.9rem",
                  marginTop: "10px",
                }}
              >
                Thanks for subscribing! Check your inbox for a welcome gift.
              </p>
            )}
          </div>
        </div>

        {/* Main Footer Content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "60px",
            paddingBottom: "40px",
            borderBottom: "1px solid rgba(255, 152, 0, 0.1)",
            marginBottom: "40px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.2s",
          }}
        >
          {/* Brand Column */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "linear-gradient(135deg, #ff9800, #ff5722)",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                V
              </div>
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
                Vedacurate
              </span>
            </div>
            <p
              style={{
                color: "#888",
                fontSize: "0.95rem",
                lineHeight: "1.7",
                marginBottom: "25px",
              }}
            >
              Crafting digital experiences that transform brands and drive business growth.
            </p>

            {/* Social Links */}
            <div style={{ display: "flex", gap: "12px" }}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "rgba(255, 152, 0, 0.08)",
                    border: "1px solid rgba(255, 152, 0, 0.15)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ff9800",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #ff9800, #ff5722)";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 152, 0, 0.08)";
                    e.currentTarget.style.borderColor = "rgba(255, 152, 0, 0.15)";
                    e.currentTarget.style.color = "#ff9800";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4
              style={{
                color: "white",
                fontSize: "1.1rem",
                fontWeight: "600",
                marginBottom: "25px",
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    style={{
                      color: "#888",
                      fontSize: "0.95rem",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#ff9800";
                      e.target.style.paddingLeft = "5px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#888";
                      e.target.style.paddingLeft = "0";
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4
              style={{
                color: "white",
                fontSize: "1.1rem",
                fontWeight: "600",
                marginBottom: "25px",
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    style={{
                      color: "#888",
                      fontSize: "0.95rem",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#ff9800";
                      e.target.style.paddingLeft = "5px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#888";
                      e.target.style.paddingLeft = "0";
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4
              style={{
                color: "white",
                fontSize: "1.1rem",
                fontWeight: "600",
                marginBottom: "25px",
              }}
            >
              Resources
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    style={{
                      color: "#888",
                      fontSize: "0.95rem",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#ff9800";
                      e.target.style.paddingLeft = "5px";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#888";
                      e.target.style.paddingLeft = "0";
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease 0.4s",
          }}
        >
          <p
            style={{
              color: "#666",
              fontSize: "0.9rem",
            }}
          >
            © {currentYear} Vedacurate. All rights reserved.
          </p>

          <div
            style={{
              display: "flex",
              gap: "30px",
            }}
          >
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
              <a
                key={index}
                href="#"
                style={{
                  color: "#666",
                  fontSize: "0.9rem",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#ff9800";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#666";
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 1024px) {
          .newsletter-section {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          footer > div > div:nth-child(2) {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 640px) {
          footer > div > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
          footer > div > div:last-child {
            flex-direction: column !important;
            text-align: center !important;
          }
          footer > div > div:last-child > div:nth-child(2) {
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
}

