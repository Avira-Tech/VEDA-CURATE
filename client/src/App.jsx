// import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Services from "./components/Services";
// import Projects from "./components/Projects";
// import Clients from "./components/Clients";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import BackgroundAnimation from "./components/BackgroundAnimation";

// export default function App() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   return (
//     <div className={isLoaded ? "loaded" : ""}>
//       <BackgroundAnimation />
//       <Navbar />
//       <main>
//         <Hero />
//         <About />
//         <Services />
//         <Projects />
//         <Clients />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundAnimation from "./components/BackgroundAnimation";
import Preloader from "./components/Preloader"; // Import the new component

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Add a slight delay for the content fade-in effect
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {/* 1. Preloader Page (Higher Z-Index) */}
      {isLoading && <Preloader onComplete={handleLoadingComplete} />}

      {/* 2. Main Website (Hidden until loaded) */}
      <div 
        style={{ 
          opacity: showContent ? 1 : 0, 
          transition: "opacity 1s ease",
          visibility: showContent ? "visible" : "hidden" 
        }}
      >
        <BackgroundAnimation />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Clients />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}