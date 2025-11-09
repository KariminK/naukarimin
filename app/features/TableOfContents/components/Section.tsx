import { Link } from "react-router";

interface SectionProps {
  content: string;
  order: string;
  path: string;
}

const SectionElement = ({ content, order, path }: SectionProps) => {
  return (
    <li className="my-2">
      <span className="mr-3 font-mono">{order}</span>
      <Link to={path} className="text-sky-500 underline">
        {content}
      </Link>
    </li>
  );
};

export default SectionElement;
