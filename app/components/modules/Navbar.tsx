import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto py-4 px-2 flex justify-between items-center ">
      <div className="flex items-center">
        <img src="/logo.png" alt="" className="w-10" />
        <h1 className="font-poppins font-bold">Naukarimin</h1>
      </div>
      <ul className="flex gap-5  items-center">
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
