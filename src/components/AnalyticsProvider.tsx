import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalytics } from '@/hooks/use-analytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const location = useLocation();
  const { trackPageView, trackScrollDepth, trackTimeOnPage } = useAnalytics();
  const pageStartTime = useRef<number>(Date.now());
  const lastScrollDepth = useRef<number>(0);

  // Track page views when location changes
  useEffect(() => {
    const pageName = location.pathname === '/' ? 'Home' : location.pathname.slice(1);
    trackPageView(pageName, document.title);
    
    // Reset page start time
    pageStartTime.current = Date.now();
    lastScrollDepth.current = 0;
  }, [location, trackPageView]);

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      // Track scroll depth at 25%, 50%, 75%, and 100%
      if (scrollPercent >= 25 && lastScrollDepth.current < 25) {
        trackScrollDepth(25);
        lastScrollDepth.current = 25;
      } else if (scrollPercent >= 50 && lastScrollDepth.current < 50) {
        trackScrollDepth(50);
        lastScrollDepth.current = 50;
      } else if (scrollPercent >= 75 && lastScrollDepth.current < 75) {
        trackScrollDepth(75);
        lastScrollDepth.current = 75;
      } else if (scrollPercent >= 100 && lastScrollDepth.current < 100) {
        trackScrollDepth(100);
        lastScrollDepth.current = 100;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackScrollDepth]);

  // Track time on page when user leaves
  useEffect(() => {
    const handleBeforeUnload = () => {
      const timeOnPage = Math.round((Date.now() - pageStartTime.current) / 1000);
      if (timeOnPage > 0) {
        trackTimeOnPage(timeOnPage);
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        const timeOnPage = Math.round((Date.now() - pageStartTime.current) / 1000);
        if (timeOnPage > 0) {
          trackTimeOnPage(timeOnPage);
        }
      } else if (document.visibilityState === 'visible') {
        pageStartTime.current = Date.now();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [trackTimeOnPage]);

  return <>{children}</>;
};
