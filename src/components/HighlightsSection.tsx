import { orderedHighlights } from '../data/highlights';

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
