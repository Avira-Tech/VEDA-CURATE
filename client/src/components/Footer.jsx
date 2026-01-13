// import { useState, useEffect } from "react";

// export default function Footer() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [email, setEmail] = useState("");
//   const [subscribeStatus, setSubscribeStatus] = useState("idle"); // idle, loading, success, error

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const footer = document.querySelector("footer");
//     if (footer) observer.observe(footer);

//     return () => observer.disconnect();
//   }, []);

//   const handleSubscribe = async (e) => {
//     e.preventDefault();
//     if (!email.trim()) return;

//     setSubscribeStatus("loading");
//     await new Promise((resolve) => setTimeout(resolve, 1500));
//     setSubscribeStatus("success");
//     setEmail("");

//     setTimeout(() => setSubscribeStatus("idle"), 3000);
//   };

//   const currentYear = new Date().getFullYear();

//   const footerLinks = {
//     services: [
//       { name: "Web Development", href: "#services" },
//       { name: "UI/UX Design", href: "#services" },
//       { name: "Branding", href: "#services" },
//       { name: "Maintenance", href: "#services" },
//     ],
//     company: [
//       { name: "About Us", href: "#about" },
//       { name: "Our Work", href: "#projects" },
//       { name: "Testimonials", href: "#clients" },
//       { name: "Careers", href: "#" },
//     ],
//     resources: [
//       { name: "Blog", href: "#" },
//       { name: "Case Studies", href: "#projects" },
//       { name: "FAQ", href: "#" },
//       { name: "Support", href: "#contact" },
//     ],
//   };

//   const socialLinks = [
//     { name: "Twitter", icon: "𝕏", href: "#" },
//     { name: "LinkedIn", icon: "in", href: "#" },
//     { name: "Instagram", icon: "📷", href: "#" },
//     { name: "GitHub", icon: "⌘", href: "#" },
//   ];

//   return (
//     <footer
//       style={{
//         background: "#0a0a0a",
//         borderTop: "1px solid rgba(255, 152, 0, 0.1)",
//         padding: "80px 10% 40px",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background Glow */}
//       <div
//         style={{
//           position: "absolute",
//           top: "-200px",
//           right: "-100px",
//           width: "400px",
//           height: "400px",
//           background: "radial-gradient(circle, rgba(255, 152, 0, 0.08) 0%, transparent 70%)",
//           borderRadius: "50%",
//           pointerEvents: "none",
//         }}
//       />

//       <div
//         style={{
//           maxWidth: "1400px",
//           margin: "0 auto",
//           position: "relative",
//           zIndex: 1,
//         }}
//       >
//         {/* Newsletter Section */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: "60px",
//             padding: "50px",
//             background: "linear-gradient(135deg, rgba(255, 152, 0, 0.08), rgba(255, 87, 34, 0.03))",
//             border: "1px solid rgba(255, 152, 0, 0.15)",
//             borderRadius: "24px",
//             marginBottom: "60px",
//             opacity: isVisible ? 1 : 0,
//             transform: isVisible ? "translateY(0)" : "translateY(30px)",
//             transition: "all 0.8s ease",
//           }}
//           className="newsletter-section"
//         >
//           <div>
//             <h3
//               style={{
//                 fontSize: "1.8rem",
//                 fontWeight: "700",
//                 color: "white",
//                 marginBottom: "10px",
//               }}
//             >
//               Stay in the <span style={{ background: "linear-gradient(135deg, #ff9800, #ff5722)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Loop</span>
//             </h3>
//             <p
//               style={{
//                 color: "#888",
//                 fontSize: "1rem",
//                 lineHeight: "1.6",
//               }}
//             >
//               Subscribe to our newsletter for the latest updates, design tips, and industry insights.
//             </p>
//           </div>

