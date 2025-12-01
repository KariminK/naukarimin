import { type LoaderFunctionArgs } from "react-router";
import prisma from "~/db/prisma";
import { TableOfContents } from "~/features";
import type { Route } from "../+types/root";
import ErrorNotFound from "./404";

type LanguageWithChaptersAndSections = {
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

export async function loader({ params }: LoaderFunctionArgs) {
  const languageName = params.lang;

  const language = await prisma.language.findFirst({
    where: {
      name: languageName,
    },
    include: {
      chapters: {
        include: {
          sections: true,
        },
      },
    },
  });

  return language;
}

export default function Introduction({ loaderData }: Route.ComponentProps) {
  const language =
    loaderData as unknown as LanguageWithChaptersAndSections | null;

  if (language === null) return <ErrorNotFound />;

  return (
    <>
      <section className="max-w-7xl text-center mx-auto">
        <h1 className="text-center mt-20 font-bold text-4xl mb-5">
          {language.name}
        </h1>
        <p className="text-slate-200">{language.description}</p>
        <TableOfContents chapters={language.chapters}></TableOfContents>
      </section>
    </>
  );
}
