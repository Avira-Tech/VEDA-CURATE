import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-orange-200">Vedacurate</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              We are a digital innovation agency that transforms ideas into immersive experiences.
              Our passion lies in crafting cutting-edge solutions that push the boundaries of technology and creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl font-black mb-6">Our Mission</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                To empower businesses and individuals with transformative digital solutions that drive growth,
                engagement, and innovation in an ever-evolving technological landscape.
              </p>
              <p className="text-white/70 leading-relaxed">
                We believe in the power of technology to create meaningful connections and experiences
                that resonate with audiences across all platforms and devices.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-brand-orange-400/20 to-orange-600/20 rounded-3xl backdrop-blur-sm border border-white/10"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black">Our Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                desc: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions."
              },
              {
                title: "Excellence",
                desc: "Quality is at the core of everything we do. We strive for perfection in every project."
              },
              {
                title: "Collaboration",
                desc: "We work closely with our clients as partners, ensuring their vision becomes reality."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-6">Ready to Start Your Project?</h2>
            <p className="text-white/60 mb-8">Let's create something amazing together.</p>
            <Link
              to="/contact-details"
              className="inline-block px-8 py-4 bg-gradient-to-r from-brand-orange-400 to-orange-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
