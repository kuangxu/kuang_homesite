import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavigationKuang = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
      const navHeight = 120; // Height to scroll to section titles (nav bar + section padding)
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu after clicking a link
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (path: string, sectionId?: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== path) {
      // If navigating to a different page, let the router handle it
      return;
    }
    // If on the same page, scroll to section
    if (sectionId) {
      scrollToSection(sectionId);
    }
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
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end py-6">
              {/* Logo */}
              <Link 
                to="/"
                className="btn-clean flex flex-col pt-4"
              >
                <span className="text-display text-4xl md:text-5xl tracking-wider font-bold">Kuang Xu</span>
                <span className="text-lg md:text-xl text-muted-foreground font-normal tracking-normal normal-case mt-1">
                  Associate Professor of Operations Research, Stanford GSB
                </span>
              </Link>

              {/* Navigation Links */}
              <div className="hidden md:flex space-x-8 pb-1">
              <Link 
                to="/"
                onClick={() => location.pathname === '/' && scrollToSection('hero')}
                className="nav-link text-lg"
              >
                Home
              </Link>
              <Link 
                to="/research"
                className="nav-link text-lg"
              >
                Research
              </Link>
              <Link 
                to="/#advising"
                onClick={() => handleNavClick('/', 'advising')}
                className="nav-link text-lg"
              >
                Advising
              </Link>
              <Link 
                to="/#workshops"
                onClick={() => handleNavClick('/', 'workshops')}
                className="nav-link text-lg"
              >
                Workshops and Consulting
              </Link>
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
              <Link 
                to="/"
                onClick={() => handleNavClick('/', 'hero')}
                className="text-left text-lg font-semibold py-3 text-black hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/research"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left text-lg font-semibold py-3 text-black hover:text-primary transition-colors"
              >
                Research
              </Link>
              <Link 
                to="/#advising"
                onClick={() => handleNavClick('/', 'advising')}
                className="text-left text-lg font-semibold py-3 text-black hover:text-primary transition-colors"
              >
                Advising
              </Link>
              <Link 
                to="/#workshops"
                onClick={() => handleNavClick('/', 'workshops')}
                className="text-left text-lg font-semibold py-3 text-black hover:text-primary transition-colors"
              >
                Executive Workshops and Consulting
              </Link>
            </div>

            {/* Menu Footer */}
            <div className="p-6">
              <div className="text-sm text-gray-500">
                © 2025 Kuang Xu
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationKuang;
