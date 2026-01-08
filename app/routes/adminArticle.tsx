import {
  Form,
  useParams,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from "react-router";
import prisma from "~/db/prisma";
import type { Route } from "./+types/login";
import type { Section } from "@prisma/client";
import ErrorNotFound from "./404";
import { ArticleMarkdown } from "~/features";
import { useState } from "react";
import { Button } from "~/components/ui";
import authMiddleware from "~/authMiddleware.server";

export const middleware: Route.MiddlewareFunction[] = [authMiddleware];

export async function action({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData();
  const editedContent = formData.get("editedContent") as string;
  const articleTitle = params.articleTitle;
  const languageName = params.lang;
  const chapterTitle = params.chapter;
  const updated = await prisma.section.updateMany({
    where: {
      title: articleTitle,
      chapter: {
        title: chapterTitle,
        language: {
          name: languageName,
        },
      },
    },
    data: {
      content: editedContent,
    },
  });
  return updated;
}

export async function loader({ params }: LoaderFunctionArgs) {
  const languageName = params.lang;
  const articleName = params.articleTitle;

  const article = await prisma.section.findFirst({
    where: {
      title: articleName?.replaceAll("_qm_", "?"),
      chapter: { language: { name: languageName } },
    },
  });

  return article;
}

export default function AdminArticle({
  loaderData,
  actionData,
}: Route.ComponentProps) {
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
          <Form method="put">
            <textarea
              className="w-full h-full outline-none border border-slate-600 bg-slate-800 p-5 rounded-lg"
              name="editedContent"
              onChange={(ev) => setContent(ev.target.value)}
              value={content}></textarea>
            <Button classname="w-full">Zapisz</Button>
          </Form>
          {actionData && (
            <p className="text-green-400 my-5">Edytowano artykuł pomyślnie</p>
          )}
        </section>
        <section>
          <h2>Podgląd:</h2>
          <ArticleMarkdown lang={lang}>{content}</ArticleMarkdown>
        </section>
      </div>
    </main>
  );
}
