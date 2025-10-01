const WorkshopsSection = () => {
  return (
    <section id="workshops" className="section-spacing section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-left mb-16">
          <h2 className="text-heading mb-6">Executive Workshops and Consulting</h2>
        </div>
        
        <div className="space-y-12">
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 text-left">
            <div className="space-y-8">
              <div>
                <h3 className="text-subheading mb-4">Executive Workshop on AI and Data Science</h3>
                <p className="text-body text-muted-foreground mb-4">
                  I offer an <strong>intensive day-long Executive Workshop on AI and Data Science</strong> for founders, managers and business leaders:
                </p>
                <ul className="space-y-2 text-body text-muted-foreground ml-6">
                  <li>• How to leverage AI and Data Science to power business and operations.</li>
                  <li>• How to innovate in Data Science and AI and integrate them into existing operational flows at scale.</li>
                  <li>• The best practices in developing ML/AI-heavy products and work processes.</li>
                </ul>
                <p className="text-body text-muted-foreground mt-4">
                  The workshop is based on some of the <a href="http://aistanford.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">key learnings</a> from my class at Stanford GSB. It typically takes the format of 3 sessions, but can be customized to the length and format most suited for your needs. <strong>For workshop related inquiries, contact me <a href="mailto:kuangxu@stanford.edu" className="underline hover:text-foreground">here</a>.</strong>
                </p>
                <p className="text-body text-muted-foreground mt-4">
                  At Stanford, I teach extensively with the Stanford GSB executive education programs, including <a href="https://www.gsb.stanford.edu/exec-ed/programs/emerging-coo" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">The Stanford Executive Program (SEP)</a>, <a href="https://www.gsb.stanford.edu/exec-ed/programs/emerging-coo" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">The Emerging COO</a> and <a href="https://endeavor.org/executive-education/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">The Stanford-Endeavor Executive Program</a> on AI and Data Science Strategies.
                </p>
              </div>

              <div>
                <h3 className="text-subheading mb-4">Consulting and Advising</h3>
                <p className="text-body text-muted-foreground mb-4">
                  I work with companies and investment funds to help them build core AI and Data Science capabilities and products, improve operational efficiency, and develop a comprehensive AI strategy. I have served as the Chief Data Science Advisor for Shipt Inc., Senior Advisor to Uber Inc., and scientific advisors to a number of startups as well as venture capital and private equity funds. Below are some examples of high-impact client AI-driven products that I have helped develop from conception, design, to wide deployment:
                </p>
                <ul className="space-y-2 text-body text-muted-foreground ml-6">
                  <li>• <a href="https://www.uber.com/blog/freight-markov/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Uber: Dynamic pricing framework for Uber Freight</a></li>
                  <li>• <a href="https://corporate.target.com/article/2023/02/sortation-centers" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Shipt & Target: marketplace AI engine for Last Mile Delivery</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-8 md:mt-12 text-center">
              <p className="text-body text-muted-foreground mb-4">
                Ready to transform your organization with AI and data-driven insights?
              </p>
              <a 
                href="mailto:kuangxu@stanford.edu"
                className="inline-flex items-center justify-center p-3 md:p-4 bg-background text-foreground hover:bg-muted transition-colors duration-300 min-w-[200px]"
                style={{ borderRadius: '5px' }}
                aria-label="Contact for consulting"
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
    </section>
  );
};

export default WorkshopsSection;

