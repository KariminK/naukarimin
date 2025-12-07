import type { ReactNode } from "react";
import { Link } from "react-router";

type languageButtonProps = {
  icon: ReactNode;
  language: string;
  link?: string;
};

const LanguageButton = ({ icon, language, link }: languageButtonProps) => {
  return (
    <li className="flex flex-col justify-center items-center cursor-pointer transition-all bg-slate-800 border border-slate-600 rounded-xl text-slate-500 hover:shadow-xl hover:-translate-y-5 hover:bg-slate-600 hover:text-slate-400 hover:border-slate-500">
      <Link to={link ? link : "/language/" + language}>
        {icon}
        <p className="font-bold text-center mt-5 text-2xl">{language}</p>
      </Link>
    </li>
  );
};

export default LanguageButton;
