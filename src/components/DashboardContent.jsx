import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import unfold from './../assets/svg/unfold.svg';
import pencil from './../assets/svg/pencil.svg';
import { useSelector, useDispatch } from 'react-redux';  // Import Redux hooks
import Bottom_window from "./Control/Bottom_window";


export default function DashboardContent() {
  const isSlideOpen = useSelector((state) => state.sidebar.isSlideOpen);  // Access the sidebar open state
  console.log(isSlideOpen)

  const [isdbo, setdbo] = useState(false);
  const [alerts, setAlerts] = useState([
    { timestamp: '2024-10-30 06:21:45', tipo: 'Tipo1', descripcion: 'Descripción de alerta 1' },
    { timestamp: '2024-10-30 06:48:35', tipo: 'Tipo2', descripcion: 'Descripción de alerta 2' },
    { timestamp: '2024-10-30 07:11:06', tipo: 'Tipo3', descripcion: 'Descripción de alerta 3' },
    { timestamp: '2024-10-30 07:15:25', tipo: 'Tipo4', descripcion: 'Descripción de alerta 4' },
    { timestamp: '2024-10-30 07:18:36', tipo: 'Tipo5', descripcion: 'Descripción de alerta 5' },
    { timestamp: '2024-10-30 07:21:49', tipo: 'Tipo6', descripcion: 'Descripción de alerta 6' },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'ascending' });

  useEffect(() => {
    toast.success("Welcome to the Dashboard!", {
      position: "top-right",
      autoClose: 2000,
    });
  }, []);

  const sortData = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === 'ascending'
        ? 'descending'
        : 'ascending';

    const sortedAlerts = [...alerts].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setAlerts(sortedAlerts);
    setSortConfig({ key, direction });
  };

  const getArrowClass = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending"
        ? "rotate-180 transform origin-center transition-transform duration-300"
        : "transform origin-center transition-transform duration-300";
    }
    return "transform origin-center";
  };

  return (
    <div className="ml-[5px] sm:ml-[10px] lg:ml-[20px] w-full flex flex-col  mb-[160px]  bg-gray-4">
    <div className="flex gap-[12px] items-center mt-4 mb-6">
      <h2 className="text-[30px] font-inter md:text-2xl font-bold">Dashboard</h2>
      <img src={pencil} className="bg-gray-4 h-[18px] ml-[15px] cursor-pointer"/>
    </div>
  
<Bottom_window/>

  </div>
  

  );
}
