// import { useState, useEffect, useCallback } from "react";
// import { motion, useScroll, useSpring } from "framer-motion";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import ServiceModel from "./components/Services";
// import Projects from "./components/Projects";
// import Clients from "./components/Clients";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Preloader from "./components/Preloader";
// import BackgroundAnimation from "./components/BackgroundAnimation";

// // Import new pages
// import AboutPage from "./pages/About";
// import FAQ from "./pages/FAQ";
// import ContactDetails from "./pages/ContactDetails";
// import Blog from "./pages/Blog";
// import Support from "./pages/Support";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import TermsOfService from "./pages/TermsOfService";
// import CookiePolicy from "./pages/CookiePolicy";
// import WebDevelopment from "./pages/services/WebDevelopment";
// import Branding from "./pages/services/Branding";
// import ARVRDevelopment from "./pages/services/ARVRDevelopment";
// import SocialMediaDesign from "./pages/services/SocialMediaDesign";

// // Component to handle route changes and trigger preloader
// function RouteChangeHandler({ onRouteChange }) {
//   const location = useLocation();
  
//   useEffect(() => {
//     onRouteChange();
//   }, [location.pathname]);
  
//   return null;
// }

// export default function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [showContent, setShowContent] = useState(false);

//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//   });

//   const handleLoadingComplete = () => {
//     setIsLoading(false);
//     setTimeout(() => setShowContent(true), 150);
//   };

//   const triggerRouteChange = () => {
//     // Reset loading state on route change to show preloader
//     setIsLoading(true);
//     setShowContent(false);
//     // Trigger loading complete after a short delay
//     setTimeout(() => {
//       setIsLoading(false);
//       setTimeout(() => setShowContent(true), 150);
//     }, 800);
//   };

//   return (
//     <Router>
//       {/* Route change handler to trigger preloader on navigation */}
//       <RouteChangeHandler onRouteChange={triggerRouteChange} />

//       {/* Preloader */}
//       {isLoading && <Preloader onComplete={handleLoadingComplete} />}

//       {/* App Wrapper */}
//       <motion.div
//         className={`relative min-h-screen overflow-x-hidden text-white transition-opacity duration-1000 ${
//           showContent ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         {/* Background Animation (GLOBAL) */}
//         <div className="fixed inset-0 z-0 pointer-events-none">
//           <BackgroundAnimation />
//         </div>

//         {/* Scroll Progress Bar */}
//         <motion.div
//           className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left
//                      bg-gradient-to-r from-brand-orange-500 to-orange-300"
//           style={{ scaleX }}
//         />

//         {/* Foreground Content */}
//         <div className="relative z-10">
//           <Navbar />

//           <Routes>
//             {/* Home Page */}
//             <Route path="/" element={
//               <main>
//                 <section id="home">
//                   <Hero />
//                 </section>

//                 <section id="about" className="py-0">
//                   <About />
//                 </section>

//                 <section id="services" className="py-0">
//                   <div className="container mx-auto px-6">
//                     <motion.div
//                       initial={{ opacity: 0, y: 30 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       className="text-center mb-20"
//                     >
//                       <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
//                         Digital{" "}
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-orange-200">
//                           Solutions
//                         </span>
//                       </h2>

//                       <p className="mt-6 max-w-xl mx-auto text-lg text-white/50">
//                         Explore our services through an interactive 3D experience.
//                       </p>
//                     </motion.div>

//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.96 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.8 }}
//                       viewport={{ once: true }}
//                       className="relative h-[750px] w-full rounded-[3rem]
//                                  border border-white/10
//                                  bg-white/[0.03]
//                                  backdrop-blur-xl
//                                  overflow-hidden
//                                  shadow-2xl"
//                     >
//                       <div className="absolute top-8 left-8 w-14 h-14 border-t border-l border-brand-orange-500/40 rounded-tl-2xl" />
//                       <div className="absolute bottom-8 right-8 w-14 h-14 border-b border-r border-brand-orange-500/40 rounded-br-2xl" />

//                       <ServiceModel />

//                       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none">
//                         <div className="flex flex-col items-center gap-2">
//                           <div className="w-px h-10 bg-gradient-to-b from-brand-orange-500 to-transparent animate-pulse" />
//                           <span className="text-[9px] tracking-[0.35em] uppercase text-white/30 font-mono">
//                             Drag / Scroll
//                           </span>
//                         </div>
//                       </div>
//                     </motion.div>
//                   </div>
//                 </section>

//                 <section id="projects" className="py-0">
//                   <Projects />
//                 </section>

//                 <section id="clients" className="py-0">
//                   <Clients />
//                 </section>

