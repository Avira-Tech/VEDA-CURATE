import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaRocket, FaShieldAlt, FaChartLine, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  const features = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Custom Development",
      description: "Tailored web solutions built with modern technologies and best practices."
    },
    {
      icon: <FaMobile className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect display across all devices."
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Performance Optimized",
      description: "Lightning-fast loading speeds and optimized user experiences."
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Security First",
      description: "Built-in security measures and regular security updates."
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Analytics Integration",
      description: "Comprehensive tracking and analytics to measure success."
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed with your users in mind."
    }
  ];

  const technologies = [
    "React", "Node.js", "Next.js", "TypeScript", "MongoDB", "PostgreSQL",
    "AWS", "Docker", "GraphQL", "REST APIs", "Tailwind CSS", "Three.js"
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your goals, target audience, and technical requirements."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes for user validation."
    },
    {
      step: "03",
      title: "Development",
      description: "Building your solution using modern technologies and agile development practices."
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing across devices and browsers to ensure quality."
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "Deploying your solution and providing ongoing maintenance and support."
    }
  ];

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
              Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-orange-200">Development</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into powerful web applications. We build scalable, secure, and user-friendly websites
              that drive results and engage your audience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black">What We Offer</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-brand-orange-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black">Technologies We Use</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/80 hover:bg-brand-orange-400/20 hover:border-brand-orange-400/50 hover:text-brand-orange-400 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black">Our Process</h2>
          </motion.div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className="text-6xl font-black text-brand-orange-400/20 mb-4">{step.step}</div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </div>
                <div className="w-full md:w-px h-px md:h-32 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-brand-orange-400/50 to-transparent"></div>
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
            <h2 className="text-4xl font-black mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-white/60 mb-8">Let's discuss your web development project and bring your vision to life.</p>
            <Link
              to="/contact-details"
              className="inline-block px-8 py-4 bg-gradient-to-r from-brand-orange-400 to-orange-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
