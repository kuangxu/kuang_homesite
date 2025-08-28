const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center max-w-4xl mx-auto fade-in">
        <h1 className="text-display mb-12 md:mb-16">
          TIKKA
        </h1>
        <div className="divider mb-12 md:mb-16 max-w-lg mx-auto"></div>
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-body text-muted-foreground">
            Imagine a world where we anticipate your body's needs before you even feel them, where 
            cutting-edge AI and machine learning come together to help you find a delicious meal that 
            also keeps blood glucose in check.
          </p>
          <p className="text-body text-muted-foreground">
            That's the future we're building at Tikka to empower millions to live healthier, more vibrant 
            lives. And we're just getting started.
          </p>
          <p className="text-small text-muted-foreground mt-8">
            Stay tuned for what's next!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;