//                 <section id="contact" className="py-0">
//                   <Contact />
//                 </section>
//               </main>
//             } />

//             {/* Detailed Pages */}
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/faq" element={<FAQ />} />
//             <Route path="/contact-details" element={<ContactDetails />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/support" element={<Support />} />
//             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//             <Route path="/terms-of-service" element={<TermsOfService />} />
//             <Route path="/cookie-policy" element={<CookiePolicy />} />

//             {/* Service Detail Pages */}
//             <Route path="/services/web-development" element={<WebDevelopment />} />
//             <Route path="/services/branding" element={<Branding />} />
//             <Route path="/services/ar-vr-development" element={<ARVRDevelopment />} />
//             <Route path="/services/social-media-design" element={<SocialMediaDesign />} />
//           </Routes>

//           <Footer />
//         </div>
//       </motion.div>
//     </Router>
//   );
// }

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ServiceModel from "./components/Services";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import PagePreloader from "./components/PagePerloader"; // Fixed naming
import BackgroundAnimation from "./components/BackgroundAnimation";

// Pages
import AboutPage from "./pages/About";
import FAQ from "./pages/FAQ";
import ContactDetails from "./pages/ContactDetails";
import Blog from "./pages/Blog";
import Support from "./pages/Support";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import WebDevelopment from "./pages/services/WebDevelopment";
import Branding from "./pages/services/Branding";
import ARVRDevelopment from "./pages/services/ARVRDevelopment";
import SocialMediaDesign from "./pages/services/SocialMediaDesign";

// --- Route Change Handler ---
function RouteChangeHandler({ onRouteStart }) {
  const location = useLocation();
  const [lastPath, setLastPath] = useState(location.pathname);

  useEffect(() => {
    // Only trigger if the path actually changes (prevents trigger on initial mount)
    if (location.pathname !== lastPath) {
      onRouteStart();
      setLastPath(location.pathname);
    }
  }, [location, onRouteStart, lastPath]);

  return null;
}

export default function App() {
  // 1. Initial Load State (Site Entry)
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  
  // 2. Page Transition State (Between Routes)
  const [isNavigating, setIsNavigating] = useState(false);
  
  // 3. Content Visibility
  const [showContent, setShowContent] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Logic for the VERY FIRST entry
  const handleInitialLoadingComplete = () => {
    setIsInitialLoading(false);
    setTimeout(() => setShowContent(true), 150);
  };

  // Logic for ROUTE changes
  const handleRouteChange = () => {
    setIsNavigating(true);
    // Mimic a short loading delay for the page preloader
    setTimeout(() => {
      setIsNavigating(false);
      window.scrollTo(0, 0); // Reset scroll on new page
    }, 1000); 
  };

  return (
    <Router>
      {/* Listens for URL changes */}
      <RouteChangeHandler onRouteStart={handleRouteChange} />

      {/* SHOW ONLY ON FIRST VISIT */}
      {isInitialLoading && (
        <Preloader onComplete={handleInitialLoadingComplete} />
      )}

      {/* SHOW ON EVERY ROUTE CHANGE */}
      {isNavigating && <PagePreloader />}

      <motion.div
        className={`relative min-h-screen overflow-x-hidden text-white transition-opacity duration-700 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="fixed inset-0 z-0 pointer-events-none">
          <BackgroundAnimation />
        </div>

        <motion.div
          className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left bg-gradient-to-r from-brand-orange-500 to-orange-300"
          style={{ scaleX }}
        />

        <div className="relative z-10">
          <Navbar />

          <Routes>
            <Route path="/" element={
              <main>
                <section id="home"><Hero /></section>
                <section id="about" className="py-0"><About /></section>
                <section id="services" className="py-0">
                  <div className="container mx-auto px-6">
                    {/* ... (Your existing Home Services JSX) ... */}
                    <div className="text-center mb-20">
                       <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
                        Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-400 to-orange-200">Solutions</span>
                      </h2>
                    </div>
                    <div className="relative h-[750px] w-full rounded-[3rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-2xl">
                      <ServiceModel />
                    </div>
                  </div>
                </section>
                <section id="projects" className="py-0"><Projects /></section>
                <section id="clients" className="py-0"><Clients /></section>
                <section id="contact" className="py-0"><Contact /></section>
              </main>
            } />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact-details" element={<ContactDetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/branding" element={<Branding />} />
            <Route path="/services/ar-vr-development" element={<ARVRDevelopment />} />
            <Route path="/services/social-media-design" element={<SocialMediaDesign />} />
          </Routes>

          <Footer />
        </div>
      </motion.div>
    </Router>
  );
}