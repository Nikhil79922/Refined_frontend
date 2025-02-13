import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-4 overflow-auto">
      {/* Sidebar */}
      <div className="w-[0vw] lg:w-[15.5vw]">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="w-[100vw] lg:w-[84.5vw] flex flex-col overflow-x-hidden overflow-y-scroll">
        <Header />
        <div className="flex-grow">
          <Outlet /> {/* Renders child routes */}
        </div>
        <Footer />
      </div>
    </div>
  );
}
