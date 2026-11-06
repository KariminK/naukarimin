import { useState } from "react";
import CodeHighlighter from "./CodeHighlighter";

type props = {
  title: string;
  content: Array<{ term: string; code?: string; lang?: string }>;
  liKey: number;
};

export default function CheatsheetSection({ title, content, liKey }: props) {
  const [hidden, setHidden] = useState(true);
  return (
    <li className="overflow-hidden" key={liKey}>
      <button
        onClick={() => setHidden(!hidden)}
        className={"cursor-pointer " + (hidden ? "w-full" : "w-fit")}>
        <h2
          className={
            "text-lg bg-slate-800 px-5 py-1 border border-slate-600 not-dark:bg-slate-300 w-full hover:bg-slate-700 not-dark:hover:bg-slate-400 " +
            (!hidden ? "border-b-0" : "")
          }>
          {title}
        </h2>
      </button>
      <ul
        className={
          "bg-slate-800 gap-5 flex flex-col p-2 border border-slate-600 not-dark:bg-slate-300 " +
          (hidden ? " hidden" : "")
        }>
        {content.map(({ code, term, lang }, id) => (
          <li key={id + liKey * 10}>
            <p className="font-bold not-dark:text-slate-900">{term}</p>
            {code && lang ? (
              <CodeHighlighter language={lang}>{code}</CodeHighlighter>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </li>
  );
}
