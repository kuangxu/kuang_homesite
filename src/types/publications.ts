export interface PublicationEntry {
  title: string;
  titleUrl?: string;
  coAuthors?: CoAuthor[];
  journal?: string;
  year?: string;
  volume?: string;
  pages?: string;
  status?: 'published' | 'forthcoming' | 'submitted' | 'working-paper';
  links?: PublicationLink[];
  awards?: string[];
  notes?: string;
}

export interface CoAuthor {
  name: string;
  url?: string;
}

export interface PublicationLink {
  label: string;
  url: string;
  type?: 'arxiv' | 'manuscript' | 'preliminary' | 'talk' | 'coverage' | 'other';
}

export interface ConferenceEntry {
  title: string;
  titleUrl?: string;
  coAuthors?: CoAuthor[];
  conference: string;
  location?: string;
  year: string;
  month?: string;
  links?: PublicationLink[];
  awards?: string[];
}

export interface ThesisEntry {
  title: string;
  titleUrl?: string;
  degree: string;
  institution: string;
  year: string;
  month?: string;
  awards?: string[];
}

export interface MediaEntry {
  title: string;
  titleUrl?: string;
  outlet: string;
  date?: string;
  links?: PublicationLink[];
}

export interface TalkEntry {
  title: string;
  titleUrl?: string;
  event: string;
  year: string;
}
