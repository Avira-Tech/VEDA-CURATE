import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactDetails = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Address",
      details: ["Pune, Maharashtra", "India"]
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 85399 06485"]
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      details: ["vedacurate@gmail.com"]
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM IST", "Sat - Sun: By appointment"]
    }
  ];

  return (
    <div className="min-h-screen  text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-orange-200">Details</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Get in touch with us. We're here to help bring your digital vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-brand-orange-400 mb-6">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-white/70 leading-relaxed">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black">Send us a Message</h2>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-brand-orange-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-brand-orange-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/80 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-brand-orange-400 transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2">Message</label>
              <textarea
                rows="6"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-brand-orange-400 transition-colors resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-brand-orange-400 to-orange-600 text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black">Find Us</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-96 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center"
          >
            <div className="text-center">
              <FaMapMarkerAlt className="w-16 h-16 text-brand-orange-400 mx-auto mb-4" />
              <p className="text-white/60">Interactive map would be embedded here</p>
              <p className="text-white/40 text-sm mt-2">123 Innovation Street, Tech District, NY 10001</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactDetails;
