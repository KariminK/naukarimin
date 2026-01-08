import Markdown from "react-markdown";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import nightOwl from "react-syntax-highlighter/dist/esm/styles/hljs/night-owl";

type props = {
  lang: string;
  children: string;
};

const ArticleMarkdown = ({ lang, children }: props) => {
  return (
    <Markdown
      components={{
        h1: ({ children }) => (
          <h1 className="text-2xl/loose font-bold">
            <>{children}</>
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-xl/loose font-semibold pt-4">
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
            <div className="rounded-lg overflow-hidden border border-slate-800 my-5">
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
          <p className="text-base/loose  text-slate-200 my-3">
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
      {children}
    </Markdown>
  );
};

export default ArticleMarkdown;
