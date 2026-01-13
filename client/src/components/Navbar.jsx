// import { useState, useEffect } from "react";
// import logo from "../assets/logo.png";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [logoLoaded, setLogoLoaded] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     // Trigger logo animation after mount
//     setLogoLoaded(true);

//     // Scroll handler
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", href: "#hero" },
//     { name: "About", href: "#about" },
//     { name: "Services", href: "#services" },
//     { name: "Work", href: "#projects" },
//     { name: "Clients", href: "#clients" },
//     { name: "Contact", href: "#contact" },
//   ];

//   const scrollToSection = (href) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     setMobileMenuOpen(false);
//   };

//   return (
//     <nav
//       className={`navbar ${scrolled ? "scrolled" : ""}`}
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 1000,
//         padding: scrolled ? "15px 10%" : "20px 10%",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         background: scrolled ? "rgba(11, 11, 11, 0.85)" : "transparent",
//         backdropFilter: scrolled ? "blur(20px)" : "none",
//         WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
//         borderBottom: scrolled ? "1px solid rgba(255, 152, 0, 0.15)" : "none",
//         transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
//       }}
//     >
//       {/* Logo */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: "12px",
//           cursor: "pointer",
//         }}
//         onClick={() => scrollToSection("#hero")}
//         className="interactive-card"
//       >
//         <img
//           src={logo}
//           alt="Vedacurate Logo"
//           className="logo-image"
//           style={{
//             width: "45px",
//             height: "45px",
//             objectFit: "contain",
//             transform: logoLoaded
//               ? "scale(1) rotate(0deg)"
//               : "scale(0) rotate(-180deg)",
//             opacity: logoLoaded ? 1 : 0,
//             transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
//             filter: logoLoaded
//               ? "drop-shadow(0 0 30px rgba(255, 152, 0, 0.4))"
//               : "none",
//           }}
//           onLoad={() => setLogoLoaded(true)}
//         />
//         <span
//           className="logo-text"
//           style={{
//             fontSize: "2.2rem",
//             fontWeight: "700",
//             background: "linear-gradient(135deg, #ff9800, #ff5722)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             backgroundClip: "text",
//             opacity: logoLoaded ? 1 : 0,
//             transform: logoLoaded ? "translateX(0)" : "translateX(-20px)",
//             transition: "all 0.6s ease 0.3s",
//           }}
//         >
//           Vedacurate
//         </span>
//       </div>

//       {/* Desktop Navigation */}
//       <div
//         style={{
//           display: "flex",
//           gap: "40px",
//         }}
//         className="nav-links"
//       >
//         {navLinks.map((link, index) => (
//           <a
//             key={link.name}
//             href={link.href}
//             onClick={(e) => {
//               e.preventDefault();
//               scrollToSection(link.href);
//             }}
//             style={{
//               color: "white",
//               fontWeight: "500",
//               fontSize: "1.15rem",
//               position: "relative",
//               padding: "8px 0",
//               opacity: logoLoaded ? 1 : 0,
//               transform: logoLoaded ? "translateY(0)" : "translateY(-10px)",
//               transition: "all 0.3s ease",
//               transitionDelay: `${0.5 + index * 0.1}s`,
//             }}
//             className="nav-link"
//           >
//             {link.name}
//             <span
//               style={{
//                 position: "absolute",
//                 bottom: 0,
//                 left: 0,
//                 width: "0%",
//                 height: "2px",
//                 background: "linear-gradient(90deg, #ff9800, #ff5722)",
//                 transition: "width 0.3s ease",
//               }}
//               className="nav-link-underline"
//             />
//           </a>
//         ))}
//       </div>

//       {/* CTA Button */}
//       <div
//         style={{
//           opacity: logoLoaded ? 1 : 0,
//           transform: logoLoaded ? "scale(1)" : "scale(0.8)",
//           transition: "all 0.6s ease 0.6s",
//         }}
//         className="cta-button"
//       >
//         <button
//           onClick={() => scrollToSection("#contact")}
//           style={{
//             background: "linear-gradient(135deg, #ff9800, #ff5722)",
//             border: "none",
//             padding: "14px 32px",
//             color: "white",
//             borderRadius: "12px",
//             fontWeight: "600",
//             fontSize: "1.1rem",
//             cursor: "pointer",
//             transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//             boxShadow: "0 4px 25px rgba(255, 152, 0, 0.35)",
//             position: "relative",
//             overflow: "hidden",
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.transform = "translateY(-3px) scale(1.02)";
//             e.target.style.boxShadow = "0 8px 35px rgba(255, 152, 0, 0.45)";
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = "translateY(0) scale(1)";
//             e.target.style.boxShadow = "0 4px 25px rgba(255, 152, 0, 0.35)";
//           }}
//         >
//           <span style={{ position: "relative", zIndex: 1 }}>Let's Talk</span>
//         </button>
//       </div>

//       {/* Mobile Menu Toggle */}
//       <button
//         className="mobile-menu-toggle"
//         style={{
//           display: "none",
//           background: "transparent",
//           border: "none",
//           color: "white",
//           fontSize: "1.5rem",
//           cursor: "pointer",
//           padding: "10px",
//         }}
//         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         aria-label="Toggle menu"
//       >
//         {mobileMenuOpen ? "✕" : "☰"}
//       </button>

