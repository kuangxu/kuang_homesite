import { 
  workingPapers, 
  journalPublications, 
  conferencePublications, 
  theses, 
  otherManuscripts, 
  mediaEntries, 
  talks 
} from '../data/publications';
import { 
  PublicationList, 
  ConferenceList, 
  ThesisList, 
  MediaList, 
  TalkList 
} from './PublicationComponents';

const ResearchSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 180; // Height to scroll to section titles (nav bar + section padding)
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="research" className="section-spacing section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 flex-shrink-0 pt-20 lg:pt-24">
            <div className="sticky top-40">
              <nav className="space-y-2">
                
                <button
                  onClick={() => scrollToSection('working-papers')}
                  className="block w-full text-left text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Working Papers and Preprints
                </button>
                <button
                  onClick={() => scrollToSection('journal-publications')}
                  className="block w-full text-left text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Journal Publications
                </button>
                <button
                  onClick={() => scrollToSection('conference-publications')}
                  className="block w-full text-left text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Conference Publications
                </button>
                <button
                  onClick={() => scrollToSection('theses')}
                  className="block w-full text-left text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Theses
                </button>
                <button
                  onClick={() => scrollToSection('other-manuscripts')}
                  className="block w-full text-left text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Other Manuscripts
                </button>
                <button
                  onClick={() => scrollToSection('media')}
                  className="block w-full text-left text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Media on My Research
                </button>
                <button
                  onClick={() => scrollToSection('talks')}
                  className="block w-full text-left text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Talks
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-12">
            <div className="text-left mb-8">
              <h2 className="text-heading mb-6">Research</h2>
            </div>
            <div className="space-y-8 md:space-y-12 text-left">
              <p className="text-body text-muted-foreground">
                I publish under the name <strong>Xu Kuang</strong>, cited as <strong>X. Kuang</strong>. Prior to June 2023, I published under the name <strong>Kuang Xu</strong>, cited as <strong>K. Xu</strong>.
              </p>
              <div className="space-y-8">
                <div id="working-papers">
                  <h3 className="text-subheading mb-4">Working Papers and Preprints</h3>
                  <PublicationList publications={workingPapers} />
                </div>

                <div id="journal-publications">
                  <h3 className="text-subheading mb-4">Journal Publications</h3>
                  <PublicationList publications={journalPublications} />
                </div>

                <div id="conference-publications">
                  <h3 className="text-subheading mb-4">Conference Publications</h3>
                  <ConferenceList conferences={conferencePublications} />
                </div>

                <div id="theses">
                  <h3 className="text-subheading mb-4">Theses</h3>
                  <ThesisList theses={theses} />
                </div>

                <div id="other-manuscripts">
                  <h3 className="text-subheading mb-4">Other Manuscripts</h3>
                  <PublicationList publications={otherManuscripts} />
                </div>

                <div id="media">
                  <h3 className="text-subheading mb-4">Media on My Research</h3>
                  <MediaList media={mediaEntries} />
                </div>

                <div id="talks">
                  <h3 className="text-subheading mb-4">Talks</h3>
                  <TalkList talks={talks} />
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-12 text-center">
              <a 
                href="https://scholar.google.com/citations?user=kuangxu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 md:p-4 bg-background text-foreground hover:bg-muted transition-colors duration-300 min-w-[200px] no-underline"
                style={{ borderRadius: '5px' }}
                aria-label="Google Scholar Profile"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                </svg>
                <div className="ml-3 md:ml-4">
                  <div className="text-sm md:text-base font-medium">Google Scholar</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;