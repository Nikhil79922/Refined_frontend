/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import unfold from "../../assets/svg/unfold.svg";

export default function Bottom_window() {
  const isSlideOpen = useSelector((state) => state.sidebar.isSlideOpen);
  const [isdbo, setdbo] = useState(true);
  const [alerts, setAlerts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(6);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);

  // Mapping for correct field names between frontend and backend
  const fieldMapping = {
    timestamp: "Timestamp",
    tipo: "Tipo",
    descripcion: "Descripcion"
  };

  const [sortConfig, setSortConfig] = useState({
    key: fieldMapping.timestamp, // Default sorting field
    direction: "asc",
  });

  useEffect(() => {
    fetchAlerts();
  }, [pageNumber, entriesPerPage, sortConfig, searchQuery]);

  const fetchAlerts = async () => {
    const requestData = {
      pageNumber,
      entries: entriesPerPage,
      orderByField: sortConfig.key, // Ensure mapped field name
      orderDirection: sortConfig.direction,
      searchQuery,
    };

    console.log("Sending API request:", requestData); // Debug API call

    try {
      const response = await fetch("http://localhost:8000/alertas/first", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) throw new Error("Failed to fetch alerts");

      const data = await response.json();
      console.log("API Response:", data); // Debug API response

      if (data.IsSuccess && data.Data) {
        setAlerts(data.Data.data || []);
        setTotalRecords(data.Data.totalRecords);
        setTotalPages(Math.ceil(data.Data.totalRecords / entriesPerPage));
      }
    } catch (error) {
      console.error("Error fetching alerts:", error);
    }
  };

  const sortData = (key) => {
    setSortConfig((prev) => ({
      key: fieldMapping[key] || key, // Ensure correct backend field name
      direction: prev.key === fieldMapping[key] && prev.direction === "asc" ? "desc" : "asc",
    }));
    setPageNumber(1); // Reset to first page
  };

  const getArrowClass = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc"
        ? "rotate-180 transform transition-transform duration-300"
        : "transform transition-transform duration-300";
    }
    return "transform";
  };
  
  return (
    <div className={`bg-white rounded-lg shadow p-4 ${isSlideOpen ? `lg:w-[82.5vw]` : `lg:w-[97.8vw]`} overflow-x-auto`}>
      <div className="flex gap-4 items-center p-1 pb-4 border-b">
        <p onClick={() => setdbo(!isdbo)} className="text-lg cursor-pointer font-semibold text-gray-700">dbo.Alertas</p>
        <span
          className={`material-symbols-outlined text-lg md:text-xl font-bold cursor-pointer ${isdbo ? 'rotate-180' : ''} transition-transform duration-300`}
          onClick={() => setdbo(!isdbo)}
        >
          keyboard_arrow_down
        </span>
      </div>

      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: isdbo ? 0 : "auto", opacity: isdbo ? 0 : 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5 }}   className="overflow-hidden max-h-[80vh] scrollbar-hide overflow-y-auto">
        <div className="flex justify-between items-center mt-2 mb-2">
          <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="p-2 border rounded-md" />
          <select value={entriesPerPage} onChange={(e) => { setEntriesPerPage(Number(e.target.value)); setPageNumber(1); }} className="p-2 border rounded-md">
            {[5, 10, 20, 50, 100].map(num => <option key={num} value={num}>{num}</option>)}
          </select>
        </div>

        <div className="grid overflow-auto mt-4 border border-gray-200 rounded-lg">
          <div className="grid grid-cols-3 h-[55px] items-center bg-blue-600 text-white font-semibold text-sm rounded-t-lg">
            {["timestamp", "tipo", "descripcion"].map((col) => (
              <div key={col} className="pl-4 cursor-pointer flex items-center" onClick={() => sortData(col)}>
                {col.charAt(0).toUpperCase() + col.slice(1)}
                <img src={unfold} className={`h-[14px] sm:h-[18px] ml-[5px] sm:ml-[11px] ${getArrowClass(col.charAt(0).toUpperCase() + col.slice(1))}`} />
              </div>
            ))}
          </div>

          {alerts.length > 0 ? alerts.map((alert, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.05 }} className={`grid grid-cols-3 h-[48px] text-gray-700 text-sm items-center border-t ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}>
              <div className="pl-4">{alert.Timestamp}</div>
              <div className="pl-4">{alert.Tipo}</div>
              <div className="pl-4">{alert.Descripcion}</div>
            </motion.div>
          )) : <div className="p-4 text-center text-gray-500">No alerts found.</div>}
        </div>

        <div className="flex justify-between mt-4">
          <button disabled={pageNumber === 1} onClick={() => setPageNumber(pageNumber - 1)} className="px-3 py-1 bg-gray-300 text-gray-700 rounded disabled:opacity-50">Previous</button>
          <span className="text-gray-700">Page {pageNumber} of {totalPages} | Total Records: {totalRecords}</span>
          <button disabled={pageNumber === totalPages} onClick={() => setPageNumber(pageNumber + 1)} className="px-3 py-1 bg-gray-300 text-gray-700 rounded disabled:opacity-50">Next</button>
        </div>
      </motion.div>
    </div>
  );
}