//       {/* Mobile Menu Overlay */}
//       {mobileMenuOpen && (
//         <div
//           className="mobile-menu"
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: "rgba(11, 11, 11, 0.98)",
//             backdropFilter: "blur(20px)",
//             zIndex: 999,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "30px",
//             animation: "fadeIn 0.3s ease",
//           }}
//         >
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               onClick={(e) => {
//                 e.preventDefault();
//                 scrollToSection(link.href);
//               }}
//               style={{
//                 color: "white",
//                 fontSize: "1.8rem",
//                 fontWeight: "600",
//                 textDecoration: "none",
//               }}
//             >
//               {link.name}
//             </a>
//           ))}
//           <button
//             onClick={() => scrollToSection("#contact")}
//             style={{
//               background: "linear-gradient(135deg, #ff9800, #ff5722)",
//               border: "none",
//               padding: "16px 40px",
//               color: "white",
//               borderRadius: "12px",
//               fontWeight: "600",
//               fontSize: "1rem",
//               cursor: "pointer",
//               marginTop: "20px",
//             }}
//           >
//             Let's Talk
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }

import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setLogoLoaded(true);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`navbar-container ${scrolled ? "scrolled" : ""}`}
      style={{
        position: "fixed",
        top: scrolled ? "20px" : "0px",
        left: "0",
        right: "0",
        zIndex: 1000,
        padding: "0 5%",
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        className="navbar-inner"
        style={{
          maxWidth: scrolled ? "1200px" : "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: scrolled ? "12px 30px" : "30px 5%",
          background: scrolled ? "rgba(11, 11, 11, 0.75)" : "transparent",
          backdropFilter: scrolled ? "blur(15px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(15px)" : "none",
          borderRadius: scrolled ? "100px" : "0px",
          border: scrolled ? "1px solid rgba(255, 152, 0, 0.2)" : "1px solid transparent",
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Logo Section */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}
          onClick={() => scrollToSection("#hero")}
        >
          <img
            src={logo}
            alt="Vedacurate"
            style={{
              width: scrolled ? "35px" : "45px",
              height: "auto",
              filter: "drop-shadow(0 0 10px rgba(255, 152, 0, 0.3))",
              transition: "all 0.5s ease"
            }}
          />
          <span
            style={{
              fontSize: scrolled ? "1.4rem" : "1.8rem",
              fontWeight: "800",
              letterSpacing: "-1px",
              background: "linear-gradient(to right, #ff9800, #ff5722)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transition: "all 0.5s ease"
            }}
          >
            Vedacurate
          </span>
        </div>

        {/* Desktop Links */}
        <div className="desktop-links" style={{ display: "flex", gap: "35px", alignItems: "center" }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className="nav-item"
              style={{
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: "600",
                letterSpacing: "0.5px",
                position: "relative",
                padding: "5px 0",
                transition: "color 0.3s ease"
              }}
            >
              {link.name}
              <span className="nav-underline" />
            </a>
          ))}
          
          <button
            onClick={() => scrollToSection("#contact")}
            className="talk-btn"
            style={{
              background: "linear-gradient(135deg, #ff9800, #ff5722)",
              color: "white",
              border: "none",
              padding: scrolled ? "10px 24px" : "12px 28px",
              borderRadius: "50px",
              fontWeight: "700",
              fontSize: "0.9rem",
              cursor: "pointer",
              marginLeft: "10px",
              boxShadow: "0 10px 20px rgba(255, 87, 34, 0.2)",
              transition: "all 0.3s ease"
            }}
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ display: "none", background: "transparent", border: "none", color: "white", cursor: "pointer" }}
        >
          <div className={`burger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link, i) => (
          <a 
            key={link.name} 
            href={link.href} 
            style={{ transitionDelay: `${i * 0.1}s` }}
            onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
          >
            {link.name}
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 992px) {
          .desktop-links { display: none !important; }
          .mobile-toggle { display: block !important; }
        }

        .nav-item:hover { color: #fff !important; }
        .nav-item:hover .nav-underline { width: 100%; }

        .nav-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #ff9800;
          transition: width 0.3s ease;
        }

        .talk-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(255, 87, 34, 0.4);
        }

        /* Burger Icon */
        .burger span {
          display: block;
          width: 25px;
          height: 2px;
          background: white;
          margin: 6px 0;
          transition: 0.4s;
        }
        .burger.open span:nth-child(1) { transform: rotate(-45deg) translate(-5px, 6px); }
        .burger.open span:nth-child(2) { transform: rotate(45deg) translate(-5px, -7px); }

        /* Mobile Overlay */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 0;
          background: rgba(8, 8, 8, 0.98);
          backdrop-filter: blur(20px);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: height 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: -1;
        }
        .mobile-overlay.active { height: 100vh; }
        .mobile-overlay a {
          color: white;
          font-size: 2rem;
          font-weight: 800;
          text-decoration: none;
          margin: 15px 0;
          opacity: 0;
          transform: translateY(20px);
          transition: 0.5s;
        }
        .mobile-overlay.active a { opacity: 1; transform: translateY(0); }
        
        @media (max-width: 480px) {
          .mobile-overlay a { font-size: 1.5rem; margin: 10px 0; }
        }
      `}</style>
    </nav>
  );
}