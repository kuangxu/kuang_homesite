const AboutSection = () => {
  return (
    <section id="about" className="section-spacing section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-heading mb-6">About Us</h2>
          <div className="divider mb-8 max-w-xs mx-auto"></div>
        </div>
        
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-body text-muted-foreground mb-8">
              At Tikka, we believe that the future of health lies in the intersection of cutting-edge 
              technology and deeply personal care. Our team of world-class engineers, data scientists, 
              and health experts is dedicated to transforming how people understand and manage their 
              nutritional health.
            </p>
            <p className="text-body text-muted-foreground">
              Founded with the vision of making personalized nutrition accessible to everyone, we're 
              building the tools and technologies that will empower millions to make informed decisions 
              about their health, one meal at a time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="text-center space-y-4">
              <h3 className="text-subheading text-foreground">Mission</h3>
              <p className="text-small text-muted-foreground">
                To democratize personalized nutrition through intelligent technology that anticipates 
                and responds to individual health needs.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="text-subheading text-foreground">Vision</h3>
              <p className="text-small text-muted-foreground">
                A world where everyone has access to nutrition recommendations as unique as their DNA, 
                lifestyle, and health goals.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="text-subheading text-foreground">Values</h3>
              <p className="text-small text-muted-foreground">
                Privacy-first design, scientific rigor, and unwavering commitment to improving 
                human health through technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;