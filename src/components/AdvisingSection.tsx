const AdvisingSection = () => {
  return (
    <section id="advising" className="section-spacing section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-left mb-16">
          <h2 className="text-heading mb-6">Advising</h2>
        </div>
        
        <div className="space-y-12">
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 text-left">
            <p className="text-body text-muted-foreground">
              I have been fortunate to be able to work with the following students and postdocs:
            </p>
            
            <div className="space-y-4 text-body text-muted-foreground">
              <ul className="space-y-3">
                <li>
                  <a href="https://www.linkedin.com/in/chao-qin-b954228b/" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline">Chao Qin</a>, Postdoc, GSB, Stanford University (co-advisor: Guido Imbens, Stefan Wager)
                </li>
                <li>
                  <a href="https://congchenhappy.github.io/-/index.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline">Cong Chen</a>, Postdoc, GSB & Stanford Energy Fellowship, Stanford University (co-advisor: Itai Ashlagi, Omer Karaduman)
                </li>
                <li>
                  <a href="https://www.gsb.stanford.edu/programs/phd/academic-experience/students/margaret-redfield" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline">Margaret Redfield</a>, MS, GSB, Stanford University (co-advisor: Omer Karaduman)
                  <ul className="ml-6 mt-1">
                    <li>First position: Data Scientist, C3.AI</li>
                  </ul>
                </li>
                <li>
                  <a href="https://yuey7x.github.io/" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline">Yueyang Liu</a>, PhD, MS&E, Stanford University (co-advisor: Benjamin Van Roy)
                  <ul className="ml-6 mt-1">
                    <li>First position: Assistant Professor, Rice University</li>
                  </ul>
                </li>
                <li>
                  <a href="https://scholar.google.com/citations?user=SJQba0QAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline">Gal Mendelson</a>, Postdoc, GSB, Stanford University
                  <ul className="ml-6 mt-1">
                    <li>First position: Assistant Professor, Israel Institute of Technology (Technion)</li>
                  </ul>
                </li>
                <li>
                  <a href="https://sites.google.com/stanford.edu/mserturk/home?authuser=0" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline">Mine Su Erturk</a>, PhD, GSB, Stanford University (co-advisor: Lawrence Wein)
                  <ul className="ml-6 mt-1">
                    <li>First position: Research Scientist, Meta</li>
                  </ul>
                </li>
                <li>
                  <a href="https://sites.google.com/stanford.edu/adevraj/home" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline">Adithya M Devraj</a>, Postdoc
                  <ul className="ml-6 mt-1">
                    <li>First position: Machine Learning Research, Ford Motor Company</li>
                  </ul>
                </li>
                <li>
                  <a href="https://rsong.me/" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline">Ruiyang Song</a>, PhD, Electrical Engineering, Stanford University
                  <ul className="ml-6 mt-1">
                    <li>First position: Quantitative Researcher, Two Sigma Investments</li>
                  </ul>
                </li>
                <li>
                  <a href="http://www.mit.edu/~zhixu/" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline">Zhi Xu</a>, MS, Massachusetts Institute of Technology (co-advisor: John N. Tsitsiklis)
                  <br/>
                  Masters thesis: <a href="https://dspace.mit.edu/handle/1721.1/112054" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Private sequential search and optimization</a>
                  <ul className="ml-6 mt-1">
                    <li>First position: Quantitative Researcher, Radix Trading</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="space-y-8 pt-8">
              <div>
                <h3 className="text-subheading mb-4">Teaching</h3>
                <ul className="space-y-3 text-body text-muted-foreground">
                  <li>
                    <a href="https://explorecourses.stanford.edu/search?q=OIT+247%3a+Optimization+and+Simulation+Modeling+-+Accelerated&view=catalog&page=0&filter-coursestatus-Active=on&collapse=&academicYear=20192020" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline">Optimization, Simulation and Modeling (OIT 247)</a>, MBA, Stanford GSB
                  </li>
                  <li>
                    <a href="https://explorecourses.stanford.edu/search?q=oit+349&view=catalog&page=0&filter-coursestatus-Active=on&collapse=&academicYear=20202021" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline">Business Analytics (OIT 349)</a>, MSx, Stanford GSB
                  </li>
                  <li>
                    <a href="https://sites.google.com/view/drift-method/home" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline">Drift Method – From Stochastic Networks to Machine Learning (OIT 611)</a>, PhD, Stanford GSB
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 md:mt-12 text-center">
              <p className="text-body text-muted-foreground mb-4">
                Interested in working with me? Please reach out to discuss potential opportunities.
              </p>
              <a 
                href="mailto:kuangxu@stanford.edu"
                className="inline-flex items-center justify-center p-3 md:p-4 bg-background text-foreground hover:bg-muted transition-colors duration-300 min-w-[200px]"
                style={{ borderRadius: '5px' }}
                aria-label="Contact for advising"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <div className="ml-3 md:ml-4">
                  <div className="text-sm md:text-base font-medium">Contact Me</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisingSection;

