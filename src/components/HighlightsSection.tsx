type Highlight = {
  title: string;
  summary: string;
  publication: string;
  href: string;
  image: string;
  figure?: boolean;
};

const highlights: Highlight[] = [
  {
    title: 'Uber Consumer AI',
    summary: 'A consumer AI agent that turns grocery lists, recipes, and photos into checkout-ready carts using multimodal understanding, real-time availability and pricing, and customers’ past orders.',
    publication: 'Real-world deployment · Uber, 2026',
    href: 'https://www.axios.com/2026/02/11/uber-eats-ai-grocery-cart-assistant',
    image: '/highlights/uber-consumer-ai.webp',
  },
  {
    title: 'Target’s Last-Mile Delivery System',
    summary: 'The core batching and routing algorithm, designed by Professor Xu, helps power Target’s sortation-center network for faster local delivery, lower costs, and greater last-mile capacity.',
    publication: 'Real-world deployment · Target and Shipt, 2023',
    href: 'https://corporate.target.com/news-features/article/2023/02/sortation-centers',
    image: '/highlights/target-last-mile.png',
    figure: true,
  },
  {
    title: 'Freight Pricing with a Controlled Markov Decision Process',
    summary: 'A dynamic pricing system computes sequences of upfront prices for tens of thousands of freight loads each day, balancing booking speed, operating costs, and service reliability.',
    publication: 'Real-world deployment · Uber Freight, 2021',
    href: 'https://www.uber.com/us/en/blog/freight-markov/',
    image: '/highlights/uber-freight-pricing.png',
    figure: true,
  },
  {
    title: 'Agentic Laboratories of the Future',
    summary: 'A proposed architecture for scientific discovery organized around laboratory world models that coordinate human judgment, AI reasoning, experimental evidence, and physical execution.',
    publication: 'Preprint, 2026',
    href: 'https://www.preprints.org/manuscript/202608.0213',
    image: '/highlights/agentic-labs.svg',
  },
  {
    title: 'What Is the Long-Term Value of Reliability?',
    summary: 'Chronos LTV combines sequential causal inference with a Markov decision process to measure how service delays and defects affect customer behavior and business outcomes over time.',
    publication: 'Preprint, 2026',
    href: 'https://arxiv.org/abs/2606.11526',
    image: '/highlights/long-term-reliability-figure.jpg',
    figure: true,
  },
  {
    title: 'Behavioral Generative Agents for Energy Operations',
    summary: 'Generative agents simulate sequential customer decisions under changing electricity prices and outage risks, revealing heterogeneous preferences and behavior during rare, high-impact events.',
    publication: 'Preprint, 2025',
    href: 'https://arxiv.org/abs/2506.12664',
    image: '/highlights/energy-agents-figure.jpg',
    figure: true,
  },
  {
    title: 'Experimenting under Stochastic Congestion',
    summary: 'Queueing-aware estimators address interference among waiting customers, improving switchback experiments and recovering system-wide policy effects from unit-level randomization.',
    publication: 'Preprint, 2026',
    href: 'https://arxiv.org/abs/2302.12093',
    image: '/highlights/stochastic-congestion-figure.png',
    figure: true,
  },
  {
    title: 'Non-Stationary Bandit Learning via Predictive Sampling',
    summary: 'Predictive sampling favors information that will remain useful as an environment changes, with regret guarantees and stronger performance than Thompson sampling across studied non-stationary settings.',
    publication: 'Preprint, 2026',
    href: 'https://arxiv.org/abs/2205.01970',
    image: '/highlights/predictive-sampling-figure.jpg',
    figure: true,
  },
  {
    title: 'Treatment Effects in Market Equilibrium',
    summary: 'A framework for estimating direct effects, spillovers, and welfare-improving targeting from unit-level experiments conducted within a single large marketplace.',
    publication: 'American Economic Review, 2025, 115(10), 3273–3321',
    href: 'https://www.aeaweb.org/articles?id=10.1257/aer.20230039',
    image: '/highlights/market-equilibrium-figure.jpg',
    figure: true,
  },
  {
    title: 'Load Balancing Using Sparse Communication',
    summary: 'State approximation enables asymptotically optimal routing with little communication, matching or improving leading load-balancing methods while reducing communication rates by as much as 90 percent.',
    publication: 'Operations Research, 2025, 74(2), 1026–1046',
    href: 'https://pubsonline.informs.org/doi/10.1287/opre.2022.0359',
    image: '/highlights/sparse-communication-figure.jpg',
    figure: true,
  },
  {
    title: 'AQuA: Recursively Self-Improving Quantitative Trading Research Agents',
    summary: 'Two autonomous research systems retain evidence from earlier experiments to improve subsequent factor discovery and model development within carefully controlled quantitative-investment environments.',
    publication: 'Preprint, 2026',
    href: 'https://arxiv.org/abs/2608.12841',
    image: '/highlights/aqua-figure.png',
    figure: true,
  },
  {
    title: 'Weak Signal Asymptotics for Sequentially Randomized Experiments',
    summary: 'A diffusion-limit analysis provides instance-specific views of regret and belief evolution, exposing a tradeoff between near-optimal Thompson sampling and unstable posterior beliefs.',
    publication: 'Management Science, 2024',
    href: 'https://arxiv.org/abs/2101.09855',
    image: '/highlights/weak-signals-figure.png',
    figure: true,
  },
  {
    title: 'Learning and Information in Stochastic Networks and Queues',
    summary: 'A unified account of how supervised learning, bandits, reinforcement learning, and information shape the stability and optimization of queueing networks.',
    publication: 'INFORMS TutORials in Operations Research, 2021, 161–198',
    href: 'https://pubsonline.informs.org/doi/10.1287/educ.2021.0235',
    image: '/highlights/learning-networks-figure.jpg',
    figure: true,
  },
  {
    title: 'Experimenting in Equilibrium',
    summary: 'Mean-field modeling and small randomized perturbations make it possible to estimate policy gradients and optimize large marketplaces without moving the system far from equilibrium.',
    publication: 'Management Science, 2021, 67(11), 6694–6715',
    href: 'https://pubsonline.informs.org/doi/abs/10.1287/mnsc.2020.3844',
    image: '/highlights/experimenting-equilibrium-figure.jpg',
    figure: true,
  },
  {
    title: 'Delay-Predictability Tradeoffs in Reaching a Secret Goal',
    summary: 'The Goal Prediction game quantifies privacy under surveillance: an agent can reduce an adversary’s prediction accuracy only in inverse proportion to the time spent reaching the goal.',
    publication: 'Operations Research, 2018, 66(2), 587–596',
    href: 'https://pubsonline.informs.org/doi/full/10.1287/opre.2017.1682',
    image: '/highlights/secret-goal-figure.jpg',
    figure: true,
  },
  {
    title: 'On the Capacity of Information Processing Systems',
    summary: 'An adaptive inspection policy uses noisy expert judgments to recover hidden labels accurately while asymptotically minimizing the number of experts needed to keep the system stable.',
    publication: 'Operations Research, 2018, 66(2), 568–586',
    href: 'https://pubsonline.informs.org/doi/full/10.1287/opre.2017.1680',
    image: '/highlights/information-capacity-figure.jpg',
    figure: true,
  },
  {
    title: 'Using Future Information to Reduce Emergency Department Waiting Times',
    summary: 'Proactive diversion policies act on predicted arrivals before congestion peaks, remaining effective with noisy forecasts and reducing simulated delays by as much as 15 percent.',
    publication: 'Manufacturing & Service Operations Management, 2016, 18(3), 314–331',
    href: 'https://pubsonline.informs.org/doi/abs/10.1287/msom.2015.0573',
    image: '/highlights/emergency-diversion-figure.jpg',
    figure: true,
  },
  {
    title: 'Queueing with Future Information',
    summary: 'A finite lookahead window can keep delays bounded in heavy traffic, whereas queues without future information grow without bound as demand approaches capacity.',
    publication: 'Annals of Applied Probability, 2014, 24(5), 2091–2142',
    href: 'https://projecteuclid.org/euclid.aoap/1403812371',
    image: '/highlights/queueing-future-figure.jpg',
    figure: true,
  },
  {
    title: 'On the Power of (Even a Little) Resource Pooling',
    summary: 'Even a small centrally pooled share of server capacity changes heavy-traffic queue growth from linear to logarithmic, producing an exponential improvement in delay.',
    publication: 'Stochastic Systems, 2012, 2, 1–66',
    href: 'https://pubsonline.informs.org/doi/abs/10.1287/11-SSY033',
    image: '/highlights/resource-pooling-figure.jpg',
    figure: true,
  },
];

