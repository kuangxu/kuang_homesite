const EngineSection = () => {
  return (
    <section id="engine" className="section-spacing section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-heading mb-6">Tikka Engine</h2>
          <div className="divider mb-8 max-w-xs mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-subheading text-foreground">
              Precision Health Technology
            </h3>
            <p className="text-body text-muted-foreground">
              Our proprietary AI engine combines advanced machine learning with personalized health data 
              to deliver unprecedented accuracy in nutritional recommendations.
            </p>
            <p className="text-body text-muted-foreground">
              By analyzing thousands of data points including glucose response patterns, metabolic markers, 
              and individual preferences, Tikka Engine creates a truly personalized nutrition experience.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-3">
              <h4 className="text-small font-medium text-foreground uppercase tracking-wider">
                Real-time Analysis
              </h4>
              <p className="text-small text-muted-foreground">
                Continuous monitoring and adjustment of nutritional recommendations based on live health data.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-small font-medium text-foreground uppercase tracking-wider">
                Predictive Modeling
              </h4>
              <p className="text-small text-muted-foreground">
                Advanced algorithms that anticipate your body's needs before symptoms appear.
              </p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-small font-medium text-foreground uppercase tracking-wider">
                Personalized Nutrition
              </h4>
              <p className="text-small text-muted-foreground">
                Tailored meal recommendations that balance taste preferences with optimal health outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineSection;