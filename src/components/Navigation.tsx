import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 40; // Approximate height of the navigation bar
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu after clicking a link
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
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
            <button 
              className="md:hidden btn-clean mobile-menu-button p-2 -mr-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
              >
                <path 
                  d="M3 12H21" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  className={`transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}
                />
                <path 
                  d="M3 6H21" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  className={`transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
                />
                <path 
                  d="M3 18H21" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  className={`transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[100] md:hidden transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[80vw] bg-white mobile-menu transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex justify-between items-center p-6">
              <span className="text-display text-xl text-black">Menu</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-clean p-2"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 flex flex-col p-6 space-y-6">
              <button 
                onClick={() => scrollToSection('engine')}
                className="text-left text-lg font-medium py-3 text-black hover:text-primary transition-colors"
              >
                Tikka Engine
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-lg font-medium py-3 text-black hover:text-primary transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-lg font-medium py-3 text-black hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Menu Footer */}
            <div className="p-6">
              <div className="text-sm text-gray-500">
                © 2025 Tikka Engine
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;