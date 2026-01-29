import React from 'react';
import { motion } from 'framer-motion';
import { FaQuestionCircle, FaBook, FaHeadset, FaTools, FaFileAlt, FaUsers } from 'react-icons/fa';

const Support = () => {
  const supportOptions = [
    {
      icon: <FaQuestionCircle className="w-8 h-8" />,
      title: "FAQ & Help Center",
      description: "Find answers to common questions and troubleshooting guides.",
      action: "Browse FAQs"
    },
    {
      icon: <FaBook className="w-8 h-8" />,
      title: "Documentation",
      description: "Comprehensive guides and API documentation for developers.",
      action: "View Docs"
    },
    {
      icon: <FaHeadset className="w-8 h-8" />,
      title: "Technical Support",
      description: "Get help from our expert support team for technical issues.",
      action: "Contact Support"
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: "Maintenance & Updates",
      description: "Keep your projects running smoothly with our maintenance services.",
      action: "Learn More"
    },
    {
      icon: <FaFileAlt className="w-8 h-8" />,
      title: "Project Documentation",
      description: "Access detailed documentation for your ongoing projects.",
      action: "View Projects"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Community Forum",
      description: "Connect with other users and share knowledge in our community.",
      action: "Join Community"
    }
  ];

  const recentUpdates = [
    {
      date: "2024-01-15",
      title: "New AR/VR Development Tools Released",
      description: "We've added new tools and templates for AR/VR development projects."
    },
    {
      date: "2024-01-10",
      title: "Enhanced Security Features",
      description: "Improved security protocols and data protection measures implemented."
    },
    {
      date: "2024-01-05",
      title: "Mobile App Performance Updates",
      description: "Significant performance improvements for mobile applications."
    }
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
              Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-orange-200">Center</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              We're here to help you succeed. Access resources, get support, and stay updated with the latest from Vedacurate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black">How Can We Help?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-brand-orange-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{option.title}</h3>
                <p className="text-white/70 leading-relaxed mb-6">{option.description}</p>
                <button className="w-full px-6 py-3 bg-brand-orange-400/20 border border-brand-orange-400/50 text-brand-orange-400 rounded-xl hover:bg-brand-orange-400 hover:text-white transition-all duration-300">
                  {option.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black">Recent Updates</h2>
          </motion.div>

          <div className="space-y-6">
            {recentUpdates.map((update, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-brand-orange-400 text-sm font-mono">{update.date}</span>
                      <div className="w-2 h-2 bg-brand-orange-400 rounded-full"></div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{update.title}</h3>
                    <p className="text-white/70">{update.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-6">Need More Help?</h2>
            <p className="text-white/60 mb-8">Our support team is ready to assist you with any questions or issues.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-brand-orange-400 to-orange-600 text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300">
                Start Live Chat
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Support;
