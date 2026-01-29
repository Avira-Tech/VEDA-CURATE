import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
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
              Cookie <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-orange-200">Policy</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Learn how we use cookies and similar technologies on our website.
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
                <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
                <p className="text-white/70 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our
                  website. They help us provide you with a better experience by enabling certain
                  functionality, analyzing site usage, and personalizing content and advertisements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Types of Cookies We Use</h2>
                <div className="space-y-6 mt-4">
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-bold text-brand-orange-400 mb-2">Essential Cookies</h3>
                    <p className="text-white/70">
                      These cookies are necessary for the website to function properly. They enable
                      core functionality such as page navigation, secure areas, and account
                      authentication. You cannot switch these off as they are essential for the
                      site to work.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-bold text-brand-orange-400 mb-2">Performance Cookies</h3>
                    <p className="text-white/70">
                      These cookies help us understand how visitors interact with our website by
                      collecting anonymous information. This helps us improve the performance and
                      user experience of our site. The data is aggregated and anonymous.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-bold text-brand-orange-400 mb-2">Functionality Cookies</h3>
                    <p className="text-white/70">
                      These cookies allow us to remember choices you make (such as language
                      preferences, region, or font size) and provide enhanced, personalized features.
                      They may also be used to remember changes you've made to text size and fonts.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-bold text-brand-orange-400 mb-2">Marketing Cookies</h3>
                    <p className="text-white/70">
                      These cookies are used to track visitors across websites to display relevant
                      advertisements. They may be set by our advertising partners to build a profile
                      of your interests and show you personalized content on other sites you visit.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Specific Cookies We Use</h2>
                <div className="overflow-x-auto">
                  <table className="w-full mt-4">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-3 px-4 font-bold">Cookie Name</th>
                        <th className="text-left py-3 px-4 font-bold">Purpose</th>
                        <th className="text-left py-3 px-4 font-bold">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4 text-white/70">_ga</td>
                        <td className="py-3 px-4 text-white/70">Google Analytics - distinguishes users</td>
                        <td className="py-3 px-4 text-white/70">2 years</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4 text-white/70">_gid</td>
                        <td className="py-3 px-4 text-white/70">Google Analytics - distinguishes users</td>
                        <td className="py-3 px-4 text-white/70">24 hours</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4 text-white/70">session_id</td>
                        <td className="py-3 px-4 text-white/70">Maintains user session state</td>
                        <td className="py-3 px-4 text-white/70">Session</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4 text-white/70">preferences</td>
                        <td className="py-3 px-4 text-white/70">Stores user preferences (theme, language)</td>
                        <td className="py-3 px-4 text-white/70">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Third-Party Cookies</h2>
                <p className="text-white/70 leading-relaxed">
                  Some cookies are placed by third-party services that appear on our pages. We use
                  third-party services including Google Analytics for analytics and social media
                  platforms for sharing content. These third parties may use cookies to track your
                  browsing activity across different websites.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Managing Cookies</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  You have the right to accept, refuse, or delete cookies. Here are the options
                  available to you:
                </p>
                <ul className="space-y-3 text-white/70 list-disc list-inside">
                  <li><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings. You can usually set your browser to block all cookies, accept all cookies, or notify you when a cookie is set.</li>
                  <li><strong>Cookie Consent Banner:</strong> On your first visit, you can use our cookie consent banner to choose which types of cookies you want to allow.</li>
                  <li><strong>Opt-Out Tools:</strong> Use tools like the Google Analytics Opt-Out Browser Add-on to disable tracking.</li>
                  <li><strong>Industry Tools:</strong> Visit aboutads.info or youronlinechoices.eu to opt out of targeted advertising.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Impact of Disabling Cookies</h2>
                <p className="text-white/70 leading-relaxed">
                  If you disable or delete cookies, some features of our website may not function
                  properly. For example, you may need to log in more frequently, your preferences
                  may not be saved, and certain interactive features may be unavailable. Essential
                  cookies cannot be disabled as they are required for the website to work.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Do Not Track</h2>
                <p className="text-white/70 leading-relaxed">
                  Some browsers have a "Do Not Track" (DNT) feature that signals to websites that
                  you don't want to be tracked. Currently, there is no industry standard for
                  handling DNT signals, so our website may not respond to DNT signals at this time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Updates to This Policy</h2>
                <p className="text-white/70 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in
                  technology, legislation, or our business practices. We will notify you of any
                  significant changes by posting the updated policy on this page and updating the
                  effective date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
                <p className="text-white/70 leading-relaxed">
                  If you have questions about our use of cookies or this Cookie Policy, please
                  contact us:
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
            <h2 className="text-4xl font-black mb-6">Questions About Cookies?</h2>
            <p className="text-white/60 mb-8">We're happy to answer any questions about our cookie practices.</p>
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

export default CookiePolicy;

