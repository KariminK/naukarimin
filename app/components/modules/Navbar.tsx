import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto py-4 px-2 flex justify-between items-center border-b border-b-neutral-800">
      <p className="font-bold">
        Nau<span className="text-green-400">karimin</span>
      </p>
      <ul className="flex gap-5 text-neutral-300 items-center">
        <li>
          <NavLink to={"/python"}>Python</NavLink>
        </li>
        <li>
          <NavLink to={"/python"}>Javascript</NavLink>
        </li>
        <li>
          <NavLink to={"/python"}>C++</NavLink>
        </li>
        <li>
          <NavLink to={"/python"}>Inne</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
