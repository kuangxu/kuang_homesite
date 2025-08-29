const EngineSection = () => {
  return (
    <section id="engine" className="section-spacing section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-heading mb-6">Tikka Engine</h2>

          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            Transparent Glucose & Nutrition scores for any food. Make healthier choices for your family, 
            backed by open-source science you can trust.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-subheading text-foreground">
                Simple Health Scores You Can Trust
              </h3>
              <p className="text-body text-muted-foreground">
                Every food gets two clear scores from 0-100: a Glucose Score showing blood sugar impact 
                and a Nutrition Score for overall food quality. Our scoring formulas are completely 
                public and open-sourced—fully transparent and never influenced by sponsors or corporations.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-subheading text-foreground">
                Instant Analysis & Smart Alternatives
              </h3>
              <p className="text-body text-muted-foreground">
                Snap a photo of any food and get immediate nutritional insights. Our recommendation engine 
                suggests better alternatives for every food you scan, showing you healthier options with 
                similar taste profiles but better nutrition and glucose impact.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-subheading text-foreground">
                Comprehensive Food Database
              </h3>
              <p className="text-body text-muted-foreground">
                Search thousands of foods including popular snack brands, packaged foods, and family favorites. 
                See exactly how those seemingly innocent granola bars, fruit snacks, and "healthy" cereals 
                really impact your blood sugar and nutrition goals.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-subheading text-foreground">
                Science-Backed & Actionable
              </h3>
              <p className="text-body text-muted-foreground">
                Perfect for anyone managing blood sugar, improving personal nutrition, or wanting to break 
                the cycle of processed snacking. Makes nutrition science accessible and actionable for real life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineSection;