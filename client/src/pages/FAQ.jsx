import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of digital services including web development, branding, AR/VR development, social media design, and data analytics solutions."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex AR/VR applications could take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Yes, we work with clients worldwide. Our team is experienced in handling remote collaboration and different time zones to ensure smooth project execution."
    },
    {
      question: "What is your development process?",
      answer: "Our process includes discovery, planning, design, development, testing, and deployment. We follow agile methodologies and maintain transparent communication throughout the project."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Absolutely. We offer various support packages including maintenance, updates, and technical support to ensure your digital solutions continue to perform optimally."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including React, Node.js, Three.js for 3D experiences, and various AR/VR frameworks. We stay updated with the latest technologies and best practices."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-orange-200">Questions</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Find answers to common questions about our services, process, and how we can help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left bg-white/5 hover:bg-white/10 transition-colors duration-300 flex items-center justify-between"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  {openIndex === index ? (
                    <BsChevronUp className="w-6 h-6 text-brand-orange-400" />
                  ) : (
                    <BsChevronDown className="w-6 h-6 text-brand-orange-400" />
                  )}
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-white/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-6">Still Have Questions?</h2>
            <p className="text-white/60 mb-8">We're here to help. Reach out to us for personalized assistance.</p>
            <a
              href="/contact-details"
              className="inline-block px-8 py-4 bg-gradient-to-r from-brand-orange-400 to-orange-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
