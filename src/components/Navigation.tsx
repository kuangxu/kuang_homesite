import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="section-padding">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="btn-clean text-display text-2xl tracking-wider"
          >
            TIKKA Engine
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-12">
            <button 
              onClick={() => scrollToSection('engine')}
              className="nav-link text-lg"
            >
              Tikka Engine
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-link text-lg"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link text-lg"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden btn-clean">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 10H17" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              <path d="M3 5H17" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              <path d="M3 15H17" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;