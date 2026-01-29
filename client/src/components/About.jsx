import { useState, useEffect, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ projects: 0, clients: 0, years: 0 });
  const sectionRef = useRef(null);

  const targets = { projects: 150, clients: 20, years: 4 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500; // Slower, smoother count
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      // Easing function for smoother finish
      const easeOutQuad = (t) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      setCounters({
        projects: Math.floor(targets.projects * easedProgress),
        clients: Math.floor(targets.clients * easedProgress),
        years: Math.floor(targets.years * easedProgress),
      });

      if (frame === totalFrames) clearInterval(timer);
    }, frameRate);

    return () => clearInterval(timer);
  }, [isVisible, targets.projects, targets.clients, targets.years]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center py-24 px-[6%] relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-orange-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 w-full max-w-7xl mx-auto">
        
        {/* Left Column: Story */}
        <div
          className={`transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange-500 shadow-[0_0_8px_#ff9800]" />
            <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Our DNA</span>
          </div>

          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] text-white mb-8 tracking-tighter">
            We architect <br />
            <span className="text-transparent bg-gradient-to-r from-brand-orange-400 to-orange-600 bg-clip-text">
              digital legacies.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-white/40 leading-relaxed mb-12 max-w-xl">
            Vedacurate isn't just an agency; we're your <span className="text-white">creative growth partners</span>. 
            We bridge the gap between human emotion and technical precision to build brands that don't just exist—they dominate.
          </p>

          <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
            {[
              { title: "Bespoke UI/UX", desc: "Crafting intuitive journeys" },
              { title: "Future-Ready Web", desc: "Built for speed & scale" },
              { title: "Brand Narrative", desc: "Stories that convert" },
              { title: "Immersive Tech", desc: "Leading the AR/VR wave" }
            ].map((item, i) => (
              <div 
                key={i} 
                className={`group transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <h4 className="text-white font-semibold mb-1 group-hover:text-brand-orange-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-white/30 text-sm leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Numbers */}
        <div className="flex flex-col justify-center gap-6">
          {/* Hero Stat */}
          <div 
            className={`group relative p-10 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-md transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
            </div>
            <div className="relative z-10">
              <span className="text-6xl md:text-8xl font-black text-white tracking-tighter">
                {counters.projects}
                <span className="text-brand-orange-500">+</span>
              </span>
              <p className="text-white/40 font-bold uppercase tracking-[3px] text-[10px] mt-4">Projects Executed</p>
            </div>
          </div>

          {/* Grid Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: counters.clients, label: "Global Clients", delay: "500ms" },
              { value: counters.years, label: "Years Impact", delay: "700ms" }
            ].map((stat, i) => (
              <div 
                key={i}
                className={`p-8 rounded-[2rem] bg-white/5 border border-white/5 backdrop-blur-sm transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: stat.delay }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}<span className="text-brand-orange-500">+</span>
                </div>
                <p className="text-white/30 font-bold uppercase tracking-widest text-[9px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}