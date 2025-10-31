import { FaPython } from "react-icons/fa6";
import { SiCplusplus, SiJavascript } from "react-icons/si";

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto mt-20">
      <h1 className="text-4xl font-bold">
        Wybierz język, który cię interesuje
      </h1>
      <ul className="grid grid-cols-3 h-96 gap-5 mt-10">
        <li className="flex flex-col justify-center items-center border-2 border-slate-800 rounded-lg text-slate-600 hover:text-white hover:border-white cursor-pointer transition-all">
          <FaPython size={"200px"} />
          <p className="font-bold text-center mt-5 text-2xl">Python</p>
        </li>
        <li className="flex flex-col justify-center items-center border-2 border-slate-800 rounded-lg text-slate-600 hover:text-white hover:border-white cursor-pointer transition-all">
          <SiCplusplus size={"200px"} />
          <p className="font-bold text-center mt-5 text-2xl">C++</p>
        </li>
        <li className="flex flex-col justify-center items-center border-2 border-slate-800 rounded-lg text-slate-600 hover:text-white hover:border-white cursor-pointer transition-all">
          <SiJavascript size={"200px"} />
          <p className="font-bold text-center mt-5 text-2xl">Javascript</p>
        </li>
      </ul>
    </header>
  );
};

export default Header;
