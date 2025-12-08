interface Section {
  content: string;
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

export type LanguageWithChaptersAndSections = {
  chapters: ({
    sections: {
      id: number;
      title: string;
      content: string;
      chapterId: number | null;
    }[];
  } & {
    id: number;
    title: string;
    languageId: number | null;
  })[];
} & {
  id: number;
  name: string;
  description: string;
};
