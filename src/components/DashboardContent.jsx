import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import unfold from "./../assets/svg/unfold.svg";
import pencil from "./../assets/svg/pencil.svg";
import { useSelector } from "react-redux";

export default function DashboardContent() {
  const isSlideOpen = useSelector((state) => state.sidebar.isSlideOpen);

  const [isdbo, setdbo] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const [alerts, setAlerts] = useState([
    { "timestamp": "2024-10-30 06:21:45", "tipo": "Tipo1", "descripcion": "Descripción de alerta 1" },
    { "timestamp": "2024-10-30 06:48:35", "tipo": "Tipo2", "descripcion": "Descripción de alerta 2" },
    { "timestamp": "2024-10-30 07:11:06", "tipo": "Tipo3", "descripcion": "Descripción de alerta 3" },
    { "timestamp": "2024-10-30 07:15:25", "tipo": "Tipo4", "descripcion": "Descripción de alerta 4" },
    { "timestamp": "2024-10-30 07:18:36", "tipo": "Tipo5", "descripcion": "Descripción de alerta 5" },
    { "timestamp": "2024-10-30 07:21:49", "tipo": "Tipo6", "descripcion": "Descripción de alerta 6" },
    { "timestamp": "2024-10-30 07:26:58", "tipo": "Tipo7", "descripcion": "Fallo en el sistema de red" },
    { "timestamp": "2024-10-30 07:30:42", "tipo": "Tipo8", "descripcion": "Error en la base de datos" },
    { "timestamp": "2024-10-30 07:34:19", "tipo": "Tipo9", "descripcion": "Sobrecalentamiento del servidor" },
    { "timestamp": "2024-10-30 07:38:27", "tipo": "Tipo10", "descripcion": "Intento de acceso no autorizado" },
    { "timestamp": "2024-10-30 07:42:35", "tipo": "Tipo11", "descripcion": "Pérdida de conexión con el cliente" },
    { "timestamp": "2024-10-30 07:45:50", "tipo": "Tipo12", "descripcion": "Consumo inusual de memoria" },
    { "timestamp": "2024-10-30 07:50:10", "tipo": "Tipo13", "descripcion": "Fallo en el disco duro" },
    { "timestamp": "2024-10-30 07:55:29", "tipo": "Tipo14", "descripcion": "Ataque DDoS detectado" },
    { "timestamp": "2024-10-30 08:00:15", "tipo": "Tipo15", "descripcion": "Interrupción en el suministro eléctrico" },
    { "timestamp": "2024-10-30 08:05:22", "tipo": "Tipo16", "descripcion": "Fallo en autenticación de usuario" },
    { "timestamp": "2024-10-30 08:10:37", "tipo": "Tipo17", "descripcion": "Bajo rendimiento del sistema" },
    { "timestamp": "2024-10-30 08:15:43", "tipo": "Tipo18", "descripcion": "Configuración incorrecta detectada" },
    { "timestamp": "2024-10-30 08:20:52", "tipo": "Tipo19", "descripcion": "Servidor alcanzó su límite de tráfico" },
    { "timestamp": "2024-10-30 08:25:18", "tipo": "Tipo20", "descripcion": "Alerta de seguridad: acceso sospechoso" },
    { "timestamp": "2024-10-30 08:30:30", "tipo": "Tipo21", "descripcion": "Error en sincronización de datos" },
    { "timestamp": "2024-10-30 08:35:47", "tipo": "Tipo22", "descripcion": "Conexión intermitente con el servidor" },
    { "timestamp": "2024-10-30 08:40:55", "tipo": "Tipo23", "descripcion": "Reinicio inesperado del sistema" },
    { "timestamp": "2024-10-30 08:45:03", "tipo": "Tipo24", "descripcion": "Error crítico en la API" },
    { "timestamp": "2024-10-30 08:50:14", "tipo": "Tipo25", "descripcion": "Anomalía en tráfico de red" },
    { "timestamp": "2024-10-30 08:55:27", "tipo": "Tipo26", "descripcion": "Tiempo de respuesta excesivo" },
    { "timestamp": "2024-10-30 09:00:39", "tipo": "Tipo27", "descripcion": "Detección de malware en el servidor" },
    { "timestamp": "2024-10-30 09:05:51", "tipo": "Tipo28", "descripcion": "Pérdida de paquetes de datos" },
    { "timestamp": "2024-10-30 09:10:12", "tipo": "Tipo29", "descripcion": "Uso elevado de CPU" },
    { "timestamp": "2024-10-30 09:15:23", "tipo": "Tipo30", "descripcion": "Alerta de integridad de archivos" }
]
);

  const [sortConfig, setSortConfig] = useState({ key: "", direction: "ascending" });

  useEffect(() => {
    toast.success("Welcome to the Dashboard!", {
      position: "top-right",
      autoClose: 2000,
    });
  }, []);

  const sortData = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "ascending"
        ? "descending"
        : "ascending";

    const sortedAlerts = [...alerts].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });

    setAlerts(sortedAlerts);
    setSortConfig({ key, direction });
  };

  const filteredAlerts = alerts.filter((alert) =>
    Object.values(alert).some((value) =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const getArrowClass = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending"
        ? "rotate-180 transform transition-transform duration-300"
        : "transform transition-transform duration-300";
    }
    return "transform";
  };
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAlerts.slice(indexOfFirstItem, indexOfLastItem);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="ml-[5px] sm:ml-[10px] lg:ml-[20px] w-full flex flex-col mb-[160px] bg-gray-4">
      <div className="flex gap-2 items-center mt-4 mb-6">
        <h2 className="text-[22px] ml-[1vw] sm:text-[30px] font-bold">Dashboard</h2>
        <img src={pencil} className="h-[18px] ml-[15px] cursor-pointer" />
      </div>

      <div className={`bg-white rounded-lg shadow ml-[1vw] p-4 md:p-3 ${isSlideOpen ? `lg:w-[82.5vw]` : `lg:w-[97.8vw]`} sm:w-[96vw] w-[94vw]`}>        
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex items-center gap-2">
            <p onClick={() => setdbo(!isdbo)} className="text-[18px] cursor-pointer font-semibold">dbo.Alertas</p>
            <span className={`material-symbols-outlined cursor-pointer ${isdbo ? 'rotate-180' : ''} transition-transform duration-300`} onClick={() => setdbo(!isdbo)}>
              keyboard_arrow_down
            </span>
          </div>
          <input
            type="text"
            placeholder="Search alerts..."
            className="border p-2 rounded-md text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: isdbo ? 0 : "auto", opacity: isdbo ? 0 : 1 }} transition={{ duration: 0.7 }} className="overflow-hidden mt-4">
          <div className="grid w-full border border-gray-200 rounded-lg overflow-auto">
            {currentItems.map((alert, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }} className={`grid grid-cols-3 h-[48px] text-gray-1 text-[14px] border-t items-center ${index % 2 === 0 ? 'bg-[#E9EBF0]' : 'bg-white'}`}>
                <div className="pl-4">{alert.timestamp}</div>
                <div className="pl-4">{alert.tipo}</div>
                <div className="pl-4">{alert.descripcion}</div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {[...Array(Math.ceil(filteredAlerts.length / itemsPerPage)).keys()].map(number => (
              <button key={number + 1} onClick={() => paginate(number + 1)} className="mx-1 px-3 py-1 border rounded-md text-sm bg-blue-500 text-white hover:bg-blue-600">{number + 1}</button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

