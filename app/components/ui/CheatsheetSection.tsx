import { useState } from "react";
import CodeHighlighter from "./CodeHighlighter";

type props = {
  title: string;
  content: Array<{ term: string; code?: string; lang?: string }>;
};

export default function CheatsheetSection({ title, content }: props) {
  const [hidden, setHidden] = useState(true);
  return (
    <li className="overflow-hidden">
      <button
        onClick={() => setHidden(!hidden)}
        className={"cursor-pointer " + (hidden ? "w-full" : "w-fit")}>
        <h2
          className={
            "text-lg bg-slate-800 px-5 py-1 border border-slate-600 w-full hover:bg-slate-700 " +
            (!hidden ? "border-b-0" : "")
          }>
          {title}
        </h2>
      </button>
      <ul
        className={
          "bg-slate-800 gap-5 flex flex-col p-2 border border-slate-600" +
          (hidden ? " hidden" : "")
        }>
        {content.map(({ code, term, lang }) => (
          <li>
            <p className="font-bold">{term}</p>
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