//           <div>
//             <form onSubmit={handleSubscribe} style={{ display: "flex", gap: "12px" }}>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 disabled={subscribeStatus === "loading" || subscribeStatus === "success"}
//                 style={{
//                   flex: 1,
//                   padding: "16px 20px",
//                   background: "#1a1a1a",
//                   border: "1px solid #333",
//                   borderRadius: "10px",
//                   color: "white",
//                   fontSize: "1rem",
//                   outline: "none",
//                   transition: "all 0.3s ease",
//                 }}
//               />
//               <button
//                 type="submit"
//                 disabled={subscribeStatus === "loading" || subscribeStatus === "success"}
//                 style={{
//                   padding: "16px 30px",
//                   background: subscribeStatus === "success"
//                     ? "linear-gradient(135deg, #22c55e, #16a34a)"
//                     : "linear-gradient(135deg, #ff9800, #ff5722)",
//                   border: "none",
//                   borderRadius: "10px",
//                   color: "white",
//                   fontWeight: "600",
//                   fontSize: "1rem",
//                   cursor: subscribeStatus === "loading" || subscribeStatus === "success" ? "not-allowed" : "pointer",
//                   transition: "all 0.3s ease",
//                   minWidth: "140px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                 }}
//               >
//                 {subscribeStatus === "loading" ? (
//                   <span
//                     style={{
//                       width: "20px",
//                       height: "20px",
//                       border: "2px solid rgba(255,255,255,0.3)",
//                       borderTopColor: "white",
//                       borderRadius: "50%",
//                       animation: "spin 1s linear infinite",
//                     }}
//                   />
//                 ) : subscribeStatus === "success" ? (
//                   "✓ Subscribed"
//                 ) : (
//                   "Subscribe"
//                 )}
//               </button>
//             </form>
//             {subscribeStatus === "success" && (
//               <p
//                 style={{
//                   color: "#22c55e",
//                   fontSize: "0.9rem",
//                   marginTop: "10px",
//                 }}
//               >
//                 Thanks for subscribing! Check your inbox for a welcome gift.
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Main Footer Content */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
//             gap: "60px",
//             paddingBottom: "40px",
//             borderBottom: "1px solid rgba(255, 152, 0, 0.1)",
//             marginBottom: "40px",
//             opacity: isVisible ? 1 : 0,
//             transform: isVisible ? "translateY(0)" : "translateY(20px)",
//             transition: "all 0.8s ease 0.2s",
//           }}
//         >
//           {/* Brand Column */}
//           <div>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "12px",
//                 marginBottom: "20px",
//               }}
//             >
//               <div
//                 style={{
//                   width: "40px",
//                   height: "40px",
//                   background: "linear-gradient(135deg, #ff9800, #ff5722)",
//                   borderRadius: "10px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "1.3rem",
//                   fontWeight: "bold",
//                   color: "white",
//                 }}
//               >
//                 V
//               </div>
//               <span
//                 style={{
//                   fontSize: "1.5rem",
//                   fontWeight: "700",
//                   background: "linear-gradient(135deg, #ff9800, #ff5722)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   backgroundClip: "text",
//                 }}
//               >
//                 Vedacurate
//               </span>
//             </div>
//             <p
//               style={{
//                 color: "#888",
//                 fontSize: "0.95rem",
//                 lineHeight: "1.7",
//                 marginBottom: "25px",
//               }}
//             >
//               Crafting digital experiences that transform brands and drive business growth.
//             </p>

