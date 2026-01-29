import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
      { name: "Web Development", href: "/services/web-development", isRoute: true },
      { name: "Branding", href: "/services/branding", isRoute: true },
      { name: "AR/VR Development", href: "/services/ar-vr-development", isRoute: true },
      { name: "Social Media Design", href: "/services/social-media-design", isRoute: true },
      { name: "All Services", href: "#services", isRoute: false }
    ],
    Company: [
      { name: "About Us", href: "/about", isRoute: true },
      { name: "Our Work", href: "#projects", isRoute: false },
      { name: "Testimonials", href: "#clients", isRoute: false },
      { name: "Careers", href: "#", isRoute: false },
    ],
    Resources: [
      { name: "Blog", href: "/blog", isRoute: true },
      { name: "FAQ", href: "/faq", isRoute: true },
      { name: "Support", href: "/support", isRoute: true },
      { name: "Contact Details", href: "/contact-details", isRoute: true },
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
      className="relative overflow-hidden pt-[100px] pb-10 px-[8%] border-t border-brand-orange-500/10"
      style={{ background: "#080808", color: "#fff" }}
    >
      {/* Background Decorative Glows */}
      <div 
        className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 152, 0, 0.05) 0%, transparent 70%)",
          filter: "blur(100px)"
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* Newsletter Section */}
        <div 
          className={`mb-[100px] rounded-[32px] p-[60px] overflow-hidden relative transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            alignItems: "center",
            gap: "40px"
          }}
        >
          {/* Shimmer sweep effect */}
          <div 
            className="absolute top-0 left-[-100%] w-1/2 h-full pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,152,0,0.06), transparent)",
              transform: "skewX(-25deg)",
              animation: "shimmerFlow 7s infinite"
            }}
          />
          
          <div className="relative z-10">
            <h3 className="text-[2.4rem] font-black mb-4 tracking-tight" style={{ letterSpacing: "-1px" }}>
              Stay in the <span className="text-transparent bg-gradient-to-r from-brand-orange-400 to-brand-orange-600 bg-clip-text">Loop</span>
            </h3>
            <p className="text-white/50 leading-relaxed max-w-[420px]">
              Join our community for exclusive design insights, technical updates, and digital growth strategies.
            </p>
          </div>
          
          <form onSubmit={handleSubscribe} className="relative z-10 flex gap-[15px]" aria-label="Newsletter subscription">
            <input 
              type="email" 
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-5 rounded-[18px] bg-black/40 border border-white/10 text-white outline-none transition-all duration-300 focus:border-brand-orange-400 focus:bg-brand-orange-400/2"
              required
              disabled={subscribeStatus === "success"}
              aria-label="Email address"
            />
            <button 
              type="submit" 
              className={`px-10 py-5 rounded-[18px] border-0 font-bold cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${
                subscribeStatus === "success" 
                  ? "bg-green-500 text-white" 
                  : "bg-gradient-to-r from-brand-orange-400 to-brand-orange-600 text-white hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,87,34,0.4)]"
              }`}
              disabled={subscribeStatus === "loading" || subscribeStatus === "success"}
              aria-label={subscribeStatus === "success" ? "Subscribed" : "Subscribe to newsletter"}
            >
              {subscribeStatus === "loading" ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : subscribeStatus === "success" ? (
                "Subscribed!"
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        </div>

        {/* Links Grid */}
        <div 
          className="grid grid-cols-[1.6fr_repeat(3,1fr)] gap-[60px] pb-[60px] border-b border-white/5"
          style={{ marginBottom: "40px" }}
        >
          <div>
            {/* BRAND LOGO AREA */}
            <div 
              className="flex items-center gap-4 mb-8 cursor-pointer"
              onClick={scrollToTop}
              role="navigation"
              aria-label="Back to top"
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 border border-brand-orange-400/20 bg-white/3"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(255, 152, 0, 0.5))"
                }}
              >
                <img 
                  src={logo} 
                  alt="Vedacurate Logo" 
                  className="w-auto h-auto"
                />
              </div>
              <h2 className="text-[2rem] font-black tracking-tight bg-gradient-to-r from-brand-orange-400 to-brand-orange-600 bg-clip-text text-transparent">
                Vedacurate
              </h2>
            </div>

            <p className="text-white/40 leading-relaxed mb-9 max-w-[340px] text-[1.05rem]">
              Strategic design and cutting-edge engineering for market leaders who demand digital excellence. Our freelance team delivers premium website development, branding, and AR/VR experiences.
            </p>
            
            <div className="flex gap-4" role="list" aria-label="Social media links">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-12 h-12 rounded-xl bg-white/3 border border-white/8 flex items-center justify-center no-underline transition-all duration-400 hover:-translate-y-1.5 hover:scale-110 hover:border-brand-orange-400 hover:text-brand-orange-400 hover:bg-brand-orange-400/5"
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
              <h4 className="text-[0.85rem] font-bold text-white uppercase tracking-[2.5px] mb-8 opacity-70">{category}</h4>
              <ul className="list-none p-0" role="list">
                {links.map(link => (
                  <li key={link.name} style={{ marginBottom: "16px" }} role="listitem">
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-white/40 no-underline transition-all duration-300 inline-block hover:text-brand-orange-400 hover:pl-2.5 text-[1rem]"
                        aria-label={link.name}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={link.href.startsWith('#') ? (e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" }); } : undefined}
                        className="text-white/40 no-underline transition-all duration-300 inline-block hover:text-brand-orange-400 hover:pl-2.5 text-[1rem]"
                        aria-label={link.name}
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div 
          className="flex justify-between items-center flex-wrap gap-6 text-[0.95rem]"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          <p>© 2026 <span className="text-brand-orange-400 font-semibold">Vedacurate</span>. All rights reserved.</p>
          <div className="flex gap-9">
            <Link to="/privacy-policy" className="cursor-pointer transition-colors duration-300 hover:text-white">Privacy Policy</Link>
            <Link to="/terms-of-service" className="cursor-pointer transition-colors duration-300 hover:text-white">Terms of Service</Link>
            <Link to="/cookie-policy" className="cursor-pointer transition-colors duration-300 hover:text-white">Cookie Policy</Link>
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
        @keyframes shimmerFlow { 
          100% { left: 250%; } 
        }

        @media (max-width: 1024px) {
          .rounded-\\[32px\\] {
            grid-template-columns: 1fr !important;
            gap: 35px;
            padding: 50px 40px !important;
          }
          .grid-cols-\\[1\\.6fr_repeat\\(3\\,1fr\\)\\] {
            grid-template-columns: 1fr 1fr !important;
            gap: 50px !important;
          }
        }

        @media (max-width: 768px) {
          .relative.overflow-hidden {
            padding: 80px 5% 40px !important;
          }
          .rounded-\\[32px\\] {
            padding: 40px 30px !important;
            border-radius: 24px !important;
          }
          .grid-cols-\\[1\\.6fr_repeat\\(3\\,1fr\\)\\] {
            gap: 40px !important;
          }
        }

        @media (max-width: 640px) {
          .grid-cols-\\[1\\.6fr_repeat\\(3\\,1fr\\)\\] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .rounded-\\[32px\\] form {
            flex-direction: column !important;
          }
          .rounded-\\[32px\\] input {
            width: 100% !important;
          }
          .rounded-\\[32px\\] button {
            width: 100% !important;
            padding: 18px 0 !important;
          }
          .flex.justify-between {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}

