import type { ReactNode } from "react";

interface ChapterProps {
  title: string;
  children: ReactNode;
}

const ChapterElement = ({ title, children }: ChapterProps) => {
  return (
    <li className="mt-10">
      <p className="font-bold not-dark:text-slate-900">{title}</p>
      <ol className="list-inside grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 mt-2 mb-5">
        {children}
      </ol>
    </li>
  );
};

export default ChapterElement;
