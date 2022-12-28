import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const SidebarLayout = () => {
  return (
    <div className="sidebar-layout d-flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default SidebarLayout;