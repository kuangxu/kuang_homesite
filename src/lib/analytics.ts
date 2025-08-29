// Simple, non-blocking analytics
let analyticsInstance: any = null;
let isInitialized = false;

// Initialize analytics in the background
const initAnalytics = () => {
  if (isInitialized) return;
  
  // Use setTimeout to defer initialization
  setTimeout(async () => {
    try {
      const { getAnalytics, isSupported } = await import('firebase/analytics');
      const { app } = await import('./firebase');
      
      const supported = await isSupported();
      if (supported) {
        analyticsInstance = getAnalytics(app);
      }
      isInitialized = true;
    } catch (error) {
      console.log('Analytics initialization failed:', error);
      isInitialized = true;
    }
  }, 100); // Small delay to ensure app is fully loaded
};

// Start initialization immediately
initAnalytics();

// Simple event tracking - no async/await needed
export const trackEvent = (eventName: string, parameters?: any) => {
  if (!analyticsInstance) return; // Silently fail if not ready
  
  try {
    // Import and use logEvent synchronously
    import('firebase/analytics').then(({ logEvent }) => {
      logEvent(analyticsInstance, eventName, parameters);
    }).catch(() => {
      // Silently fail
    });
  } catch (error) {
    // Silently fail
  }
};

// Safe page view tracking
export const trackPageView = (pageName: string, pageTitle?: string) => {
  trackEvent('page_view', {
    page_title: pageTitle || pageName,
    page_location: window.location.href,
    page_name: pageName
  });
};

// Safe button click tracking
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    page_location: location || window.location.pathname,
    timestamp: Date.now()
  });
};

// Safe external link tracking
export const trackExternalLink = (url: string, linkText?: string) => {
  trackEvent('external_link_click', {
    link_url: url,
    link_text: linkText,
    page_location: window.location.pathname
  });
};

// Safe social interaction tracking
export const trackSocialInteraction = (platform: string, action: string, content?: string) => {
  trackEvent('social_interaction', {
    social_network: platform,
    social_action: action,
    content,
    page_location: window.location.pathname
  });
};
