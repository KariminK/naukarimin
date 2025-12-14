import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto py-4 px-2 sm:px-0 flex justify-between items-center border-b-2 border-b-slate-800">
      <NavLink to={"/"}>
        <div className="flex items-center">
          <img src="/logo.png" alt="" className="w-10" />
          <h1 className="hidden sm:block font-poppins font-bold">Naukarimin</h1>
        </div>
      </NavLink>
      <ul className="flex gap-8  items-center">
        <li>
          <NavLink to={"/language/Python"}>Python</NavLink>
        </li>
        <li>
          <NavLink to={"/language/Javascript"}>Javascript</NavLink>
        </li>
        <li>
          <NavLink to={"/language/C++"}>C++</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
