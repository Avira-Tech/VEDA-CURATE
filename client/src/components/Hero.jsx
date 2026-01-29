import { useState, useEffect } from "react";

/* =========================
   WORD BLOCK COMPONENT
   Refined for high-end typography
========================= */
function WordBlock({ words, delay = 0, gradient = false }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const wordArray = Array.isArray(words) ? words : words.split(" ");

  return (
    <span className="inline-flex flex-wrap justify-center gap-x-3 mx-1">
      {wordArray.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className={`inline-block transition-all duration-1000 cubic-bezier(0.22, 1, 0.36, 1) ${
            isLoaded ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-12 blur-xl"
          } ${gradient ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 via-orange-500 to-brand-orange-600 bg-[length:200%_auto] animate-text-shimmer" : "text-white"}`}
          style={{ transitionDelay: `${wordIndex * 0.05}s` }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [isLoaded] = useState(true);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-[6%] pt-20 "
    >
      {/* Dynamic Background Elements - Centered Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-brand-orange-500/10 blur-[120px] animate-pulse" />
        {/* <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" /> */}
      </div>

      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center text-center">
        
        {/* Status Badge */}
        <div
          className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange-500"></span>
          </span>
          <span className="text-[10px] font-bold tracking-[3px] uppercase text-white/70">
            Available for New Projects
          </span>
        </div>

        {/* Hero Title - Centered Layout */}
        <h1 className="text-[clamp(2.5rem,8vw,7rem)] leading-[1.1] font-bold mb-10 tracking-tight">
          <div className="block pb-2">
            <WordBlock words="Designing" delay={200} />
            <WordBlock words="Magic." delay={400} gradient />
          </div>
          <div className="block">
            <WordBlock words="Engineering" delay={600} />
            <WordBlock words="Growth." delay={800} gradient />
          </div>
        </h1>

        {/* Description - Centered and Max-Width for readability */}
        <p
          className={`text-lg md:text-xl text-white/40 mb-14 max-w-2xl leading-relaxed transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We architect digital legacies by blending <span className="text-white font-medium">strategic design</span> with 
          <span className="text-white font-medium"> technical excellence</span>. From bespoke branding to 
          immersive AR/VR, we make your brand unmissable.
        </p>

        {/* CTA Group - Center Justified */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-[1.2s] w-full ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={() => scrollToSection("#work")}
            className="group relative w-full sm:w-auto px-12 py-5 rounded-2xl bg-brand-orange-500 overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,152,0,0.3)] active:scale-95"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 text-white font-bold text-lg">Start a Project</span>
          </button>

          <button
            onClick={() => scrollToSection("#about")}
            className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-white/5 text-white font-bold text-lg border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 active:scale-95"
          >
            Our Story
          </button>
        </div>

        {/* Centered Stats Row */}
        <div
          className={`flex flex-wrap justify-center gap-12 md:gap-24 mt-24 pt-12 border-t border-white/5 w-full transition-all duration-1000 delay-[1.4s] ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { num: "150+", label: "Launches" },
            { num: "10+", label: "Partners" },
            { num: "4+", label: "Years" },
          ].map((stat, i) => (
            <div key={i} className="group text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-1 tracking-tighter group-hover:text-brand-orange-400 transition-colors">
                {stat.num}
              </div>
              <p className="text-[10px] text-white/30 font-bold uppercase tracking-[3px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}