import { useParams, type LoaderFunctionArgs } from "react-router";
import prisma from "~/db/prisma";
import type { Route } from "./+types/adminArticle";
import type { Section } from "~/generated/prisma/client";
import ErrorNotFound from "./404";
import { ArticleMarkdown } from "~/features";
import { useState } from "react";
import { Button } from "~/components/ui";

export async function loader({ params }: LoaderFunctionArgs) {
  const languageName = params.lang;
  const articleName = params.article;
  console.log("languageName from params: ", languageName);
  console.log("article name: ", articleName);

  const article = await prisma.section.findFirst({
    where: {
      title: articleName?.replaceAll("_qm_", "?"),
      chapter: { language: { name: languageName } },
    },
  });

  return article;
}

export default function AdminArticle({ loaderData }: Route.ComponentProps) {
  const article = loaderData as unknown as Section | null;
  const { lang = "plain" } = useParams();

  if (article === null) return <ErrorNotFound />;

  const [content, setContent] = useState(article.content);

  return (
    <main className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center my-10">
        Artykuł {article.title}
      </h1>
      <div className="grid grid-cols-2 gap-10 mb-20">
        <section>
          <h2>Edytuj:</h2>
          <textarea
            className="w-full h-full outline-none border border-slate-600 bg-slate-800 p-5 rounded-lg"
            name="editedContent"
            onChange={(ev) => setContent(ev.target.value)}
            value={content}></textarea>
          <Button classname="w-full">Zapisz</Button>
        </section>
        <section>
          <h2>Podgląd:</h2>
          <ArticleMarkdown lang={lang}>{content}</ArticleMarkdown>
        </section>
      </div>
    </main>
  );
}
