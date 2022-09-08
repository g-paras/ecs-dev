import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-800">
      <div className="container mx-auto flex items-center justify-between">
        <span className="text-white font-bold text-2xl">
          <Link to={"/"}>ECS Module</Link>
        </span>
        <ul className="flex">
          {[
            ["Reading Module", "/reading-module"],
            ["Writing Module", "/writing-module"],
            ["Listening Module", "/listening-module"],
            ["Speaking Module", "/speaking-module"],
          ].map((navItem, id) => (
            <li
              key={id}
              className="hover:bg-purple-100 hover:text-black p-4 text-purple-100"
            >
              <Link to={navItem[1]}>{navItem[0]}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
