import type { Chapter } from "~/types";
import { ChapterElement, SectionElement } from "./components";
import { randomUUID } from "crypto";

interface TableOfContentsProps {
  chapters: Chapter[];
}

const TableOfContents = ({ chapters }: TableOfContentsProps) => {
  return (
    <section className="mx-auto  p-5 max-w-7xl mt-5">
      <ol className="font-poppins ">
        {chapters.map((chapter, chapterIndex) => (
          <ChapterElement title={chapter.title} key={randomUUID()}>
            {chapter.sections.map((section, sectionIndex) => (
              <SectionElement
                content={section.content}
                path={section.path}
                key={randomUUID()}
                order={
                  String(chapterIndex + 1) + "." + (sectionIndex + 1)
                }></SectionElement>
            ))}
          </ChapterElement>
        ))}
      </ol>
    </section>
  );
};

export default TableOfContents;
