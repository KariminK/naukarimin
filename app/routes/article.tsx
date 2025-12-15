import { useParams, type LoaderFunctionArgs } from "react-router";
import prisma from "~/db/prisma";
import type { Route } from "../+types/root";
import type { Section } from "~/generated/prisma/client";
import ErrorNotFound from "./404";
import { ArticleMarkdown } from "~/features";

export async function loader({ params }: LoaderFunctionArgs) {
  const languageName = params.lang;
  const articleName = params.article;

  const article = await prisma.section.findFirst({
    where: {
      title: articleName?.replaceAll("_qm_", "?"),
      chapter: { language: { name: languageName } },
    },
  });

  return article;
}

const Article = ({ loaderData }: Route.ComponentProps) => {
  const article = loaderData as unknown as Section | null;
  const { lang = "plain" } = useParams();

  if (article === null) return <ErrorNotFound />;

  return (
    <main className="max-w-3xl mx-auto md:px-0 px-3">
      <h1 className="text-3xl font-semibold text-slate-100 text-center pb-5 my-16">
        {article.title}
      </h1>
      <ArticleMarkdown lang={lang}>{article.content}</ArticleMarkdown>
    </main>
  );
};

export default Article;
