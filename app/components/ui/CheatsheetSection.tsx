import CodeHighlighter from "./CodeHighlighter";

type props = {
  title: string;
  content: Array<{ term: string; code: string; lang: string }>;
};

export default function CheatsheetSection({ title, content }: props) {
  return (
    <li className="overflow-hidden">
      <h2 className="text-lg bg-slate-800 px-5 py-1 w-fit border border-slate-600 border-b-0">
        {title}
      </h2>
      <ul className="bg-slate-800 gap-5 flex flex-col p-2 border border-slate-600">
        {content.map(({ code, term, lang }) => (
          <li>
            <p className="font-bold">{term}</p>
            <CodeHighlighter language={lang}>{code}</CodeHighlighter>
          </li>
        ))}
      </ul>
    </li>
  );
}
