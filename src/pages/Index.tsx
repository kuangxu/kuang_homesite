import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import EngineSection from '../components/EngineSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = 'Tikka Engine - AI-Powered Personalized Nutrition';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Tikka Engine uses cutting-edge AI and machine learning to provide personalized nutrition recommendations that help you maintain optimal blood glucose levels while enjoying delicious meals.');
    }
    
    // Update Open Graph data
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Tikka Engine - AI-Powered Personalized Nutrition');
    }
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Revolutionary AI technology that anticipates your body\'s nutritional needs for healthier living.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <EngineSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
