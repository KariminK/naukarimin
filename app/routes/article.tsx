import Markdown from "react-markdown";
import { useParams, type LoaderFunctionArgs } from "react-router";
import prisma from "~/db/prisma";
import type { Route } from "../+types/root";
import type { Section } from "~/generated/prisma/client";
import ErrorNotFound from "./404";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import nightOwl from "react-syntax-highlighter/dist/esm/styles/hljs/night-owl";

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

const Article = ({ loaderData }: Route.ComponentProps) => {
  const article = loaderData as unknown as Section | null;
  const { lang } = useParams();

  if (article === null) return <ErrorNotFound />;

  return (
    <main className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold text-slate-100 text-center pb-5 my-16">
        {article.title}
      </h1>
      <Markdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl/loose font-bold">
              <>{children}</>
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl/loose font-bold">
              <>{children}</>
            </h2>
          ),
          code: ({ children }) => {
            const code = String(children).replaceAll("\\n", "\n");
            let highlighterLangName = "plaintext";
            switch (lang) {
              case "Python":
                highlighterLangName = "python";
                break;
              case "Javascript":
                highlighterLangName = "javascript";
                break;
              case "C++":
                highlighterLangName = "cpp";
                break;
            }
            return (
              <div className="rounded-lg overflow-hidden border border-slate-800">
                <SyntaxHighlighter
                  language={highlighterLangName}
                  style={nightOwl}
                  customStyle={{
                    padding: "1rem",
                  }}>
                  {code}
                </SyntaxHighlighter>
              </div>
            );
          },
          p: ({ children }) => (
            <p className="text-base/loose  text-slate-200 my-1">
              <>{children}</>
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc text-lg block mb-3 text-slate-100 list-inside">
              <>{children}</>
            </ul>
          ),
          li: ({ children }) => (
            <li className="leading-loose">
              <>{children}</>
            </li>
          ),
        }}>
        {article.content}
      </Markdown>
    </main>
  );
};

export default Article;
