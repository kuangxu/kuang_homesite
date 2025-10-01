import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import ResearchSection from '../components/ResearchSection';

const Research = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = 'Research - Kuang Xu';
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Research and publications by Kuang Xu, Associate Professor at Stanford GSB. Work in operations research, machine learning, and data-driven decision making.');
    }
    
    // Update Open Graph data
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Research - Kuang Xu');
    }
    
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Research and publications by Kuang Xu, Associate Professor at Stanford GSB.');
    }

    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <ResearchSection />
      </main>
    </div>
  );
};

export default Research;

