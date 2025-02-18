import React, { useEffect, useRef, useState } from "react";
import { Link ,useLocation } from "react-router-dom";
import pencil from '../../assets/svg/pencil.svg'
import { useSelector } from 'react-redux';  

function Control_header() {
  const isSlideOpen = useSelector((state) => state.sidebar.isSlideOpen); 
  const firstLinkRef = useRef(null);

  const location = useLocation(); // Extract current path

  
  // Map paths to display names
  const pathToLabel = {
    "/dashboard/control/orden": "Orden",
    "/dashboard/control/scrap": "Scrap",
    "/dashboard/control/averias": "Averias",
    "/dashboard/control/consumos": "Consumos",
    "/dashboard/control/etiquetas": "Etiquetas"
  };

  // Determine current active tab based on path
  const activeTab = pathToLabel[location.pathname] || "Orden"; 
  const [value, setValue] = useState(`${activeTab}`); 



  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`ml-[20px] flex justify-between w-[96vw] ${isSlideOpen ? `lg:w-[81.6vw]`:`lg:w-[96vw]` } `}>
      <div className="flex gap-[3px] sm:gap-[6px] md:gap-[9px] lg:gap-[12px] items-center mt-4 mb-6">
        <h2 className="text-[13px] sm:text-[17px] font-inter md:text-[20px] lg:text-2xl font-bold text-gray-1">{`Control > ${value}`}</h2>
        <img src={pencil} className="bg-gray-4 h-[16px] ml-[13px] relative bottom-[1px] cursor-pointer"/>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 items-center mt-4 mb-6">
        <Link

          className="text-[10px] md:text-[15.5px] lg:text-[16.5px] focus:text-blue-1 text-gray-2 font-inter font-[600]  focus:border-b-[2px] focus:border-blue-580"
          to="/dashboard/control/orden"
          onClick={() => handleValueChange("Orden")}
        >
          Orden
        </Link>
        <Link
          className= " text-[10px] md:text-[15.5px] lg:text-[16.5px] focus:text-blue-1 text-gray-2 font-inter font-[600] focus:border-b-[2px] focus:border-blue-580"
          to="/dashboard/control/scrap"
          onClick={() => handleValueChange("Scrap")}
        >
          Scrap
        </Link>
        <Link
          className= " text-[10px] md:text-[15.5px] lg:text-[16.5px] focus:text-blue-1 text-gray-2 font-inter font-[600] focus:border-b-[2px] focus:border-blue-580"
          to="/dashboard/control/averias"
          onClick={() => handleValueChange("Averias")}
        >
          Averias
        </Link>
        <Link
          className= " text-[10px] md:text-[15.5px] lg:text-[16.5px] focus:text-blue-1 text-gray-2 font-inter font-[600] focus:border-b-[2px] focus:border-blue-580"
          to="/dashboard/control/consumos"
          onClick={() => handleValueChange("Consumos")}
        >
          Consumos
        </Link>
        <Link
          className= " text-[10px] md:text-[15.5px] lg:text-[16.5px] focus:text-blue-1 text-gray-2 font-inter font-[600] focus:border-b-[2px] focus:border-blue-580"
          to="/dashboard/control/etiquetas"
          onClick={() => handleValueChange("Etiquetas")}
        >
          Etiquetas
        </Link>
      </div>
    </div>
  );
}

export default Control_header;
