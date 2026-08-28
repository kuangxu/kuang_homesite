const WorkshopsSection = () => {
  return (
    <section id="workshops" className="section-spacing section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left spacer to match HeroSection layout */}
          <div className="lg:w-80 flex-shrink-0"></div>
          
          {/* Right column content - matches Research page main content width */}
          <div className="flex-1 space-y-6">
            <div className="text-left mb-16">
              <h2 className="text-heading mb-6">Leadership Advisory</h2>
            </div>
            
            <div className="space-y-12">
              <div className="space-y-8 md:space-y-12 text-left">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-subheading mb-4">Executive AI Leadership Workshops</h3>
                    <p className="text-body text-muted-foreground mb-4">
                      I offer an <strong>intensive day-long workshop on AI and data science leadership</strong> for founders, executives, and business leaders:
                    </p>
                    <ul className="space-y-2 text-body text-muted-foreground ml-6">
                      <li>• How to translate advances in AI and data science into business and operating priorities.</li>
                      <li>• How to lead AI innovation and integrate new capabilities into existing operations at scale.</li>
                      <li>• Best practices for building ML/AI-intensive products, teams, and work processes.</li>
                    </ul>
                    <p className="text-body text-muted-foreground mt-4">
                      The workshop draws on <a href="http://aistanford.org/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">key leadership frameworks</a> from my class at Stanford GSB. It typically takes the format of three sessions and can be customized to the priorities, length, and format best suited to your leadership team. <strong>For workshop inquiries, contact me <a href="mailto:kuangxu@stanford.edu" className="underline hover:text-foreground">here</a>.</strong>
                    </p>
                    <p className="text-body text-muted-foreground mt-4">
                      At Stanford, I teach extensively with the Stanford GSB executive education programs, including <a href="https://www.gsb.stanford.edu/exec-ed/programs/emerging-coo" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">The Stanford Executive Program (SEP)</a>, <a href="https://www.gsb.stanford.edu/exec-ed/programs/emerging-coo" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">The Emerging COO</a> and <a href="https://endeavor.org/executive-education/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">The Stanford-Endeavor Executive Program</a> on AI and Data Science Strategies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-subheading mb-4">Strategic Advisory</h3>
                    <p className="text-body text-muted-foreground mb-4">
                      I advise leadership teams at companies and investment funds on building core AI and data science capabilities, setting a comprehensive AI strategy, improving operational performance, and developing high-impact products. I have served as Chief AI and Data Science Advisor to Shipt Inc., Senior Advisor to Uber Inc., and scientific advisor to startups, venture capital firms, and private equity funds. Below are examples of AI-driven products I have helped guide from conception and design through broad deployment:
                    </p>
                    <ul className="space-y-2 text-body text-muted-foreground ml-6">
                      <li>• <a href="https://www.uber.com/blog/freight-markov/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Uber: Dynamic pricing framework for Uber Freight</a></li>
                      <li>• <a href="https://corporate.target.com/article/2023/02/sortation-centers" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Shipt & Target: marketplace AI engine for Last Mile Delivery</a></li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 md:mt-12 text-center">
                  <p className="text-body text-muted-foreground mb-4">
                    Looking for strategic guidance on AI, data, and organizational transformation?
                  </p>
                  <a 
                    href="mailto:kuangxu@stanford.edu"
                    className="inline-flex items-center justify-center p-3 md:p-4 bg-background text-foreground hover:bg-muted transition-colors duration-300 min-w-[200px]"
                    style={{ borderRadius: '5px' }}
                    aria-label="Contact for leadership advisory"
                  >
                    <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <div className="ml-3 md:ml-4">
                      <div className="text-sm md:text-base font-medium">Get in Touch</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
