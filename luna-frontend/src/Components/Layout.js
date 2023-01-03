import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="layout">
      {/* <Navbar /> */}
      <div className="lower d-flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;