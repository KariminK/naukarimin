import { FaPython } from "react-icons/fa6";
import { SiCplusplus, SiJavascript } from "react-icons/si";
import { LanguageButton } from "~/components/ui";

const AdminDashboard = () => {
  return (
    <>
      <p className="text-red-500 text-center my-5 font-bold">
        Przeglądasz jako administrator!!
      </p>
      <h1 className="text-5xl font-bold">Wybierz język</h1>
      <ul className="grid grid-cols-3 h-96 gap-5 mt-10">
        <LanguageButton
          link="/admin/Python"
          icon={<FaPython size={"200px"} />}
          language="Python"
        />
        <LanguageButton
          link="/admin/C++"
          icon={<SiCplusplus size={"200px"} />}
          language="C++"
        />
        <LanguageButton
          link="/admin/Javascript"
          icon={<SiJavascript size={"200px"} />}
          language="Javascript"
        />
      </ul>
    </>
  );
};

export default AdminDashboard;