const highlightYear = (highlight: Highlight) =>
  Number(highlight.publication.match(/\b(?:19|20)\d{2}\b/)?.[0] ?? 0);

const orderedHighlights = [...highlights].sort((a, b) => {
  const aIsDeployment = a.publication.startsWith('Real-world deployment');
  const bIsDeployment = b.publication.startsWith('Real-world deployment');
  const aRank = highlightYear(a) + (aIsDeployment ? 0.5 : 0);
  const bRank = highlightYear(b) + (bIsDeployment ? 0.5 : 0);

  return bRank - aRank;
});

const uberHighlightIndex = orderedHighlights.findIndex(({ title }) => title === 'Uber Consumer AI');
const reliabilityHighlightIndex = orderedHighlights.findIndex(
  ({ title }) => title === 'What Is the Long-Term Value of Reliability?',
);

if (uberHighlightIndex !== -1 && reliabilityHighlightIndex !== -1) {
  const [uberHighlight] = orderedHighlights.splice(uberHighlightIndex, 1);
  const updatedReliabilityIndex = orderedHighlights.findIndex(
    ({ title }) => title === 'What Is the Long-Term Value of Reliability?',
  );
  orderedHighlights.splice(updatedReliabilityIndex + 1, 0, uberHighlight);
}

const HighlightsSection = () => {
  return (
    <section id="highlights" className="section-spacing section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-10 md:mb-12">
          <h1 className="text-heading">Highlights</h1>
          <p className="mt-4 max-w-3xl text-xl leading-relaxed text-foreground md:text-2xl">
            Selected projects developed by my research team.
          </p>
        </div>

        <div className="highlights-grid">
          {orderedHighlights.map((highlight) => (
            <a
              key={highlight.title}
              href={highlight.href}
              target="_blank"
              rel="noopener noreferrer"
              className="highlight-card"
            >
              <figure className={`highlight-image${highlight.figure ? ' highlight-image--figure' : ''}`}>
                <img src={highlight.image} alt={`Image for ${highlight.title}`} loading="lazy" />
              </figure>
              <div className="highlight-copy">
                <span className="highlight-publication">{highlight.publication}</span>
                <h3>{highlight.title}<span aria-hidden="true">↗</span></h3>
                <p className="highlight-summary">{highlight.summary}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
