const featuredWorks = [
  {
    title: 'Agentic Laboratories of the Future',
    publication: 'Preprint · 2026',
    href: 'https://www.preprints.org/manuscript/202608.0213',
    image: '/highlights/agentic-labs.svg',
  },
  {
    title: 'What Is the Long-Term Value of Reliability?',
    publication: 'Preprint · 2026',
    href: 'https://arxiv.org/abs/2606.11526',
    image: '/highlights/long-term-reliability-figure.jpg',
  },
  {
    title: 'Behavioral Generative Agents for Energy Operations',
    publication: 'Preprint · 2025',
    href: 'https://arxiv.org/abs/2506.12664',
    image: '/highlights/energy-agents-figure.jpg',
  },
  {
    title: 'Experimenting under Stochastic Congestion',
    publication: 'Preprint · 2026',
    href: 'https://arxiv.org/abs/2302.12093',
    image: '/highlights/stochastic-congestion-figure.png',
  },
  {
    title: 'Non-Stationary Bandit Learning via Predictive Sampling',
    publication: 'Preprint · 2026',
    href: 'https://arxiv.org/abs/2205.01970',
    image: '/highlights/predictive-sampling-figure.jpg',
  },
  {
    title: 'Treatment Effects in Market Equilibrium',
    publication: 'American Economic Review · 2025',
    href: 'https://www.aeaweb.org/articles?id=10.1257/aer.20230039',
    image: '/highlights/market-equilibrium-figure.jpg',
  },
  {
    title: 'Load Balancing Using Sparse Communication',
    publication: 'Operations Research · 2025',
    href: 'https://pubsonline.informs.org/doi/10.1287/opre.2022.0359',
    image: '/highlights/sparse-communication-figure.jpg',
  },
  {
    title: 'AQuA: Recursively Self-Improving Quantitative Trading Research Agents',
    publication: 'Preprint · 2026',
    href: 'https://arxiv.org/abs/2608.12841',
    image: '/highlights/aqua-figure.png',
  },
  {
    title: 'Weak Signal Asymptotics for Sequentially Randomized Experiments',
    publication: 'Management Science · 2024',
    href: 'https://arxiv.org/abs/2101.09855',
    image: '/highlights/weak-signals-figure.png',
  },
];

const HeroSectionKuang = () => {
  return (
    <section id="hero" className="section-padding pt-32 pb-20 md:pt-36 md:pb-28">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20 items-start">
          {/* Left Column - Photo and Links */}
          <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 lg:sticky lg:top-32">
            <div className="fade-in w-full max-w-[18rem] mb-7">
              <img 
                src="/headshot-scaled-q5iexjyiglr7fc4g6hbsyiebegkr6unkecvr0hlp5s-2.jpg" 
                alt="Kuang Xu" 
                className="w-full aspect-square object-cover rounded-sm"
              />
            </div>
            
            {/* Contact Links */}
            <div className="space-y-3 text-base">
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
                href="https://www.youtube.com/@profkuang" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
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
              <div className="pt-2 space-y-1 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div className="text-base">
                    Knight Management Center<br/>
                    655 Knight Way<br/>
                    Stanford, CA 94305-5015
                  </div>
                </div>
              </div>
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
                className="block w-48 max-w-[75%] pt-5"
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
              Kuang Xu (Chinese: 许匡) is a Tenured Associate Professor at Stanford Graduate School of Business. His
              research develops cutting-edge AI and decision technologies for complex physical and economic systems, with
              applications spanning agentic AI, marketplaces, scientific discovery, and advanced R&amp;D and manufacturing.
              His recent research focuses on building foundation models and world models for macroscopic physical and
              economic systems, with applications to AI-powered advanced engineering systems and AI supply chains.
              Professor Xu previously
              served as a Senior Staff Scientist at Uber, where he led work on agentic system design, machine learning,
              and causal inference. He has also served as Chief AI and Data Science Advisor to Shipt Inc., Senior Advisor
              to Uber Inc., and advisor to a number of startups.
            </p>

            <p className="text-body text-muted-foreground">
              Professor Xu’s work has appeared in leading scientific journals, including <em>Operations Research</em>,{" "}
              <em>Management Science</em>, and the <em>American Economic Review</em>. He has received major honors from
              INFORMS and ACM SIGMETRICS, including First Place in the INFORMS George E. Nicholson Student Paper
              Competition, the ACM SIGMETRICS Best Paper Award, and the ACM SIGMETRICS Rising Star Research Award. He
              has served as an Associate Editor for <em>Management Science</em> and <em>Operations Research</em>. Professor
              Xu also created{" "}
              <a
                href="http://aistanford.org"
                target="_blank"
                rel="noopener"
                className="underline hover:text-foreground transition-colors"
              >
                <em>AI and Data Science Strategy</em>
              </a>
              , Stanford’s first course focused on AI and data science strategy, management, and entrepreneurship. He
              received his Ph.D. in Electrical Engineering and Computer Science from MIT and his B.S. from the University
              of Illinois at Urbana-Champaign. Professor Xu is a native of Suzhou, China.
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
                {featuredWorks.map((work) => (
                  <a
                    key={work.title}
                    href={work.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="featured-work-card"
                  >
                    <figure className="featured-work-image">
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
