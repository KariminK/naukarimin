import type { ReactNode } from "react";
import { Link } from "react-router";

type languageButtonProps = {
  icon: ReactNode;
  language: string;
};

const LanguageButton = ({ icon, language }: languageButtonProps) => {
  return (
    <li className="flex flex-col justify-center items-center border-2 border-slate-800 rounded-lg text-slate-600 hover:text-white hover:border-white cursor-pointer transition-all">
      <Link to={"/" + language}>
        {icon}
        <p className="font-bold text-center mt-5 text-2xl">{language}</p>
      </Link>
    </li>
  );
};

export default LanguageButton;