//             {/* Social Links */}
//             <div style={{ display: "flex", gap: "12px" }}>
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   style={{
//                     width: "44px",
//                     height: "44px",
//                     background: "rgba(255, 152, 0, 0.08)",
//                     border: "1px solid rgba(255, 152, 0, 0.15)",
//                     borderRadius: "10px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     color: "#ff9800",
//                     fontSize: "1.1rem",
//                     fontWeight: "600",
//                     transition: "all 0.3s ease",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.background = "linear-gradient(135deg, #ff9800, #ff5722)";
//                     e.currentTarget.style.borderColor = "transparent";
//                     e.currentTarget.style.color = "white";
//                     e.currentTarget.style.transform = "translateY(-3px)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.background = "rgba(255, 152, 0, 0.08)";
//                     e.currentTarget.style.borderColor = "rgba(255, 152, 0, 0.15)";
//                     e.currentTarget.style.color = "#ff9800";
//                     e.currentTarget.style.transform = "translateY(0)";
//                   }}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Services Links */}
//           <div>
//             <h4
//               style={{
//                 color: "white",
//                 fontSize: "1.1rem",
//                 fontWeight: "600",
//                 marginBottom: "25px",
//               }}
//             >
//               Services
//             </h4>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
//               {footerLinks.services.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.href}
//                     style={{
//                       color: "#888",
//                       fontSize: "0.95rem",
//                       transition: "color 0.3s ease",
//                     }}
//                     onMouseEnter={(e) => {
//                       e.target.style.color = "#ff9800";
//                       e.target.style.paddingLeft = "5px";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.target.style.color = "#888";
//                       e.target.style.paddingLeft = "0";
//                     }}
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Company Links */}
//           <div>
//             <h4
//               style={{
//                 color: "white",
//                 fontSize: "1.1rem",
//                 fontWeight: "600",
//                 marginBottom: "25px",
//               }}
//             >
//               Company
//             </h4>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
//               {footerLinks.company.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.href}
//                     style={{
//                       color: "#888",
//                       fontSize: "0.95rem",
//                       transition: "color 0.3s ease",
//                     }}
//                     onMouseEnter={(e) => {
//                       e.target.style.color = "#ff9800";
//                       e.target.style.paddingLeft = "5px";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.target.style.color = "#888";
//                       e.target.style.paddingLeft = "0";
//                     }}
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Resources Links */}
//           <div>
//             <h4
//               style={{
//                 color: "white",
//                 fontSize: "1.1rem",
//                 fontWeight: "600",
//                 marginBottom: "25px",
//               }}
//             >
//               Resources
//             </h4>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
//               {footerLinks.resources.map((link, index) => (
//                 <li key={index}>
//                   <a
//                     href={link.href}
//                     style={{
//                       color: "#888",
//                       fontSize: "0.95rem",
//                       transition: "color 0.3s ease",
//                     }}
//                     onMouseEnter={(e) => {
//                       e.target.style.color = "#ff9800";
//                       e.target.style.paddingLeft = "5px";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.target.style.color = "#888";
//                       e.target.style.paddingLeft = "0";
//                     }}
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             flexWrap: "wrap",
//             gap: "20px",
//             opacity: isVisible ? 1 : 0,
//             transform: isVisible ? "translateY(0)" : "translateY(20px)",
//             transition: "all 0.8s ease 0.4s",
//           }}
//         >
//           <p
//             style={{
//               color: "#666",
//               fontSize: "0.9rem",
//             }}
//           >
//             © {currentYear} Vedacurate. All rights reserved.
//           </p>

//           <div
//             style={{
//               display: "flex",
//               gap: "30px",
//             }}
//           >
//             {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 style={{
//                   color: "#666",
//                   fontSize: "0.9rem",
//                   transition: "color 0.3s ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.color = "#ff9800";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.color = "#666";
//                 }}
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Animations */}
//       <style>{`
//         @keyframes spin {
//           to { transform: rotate(360deg); }
//         }
//         @media (max-width: 1024px) {
//           .newsletter-section {
//             grid-template-columns: 1fr !important;
//             gap: 30px !important;
//           }
//           footer > div > div:nth-child(2) {
//             grid-template-columns: 1fr 1fr !important;
//             gap: 40px !important;
//           }
//         }
//         @media (max-width: 640px) {
//           footer > div > div:nth-child(2) {
//             grid-template-columns: 1fr !important;
//           }
//           footer > div > div:last-child {
//             flex-direction: column !important;
//             text-align: center !important;
//           }
//           footer > div > div:last-child > div:nth-child(2) {
//             flex-wrap: wrap !important;
//             justify-content: center !important;
//           }
//         }
//       `}</style>
//     </footer>
//   );
// }

