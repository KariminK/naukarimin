import { FaPython } from "react-icons/fa6";
import { SiCplusplus, SiJavascript } from "react-icons/si";
import { LanguageButton } from "../ui";

const Header = () => {
  return (
    <header className="max-w-7xl  mx-auto mt-20 px-5 xl:px-0">
      <h1 className="text-5xl font-bold leading-normal">
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
    </header>
  );
};

export default Header;
