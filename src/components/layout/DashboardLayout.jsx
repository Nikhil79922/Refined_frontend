import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function DashboardLayout() {

  
  return (
    <div className="flex  bg-gray-4 h-[100vh] scrollbar-hide overflow-hidden">
      {/* Sidebar */}
      <div className=" ">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className=" flex flex-col overflow-x-hidden scrollbar-hide overflow-y-scroll">
        <Header />
        <div className="flex-grow">
          <Outlet /> 
        </div>
        <Footer />
      </div>
    </div>
  );
}
