import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HighlightsSection from '../components/HighlightsSection';

const Highlights = () => {
  useEffect(() => {
    document.title = 'Highlights - Kuang Xu';

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription?.setAttribute(
      'content',
      'Selected research highlights by Kuang Xu in artificial intelligence, experimentation, markets, and stochastic systems.',
    );

    const ogTitle = document.querySelector('meta[property="og:title"]');
    ogTitle?.setAttribute('content', 'Highlights - Kuang Xu');

    const ogDescription = document.querySelector('meta[property="og:description"]');
    ogDescription?.setAttribute(
      'content',
      'Selected research highlights by Kuang Xu, Associate Professor at Stanford GSB.',
    );

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <HighlightsSection />
      </main>
    </div>
  );
};

export default Highlights;
