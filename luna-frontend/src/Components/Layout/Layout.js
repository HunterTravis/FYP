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
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
