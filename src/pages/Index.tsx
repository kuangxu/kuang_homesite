import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AdvisingSection from '../components/AdvisingSection';
import WorkshopsSection from '../components/WorkshopsSection';

const Index = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = 'Kuang Xu - Associate Professor of Operations Research at Stanford GSB';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Kuang Xu is an Associate Professor of Operations Research at Stanford Graduate School of Business. Expert in operations research, AI and data science innovation, supply chains and logistics.');
    }
    
    // Update Open Graph data
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Kuang Xu - Associate Professor of Operations Research at Stanford GSB');
    }
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Associate Professor of Operations Research at Stanford Graduate School of Business. Expert in operations research, AI and data science innovation.');
    }

    // Handle hash navigation (for links like /#advising)
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navHeight = 80;
          const elementPosition = element.offsetTop - navHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AdvisingSection />
        <WorkshopsSection />
      </main>
    </div>
  );
};

export default Index;
