const AboutSection = () => {
  return (
    <section id="about" className="section-spacing section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-heading mb-6">About Us</h2>
        </div>
        
        <div className="space-y-12">
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 text-left">
            <div className="flex justify-center mb-8 md:mb-12">
              <img 
                src="/assets/tikkateam.jpg" 
                alt="Qin and Kuang, co-founders of Tikka" 
                className="w-96 h-96 md:w-[500px] md:h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <p className="text-sm md:text-body text-muted-foreground">
              Hey everyone! We are Qin and Kuang, co-founders of Tikka.
            </p>
            <p className="text-sm md:text-body text-muted-foreground">
              We started Tikka because our families struggle with diabetes, and we see firsthand 
              how a glucose-conscious diet often tastes awful and managing it can be such a pain. We decided to take this into our own hands. 
              With our combined expertise as Professors, computer scientists and data scientists, we believe we can 
              build a rigorous, transparent and powerful system to help millions struggling with diabetes, or who 
              simply want to live healthier lives, find delicious nutritious foods that are also glucose-friendly.
            </p>
            <p className="text-sm md:text-body text-muted-foreground">
              At Tikka, we believe that the future journey of health lies in combining cutting-edge 
              technology, rigorous mathematics and deeply personal care. Join us!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;