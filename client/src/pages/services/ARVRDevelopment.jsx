import React from 'react';
import { motion } from 'framer-motion';
import { FaVrCardboard, FaEye, FaGamepad, FaBuilding, FaGraduationCap, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ARVRDevelopment = () => {
  const applications = [
    {
      icon: <FaVrCardboard className="w-8 h-8" />,
      title: "Immersive Training",
      description: "Create realistic training simulations for education, healthcare, and industrial applications."
    },
    {
      icon: <FaEye className="w-8 h-8" />,
      title: "Virtual Showrooms",
      description: "Build interactive 3D showrooms for real estate, automotive, and product visualization."
    },
    {
      icon: <FaGamepad className="w-8 h-8" />,
      title: "Gaming Experiences",
      description: "Develop engaging VR games and interactive entertainment experiences."
    },
    {
      icon: <FaBuilding className="w-8 h-8" />,
      title: "Architectural Visualization",
      description: "Create virtual walkthroughs of buildings and spaces before construction."
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Educational Content",
      description: "Design interactive learning experiences that enhance education and training."
    },
    {
      icon: <FaShoppingCart className="w-8 h-8" />,
      title: "Retail Experiences",
      description: "Build virtual shopping experiences and product try-on applications."
    }
  ];

  const technologies = [
    "Unity", "Unreal Engine", "WebXR", "Three.js", "A-Frame", "React Three Fiber",
    "Oculus SDK", "ARCore", "ARKit", "OpenXR", "WebGL", "Blender"
  ];

  const features = [
    "Cross-platform compatibility (Web, Mobile, VR headsets)",
    "Real-time 3D rendering and physics",
    "Interactive user interfaces and controls",
    "Multi-user experiences and networking",
    "Performance optimization for various devices",
    "Integration with existing systems and APIs"
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
              AR/VR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-orange-200">Development</span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Step into the future with immersive augmented and virtual reality experiences.
              We create cutting-edge AR/VR solutions that transform how people interact with digital content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black">Application Areas</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-brand-orange-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {app.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{app.title}</h3>
                <p className="text-white/70 leading-relaxed">{app.description}</p>
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

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black">Key Features</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-3 h-3 bg-brand-orange-400 rounded-full flex-shrink-0"></div>
                <span className="text-white/80">{feature}</span>
              </motion.div>
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
            <h2 className="text-4xl font-black">Development Process</h2>
          </motion.div>

          <div className="space-y-8">
            {[
              { step: "01", title: "Concept & Planning", desc: "Define project scope, target platforms, and technical requirements" },
              { step: "02", title: "Prototyping", desc: "Create interactive prototypes and proof-of-concept demonstrations" },
              { step: "03", title: "3D Asset Creation", desc: "Design and develop 3D models, environments, and interactive elements" },
              { step: "04", title: "Development", desc: "Build the AR/VR experience with optimized performance" },
              { step: "05", title: "Testing & Optimization", desc: "Cross-platform testing and performance optimization" },
              { step: "06", title: "Deployment", desc: "Launch across target platforms with ongoing support" }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className="text-6xl font-black text-brand-orange-400/20 mb-4">{phase.step}</div>
                  <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                  <p className="text-white/70 leading-relaxed">{phase.desc}</p>
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
            <h2 className="text-4xl font-black mb-6">Ready to Enter the Immersive World?</h2>
            <p className="text-white/60 mb-8">Let's create groundbreaking AR/VR experiences that captivate your audience.</p>
            <Link
              to="/contact-details"
              className="inline-block px-8 py-4 bg-gradient-to-r from-brand-orange-400 to-orange-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300"
            >
              Start AR/VR Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ARVRDevelopment;
