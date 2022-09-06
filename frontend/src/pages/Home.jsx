import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <nav className="bg-slate-800">
      <div className="container mx-auto flex items-center justify-between">
        <span className="text-white font-bold text-2xl">ECS Module</span>
        <ul className="flex">
          {[
            ["Reading Module", "/reading-module"],
            ["Writing Module", "/writing-module"],
            ["Listening Module", "/listening-module"],
            ["Speaking Module", "/speaking-module"],
          ].map((navItem, id) => (
            <li
              key={id}
              className="hover:bg-white hover:text-black p-4 text-white"
            >
              <Link to={navItem[1]}>{navItem[0]}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HomePage;
