// import { useState, useEffect, useRef } from "react";

// export default function Contact() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [formData, setFormData] = useState({ name: "", email: "", projectType: "", message: "" });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);
//   const sectionRef = useRef(null);

//   const projectTypes = ["Web Development", "Mobile App", "UI/UX Design", "Branding", "SaaS Product", "Other"];

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) setIsVisible(true);
//     }, { threshold: 0.1 });
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch('http://localhost:3001/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         setIsSubmitted(true);
//         setTimeout(() => {
//           setFormData({ name: "", email: "", projectType: "", message: "" });
//           setIsSubmitted(false);
//         }, 4000);
//       } else {
//         alert(data.message || 'Something went wrong. Please try again.');
//       }
//     } catch (error) {
//       console.error('Submit error:', error);
//       alert('Failed to send message. Please try again later.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const InputWrapper = ({ name, label, children }) => (
//     <div className="relative mb-8">
//       {children}
//       <label className={`absolute left-5 top-5 text-white/30 transition-all duration-300 pointer-events-none z-10 ${
//         formData[name] || focusedField === name 
//           ? "-top-2.5 left-3.5 text-xs text-brand-orange-400 font-bold bg-[#080808] px-2 py-0.5 z-20" 
//           : ""
//       }`}>
//         {label}
//       </label>
//       <div className={`absolute inset-0 rounded-xl border border-brand-orange-400 opacity-0 transition-opacity duration-300 pointer-events-none ${
//         focusedField === name ? "opacity-100 shadow-[0_0_20px_rgba(255,152,0,0.15)]" : ""
//       }`} />
//     </div>
//   );

//   return (
//     <section 
//       id="contact" 
//       ref={sectionRef}
//       className="min-h-screen flex items-center py-[100px] px-[8%] relative overflow-hidden lg:py-20 lg:px-5"
//     >
//       {/* Decorative Blur Orb */}
//       <div 
//         className="absolute rounded-full pointer-events-none"
//         style={{
//           top: "50%",
//           left: "50%",
//           width: "800px",
//           height: "800px",
//           background: "radial-gradient(circle, rgba(255, 152, 0, 0.03) 0%, transparent 70%)",
//           transform: "translate(-50%, -50%)",
//           filter: "blur(100px)"
//         }}
//       />

//       <div className="grid lg:grid-cols-2 gap-[100px] w-full relative z-10 max-w-[1400px]mx-auto lg:grid-cols-1 lg:gap-15">
        
//         {/* Left Side: Contact Details */}
//         <div className={`transition-all duration-1000 ease-out ${
//           isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
//         }`}>
//           <div className="inline-block px-5 py-2 rounded-full bg-brand-orange-400/10 border border-brand-orange-400/30 text-brand-orange-400 text-xs font-bold uppercase tracking-[1px] mb-5">
//             Available for Work
//           </div>
//           <h2 className="text-[clamp(2.5rem,5vw,4.2rem)] font-black text-white leading-tight mb-6">
//             Let's Build <br />
//             <span className="text-transparent bg-gradient-to-r from-brand-orange-400 via-brand-orange-600 to-brand-orange-400 bg-[length:200%_auto] bg-clip-text animate-gradient-shift" style={{ WebkitTextStroke: "1px rgba(255, 152, 0, 0.4)" }}>
//               Something Amazing
//             </span>
//           </h2>
//           <p className="text-[1.15rem] text-white/50 leading-relaxed mb-12 max-w-[500px]">
//             Ready to transform your ideas into digital reality? Our team is waiting to 
//             channel the magic into your next project.
//           </p>

//           <div className="flex flex-col gap-5">
//             {[
//               { i: "📧", l: "Direct Email", v: "vedacurate@gmail.com" },
//               { i: "📱", l: "Call Us", v: "+91 85399 06485" },
//               { i: "📍", l: "HQ Location", v: "Pune, IN" }
//             ].map((item, i) => (
//               <div 
//                 key={i} 
//                 className="flex items-center gap-5 p-6 rounded-2xl bg-white/2 border border-white/8 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-4 hover:border-brand-orange-400/50 hover:bg-brand-orange-400/5"
//               >
//                 <div className="w-12 h-12 rounded-xl bg-brand-orange-400/10 flex items-center justify-center text-xl">
//                   {item.i}
//                 </div>
//                 <div>
//                   <span className="block text-[0.7rem] text-white/30 uppercase tracking-[1px]">{item.l}</span>
//                   <span className="text-lg font-bold text-white">{item.v}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Side: Glassmorphism Form */}
//         {/* Right Side: WhatsApp CTA */}
// <div
//   className={`relative rounded-[40px] p-12 overflow-hidden transition-all duration-1000 ease-out delay-200 lg:p-10 ${
//     isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
//   }`}
//   style={{
//     background: "rgba(255, 255, 255, 0.01)",
//     backdropFilter: "blur(30px)",
//     border: "1px solid rgba(255, 255, 255, 0.1)"
//   }}
// >
//   <div className="flex flex-col items-center text-center">
//     <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-4xl mb-6 shadow-[0_0_30px_rgba(34,197,94,0.25)]">
//       💬
//     </div>

//     <h3 className="text-3xl font-bold text-white mb-4">
//       Let’s Talk on WhatsApp
//     </h3>

//     <p className="text-white/50 mb-10 max-w-[420px]">
//       Have a project in mind? Skip the forms and chat with us directly on WhatsApp.
//       We usually reply super fast ⚡
//     </p>

//     <button
//       onClick={() =>
//         window.open(
//           "https://wa.me/918539906485?text=Hi%20I%20would%20like%20to%20discuss%20a%20project",
//           "_blank"
//         )
//       }
//       className="w-full py-5 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(34,197,94,0.45)]"
//     >
//       Chat on WhatsApp
//     </button>

//     <span className="mt-4 text-xs text-white/30">
//       Opens WhatsApp Web or App
//     </span>
//   </div>
// </div>

//       </div>
//     </section>
//   );
// }

import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/918539906485?text=Hi%20I%20would%20like%20to%20discuss%20a%20project",
      "_blank"
    );
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="min-h-screen flex items-center py-24 px-[8%] relative overflow-hidden bg-[#050505]"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side: Branding & Info */}
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange-400/10 border border-brand-orange-400/20 text-brand-orange-400 text-[0.7rem] font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange-500"></span>
            </span>
            Available for New Projects
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8">
            Ready to <br />
            <span className="text-transparent bg-gradient-to-r from-brand-orange-400 via-orange-500 to-brand-orange-400 bg-[length:200%_auto] bg-clip-text animate-gradient-shift">
              Start Scaling?
            </span>
          </h2>
          
          <p className="text-lg text-white/50 leading-relaxed mb-12 max-w-md">
            Skip the long forms. Connect with our experts instantly and let's turn your vision into a market-leading product.
          </p>

          <div className="space-y-4">
            {[
              { i: "📧", l: "Email Us", v: "vedacurate@gmail.com" },
              { i: "📱", l: "Let's Chat", v: "+91 85399 06485" }
            ].map((item, i) => (
              <div key={i} className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-brand-orange-400/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                  {item.i}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-tighter text-white/30">{item.l}</p>
                  <p className="text-white font-medium">{item.v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: WhatsApp Premium Card */}
        <div className={`transition-all duration-1000 delay-300 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          <div className="relative group">
            {/* Glow effect behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative bg-[#0A0A0A] border border-white/10 p-10 md:p-14 rounded-[40px] overflow-hidden">
              {/* Subtle mesh background */}
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.05),transparent_50%)]" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-3xl bg-green-500/10 flex items-center justify-center text-5xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <span className="drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">💬</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-[#0A0A0A] flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">Instant Connection</h3>
                <p className="text-white/40 mb-10 leading-relaxed">
                  Join <span className="text-white font-semibold">50+ founders</span> who started their journey with a simple message. No bots, just real humans.
                </p>

                <button
                  onClick={openWhatsApp}
                  className="group/btn relative w-full py-5 rounded-2xl bg-green-500 hover:bg-green-400 text-black font-black text-lg transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Message on WhatsApp
                    <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}