interface Section {
  content: string;
  path: string;
  title: string;
}

interface Chapter {
  title: string;
  sections: Section[];
}

export interface Contents {
  lang: string;
  chapters: Chapter[];
}
