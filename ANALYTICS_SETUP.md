# Firebase Analytics Setup Guide

This guide will help you set up comprehensive analytics tracking for the Tikka Engine homesite using Firebase Analytics.

## What You'll Get

With this setup, you'll be able to track:

### Automatic Tracking
- **Page Views**: Every page navigation is automatically tracked
- **Scroll Depth**: Tracks when users scroll 25%, 50%, 75%, and 100% of the page
- **Time on Page**: Tracks how long users spend on each page
- **User Engagement**: Automatic engagement metrics

### Manual Tracking (via hooks)
- **Button Clicks**: Track specific button interactions
- **Form Submissions**: Track form completions and success/failure
- **External Links**: Track outbound link clicks
- **Custom Events**: Track any custom user interactions
- **User Properties**: Set demographics, interests, user types
- **Search Queries**: Track search functionality
- **Video Interactions**: Track video play/pause/completion
- **Social Media**: Track social sharing and interactions
- **E-commerce**: Track purchases and cart additions (if applicable)

## Setup Steps

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Name your project (e.g., "tikka-engine-homesite")
4. **IMPORTANT**: Enable Google Analytics during project creation
5. Choose your Analytics account or create a new one
6. Accept the terms and continue

### 2. Get Firebase Configuration

1. In your Firebase project, go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click "Add app" and choose "Web"
4. Register your app with a nickname (e.g., "tikka-homesite-web")
5. Copy the configuration object

### 3. Set Environment Variables

Create a `.env` file in your project root with the following variables:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace the values with your actual Firebase configuration.

### 4. Configure Analytics in Firebase Console

1. In Firebase Console, go to Analytics
2. Set up data collection preferences
3. Configure user properties for demographics and interests
4. Set up conversion events if needed

## Usage Examples

### Basic Button Tracking

```tsx
import { useAnalytics } from '@/hooks/use-analytics';

const MyComponent = () => {
  const { trackButtonClick } = useAnalytics();

  const handleClick = () => {
    trackButtonClick('demo_request_button', '/');
    // Your button logic here
  };

  return <button onClick={handleClick}>Request Demo</button>;
};
```

### Form Submission Tracking

```tsx
const ContactForm = () => {
  const { trackFormSubmission, setUserPropertiesForAnalytics } = useAnalytics();

  const handleSubmit = (formData) => {
    // Track the form submission
    trackFormSubmission('contact_form', true);
    
    // Set user properties based on form data
    setUserPropertiesForAnalytics({
      user_type: 'potential_customer',
      interests: ['engine', 'technology'],
      location: formData.country
    });
  };
};
```

### Custom Event Tracking

```tsx
const VideoPlayer = () => {
  const { trackVideoInteraction } = useAnalytics();

  const handlePlay = () => {
    trackVideoInteraction('engine_demo_video', 'play', 0);
  };

  const handlePause = () => {
    trackVideoInteraction('engine_demo_video', 'pause', 50);
  };
};
```

### External Link Tracking

```tsx
const SocialLinks = () => {
  const { trackExternalLink, trackSocialInteraction } = useAnalytics();

  const handleGitHubClick = () => {
    trackExternalLink('https://github.com/your-repo', 'GitHub Repository');
    trackSocialInteraction('github', 'click', 'repository_link');
  };
};
```

## Available Analytics Functions

### Page and Navigation
- `trackPageView(pageName, pageTitle?)` - Track page views
- `trackEvent(eventName, parameters?)` - Track custom events

### User Interactions
- `trackButtonClick(buttonName, location?)` - Track button clicks
- `trackFormSubmission(formName, success?)` - Track form submissions
- `trackExternalLink(url, linkText?)` - Track external link clicks
- `trackEngagement(action, content?)` - Track user engagement

### Content Interactions
- `trackScrollDepth(depth)` - Track scroll depth (automatic)
- `trackTimeOnPage(timeInSeconds)` - Track time on page (automatic)
- `trackVideoInteraction(videoTitle, action, progress?)` - Track video interactions
- `trackSearch(searchTerm, resultsCount?)` - Track search queries

### User Properties
- `setUserPropertiesForAnalytics(properties)` - Set user demographics and interests
- `setUserID(userId)` - Set user ID for cross-platform tracking

### E-commerce (if applicable)
- `trackPurchase(value, currency, items?)` - Track purchases
- `trackAddToCart(itemName, value, currency?)` - Track cart additions

## Viewing Analytics Data

1. **Firebase Console**: Go to Analytics section to see real-time and historical data
2. **Google Analytics**: Link your Firebase project to Google Analytics for advanced reporting
3. **Custom Dashboards**: Create custom dashboards for specific metrics

## Privacy and Compliance

- Analytics respects user privacy settings
- No personally identifiable information is collected by default
- Compliant with GDPR and other privacy regulations
- Users can opt out through browser settings

## Troubleshooting

### Analytics Not Working
1. Check that environment variables are set correctly
2. Verify Firebase project has Analytics enabled
3. Check browser console for errors
4. Ensure you're not in development mode (analytics may be limited)

### Missing Data
1. Analytics data can take up to 24 hours to appear
2. Check that events are being fired in browser dev tools
3. Verify Firebase configuration is correct

## Next Steps

1. **Custom Events**: Define custom events specific to your business needs
2. **Conversion Tracking**: Set up conversion goals for key user actions
3. **A/B Testing**: Use Firebase A/B Testing for optimization
4. **Audience Segmentation**: Create user segments based on behavior
5. **Integration**: Connect with other Firebase services (Auth, Firestore, etc.)

## Support

For Firebase Analytics support:
- [Firebase Documentation](https://firebase.google.com/docs/analytics)
- [Google Analytics Help](https://support.google.com/analytics)
- [Firebase Console](https://console.firebase.google.com/)
