import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
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
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-orange-200">Service</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
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
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-white/70 leading-relaxed">
                  By accessing and using this website and our services, you accept and agree to be
                  bound by the terms and provisions of this agreement. If you do not agree to be
                  bound by these terms, please do not use our website or services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                <p className="text-white/70 leading-relaxed">
                  Vedacurate provides digital services including but not limited to web development,
                  branding, AR/VR development, and social media design. We reserve the right to
                  modify, suspend, or discontinue any aspect of our services at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
                <p className="text-white/70 leading-relaxed">
                  As a user of our website and services, you agree to:
                </p>
                <ul className="mt-4 space-y-2 text-white/70 list-disc list-inside">
                  <li>Provide accurate and complete information when creating an account</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not attempt to gain unauthorized access to any part of our services</li>
                  <li>Not interfere with or disrupt our services or servers</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Intellectual Property Rights</h2>
                <p className="text-white/70 leading-relaxed">
                  All content, features, and functionality of this website, including but not limited
                  to text, graphics, logos, icons, images, audio clips, and software, are the exclusive
                  property of Vedacurate and are protected by copyright, trademark, and other
                  intellectual property laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Client Projects and Deliverables</h2>
                <p className="text-white/70 leading-relaxed">
                  Upon full payment, clients receive ownership rights to deliverables as specified
                  in their project agreement. Vedacurate retains the right to display completed
                  work in our portfolio unless otherwise agreed in writing. All custom code and
                  designs remain the property of the client upon completion and final payment.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Payment and Billing</h2>
                <p className="text-white/70 leading-relaxed">
                  For project-based work, payment terms will be outlined in the project proposal.
                  A deposit is required to begin work, with the balance due upon completion.
                  For ongoing services, payment is due according to the agreed schedule.
                  Late payments may result in service suspension.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Confidentiality</h2>
                <p className="text-white/70 leading-relaxed">
                  Both parties agree to maintain the confidentiality of any proprietary information
                  shared during the course of a project. This obligation survives the termination
                  of any agreement between the parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
                <p className="text-white/70 leading-relaxed">
                  Vedacurate shall not be liable for any indirect, incidental, special, consequential,
                  or punitive damages, or any loss of profits or revenues, whether incurred directly
                  or indirectly, or any loss of data, use, goodwill, or other intangible losses
                  resulting from your use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Disclaimer of Warranties</h2>
                <p className="text-white/70 leading-relaxed">
                  Our services are provided "as is" and "as available" without any warranties of any
                  kind, either express or implied. We do not warrant that our services will be
                  uninterrupted, timely, secure, or error-free.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
                <p className="text-white/70 leading-relaxed">
                  Either party may terminate an agreement at any time with written notice. Upon
                  termination, you will remain liable for any outstanding payments. Provisions
                  regarding intellectual property, confidentiality, and limitation of liability
                  shall survive termination.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
                <p className="text-white/70 leading-relaxed">
                  These terms and any agreements between us shall be governed by and construed in
                  accordance with the laws of the United States and the State of New York, without
                  regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
                <p className="text-white/70 leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective
                  immediately upon posting to this website. Your continued use of our services
                  after any changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
                <p className="text-white/70 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-6 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-white/80">Email: legal@vedacurate.com</p>
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
            <h2 className="text-4xl font-black mb-6">Questions About These Terms?</h2>
            <p className="text-white/60 mb-8">Our legal team is here to help clarify any questions.</p>
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

export default TermsOfService;

