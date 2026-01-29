import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaPinterest, FaYoutube, FaPenNib, FaChartPie, FaBullhorn, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialMediaDesign = () => {
  const services = [
    {
      icon: <FaPenNib className="w-6 h-6" />,
      title: "Content Creation",
      description: "Visual storytelling through high-fidelity graphics and conversion-focused copy.",
      size: "md:col-span-2" // Bento-style sizing
    },
    {
      icon: <FaChartPie className="w-6 h-6" />,
      title: "Strategy",
      description: "Data-backed roadmaps for sustainable growth.",
      size: "md:col-span-1"
    },
    {
      icon: <FaBullhorn className="w-6 h-6" />,
      title: "Advertising",
      description: "Precision-targeted campaigns.",
      size: "md:col-span-1"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Community",
      description: "Nurturing brand loyalty through authentic, real-time engagement.",
      size: "md:col-span-2"
    }
  ];

  const platforms = [
    { icon: <FaInstagram />, name: "Instagram", color: "hover:text-pink-500" },
    { icon: <FaFacebook />, name: "Facebook", color: "hover:text-blue-500" },
    { icon: <FaTwitter />, name: "Twitter", color: "hover:text-sky-400" },
    { icon: <FaLinkedin />, name: "LinkedIn", color: "hover:text-blue-600" },
    { icon: <FaYoutube />, name: "YouTube", color: "hover:text-red-600" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-brand-orange-500/30">
      
      {/* Hero Section - Split Layout */}
      <section className="relative pt-40 pb-20 px-[6%] overflow-hidden">
        {/* Ambient background light */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange-500/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-brand-orange-500 font-mono text-xs tracking-[0.4em] uppercase mb-6 block">Service 01</span>
            <h1 className="text-[clamp(3rem,8vw,6rem)] font-black leading-[0.9] tracking-tighter mb-8 italic uppercase">
              Social <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Influence</span>
            </h1>
            <p className="text-lg text-white/40 max-w-md leading-relaxed">
              We don't just post content; we architect digital presence. Transforming scroll-depth into brand loyalty.
            </p>
          </motion.div>

          {/* Floating Stats - Visual LHS */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "500M+", l: "Impressions" },
              { v: "50+", l: "Brands" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl text-center"
              >
                <div className="text-4xl font-bold text-white mb-1 tracking-tighter">{stat.v}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{stat.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Bento Grid */}
      <section className="py-24 px-[6%]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${service.size} group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 overflow-hidden transition-all hover:bg-white/[0.04]`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-brand-orange-500 mb-8 opacity-50 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Platform Slider */}
      <section className="py-20 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-[6%] flex flex-wrap justify-between items-center gap-12">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-white/20">Omni-Channel Expertise</h2>
          <div className="flex flex-wrap gap-8 items-center">
            {platforms.map((p, i) => (
              <div key={i} className={`text-2xl text-white/20 ${p.color} transition-all cursor-crosshair flex items-center gap-3 group`}>
                {p.icon}
                <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic CTA */}
      <section className="py-40 px-[6%] relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter italic uppercase">
            Start the <span className="text-brand-orange-500">Dialogue.</span>
          </h2>
          <Link
            to="/contact-details"
            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black uppercase text-sm rounded-full overflow-hidden transition-all hover:pr-16"
          >
            <span className="relative z-10">Begin Your Project</span>
            <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all">→</span>
          </Link>
        </div>
        
        {/* Background Large Text */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-[20vw] font-black text-white/[0.02] select-none pointer-events-none uppercase italic tracking-tighter">
          Get Results
        </div>
      </section>

    </div>
  );
};

export default SocialMediaDesign;