import { useState, useEffect, useRef } from "react";

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
    Services: ["Web Development", "UI/UX Design", "Branding", "Maintenance"],
    Company: ["About Us", "Our Work", "Testimonials", "Careers"],
    Resources: ["Blog", "Case Studies", "FAQ", "Support"]
  };

  return (
    <footer
      ref={footerRef}
      style={{
        background: "#080808",
        padding: "100px 8% 40px",
        position: "relative",
        overflow: "hidden",
        color: "#fff",
        borderTop: "1px solid rgba(255, 152, 0, 0.1)"
      }}
    >
      {/* Background Glows */}
      <div style={{
        position: "absolute",
        bottom: "-10%",
        left: "20%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(255, 152, 0, 0.04) 0%, transparent 70%)",
        filter: "blur(80px)",
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
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "40px",
          marginBottom: "100px",
          overflow: "hidden",
          position: "relative"
        }}>
          <div className="shimmer-sweep" />
          <div>
            <h3 style={{ fontSize: "2.2rem", fontWeight: "900", marginBottom: "15px" }}>
              Stay in the <span className="magic-text">Loop</span>
            </h3>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: "1.6", maxWidth: "400px" }}>
              Subscribe for exclusive design insights, tech updates, and digital strategy.
            </p>
          </div>
          
          <form onSubmit={handleSubscribe} style={{ display: "flex", gap: "15px", position: "relative" }}>
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="luxury-input-footer"
              disabled={subscribeStatus === "success"}
            />
            <button 
              type="submit" 
              className={`subscribe-btn-glow ${subscribeStatus === "success" ? "success" : ""}`}
              disabled={subscribeStatus === "loading" || subscribeStatus === "success"}
            >
              {subscribeStatus === "loading" ? <div className="spinner" /> : 
               subscribeStatus === "success" ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>

        {/* Links Grid */}
        <div className="footer-grid-system" style={{
          display: "grid",
          gridTemplateColumns: "1.5fr repeat(3, 1fr)",
          gap: "60px",
          paddingBottom: "60px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          marginBottom: "40px"
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "25px" }}>
              <div className="footer-logo-box">V</div>
              <h2 style={{ fontSize: "1.8rem", fontWeight: "900", letterSpacing: "-1px" }}>Vedacurate</h2>
            </div>
            <p style={{ color: "rgba(255,255,255,0.4)", lineHeight: "1.8", marginBottom: "35px", maxWidth: "320px" }}>
              Strategic design and cutting-edge engineering for digital market leaders.
            </p>
            <div style={{ display: "flex", gap: "15px" }}>
              {['𝕏', 'in', '📸', '⌘'].map((icon, i) => (
                <div key={i} className="social-pill-chip">{icon}</div>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="footer-cat-title">{category}</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {links.map(link => (
                  <li key={link} style={{ marginBottom: "15px" }}>
                    <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="premium-footer-link">{link}</a>
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
          gap: "20px",
          color: "rgba(255,255,255,0.3)",
          fontSize: "0.9rem"
        }}>
          <p>© 2026 Vedacurate. All rights reserved.</p>
          <div style={{ display: "flex", gap: "30px" }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(item => (
              <span key={item} style={{ cursor: 'pointer' }}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .magic-text { background: linear-gradient(90deg, #ff9800, #ff5722); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .shimmer-sweep { position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,152,0,0.05), transparent); transform: skewX(-20deg); animation: shimmerFlow 6s infinite; }
        @keyframes shimmerFlow { 100% { left: 200%; } }
        .luxury-input-footer { flex: 1; padding: 20px 25px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; color: #fff; outline: none; }
        .subscribe-btn-glow { padding: 0 35px; background: linear-gradient(135deg, #ff9800, #ff5722); border: none; border-radius: 16px; color: #fff; font-weight: 800; cursor: pointer; transition: 0.4s; }
        .subscribe-btn-glow.success { background: #22c55e; }
        .subscribe-btn-glow:hover:not(.success) { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(255, 87, 34, 0.5); }
        .footer-logo-box { width: 44px; height: 44px; background: #ff9800; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 900; font-size: 1.5rem; }
        .social-pill-chip { width: 46px; height: 46px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.4s; }
        .social-pill-chip:hover { transform: translateY(-5px); border-color: #ff9800; color: #ff9800; }
        .footer-cat-title { color: #fff; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 25px; opacity: 0.6; }
        .premium-footer-link { color: rgba(255,255,255,0.5); text-decoration: none; transition: 0.3s; }
        .premium-footer-link:hover { color: #ff9800; padding-left: 8px; }
        .spinner { width: 20px; height: 20px; border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff; border-radius: 50%; animation: spin 0.8s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .animate-up { animation: fadeInUp 0.8s forwards; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 1024px) {
          .newsletter-container { grid-template-columns: 1fr; gap: 30px; padding: 40px; }
          .footer-grid-system { grid-template-columns: 1fr 1fr; gap: 40px; }
        }

        @media (max-width: 768px) {
          footer { padding: 60px 5% 30px; }
          .newsletter-container { padding: 30px; }
          .newsletter-container h3 { font-size: 1.5rem; }
        }

        @media (max-width: 640px) {
          .footer-grid-system { grid-template-columns: 1fr; gap: 30px; }
          .newsletter-container form { flex-direction: column; }
          .luxury-input-footer { width: 100%; }
          .subscribe-btn-glow { width: 100%; padding: 15px 0; }
        }
      `}</style>
    </footer>
  );
}