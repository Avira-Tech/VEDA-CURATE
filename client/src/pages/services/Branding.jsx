import React from 'react';
import { motion } from 'framer-motion';
import { FaPalette, FaLightbulb, FaChartLine, FaPenFancy, FaGlobe, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Branding = () => {
  const services = [
    {
      icon: <FaPalette className="w-6 h-6" />,
      title: "Identity Design",
      description: "Crafting distinctive logos and visual languages that define your core essence.",
      size: "md:col-span-2"
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Strategy",
      description: "Aligning your business goals with market-winning creative briefs.",
      size: "md:col-span-1"
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Positioning",
      description: "Finding the 'White Space' where your brand stands alone.",
      size: "md:col-span-1"
    },
    {
      icon: <FaPenFancy className="w-6 h-6" />,
      title: "Narrative",
      description: "Compelling copywriting that turns browsers into believers.",
      size: "md:col-span-2"
    }
  ];

  const process = [
    { step: "01", title: "Discovery", desc: "Immersion into your business DNA and target demographics." },
    { step: "02", title: "Synthesis", desc: "Defining the strategic 'North Star' for all creative decisions." },
    { step: "03", title: "Creation", desc: "Iterative design phase where concepts become visual reality." },
    { step: "04", title: "Deployment", desc: "Launching your brand across all digital and physical touchpoints." }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-brand-orange-500/30">
      
      {/* Hero Section - High-End Typography */}
      <section className="relative pt-40 pb-20 px-[6%] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-orange-500/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-brand-orange-500 font-mono text-xs tracking-[0.5em] uppercase mb-6 block">Core Expertise</span>
            <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-black leading-[0.85] tracking-tighter mb-10 italic uppercase">
              Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">Branding</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/40 max-w-2xl leading-relaxed tracking-tight">
              We architect visual legacies. We don't just design logos; we build <span className="text-white">emotional connections</span> that resonate through time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Bento Layout */}
      <section className="py-24 px-[6%] relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${service.size} group p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500`}
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-orange-500/10 flex items-center justify-center text-brand-orange-500 mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">{service.title}</h3>
                <p className="text-white/40 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Minimalist Timeline */}
      <section className="py-32 px-[6%] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-20">
            <div className="lg:w-1/3">
              <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-6">The <br />Method</h2>
              <p className="text-white/30">A systematic approach to uncovering your brand's unique voice in a crowded market.</p>
            </div>
            
            <div className="lg:w-2/3 space-y-16">
              {process.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group flex gap-10 items-start"
                >
                  <span className="text-5xl font-black text-white/10 group-hover:text-brand-orange-500 transition-colors duration-500">
                    {item.step}
                  </span>
                  <div className="pt-2">
                    <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                    <p className="text-white/40 max-w-md">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Footer CTA */}
      <section className="py-40 px-[6%] text-center relative overflow-hidden">
        {/* Large background text for depth */}
        <div className="absolute inset-x-0 bottom-0 text-[25vw] font-black text-white/[0.02] uppercase italic tracking-tighter select-none pointer-events-none translate-y-1/2">
          Legacy
        </div>
        
        <div className="relative z-10">
          <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter uppercase italic">
            Ready for a <br /> <span className="text-brand-orange-500">New Era?</span>
          </h2>
          <Link
            to="/contact-details"
            className="px-14 py-6 bg-white text-black font-black uppercase text-sm rounded-full hover:scale-105 hover:bg-brand-orange-500 hover:text-white transition-all duration-300 inline-block"
          >
            Start Your Evolution
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Branding;