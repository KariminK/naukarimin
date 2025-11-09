import type { ReactNode } from "react";

interface ChapterProps {
  title: string;
  children: ReactNode;
}

const ChapterElement = ({ title, children }: ChapterProps) => {
  return (
    <li className="mt-10">
      <p className="font-bold">{title}</p>
      <ol className="list-inside grid grid-cols-3 mt-2 mb-5">{children}</ol>
    </li>
  );
};

export default ChapterElement;
