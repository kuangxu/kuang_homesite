const ContactSection = () => {
  return (
    <section id="contact" className="section-spacing section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-heading mb-6">Contact</h2>
        
        <div className="space-y-8">
          <p className="text-body text-muted-foreground">
          👇👇👇 Give us a shout if you'd like to build with us! We're always looking for passionate design partners!  
          </p>
          
          <div className="space-y-6">
            
            <div className="space-y-4">
              <p className="text-small text-muted-foreground">
                Contact us:
              </p>
              <a 
                href="mailto:inquiry@tikkahealth.com" 
                className="text-body text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                support@tikkahealth.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="divider mb-8 max-w-lg mx-auto"></div>
          <p className="text-small text-muted-foreground">
            © 2025 Tikka Health. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;