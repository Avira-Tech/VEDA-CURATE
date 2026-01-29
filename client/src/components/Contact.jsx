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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setFormData({ name: "", email: "", projectType: "", message: "" });
          setIsSubmitted(false);
        }, 4000);
      } else {
        alert(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const InputWrapper = ({ name, label, children }) => (
    <div className="relative mb-8">
      {children}
      <label className={`absolute left-5 top-5 text-white/30 transition-all duration-300 pointer-events-none z-10 ${
        formData[name] || focusedField === name 
          ? "-top-2.5 left-3.5 text-xs text-brand-orange-400 font-bold bg-[#080808] px-2 py-0.5 z-20" 
          : ""
      }`}>
        {label}
      </label>
      <div className={`absolute inset-0 rounded-xl border border-brand-orange-400 opacity-0 transition-opacity duration-300 pointer-events-none ${
        focusedField === name ? "opacity-100 shadow-[0_0_20px_rgba(255,152,0,0.15)]" : ""
      }`} />
    </div>
  );

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="min-h-screen flex items-center py-[100px] px-[8%] relative overflow-hidden lg:py-20 lg:px-5"
    >
      {/* Decorative Blur Orb */}
      <div 
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, rgba(255, 152, 0, 0.03) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          filter: "blur(100px)"
        }}
      />

      <div className="grid lg:grid-cols-2 gap-[100px] w-full relative z-10 max-w-[1400px]mx-auto lg:grid-cols-1 lg:gap-15">
        
        {/* Left Side: Contact Details */}
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}>
          <div className="inline-block px-5 py-2 rounded-full bg-brand-orange-400/10 border border-brand-orange-400/30 text-brand-orange-400 text-xs font-bold uppercase tracking-[1px] mb-5">
            Available for Work
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.2rem)] font-black text-white leading-tight mb-6">
            Let's Build <br />
            <span className="text-transparent bg-gradient-to-r from-brand-orange-400 via-brand-orange-600 to-brand-orange-400 bg-[length:200%_auto] bg-clip-text animate-gradient-shift" style={{ WebkitTextStroke: "1px rgba(255, 152, 0, 0.4)" }}>
              Something Amazing
            </span>
          </h2>
          <p className="text-[1.15rem] text-white/50 leading-relaxed mb-12 max-w-[500px]">
            Ready to transform your ideas into digital reality? Our team is waiting to 
            channel the magic into your next project.
          </p>

          <div className="flex flex-col gap-5">
            {[
              { i: "📧", l: "Direct Email", v: "vedacurate@gmail.com" },
              { i: "📱", l: "Call Us", v: "+91 85399 06485" },
              { i: "📍", l: "HQ Location", v: "Pune, IN" }
            ].map((item, i) => (
              <div 
                key={i} 
                className="flex items-center gap-5 p-6 rounded-2xl bg-white/2 border border-white/8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-4 hover:border-brand-orange-400/50 hover:bg-brand-orange-400/5"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange-400/10 flex items-center justify-center text-xl">
                  {item.i}
                </div>
                <div>
                  <span className="block text-[0.7rem] text-white/30 uppercase tracking-[1px]">{item.l}</span>
                  <span className="text-lg font-bold text-white">{item.v}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Glassmorphism Form */}
        <div className={`relative rounded-[40px] p-12 overflow-hidden transition-all duration-1000 ease-out delay-200 lg:p-10 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
        }`}
          style={{
            background: "rgba(255, 255, 255, 0.01)",
            backdropFilter: "blur(30px)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}
        >
          {/* Success Screen */}
          {isSubmitted && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-[#080808] z-10">
              <div className="w-20 h-20 rounded-full bg-green-500 text-white text-[2.5rem] flex items-center justify-center mb-5 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-white/60">We'll get back to you within 24 hours.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className={isSubmitted ? "opacity-0" : ""}>
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-white/40 text-sm">Field your inquiry below.</p>
            </div>

            <InputWrapper name="name" label="Your Name">
              <input 
                className="w-full bg-transparent border border-white/10 rounded-xl py-5 px-5 text-white text-base outline-none transition-all duration-300"
                style={{ position: "relative", zIndex: 2 }}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                required
              />
            </InputWrapper>

            <InputWrapper name="email" label="Email Address">
              <input 
                className="w-full bg-transparent border border-white/10 rounded-xl py-5 px-5 text-white text-base outline-none transition-all duration-300"
                style={{ position: "relative", zIndex: 2 }}
                type="email"
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                required
              />
            </InputWrapper>

            <InputWrapper name="projectType" label="Project Type">
              <select 
                className="w-full bg-transparent border border-white/10 rounded-xl py-5 px-5 text-white text-base outline-none transition-all duration-300 cursor-pointer appearance-none"
                style={{ position: "relative", zIndex: 2 }}
                onFocus={() => setFocusedField('projectType')}
                onBlur={() => setFocusedField(null)}
                name="projectType" 
                value={formData.projectType} 
                onChange={handleChange}
                required
              >
                <option value="" className="bg-[#111]"></option>
                {projectTypes.map(t => (
                  <option key={t} value={t} className="bg-[#111]">{t}</option>
                ))}
              </select>
              {/* Custom dropdown arrow */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ zIndex: 2 }}>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </InputWrapper>

            <InputWrapper name="message" label="Your Project Vision">
              <textarea 
                className="w-full bg-transparent border border-white/10 rounded-xl py-5 px-5 text-white text-base outline-none transition-all duration-300 resize-none"
                style={{ position: "relative", zIndex: 2 }}
                rows="4"
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                name="message" 
                value={formData.message} 
                onChange={handleChange}
                required
              />
            </InputWrapper>

            <button 
              type="submit" 
              className="w-full py-5 rounded-xl border-0 bg-gradient-to-r from-brand-orange-400 to-brand-orange-600 text-white font-bold text-lg cursor-pointer relative overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(255,87,34,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {/* Shimmer effect */}
              <div 
                className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] animate-shimmer"
              />
              <span className="relative z-10">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

