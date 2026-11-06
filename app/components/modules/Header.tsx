import { FaPython } from "react-icons/fa6";
import { SiCplusplus, SiJavascript } from "react-icons/si";
import { LanguageButton } from "../ui";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="max-w-7xl  mx-auto mt-20 px-5 xl:px-0">
      <h1 className="text-5xl not-dark:text-slate-800 font-bold leading-normal">
        Wybierz język, który cię interesuje
      </h1>
      <ul className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 lg:h-96 gap-5 mt-10">
        <LanguageButton icon={<FaPython size={"200px"} />} language="Python" />
        <LanguageButton icon={<SiCplusplus size={"200px"} />} language="C++" />
        <LanguageButton
          icon={<SiJavascript size={"200px"} />}
          language="Javascript"
        />
      </ul>
      <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-5 mt-5">
        <Link to={"/cheatsheets/css"}>
          <button className="px-5 py-2 font-bold w-full hover:-translate-y-3 cursor-pointer transition-all bg-slate-800 not-dark:bg-slate-200 border border-slate-600 rounded-xl text-slate-500 hover:shadow-xl hover:bg-slate-600 hover:text-slate-400 hover:border-slate-500">
            Ściąga do CSS
          </button>
        </Link>
        <Link to={"/cheatsheets/html"}>
          <button className="px-5 py-2 font-bold w-full hover:-translate-y-3 cursor-pointer transition-all bg-slate-800 not-dark:bg-slate-200 border border-slate-600 rounded-xl text-slate-500 hover:shadow-xl hover:bg-slate-600 hover:text-slate-400 hover:border-slate-500">
            Ściąga do HTML
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
