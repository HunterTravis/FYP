import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../../Pages/global/Topbar";
import { Outlet } from "react-router-dom";
import "./Layout.css";
// import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="layout">
      <div className="upper">
        <Topbar />
      </div>
      <div className="lower">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="main-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
