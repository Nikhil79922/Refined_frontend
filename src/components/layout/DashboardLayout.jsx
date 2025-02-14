import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function DashboardLayout() {

  
  return (
    <div className="flex  bg-gray-4 overflow-auto">
      {/* Sidebar */}
      <div className=" ">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className=" flex flex-col overflow-x-hidden overflow-y-scroll">
        <Header />
        <div className="flex-grow">
          <Outlet /> {/* Renders child routes */}
        </div>
        <Footer />
      </div>
    </div>
  );
}
