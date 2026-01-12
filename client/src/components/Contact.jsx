import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const sectionRef = useRef(null);

  const projectTypes = ["Web Development", "Mobile App", "UI/UX Design", "Branding", "SaaS Product", "Other"];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulated Secure API Call
    await new Promise(r => setTimeout(r, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => { 
      setFormData({ name: "", email: "", projectType: "", message: "" }); 
      setIsSubmitted(false); 
    }, 4000);
  };

  const InputWrapper = ({ name, label, children }) => (
    <div className="input-field-container">
      {children}
      <label className={`floating-label ${formData[name] || focusedField === name ? 'active' : ''}`}>
        {label}
      </label>
      <div className={`input-focus-glow ${focusedField === name ? 'active' : ''}`} />
    </div>
  );

  return (
    <section id="contact" ref={sectionRef} style={{
      minHeight: "100vh",
      padding: "100px 8%",
      background: "transparent",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden"
    }}>
      
      {/* Decorative Blur Orbs */}
      <div className="bg-orb-contact" />

      <div className="contact-grid">
        
        {/* Left Side: Contact Details */}
        <div className={`contact-info-block ${isVisible ? 'animate-in' : ''}`}>
          <div className="contact-badge">Available for Work</div>
          <h2 className="contact-heading">
            Let’s Build <br />
            <span className="magic-text">Something Amazing</span>
          </h2>
          <p className="contact-p">
            Ready to transform your ideas into digital reality? Our team is waiting to 
            channel the magic into your next project.
          </p>

          <div className="social-proof-cards">
            {[
              { i: "📧", l: "Direct Email", v: "hello@vedacurate.com" },
              { i: "📱", l: "Call Us", v: "+1 (555) 012-3456" },
              { i: "📍", l: "HQ Location", v: "San Francisco, CA" }
            ].map((item, i) => (
              <div key={i} className="magnetic-card">
                <div className="card-icon-box">{item.i}</div>
                <div className="card-text">
                  <span className="card-label">{item.l}</span>
                  <span className="card-value">{item.v}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Glassmorphism Form */}
        <div className={`form-container-glass ${isVisible ? 'animate-in-delayed' : ''}`}>
          {isSubmitted && (
            <div className="success-screen">
              <div className="success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>We'll get back to you within 24 hours.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ opacity: isSubmitted ? 0 : 1 }}>
            <div className="form-header">
               <h3>Send a Message</h3>
               <p>Field your inquiry below.</p>
            </div>

            <InputWrapper name="name" label="Your Name">
              <input 
                className="glass-input"
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                name="name" value={formData.name} onChange={handleChange}
                required
              />
            </InputWrapper>

            <InputWrapper name="email" label="Email Address">
              <input 
                className="glass-input"
                type="email"
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                name="email" value={formData.email} onChange={handleChange}
                required
              />
            </InputWrapper>

            <InputWrapper name="projectType" label="Project Type">
              <select 
                className="glass-input glass-select"
                onFocus={() => setFocusedField('projectType')}
                onBlur={() => setFocusedField(null)}
                name="projectType" value={formData.projectType} onChange={handleChange}
                required
              >
                <option value=""></option>
                {projectTypes.map(t => <option key={t} value={t} style={{background: '#111'}}>{t}</option>)}
              </select>
            </InputWrapper>

            <InputWrapper name="message" label="Your Project Vision">
              <textarea 
                className="glass-input glass-textarea"
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                name="message" value={formData.message} onChange={handleChange}
                rows="4" required
              />
            </InputWrapper>

            <button type="submit" className="magic-submit-btn" disabled={isSubmitting}>
              <div className="shimmer" />
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-grid { 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 100px; 
          width: 100%; 
          position: relative; 
          z-index: 5;
        }

        .magic-text {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 152, 0, 0.4);
          background: linear-gradient(90deg, #ff9800, #ff5722, #ffcc33, #ff9800);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          animation: liquidFlow 4s linear infinite;
        }

        @keyframes liquidFlow {
          to { background-position: 200% center; }
        }

        .contact-badge {
          display: inline-block; padding: 6px 18px; background: rgba(255,152,0,0.1); 
          border: 1px solid rgba(255,152,0,0.3); border-radius: 50px; color: #ff9800;
          font-weight: 700; text-transform: uppercase; letter-spacing: 1px; font-size: 0.7rem; margin-bottom: 20px;
        }

        .contact-heading { font-size: clamp(2.5rem, 5vw, 4.2rem); font-weight: 900; color: #fff; line-height: 1.1; margin-bottom: 25px; }
        .contact-p { color: rgba(255,255,255,0.5); font-size: 1.15rem; line-height: 1.8; margin-bottom: 50px; max-width: 500px; }

        .social-proof-cards { display: flex; flex-direction: column; gap: 20px; }
        .magnetic-card {
          display: flex; align-items: center; gap: 20px; padding: 25px;
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px; transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .magnetic-card:hover { transform: translateX(15px); border-color: #ff9800; background: rgba(255,152,0,0.05); }
        .card-icon-box { font-size: 1.5rem; width: 50px; height: 50px; background: rgba(255,152,0,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; }
        .card-label { display: block; font-size: 0.7rem; color: rgba(255,255,255,0.3); text-transform: uppercase; letter-spacing: 1px; }
        .card-value { font-weight: 700; color: #fff; font-size: 1.1rem; }

        /* Glass Form */
        .form-container-glass {
          background: rgba(255, 255, 255, 0.01); backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 40px;
          padding: 60px; position: relative; overflow: hidden;
        }
        .form-header h3 { color: #fff; font-size: 1.8rem; font-weight: 800; margin-bottom: 8px; }
        .form-header p { color: rgba(255,255,255,0.4); margin-bottom: 40px; font-size: 0.9rem; }

        .input-field-container { position: relative; margin-bottom: 30px; }
        .glass-input {
          width: 100%; background: transparent; border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px; padding: 20px; color: #fff; font-size: 1rem; outline: none;
          transition: 0.3s; position: relative; z-index: 2;
        }
        .glass-textarea { resize: none; }
        .glass-select { cursor: pointer; appearance: none; }

        .floating-label {
          position: absolute; left: 20px; top: 20px; color: rgba(255,255,255,0.3);
          transition: 0.3s; pointer-events: none; z-index: 1;
        }
        .floating-label.active { top: -10px; left: 15px; font-size: 0.75rem; color: #ff9800; background: #080808; padding: 0 8px; font-weight: 700; z-index: 3; }

        .input-focus-glow {
          position: absolute; inset: 0; border: 1px solid #ff9800; border-radius: 16px;
          opacity: 0; transition: 0.3s; pointer-events: none;
        }
        .input-focus-glow.active { opacity: 1; box-shadow: 0 0 20px rgba(255,152,0,0.15); }

        .magic-submit-btn {
          width: 100%; padding: 20px; border-radius: 16px; border: none;
          background: linear-gradient(135deg, #ff9800, #ff5722);
          color: #fff; font-weight: 800; font-size: 1.1rem; cursor: pointer;
          position: relative; overflow: hidden; transition: 0.4s;
          box-shadow: 0 10px 30px rgba(255, 87, 34, 0.3);
        }
        .magic-submit-btn:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(255, 87, 34, 0.5); }
        .shimmer {
          position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-20deg); animation: shimmer 3s infinite;
        }
        @keyframes shimmer { 100% { left: 200%; } }

        .success-screen {
          position: absolute; inset: 0; display: flex; flex-direction: column;
          align-items: center; justify-content: center; text-align: center;
          background: #080808; z-index: 10;
        }
        .success-icon { width: 80px; height: 80px; background: #22c55e; color: #fff; border-radius: 50%; font-size: 2.5rem; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; box-shadow: 0 0 30px rgba(34, 197, 94, 0.4); }

        .animate-in { animation: slideRight 1s forwards; }
        .animate-in-delayed { animation: slideLeft 1s forwards; }
        @keyframes slideRight { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideLeft { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }

        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr; gap: 60px; }
          .form-container-glass { padding: 40px; }
        }
      `}</style>
    </section>
  );
}