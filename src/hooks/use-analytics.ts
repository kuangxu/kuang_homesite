import { useEffect, useCallback } from 'react';
import { logEvent, setUserId, setUserProperties, setCurrentScreen } from 'firebase/analytics';
import { analytics } from '@/lib/firebase';

// Safe analytics wrapper
const safeAnalytics = {
  logEvent: (analytics: any, eventName: string, parameters?: any) => {
    try {
      if (analytics) {
        logEvent(analytics, eventName, parameters);
      }
    } catch (error) {
      console.log('Analytics error:', error);
    }
  },
  setUserId: (analytics: any, userId: string) => {
    try {
      if (analytics) {
        setUserId(analytics, userId);
      }
    } catch (error) {
      console.log('Analytics error:', error);
    }
  },
  setUserProperties: (analytics: any, properties: any) => {
    try {
      if (analytics) {
        setUserProperties(analytics, properties);
      }
    } catch (error) {
      console.log('Analytics error:', error);
    }
  },
  setCurrentScreen: (analytics: any, screenName: string) => {
    try {
      if (analytics) {
        setCurrentScreen(analytics, screenName);
      }
    } catch (error) {
      console.log('Analytics error:', error);
    }
  }
};

export const useAnalytics = () => {
  // Track page views
  const trackPageView = useCallback((pageName: string, pageTitle?: string) => {
    safeAnalytics.logEvent(analytics, 'page_view', {
      page_title: pageTitle || pageName,
      page_location: window.location.href,
      page_name: pageName
    });
    
    // Also set current screen for mobile apps
    safeAnalytics.setCurrentScreen(analytics, pageName);
  }, []);

  // Track custom events
  const trackEvent = useCallback((eventName: string, parameters?: Record<string, any>) => {
    safeAnalytics.logEvent(analytics, eventName, parameters);
  }, []);

  // Track user engagement
  const trackEngagement = useCallback((action: string, content?: string) => {
    safeAnalytics.logEvent(analytics, 'user_engagement', {
      engagement_time_msec: 100,
      action,
      content
    });
  }, []);

  // Track button clicks
  const trackButtonClick = useCallback((buttonName: string, location?: string) => {
    safeAnalytics.logEvent(analytics, 'button_click', {
      button_name: buttonName,
      page_location: location || window.location.pathname,
      timestamp: Date.now()
    });
  }, []);

  // Track form submissions
  const trackFormSubmission = useCallback((formName: string, success: boolean = true) => {
    safeAnalytics.logEvent(analytics, 'form_submit', {
      form_name: formName,
      success,
      page_location: window.location.pathname
    });
  }, []);

  // Track scroll depth
  const trackScrollDepth = useCallback((depth: number) => {
    safeAnalytics.logEvent(analytics, 'scroll', {
      scroll_depth: depth,
      page_location: window.location.pathname
    });
  }, []);

  // Track time on page
  const trackTimeOnPage = useCallback((timeInSeconds: number) => {
    safeAnalytics.logEvent(analytics, 'timing_complete', {
      name: 'page_load',
      value: timeInSeconds * 1000, // Convert to milliseconds
      page_location: window.location.pathname
    });
  }, []);

  // Set user properties for demographics and interests
  const setUserPropertiesForAnalytics = useCallback((properties: {
    user_type?: string;
    subscription_tier?: string;
    location?: string;
    interests?: string[];
    [key: string]: any;
  }) => {
    safeAnalytics.setUserProperties(analytics, properties);
  }, []);

  // Set user ID for cross-platform tracking
  const setUserID = useCallback((userId: string) => {
    safeAnalytics.setUserId(analytics, userId);
  }, []);

  // Track external link clicks
  const trackExternalLink = useCallback((url: string, linkText?: string) => {
    safeAnalytics.logEvent(analytics, 'external_link_click', {
      link_url: url,
      link_text: linkText,
      page_location: window.location.pathname
    });
  }, []);

  // Track search queries
  const trackSearch = useCallback((searchTerm: string, resultsCount?: number) => {
    safeAnalytics.logEvent(analytics, 'search', {
      search_term: searchTerm,
      results_count: resultsCount,
      page_location: window.location.pathname
    });
  }, []);

  // Track video interactions
  const trackVideoInteraction = useCallback((videoTitle: string, action: 'play' | 'pause' | 'complete', progress?: number) => {
    safeAnalytics.logEvent(analytics, 'video_interaction', {
      video_title: videoTitle,
      action,
      progress_percent: progress,
      page_location: window.location.pathname
    });
  }, []);

  // Track social media interactions
  const trackSocialInteraction = useCallback((platform: string, action: string, content?: string) => {
    safeAnalytics.logEvent(analytics, 'social_interaction', {
      social_network: platform,
      social_action: action,
      content,
      page_location: window.location.pathname
    });
  }, []);

  // Track e-commerce events (if applicable)
  const trackPurchase = useCallback((value: number, currency: string = 'USD', items?: any[]) => {
    safeAnalytics.logEvent(analytics, 'purchase', {
      value,
      currency,
      items,
      page_location: window.location.pathname
    });
  }, []);

  // Track add to cart
  const trackAddToCart = useCallback((itemName: string, value: number, currency: string = 'USD') => {
    safeAnalytics.logEvent(analytics, 'add_to_cart', {
      item_name: itemName,
      value,
      currency,
      page_location: window.location.pathname
    });
  }, []);

  return {
    trackPageView,
    trackEvent,
    trackEngagement,
    trackButtonClick,
    trackFormSubmission,
    trackScrollDepth,
    trackTimeOnPage,
    setUserPropertiesForAnalytics,
    setUserID,
    trackExternalLink,
    trackSearch,
    trackVideoInteraction,
    trackSocialInteraction,
    trackPurchase,
    trackAddToCart
  };
};
