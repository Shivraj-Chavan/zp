import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function AdminApp() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 ml-64 flex flex-col">
        
        {/* Navbar – stays fixed */}
        <Navbar />

        {/* ONLY content scrolls */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <Outlet />
        </div>

      </div>
    </div>
  );
}
