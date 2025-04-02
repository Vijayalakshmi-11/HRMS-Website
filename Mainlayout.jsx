import Navbar from "./Navbar";
import Sidebar from "./Sidebar"; 
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
