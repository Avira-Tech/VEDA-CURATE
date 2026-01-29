import { useState, useEffect, useRef, useMemo, useCallback } from "react";

export default function Clients() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const statTargets = useMemo(() => [98, 150, 20, 24], []);

  const clientLogos = [
    { name: "AviraTech", initial: "AviraTech" },
    { name: "Inkrid Studio", initial: "Inkrid Studio" },
    { name: "Toynikk", initial: "Toynik" },
    { name: "Dynamic Technosoft", initial: "Dynamic Technosoft" },
    { name: "Pivotalerp", initial: "Pivotalerp" },
  ];

  const testimonials = useMemo(() => [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      image: "https://i.pravatar.cc/150?u=sarah", // Placeholder for actual UI images
      quote: "Vedacurate transformed our digital presence completely. Their attention to detail and creative vision exceeded all our expectations.",
      impact: "+45% Conversion"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, StartupX",
      image: "https://i.pravatar.cc/150?u=michael",
      quote: "Working with Vedacurate was a game-changer for our startup. They delivered a stunning brand identity that helped us secure funding.",
      impact: "$2M Raised"
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Director, GlobalBrand",
      image: "https://i.pravatar.cc/150?u=emily",
      quote: "They don't just build websites - they create digital experiences. Our redesign resulted in a massive engagement spike.",
      impact: "+60% Engagement"
    }
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTestimonialChange = useCallback((index) => {
    if (index === activeTestimonial || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTestimonial(index);
      setIsTransitioning(false);
    }, 500);
  }, [activeTestimonial, isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleTestimonialChange((activeTestimonial + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [activeTestimonial, isTransitioning, testimonials.length, handleTestimonialChange]);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeProgress = 1 - Math.pow(1 - progress, 4); // Quartic ease out
      setCounts(statTargets.map(t => Math.floor(easeProgress * t)));
      if (frame === totalFrames) clearInterval(timer);
    }, frameDuration);
    return () => clearInterval(timer);
  }, [isVisible, statTargets]);

  return (
    <section 
      id="clients" 
      ref={sectionRef}
      className="min-h-screen py-24 px-[6%] relative overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <div 
        className={`text-center mb-24 relative z-10 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-brand-orange-400 text-[10px] font-bold uppercase tracking-[4px] mb-4">
          Partnerships
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-[1.1]">
          The brands that <br />
          <span className="text-transparent bg-gradient-to-r from-brand-orange-400 to-orange-600 bg-clip-text">
            move with us.
          </span>
        </h2>
      </div>

      {/* Kinetic Logo Ribbon */}
      <div className="relative mb-32 z-10">
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />
        
        <div className="flex gap-8 w-max animate-logo-slide">
          {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
            <div 
              key={i} 
              className="group w-[240px] h-[120px] bg-white/[0.02] rounded-2xl border border-white/5 flex items-center justify-center transition-all duration-500 hover:border-brand-orange-500/30 hover:bg-white/[0.04]"
            >
              <span className="text-lg font-bold text-white/20 group-hover:text-white/60 transition-colors duration-500 italic">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div 
        className={`max-w-5xl mx-auto relative z-10 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative p-8 md:p-16 rounded-[3rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl overflow-hidden">
          {/* Quote Icon Background */}
          <div className="absolute top-8 right-12 text-[12rem] text-white/[0.03] font-serif leading-none select-none">“</div>
          
          <div className={`transition-all duration-500 ease-in-out ${isTransitioning ? "opacity-0 -translate-y-4 blur-sm" : "opacity-100 translate-y-0"}`}>
            <div className="text-brand-orange-500 flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => <span key={i} className="text-xl">★</span>)}
            </div>
            
            <blockquote className="text-2xl md:text-4xl font-medium text-white leading-snug mb-12 tracking-tight">
              "{testimonials[activeTestimonial].quote}"
            </blockquote>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-full border-2 border-brand-orange-500/20 p-1">
                   <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center text-2xl overflow-hidden">
                      <img src={testimonials[activeTestimonial].image} alt={testimonials[activeTestimonial].name} className="w-full h-full object-cover" />
                   </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-brand-orange-500 text-white font-bold text-sm">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                {testimonials[activeTestimonial].impact}
              </div>
            </div>
          </div>

          {/* Stepper Progress */}
          <div className="flex gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => handleTestimonialChange(i)}
                className="h-1.5 flex-1 rounded-full bg-white/5 overflow-hidden transition-all"
              >
                <div 
                  className={`h-full bg-brand-orange-500 transition-all duration-300 ${i === activeTestimonial ? "w-full" : "w-0"}`}
                  style={{ 
                    transitionDuration: i === activeTestimonial ? '8000ms' : '0ms',
                    transitionTimingFunction: 'linear'
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-24">
        {[
          { v: `${counts[0]}%`, l: "Success Rate" },
          { v: `${counts[1]}+`, l: "Projects Done" },
          { v: `${counts[2]}+`, l: "Global Experts" },
          { v: "24/7", l: "Elite Support" }
        ].map((stat, i) => (
          <div 
            key={i} 
            className={`p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 text-center transition-all duration-700 hover:bg-white/[0.05] hover:border-brand-orange-500/20 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${600 + (i * 100)}ms` }}
          >
            <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
              {stat.v}
            </div>
            <p className="text-[10px] text-white/30 font-bold uppercase tracking-[3px]">{stat.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
