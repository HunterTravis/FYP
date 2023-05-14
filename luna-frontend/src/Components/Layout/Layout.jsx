import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../../Pages/global/Topbar";
import { Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./Layout.css";
// import Navbar from "./Navbar";

const Layout = () => {
  const [cookies] = useCookies(["user"]);

  return (
    <div className="layout">
      <div className="upper">
        <Topbar />
      </div>
      <div className="lower">
        <div className="sidebar-container">
          <Sidebar role={cookies.role} />
        </div>
        <div className="main-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
