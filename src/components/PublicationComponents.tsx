import { PublicationEntry, ConferenceEntry, ThesisEntry, MediaEntry, TalkEntry } from '../types/publications';

interface PublicationListProps {
  publications: PublicationEntry[];
}

interface ConferenceListProps {
  conferences: ConferenceEntry[];
}

interface ThesisListProps {
  theses: ThesisEntry[];
}

interface MediaListProps {
  media: MediaEntry[];
}

interface TalkListProps {
  talks: TalkEntry[];
}

const CoAuthorsList = ({ coAuthors }: { coAuthors: any[] }) => (
  <>
    Co-authored with: {coAuthors.map((author, index) => (
      <span key={index}>
        {author.url ? (
          <a href={author.url} target="_blank" rel="noopener noreferrer" className="no-underline hover:text-foreground">
            {author.name}
          </a>
        ) : (
          author.name
        )}
        {index < coAuthors.length - 1 && ', '}
      </span>
    ))}
  </>
);

const PublicationLinks = ({ links }: { links: any[] }) => (
  <>
    {links.map((link, index) => (
      <span key={index}>
        <a href={link.url} target="_blank" rel="noopener noreferrer" className="no-underline hover:text-foreground">
          {link.label}
        </a>
        {index < links.length - 1 && ' | '}
      </span>
    ))}
  </>
);

export const PublicationList = ({ publications }: PublicationListProps) => (
  <div className="space-y-4 text-body text-muted-foreground">
    {publications.map((pub, index) => (
      <p key={index}>
        <strong className="text-foreground">
          {pub.titleUrl ? (
            <a href={pub.titleUrl} target="_blank" rel="noopener noreferrer" className="no-underline hover:text-foreground">
              {pub.title}
            </a>
          ) : (
            pub.title
          )}
        </strong>
        <br/>
        {pub.coAuthors && <><CoAuthorsList coAuthors={pub.coAuthors} /><br/></>}
        {pub.journal && (
          <>
            <em>{pub.journal}</em>
            {pub.year && `, ${pub.year}`}
            {pub.volume && `, ${pub.volume}`}
            {pub.pages && `, ${pub.pages}`}
            <br/>
          </>
        )}
        {pub.status === 'forthcoming' && (
          <>
            Forthcoming in <em>{pub.journal}</em>
            <br/>
          </>
        )}
        {pub.status === 'submitted' && (
          <>
            Submitted
            <br/>
          </>
        )}
        {pub.status === 'working-paper' && (
          <>
            Working paper
            <br/>
          </>
        )}
        {pub.links && (
          <>
            <PublicationLinks links={pub.links} />
            <br/>
          </>
        )}
        {pub.awards && (
          <>
            <strong><em>{pub.awards.join(', ')}</em></strong>
            <br/>
          </>
        )}
        {pub.notes && (
          <>
            {pub.notes}
            <br/>
          </>
        )}
      </p>
    ))}
  </div>
);

export const ConferenceList = ({ conferences }: ConferenceListProps) => (
  <div className="space-y-4 text-body text-muted-foreground">
    {conferences.map((conf, index) => (
      <p key={index}>
        <strong className="text-foreground">
          {conf.titleUrl ? (
            <a href={conf.titleUrl} target="_blank" rel="noopener noreferrer" className="no-underline hover:text-foreground">
              {conf.title}
            </a>
          ) : (
            conf.title
          )}
        </strong>
        <br/>
        {conf.coAuthors && <><CoAuthorsList coAuthors={conf.coAuthors} /><br/></>}
        <em>{conf.conference}</em>
        {conf.location && `, ${conf.location}`}
        {conf.month && `, ${conf.month}`} {conf.year}
        <br/>
        {conf.links && (
          <>
            <PublicationLinks links={conf.links} />
            <br/>
          </>
        )}
        {conf.awards && (
          <>
            <strong><em>{conf.awards.join(', ')}</em></strong>
            <br/>
          </>
        )}
      </p>
    ))}
  </div>
);

export const ThesisList = ({ theses }: ThesisListProps) => (
  <div className="space-y-4 text-body text-muted-foreground">
    {theses.map((thesis, index) => (
      <p key={index}>
        <strong className="text-foreground">
          {thesis.titleUrl ? (
            <a href={thesis.titleUrl} target="_blank" rel="noopener noreferrer" className="no-underline hover:text-foreground">
              {thesis.title}
            </a>
          ) : (
            thesis.title
          )}
        </strong>
        <br/>
        {thesis.degree}, {thesis.institution}
        {thesis.month && `, ${thesis.month}`} {thesis.year}
        <br/>
        {thesis.awards && (
          <>
            <strong><em>{thesis.awards.join(', ')}</em></strong>
            <br/>
          </>
        )}
      </p>
    ))}
  </div>
);

export const MediaList = ({ media }: MediaListProps) => (
  <div className="space-y-4 text-body text-muted-foreground">
    {media.map((item, index) => (
      <p key={index}>
        <strong className="text-foreground">
          {item.titleUrl ? (
            <a href={item.titleUrl} target="_blank" rel="noopener noreferrer" className="no-underline hover:text-foreground">
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </strong>
        <br/>
        {item.outlet}
        {item.date && `, ${item.date}`}
        <br/>
        {item.links && (
          <>
            <PublicationLinks links={item.links} />
            <br/>
          </>
        )}
      </p>
    ))}
  </div>
);

export const TalkList = ({ talks }: TalkListProps) => (
  <div className="space-y-4 text-body text-muted-foreground">
    {talks.map((talk, index) => (
      <p key={index}>
        <strong className="text-foreground">
          {talk.titleUrl ? (
            <a href={talk.titleUrl} target="_blank" rel="noopener noreferrer" className="no-underline hover:text-foreground">
              {talk.title}
            </a>
          ) : (
            talk.title
          )}
        </strong>
        <br/>
        {talk.event}, {talk.year}
      </p>
    ))}
  </div>
);
