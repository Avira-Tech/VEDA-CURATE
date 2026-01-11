import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}
