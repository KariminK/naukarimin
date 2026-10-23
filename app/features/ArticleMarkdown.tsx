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
          <h1 className="text-3xl print:text-2xl print:pt-4 print:text-black not-dark:text-slate-900 font-bold pt-8">
            <>{children}</>
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-lg print:pt-4 print:text-black not-dark:text-slate-900 font-semibold pt-8">
            <>{children}</>
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-base print:text-lg print:pt-2 print:text-black not-dark:text-slate-900 font-semibold pt-5">
            <>{children}</>
          </h3>
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
          <p className="text-base/loose print:text-base/tight print:my-2 print:text-black  text-slate-200 not-dark:text-slate-800 my-5">
            <>{children}</>
          </p>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal text-base print:text-md block py-5 print:mb-2 text-slate-100 print:text-black not-dark:text-slate-800 list-inside">
            <>{children}</>
          </ol>
        ),
        ul: ({ children }) => (
          <ul className="list-disc text-base print:text-md block py-5 print:mb-2 text-slate-100 print:text-black not-dark:text-slate-800 list-inside">
            <>{children}</>
          </ul>
        ),
        li: ({ children }) => (
          <li className="leading-loose print:leading-tight">
            <>{children}</>
          </li>
        ),
      }}>
      {children}
    </Markdown>
  );
};

export default ArticleMarkdown;
