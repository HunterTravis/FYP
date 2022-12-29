import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="sidebar-layout">
      {/* <Navbar /> */}
      <div className="lower">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
