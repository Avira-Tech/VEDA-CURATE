import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-orange-200">Policy</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <p className="text-white/70 leading-relaxed">
                  We may collect personal information that you voluntarily provide to us when you:
                  fill out forms on our website, subscribe to our newsletter, or contact us directly.
                  This includes your name, email address, phone number, and any other information
                  you choose to provide.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="text-white/70 leading-relaxed">
                  We use the information we collect to provide, maintain, and improve our services,
                  to communicate with you, to personalize your experience, and to process your
                  requests and transactions. We may also use your information to send you
                  promotional materials, newsletters, and other marketing communications.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
                <p className="text-white/70 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personally identifiable
                  information to outside parties except when required by law or to protect our
                  rights, privacy, safety, or property. We may share information with trusted
                  third parties who assist in operating our website and servicing you.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <p className="text-white/70 leading-relaxed">
                  We implement appropriate security measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. However,
                  no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking Technologies</h2>
                <p className="text-white/70 leading-relaxed">
                  Our website may use cookies and similar tracking technologies to enhance your
                  browsing experience, analyze website traffic, and personalize content. You can
                  control cookies through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Third-Party Links</h2>
                <p className="text-white/70 leading-relaxed">
                  Our website may contain links to third-party websites, services, or applications.
                  We are not responsible for the privacy practices or content of these third parties.
                  We encourage you to review their privacy policies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
                <p className="text-white/70 leading-relaxed">
                  Our services are not intended for individuals under the age of 13. We do not
                  knowingly collect personal information from children. If you believe we have
                  collected information from a child, please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
                <p className="text-white/70 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of
                  any changes by posting the new Privacy Policy on this page and updating the
                  "last modified" date at the bottom of this policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
                <p className="text-white/70 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices,
                  please contact us at:
                </p>
                <div className="mt-4 p-6 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-white/80">Email: privacy@vedacurate.com</p>
                  <p className="text-white/80">Address: 123 Innovation Street, Tech District, NY 10001</p>
                </div>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-black mb-6">Have Questions?</h2>
            <p className="text-white/60 mb-8">We're here to help clarify any concerns about your privacy.</p>
            <Link
              to="/contact-details"
              className="inline-block px-8 py-4 bg-gradient-to-r from-brand-orange-400 to-orange-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

