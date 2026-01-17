import { useState, useEffect, useRef } from "react";
// Import your logo asset
import logo from "../assets/logo.png";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("idle");
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribeStatus("loading");
    await new Promise(r => setTimeout(r, 1500));
    setSubscribeStatus("success");
    setEmail("");
    setTimeout(() => setSubscribeStatus("idle"), 3000);
  };

  const footerLinks = {
    Services: [
      { name: "Web Development", href: "#services", keywords: "web development, website design, freelance developer" },
      { name: "UI/UX Design", href: "#services", keywords: "UI design, UX design, user interface" },
      { name: "Branding", href: "#services", keywords: "branding, logo design, brand identity" },
      { name: "AR/VR Development", href: "#services", keywords: "AR VR, virtual reality, augmented reality" },
      { name: "Social Media Design", href: "#services", keywords: "social media, content design, marketing" }
    ],
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Our Work", href: "#projects" },
      { name: "Testimonials", href: "#clients" },
      { name: "Careers", href: "#" },
    ],
    Resources: [
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#projects" },
      { name: "FAQ", href: "#" },
      { name: "Support", href: "#contact" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: "𝕏", href: "https://twitter.com/vedacurate" },
    { name: "LinkedIn", icon: "in", href: "https://linkedin.com/company/vedacurate" },
    { name: "Instagram", icon: "📸", href: "https://instagram.com/vedacurate" },
    { name: "GitHub", icon: "⌘", href: "#" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      role="contentinfo"
      style={{
        background: "#080808",
        padding: "100px 8% 40px",
        position: "relative",
        overflow: "hidden",
        color: "#fff",
        borderTop: "1px solid rgba(255, 152, 0, 0.1)"
      }}
    >
      {/* Background Decorative Glows */}
      <div style={{
        position: "absolute",
        bottom: "-10%",
        left: "20%",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(255, 152, 0, 0.05) 0%, transparent 70%)",
        filter: "blur(100px)",
        pointerEvents: "none"
      }} />

      <div style={{ position: "relative", zIndex: 5, maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Newsletter Section */}
        <div className={`newsletter-container ${isVisible ? 'animate-up' : ''}`} style={{
          background: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(20px)",
          borderRadius: "32px",
          padding: "60px",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          alignItems: "center",
          gap: "40px",
          marginBottom: "100px",
          overflow: "hidden",
          position: "relative"
        }}>
          <div className="shimmer-sweep" />
          <div>
            <h3 style={{ fontSize: "2.4rem", fontWeight: "900", marginBottom: "15px", letterSpacing: "-1px" }}>
              Stay in the <span className="magic-text">Loop</span>
            </h3>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: "1.6", maxWidth: "420px" }}>
              Join our community for exclusive design insights, technical updates, and digital growth strategies.
            </p>
          </div>
          
          <form onSubmit={handleSubscribe} style={{ display: "flex", gap: "15px", position: "relative" }} aria-label="Newsletter subscription">
            <input 
              type="email" 
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="luxury-input-footer"
              required
              disabled={subscribeStatus === "success"}
              aria-label="Email address"
            />
            <button 
              type="submit" 
              className={`subscribe-btn-glow ${subscribeStatus === "success" ? "success" : ""}`}
              disabled={subscribeStatus === "loading" || subscribeStatus === "success"}
              aria-label={subscribeStatus === "success" ? "Subscribed" : "Subscribe to newsletter"}
            >
              {subscribeStatus === "loading" ? <div className="spinner" /> : 
               subscribeStatus === "success" ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>

        {/* Links Grid */}
        <div className="footer-grid-system" style={{
          display: "grid",
          gridTemplateColumns: "1.6fr repeat(3, 1fr)",
          gap: "60px",
          paddingBottom: "60px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          marginBottom: "40px"
        }}>
          <div>
            {/* BRAND LOGO AREA */}
            <div 
                style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "30px", cursor: "pointer" }}
                onClick={scrollToTop}
                role="navigation"
                aria-label="Back to top"
            >
              <div className="footer-logo-wrap">
                <img 
                    src={logo} 
                    alt="Vedacurate Logo" 
                    style={{ width: "auto", height: "auto", filter: "drop-shadow(0 0 8px rgba(255, 152, 0, 0.5))", margin: "-5px 0px 0px 5px" }}
                />
              </div>
              <h2 style={{ fontSize: "2rem", fontWeight: "900", letterSpacing: "-1.5px", background: "linear-gradient(to right, #ff9800, #ff5722)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Vedacurate
              </h2>
            </div>

            <p style={{ color: "rgba(255,255,255,0.4)", lineHeight: "1.8", marginBottom: "35px", maxWidth: "340px", fontSize: "1.05rem" }}>
              Strategic design and cutting-edge engineering for market leaders who demand digital excellence. Our freelance team delivers premium website development, branding, and AR/VR experiences.
            </p>
            
            <div style={{ display: "flex", gap: "15px" }} role="list" aria-label="Social media links">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="social-pill-chip" 
                  role="listitem"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="footer-cat-title">{category}</h4>
              <ul style={{ listStyle: "none", padding: 0 }} role="list">
                {links.map(link => (
                  <li key={link.name} style={{ marginBottom: "16px" }} role="listitem">
                    <a 
                      href={link.href} 
                      className="premium-footer-link"
                      aria-label={link.name}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "25px",
          color: "rgba(255,255,255,0.3)",
          fontSize: "0.95rem"
        }}>
          <p>© 2026 <span style={{ color: "#ff9800", fontWeight: "600" }}>Vedacurate</span>. All rights reserved.</p>
          <div style={{ display: "flex", gap: "35px" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(item => (
              <span key={item} className="legal-link">{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Organization Schema for Footer */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Vedacurate",
          "url": "https://vedacurate.com",
          "logo": "https://vedacurate.com/logo.png",
          "description": "Professional freelance digital agency offering website design, web development, branding, AR/VR experiences, and social media design services.",
          "foundingDate": "2020",
          "sameAs": socialLinks.map(s => s.href),
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-XXX-XXX-XXXX",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          }
        })
      }} />

      <style>{`
        .magic-text { background: linear-gradient(90deg, #ff9800, #ff5722); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        
        .shimmer-sweep { 
          position: absolute; top: 0; left: -100%; width: 50%; height: 100%; 
          background: linear-gradient(90deg, transparent, rgba(255,152,0,0.06), transparent); 
          transform: skewX(-25deg); animation: shimmerFlow 7s infinite; 
        }
        @keyframes shimmerFlow { 100% { left: 250%; } }

        .footer-logo-wrap {
          width: 53px;
          height: 53px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 152, 0, 0.2);
          border-radius: 14px;
          display: flex;
          alignItems: "center";
          justifyContent: "center";
          transition: all 0.3s ease;
        }
        .footer-logo-wrap:hover {
          transform: rotate(5deg) scale(1.05);
          border-color: #ff9800;
          background: rgba(255, 152, 0, 0.05);
        }

        .luxury-input-footer { 
          flex: 1; padding: 22px 25px; background: rgba(0,0,0,0.4); 
          border: 1px solid rgba(255,255,255,0.1); border-radius: 18px; 
          color: #fff; outline: none; transition: all 0.3s ease;
          font-size: 1rem;
        }
        .luxury-input-footer:focus { border-color: #ff9800; background: rgba(255,152,0,0.02); }

        .subscribe-btn-glow { 
          padding: 0 40px; background: linear-gradient(135deg, #ff9800, #ff5722); 
          border: none; border-radius: 18px; color: #fff; font-weight: 800; 
          cursor: pointer; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
          font-size: 1rem;
        }
        .subscribe-btn-glow.success { background: #22c55e; }
        .subscribe-btn-glow:hover:not(.success) { 
          transform: translateY(-4px); 
          box-shadow: 0 12px 30px rgba(255, 87, 34, 0.4); 
        }

        .social-pill-chip { 
          width: 48px; height: 48px; background: rgba(255,255,255,0.03); 
          border: 1px solid rgba(255,255,255,0.08); border-radius: 15px; 
          display: flex; align-items: center; justify-content: center; 
          cursor: pointer; transition: all 0.4s ease; 
          text-decoration: none;
        }
        .social-pill-chip:hover { 
          transform: translateY(-6px) scale(1.1); 
          border-color: #ff9800; color: #ff9800; 
          background: rgba(255, 152, 0, 0.05);
        }

        .footer-cat-title { 
          color: #fff; font-size: 0.85rem; font-weight: 800; 
          text-transform: uppercase; letter-spacing: 2.5px; 
          margin-bottom: 30px; opacity: 0.7; 
        }
        .premium-footer-link { color: rgba(255,255,255,0.4); text-decoration: none; transition: 0.3s; font-size: 1rem; display: inline-block; }
        .premium-footer-link:hover { color: #ff9800; padding-left: 10px; }

        .legal-link { cursor: pointer; transition: color 0.3s; }
        .legal-link:hover { color: #fff; }

        .spinner { 
          width: 22px; height: 22px; border: 3px solid rgba(255,255,255,0.3); 
          border-top-color: #fff; border-radius: 50%; 
          animation: spin 0.8s linear infinite; 
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        
        .animate-up { animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes fadeInUp { 
          from { opacity: 0; transform: translateY(40px); } 
          to { opacity: 1; transform: translateY(0); } 
        }

        @media (max-width: 1024px) {
          .newsletter-container { grid-template-columns: 1fr; gap: 35px; padding: 50px 40px; }
          .footer-grid-system { grid-template-columns: 1fr 1fr; gap: 50px; }
        }

        @media (max-width: 768px) {
          footer { padding: 80px 5% 40px; }
          .newsletter-container { padding: 40px 30px; border-radius: 24px; }
          .newsletter-container h3 { font-size: 1.8rem; }
          .footer-grid-system { gap: 40px; }
        }

        @media (max-width: 640px) {
          .footer-grid-system { grid-template-columns: 1fr; gap: 40px; }
          .newsletter-container form { flex-direction: column; }
          .luxury-input-footer { width: 100%; }
          .subscribe-btn-glow { width: 100%; padding: 18px 0; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
}

