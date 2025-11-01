import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto py-4 flex justify-between items-center ">
      <NavLink to={"/"}>
        <div className="flex items-center">
          <img src="/logo.png" alt="" className="w-10" />
          <h1 className="font-poppins font-bold">Naukarimin</h1>
        </div>
      </NavLink>
      <ul className="flex gap-8  items-center">
        <li>
          <NavLink to={"/Python"}>Python</NavLink>
        </li>
        <li>
          <NavLink to={"/Javascript"}>Javascript</NavLink>
        </li>
        <li>
          <NavLink to={"/C++"}>C++</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
