import React from 'react';
import { useAnalytics } from '@/hooks/use-analytics';
import { Button } from '@/components/ui/button';

// Example component showing how to use analytics
export const ExampleAnalyticsUsage: React.FC = () => {
  const {
    trackButtonClick,
    trackFormSubmission,
    trackExternalLink,
    trackEngagement,
    setUserPropertiesForAnalytics
  } = useAnalytics();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission
    trackFormSubmission('contact_form', true);
    
    // Set user properties based on form data
    setUserPropertiesForAnalytics({
      user_type: 'potential_customer',
      interests: ['engine', 'technology'],
      location: 'US' // You could get this from form data
    });
    
    console.log('Form submitted and tracked!');
  };

  const handleDemoClick = () => {
    trackButtonClick('demo_button', '/');
    trackEngagement('demo_request', 'engine_demo');
    console.log('Demo button clicked and tracked!');
  };

  const handleExternalLink = () => {
    trackExternalLink('https://github.com/your-repo', 'GitHub Repository');
    console.log('External link clicked and tracked!');
  };

  return (
    <div className="space-y-4 p-4 border rounded-lg">
      <h3 className="text-lg font-semibold">Analytics Examples</h3>
      
      {/* Button click tracking */}
      <Button 
        onClick={handleDemoClick}
        className="w-full"
      >
        Request Demo
      </Button>

      {/* Form submission tracking */}
      <form onSubmit={handleContactSubmit} className="space-y-2">
        <input 
          type="email" 
          placeholder="Enter your email"
          className="w-full p-2 border rounded"
          required
        />
        <Button type="submit" className="w-full">
          Contact Us
        </Button>
      </form>

      {/* External link tracking */}
      <Button 
        onClick={handleExternalLink}
        variant="outline"
        className="w-full"
      >
        Visit GitHub
      </Button>
    </div>
  );
};
