import { Link, useOutletContext, useParams } from "react-router";
import { Button } from "~/components/ui";
import type { Chapter, Section } from "~/generated/prisma/client";
import ErrorNotFound from "~/routes/404";
import type { LanguageWithChaptersAndSections } from "~/types";

interface ChapterWithSections extends Chapter {
  sections: Section[];
}

type props = {
  chapter: ChapterWithSections;
  language: LanguageWithChaptersAndSections;
};

const SectionView = () => {
  const language = useOutletContext() as LanguageWithChaptersAndSections;
  const { chapterTitle } = useParams();
  const chapter = language.chapters.find(
    (chapter) => chapter.title === chapterTitle
  );

  if (!chapter) return <ErrorNotFound />;

  return (
    <>
      <h2 className="my-10">
        Sekcje (
        <Link
          className="text-blue-400 underline"
          to={`/admin/language/${language.name}`}>
          Rozdział {chapterTitle}
        </Link>
        ) :
      </h2>
      <ul className="list-none my-10">
        {chapter.sections.map((section, index) => (
          <li className="my-5 text-blue-400 underline" key={index}>
            <Link
              to={`/admin/language/${language.name}/${chapter.title}/${section.title}`}>
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
      <Button>Dodaj sekcję</Button>
    </>
  );
};

export default SectionView;
