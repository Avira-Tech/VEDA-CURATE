import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { BsChevronDown } from "react-icons/bs";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Replaced separate booleans with one state for cleaner logic
  const [activeDropdown, setActiveDropdown] = useState(null); 
  
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", isRoute: true },
    { name: "About", href: "/about", isRoute: true },
    { 
      id: "services", // Added ID for logic matching
      name: "Services", 
      href: "#services", 
      isRoute: false,
      hasDropdown: true,
      dropdownItems: [
        { name: "Web Development", href: "/services/web-development", isRoute: true },
        { name: "Branding", href: "/services/branding", isRoute: true },
        { name: "AR/VR Development", href: "/services/ar-vr-development", isRoute: true },
        { name: "Social Media Design", href: "/services/social-media-design", isRoute: true },
      ]
    },
    { name: "Work", href: "#projects", isRoute: false },
    { 
      id: "resources",
      name: "Resources", 
      href: "#", 
      isRoute: false,
      hasDropdown: true,
      dropdownItems: [
        { name: "FAQ", href: "/faq", isRoute: true },
        { name: "Blog", href: "/blog", isRoute: true },
        { name: "Support", href: "/support", isRoute: true },
      ]
    },
    { name: "Contact", href: "#contact", isRoute: false },
  ];

  const scrollToSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 px-[5%] transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled ? "top-[15px]" : "top-0"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "max-w-[1200px] rounded-full border border-orange-500/25 px-[35px] py-[10px]" : "max-w-full px-[5%] py-[25px]"
        } ${
          scrolled 
            ? "bg-brand-dark/85 shadow-xl backdrop-blur-xl" 
            : "bg-transparent"
        }`}
      >
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-[5px] cursor-pointer">
          <img
            src={logo}
            alt="Vedacurate"
            className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              scrolled ? "w-[60px]" : "w-[80px]"
            } animate-float`}
            style={{
              filter: scrolled 
                ? "drop-shadow(0 0 12px rgba(255, 152, 0, 0.5))" 
                : "drop-shadow(0 0 8px rgba(255, 152, 0, 0.2))"
            }}
          />
          <span
            className={`font-black tracking-tight transition-all duration-500 bg-gradient-to-r from-brand-orange-400 via-brand-orange-600 to-brand-orange-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer ${
              scrolled ? "text-2xl" : "text-3xl"
            }`}
          >
            Vedacurate
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.hasDropdown ? (
                <button
                  type="button"
                  onClick={() => handleDropdownToggle(link.id)}
                  className={`relative py-[5px] font-medium transition-all duration-300 hover:-translate-y-px flex items-center gap-1 ${
                    scrolled ? "text-white/90" : "text-white/70"
                  } hover:text-white nav-link cursor-pointer bg-transparent border-none`}
                >
                  {link.name}
                  <BsChevronDown className={`text-xs transition-transform duration-300 ${activeDropdown === link.id ? "rotate-180" : ""}`} />
                  <span className="nav-underline absolute bottom-0 left-0 h-0.5 w-0 bg-brand-orange-400 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                </button>
              ) : link.isRoute ? (
                <Link
                  to={link.href}
                  className={`relative py-[5px] font-medium transition-all duration-300 hover:-translate-y-px flex items-center gap-1 ${
                    scrolled ? "text-white/90" : "text-white/70"
                  } hover:text-white nav-link`}
                >
                  {link.name}
                  <span className="nav-underline absolute bottom-0 left-0 h-0.5 w-0 bg-brand-orange-400 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className={`relative py-[5px] font-medium transition-all duration-300 hover:-translate-y-px flex items-center gap-1 ${
                    scrolled ? "text-white/90" : "text-white/70"
                  } hover:text-white nav-link cursor-pointer bg-transparent border-none`}
                >
                  {link.name}
                  <span className="nav-underline absolute bottom-0 left-0 h-0.5 w-0 bg-brand-orange-400 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                </button>
              )}

              {/* Dropdown Menu */}
              {link.hasDropdown && (
                <div 
                  className={`absolute top-full left-0 mt-2 min-w-[220px] rounded-xl border border-white/10 bg-brand-dark/95 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300 ${
                    activeDropdown === link.id ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="py-2">
                    {link.dropdownItems.map((item, index) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
                        style={{ transitionDelay: `${index * 0.05}s` }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={() => scrollToSection("#contact")}
            className="ml-[10px] cursor-pointer rounded-full bg-gradient-to-r from-brand-orange-400 to-brand-orange-600 px-[28px] py-[14px] text-[0.95rem] font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-500/40"
            style={{ padding: scrolled ? "12px 28px" : "14px 32px" }}
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          type="button"
          className="lg:hidden bg-transparent border-none text-white cursor-pointer p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 space-y-1.5">
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-[-45deg] translate-y-[-2px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[-1] flex flex-col items-center justify-center gap-8 bg-[#080808]/98 backdrop-blur-2xl transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen ? "h-screen opacity-100" : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        {navLinks.map((link, i) => (
          <div key={link.name} className="w-full text-center">
            {link.isRoute ? (
              <Link
                to={link.href}
                className="text-3xl font-black text-white no-underline transition-all duration-500 hover:text-brand-orange-400"
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)"
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : link.hasDropdown ? (
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => handleDropdownToggle(link.id)}
                  className="text-3xl font-black text-white transition-all duration-500 bg-transparent border-none"
                  style={{
                    transitionDelay: `${i * 0.1}s`,
                    opacity: mobileMenuOpen ? 1 : 0,
                    transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)"
                  }}
                >
                  {link.name}
                </button>
                <div className={`flex flex-col gap-4 mt-4 transition-all duration-300 ${activeDropdown === link.id ? "opacity-100 h-auto" : "opacity-0 h-0 overflow-hidden"}`}>
                  {link.dropdownItems.map((item, j) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-xl text-white/70 hover:text-brand-orange-400 transition-colors duration-300"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="text-3xl font-black text-white no-underline transition-all duration-500 hover:text-brand-orange-400 bg-transparent border-none cursor-pointer"
                style={{
                  transitionDelay: `${i * 0.1}s`,
                  opacity: mobileMenuOpen ? 1 : 0,
                  transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)"
                }}
              >
                {link.name}
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => scrollToSection("#contact")}
          className="mt-8 cursor-pointer rounded-full bg-gradient-to-r from-brand-orange-400 to-brand-orange-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-500/40"
        >
          Let's Talk
        </button>
      </div>
    </nav>
  );
}