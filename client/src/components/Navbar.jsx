import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Trigger logo animation after mount
    setLogoLoaded(true);

    // Scroll handler
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#projects" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "20px 10%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: scrolled
          ? "rgba(11, 11, 11, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255, 152, 0, 0.2)"
          : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          className="logo-container"
          style={{
            width: "45px",
            height: "45px",
            background: "linear-gradient(135deg, #ff9800, #ff5722)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "white",
            transform: logoLoaded ? "scale(1) rotate(0deg)" : "scale(0) rotate(-180deg)",
            opacity: logoLoaded ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
            boxShadow: logoLoaded
              ? "0 0 30px rgba(255, 152, 0, 0.4)"
              : "none",
            animation: logoLoaded ? "pulse 2s infinite" : "none",
          }}
        >
          V
        </div>
        <span
          className="logo-text"
          style={{
            fontSize: "1.8rem",
            fontWeight: "700",
            background: "linear-gradient(135deg, #ff9800, #ff5722)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            opacity: logoLoaded ? 1 : 0,
            transform: logoLoaded ? "translateX(0)" : "translateX(-20px)",
            transition: "all 0.6s ease 0.3s",
          }}
        >
          Vedacurate
        </span>
      </div>

      {/* Desktop Navigation */}
      <div
        style={{
          display: "flex",
          gap: "40px",
        }}
        className="nav-links"
      >
        {navLinks.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.href);
            }}
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: "0.95rem",
              position: "relative",
              padding: "8px 0",
              opacity: logoLoaded ? 1 : 0,
              transform: logoLoaded ? "translateY(0)" : "translateY(-10px)",
              transition: "all 0.3s ease",
              transitionDelay: `${0.5 + index * 0.1}s`,
            }}
            className="nav-link"
          >
            {link.name}
            <span
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "0%",
                height: "2px",
                background: "linear-gradient(90deg, #ff9800, #ff5722)",
                transition: "width 0.3s ease",
              }}
              className="nav-link-underline"
            />
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <div
        style={{
          opacity: logoLoaded ? 1 : 0,
          transform: logoLoaded ? "scale(1)" : "scale(0.8)",
          transition: "all 0.6s ease 0.6s",
        }}
      >
        <button
          onClick={() => scrollToSection("#contact")}
          style={{
            background: "linear-gradient(135deg, #ff9800, #ff5722)",
            border: "none",
            padding: "12px 28px",
            color: "white",
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 20px rgba(255, 152, 0, 0.3)",
          }}
          className="cta-button"
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 8px 30px rgba(255, 152, 0, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 20px rgba(255, 152, 0, 0.3)";
          }}
        >
          Let's Talk
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        style={{
          display: "none",
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "1.5rem",
          cursor: "pointer",
        }}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      <style>{`
        @media (max-width: 968px) {
          .nav-links {
            display: none !important;
          }
          .cta-button {
            display: none !important;
          }
        }
        .nav-link:hover .nav-link-underline {
          width: 100% !important;
        }
      `}</style>
    </nav>
  );
}

