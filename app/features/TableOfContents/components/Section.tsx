import { Link } from "react-router";

interface SectionProps {
  content: string;
  order: string;
  title: string;
}

const SectionElement = ({ content, order, title }: SectionProps) => {
  return (
    <li className="my-2">
      <span className="mr-3 font-mono">{order}</span>
      <Link
        to={title.replaceAll("?", "_qm_")}
        className="text-sky-500 underline">
        {title}
      </Link>
    </li>
  );
};

export default SectionElement;
