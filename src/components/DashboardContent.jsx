import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import unfold from './../assets/svg/unfold.svg';
import pencil from './../assets/svg/pencil.svg';
import { useSelector, useDispatch } from 'react-redux';  


export default function DashboardContent() {
  const dispatch = useDispatch();  


  


  const isSlideOpen = useSelector((state) => state.sidebar.isSlideOpen); 


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
  
    <div className={`bg-white rounded-lg shadow p-4 md:p-3 ${isSlideOpen ? `lg:w-[82.5vw]`:`lg:w-[97.8vw] `} sm:w-[96vw] w-[94vw]  overflow-x-auto`}>
        <div className="flex gap-[16px] items-center p-1 pb-4 border-b">
          <p className="text-[18px] md:text-lg font-[600] text-gray-1">dbo.Alertas</p>
          <span
            className={`material-symbols-outlined text-lg md:text-xl font-bold cursor-pointer ${isdbo ? 'rotate-180' : ''} transition-transform duration-300`}
            onClick={() => setdbo(!isdbo)}
          >
            keyboard_arrow_down
          </span>
        </div>
  
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isdbo ? 0 : "auto", opacity: isdbo ? 0 : 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }} 
          className="overflow-hidden"
        >
          <div className={`grid ${isSlideOpen ? `lg:w-[81vw]`:`lg:w-[96vw]`} w-full  mt-4 border border-gray-200 rounded-lg`}>
            {/* Header Row */}
            <div className="grid grid-cols-3 h-[55px] items-center bg-blue-1 text-white font-semibold text-[13px] sm:text-sm md:text-[16px] rounded-tl-[10px] rounded-tr-[10px]">
              <div
                className="pl-2 sm:pl-4 cursor-pointer flex items-center rounded-tl-[10px]"
                onClick={() => sortData('timestamp')}
              >
                Timestamp
                <img src={unfold} className={`h-[14px] sm:h-[18px] ml-[5px] sm:ml-[11px] ${getArrowClass('timestamp')}`} />
              </div>
              <div className="pl-4 sm:pl-16 cursor-pointer flex items-center" onClick={() => sortData('tipo')}>
                Tipo Alerta
                <img src={unfold} className={`h-[14px] sm:h-[18px] ml-[5px] sm:ml-[11px] ${getArrowClass('tipo')}`} />
              </div>
              <div
                className="pl-6 sm:pl-11 cursor-pointer flex items-center rounded-tr-[10px]"
                onClick={() => sortData('descripcion')}
              >
                Descripción
                <img src={unfold} className={`h-[14px] sm:h-[18px] ml-[5px] sm:ml-[11px] ${getArrowClass('descripcion')}`} />
              </div>
            </div>
  
            {/* Data Rows */}
            {alerts.map((alert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`grid grid-cols-3 h-[48px] text-gray-1 font-[400] text-[14px] items-center border-t sm:text-sm ${
                  index % 2 === 0 ? 'bg-[#E9EBF0]' : 'bg-white'
                }`}
              >
                <div className="pl-2 sm:pl-4">{alert.timestamp}</div>
                <div className="pl-4 sm:pl-16">{alert.tipo}</div>
                <div className="pl-6 sm:pl-11">{alert.descripcion}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

  </div>
  

  );
}
