import { orderedHighlights } from '../data/highlights';

const recentWorks = orderedHighlights.slice(0, 9);

const HeroSectionKuang = () => {
  return (
    <section id="hero" className="section-padding pt-32 pb-20 md:pt-36 md:pb-28">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column - Photo and Links */}
          <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 lg:sticky lg:top-32">
            <div className="fade-in w-full max-w-[18rem] mx-auto mb-7">
              <img 
                src="/headshot-scaled-q5iexjyiglr7fc4g6hbsyiebegkr6unkecvr0hlp5s-2.jpg" 
                alt="Kuang Xu" 
                className="w-full aspect-square object-cover rounded-sm"
              />
            </div>
            
            {/* Contact Links */}
            <div className="w-full max-w-[18rem] mx-auto space-y-3 text-base">
              <a 
                href="https://www.linkedin.com/in/kuangxu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a 
                href="https://twitter.com/ProfKuangXu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                X.com
              </a>
              <a 
                href="https://scholar.google.com/citations?user=kuangxu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                </svg>
                Google Scholar
              </a>
              <a 
                href="mailto:kuangxu@stanford.edu"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                kuangxu@stanford.edu
              </a>
              <a 
                href="https://kuangxu.substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
                Substack Newsletter
              </a>
              <a 
                href="https://www.gsb.stanford.edu/faculty-research/faculty/kuang-xu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors pt-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Stanford GSB Faculty Profile
              </a>
              <a
                href="https://www.gsb.stanford.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-52 max-w-full pt-6 mx-auto"
                aria-label="Stanford Graduate School of Business"
              >
                <img
                  src="https://www.gsb.stanford.edu/themes/custom/gsb/logo.svg"
                  alt="Stanford Graduate School of Business"
                  className="block w-full h-auto"
                />
              </a>
            </div>
          </aside>

          {/* Right Column - Bio */}
          <div className="flex-1 space-y-6 fade-in">
            <p className="text-body text-muted-foreground">
              Kuang Xu (Chinese: 许匡) is a Tenured Associate Professor at Stanford Graduate School of Business and, by
              courtesy, an Associate Professor of Electrical Engineering at Stanford University.{" "}
              His research group focuses on developing{" "}
              <span className="font-medium text-foreground">advanced AI and decision systems for physical reality</span>, spanning
              marketplaces, logistics, healthcare, advanced manufacturing, and scientific discovery.
            </p>

            <p className="text-body text-muted-foreground">
              Professor Xu was a Senior Staff Scientist at <em>Uber</em>, where he led the creation and deployment of{" "}
              one of Uber’s first{" "}
              <a
                href="https://www.axios.com/2026/02/11/uber-eats-ai-grocery-cart-assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="italic text-foreground hover:text-muted-foreground transition-colors"
              >
                consumer agentic AI
              </a>
              {" "}systems. His industry roles also include Chief AI Advisor to{" "}
              <em>Shipt</em>, a Target subsidiary, and advisor to multiple AI and deep-tech startups.
            </p>

            <p className="text-body text-muted-foreground">
              Professor Xu’s research has appeared in leading journals including{" "}
              <em>Operations Research, Management Science,</em> and the{" "}
              <em>American Economic Review</em>, and he has served as an
              Associate Editor for both Management Science and Operations Research. He launched{" "}
              <a
                href="http://aistanford.org"
                target="_blank"
                rel="noopener noreferrer"
                className="italic text-foreground hover:text-muted-foreground transition-colors"
              >
                AI Strategy
              </a>
              , Stanford’s first course on building and leading AI-native products and organizations. His honors include
              the INFORMS Nicholson Prize, the ACM SIGMETRICS Best Paper Award, and the ACM SIGMETRICS Rising Star
              Research Award.
            </p>

            <p className="text-body text-muted-foreground">
              Professor Xu received his Ph.D. in EECS from MIT and his B.S. in EE from the University of Illinois at
              Urbana-Champaign. Professor Xu is a native of Suzhou, China.
            </p>

            {/* Recent work */}
            <div className="pt-4">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h2 className="text-xl font-medium text-foreground">Recent work</h2>
                <a
                  href="#/highlights"
                  className="text-small text-muted-foreground hover:text-foreground transition-colors no-underline"
                >
                  All highlights
                </a>
              </div>

              <div className="featured-work-grid mt-5">
                {recentWorks.map((work) => (
                  <a
                    key={work.title}
                    href={work.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="featured-work-card"
                  >
                    <figure className={`featured-work-image${work.figure ? '' : ' featured-work-image--cover'}`}>
                      <img src={work.image} alt="" loading="lazy" />
                    </figure>
                    <div className="featured-work-copy">
                      <span>{work.publication}</span>
                      <h3>
                        {work.title}
                        <span aria-hidden="true">↗</span>
                      </h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Banner Image */}
            <figure className="homepage-banner">
              <img 
                src="/2401302024_01_29_Stanford011-copy-2-1536x557.jpeg" 
                alt="Kuang Xu at Stanford" 
                className="homepage-banner-photo"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionKuang;
