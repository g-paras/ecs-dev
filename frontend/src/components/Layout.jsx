import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="bg-purple-100 min-h-screen pt-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
