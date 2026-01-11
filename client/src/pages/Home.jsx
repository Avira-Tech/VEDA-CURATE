import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Smartphone, Box, Globe } from 'lucide-react';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-7xl mx-auto mb-32"
      >
        <motion.h1 
          variants={fadeInUp}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-vc-dark mb-8 leading-[0.9]"
        >
          DESIGN <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-vc-yellow to-vc-orange">
            FUTURE
          </span> <br/>
          TODAY.
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-12 items-start md:items-end justify-between">
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-600 max-w-lg leading-relaxed">
            We are VC. A creative studio specializing in digital experiences, branding, and AR/VR innovation.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <a href="#work" className="group flex items-center gap-4 text-lg font-bold uppercase tracking-widest hover:text-vc-orange transition-colors">
              View Selected Work
              <span className="p-2 border border-current rounded-full group-hover:bg-vc-orange group-hover:text-white group-hover:border-vc-orange transition-all">
                <ArrowRight className="w-5 h-5" />
              </span>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section - Asymmetric Grid */}
      <section className="max-w-7xl mx-auto mb-32">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8"
        >
          {/* Large Card */}
          <div className="lg:col-span-8 bg-white/80 backdrop-blur-sm border border-gray-100 p-12 rounded-3xl hover:shadow-2xl hover:shadow-vc-orange/10 transition-all duration-500 group">
            <div className="w-12 h-12 bg-vc-light rounded-2xl flex items-center justify-center mb-8 group-hover:bg-vc-orange group-hover:text-white transition-colors">
              <Box className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Product & Brand Design</h3>
            <p className="text-gray-500 text-lg">
              Crafting identities that speak louder than words. We merge strategy with high-end aesthetics to build brands that matter.
            </p>
          </div>

          {/* Tall Card */}
          <div className="lg:col-span-4 row-span-2 bg-gradient-to-br from-vc-dark to-black text-white p-12 rounded-3xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500">
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold mb-4">AR/VR Experiences</h3>
              <p className="text-gray-400 text-lg">
                Immersive realities that bridge the gap between digital and physical worlds.
              </p>
            </div>
            <div className="mt-8">
               <div className="w-full h-32 bg-gradient-to-r from-vc-yellow to-vc-orange rounded-xl opacity-20 blur-xl absolute bottom-12 right-12"></div>
            </div>
          </div>

          {/* Medium Card */}
          <div className="lg:col-span-4 bg-white/80 backdrop-blur-sm border border-gray-100 p-12 rounded-3xl hover:shadow-2xl hover:shadow-vc-orange/10 transition-all duration-500 group">
             <div className="w-12 h-12 bg-vc-light rounded-2xl flex items-center justify-center mb-8 group-hover:bg-vc-orange group-hover:text-white transition-colors">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Website Development</h3>
            <p className="text-gray-500">
              High-performance, reactive, and stunning web applications built for scale.
            </p>
          </div>

          {/* Medium Card */}
          <div className="lg:col-span-4 bg-white/80 backdrop-blur-sm border border-gray-100 p-12 rounded-3xl hover:shadow-2xl hover:shadow-vc-orange/10 transition-all duration-500 group">
             <div className="w-12 h-12 bg-vc-light rounded-2xl flex items-center justify-center mb-8 group-hover:bg-vc-orange group-hover:text-white transition-colors">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Social Media Design</h3>
            <p className="text-gray-500">
              Visual content that stops the scroll and engages your audience instantly.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Selected Work Preview */}
      <section id="work" className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16">
           <h2 className="text-5xl font-bold tracking-tighter">SELECTED WORK</h2>
           <span className="hidden md:block text-gray-400 font-mono">01 — 05</span>
        </div>
        
        <div className="space-y-32">
          {[1, 2].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="w-full h-[60vh] bg-gray-100 rounded-3xl overflow-hidden mb-8 relative">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                {/* Placeholder for project image */}
                <div className="w-full h-full flex items-center justify-center text-gray-300 font-bold text-9xl select-none bg-vc-light">
                    PROJECT 0{item}
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-bold mb-2 group-hover:text-vc-orange transition-colors">Neon Horizon Brand Identity</h3>
                  <p className="text-gray-500 text-lg">Branding / Web Design</p>
                </div>
                <div className="p-4 rounded-full border border-gray-200 group-hover:bg-vc-dark group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
                   <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
