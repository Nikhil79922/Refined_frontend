import React, { useState } from "react";
import FilterControls from "./FilterControls";
import ActionButtons from "./ActionButtons";
import AveriasTable from "./AveriasTable";
import Modal from "./Modal";
import Bottom_window from "../Bottom_window";

const Averias = () => {
  const [data, setData] = useState([
    { maquina: "Máquina1", orden: "OPG001", motivo: "AJUSTE", inicio: "2024-10-30 16:26:04", fin: "2024-10-30 16:26:04", duracion: "14.67", comentarios: "" },
    { maquina: "Máquina3", orden: "OPG002", motivo: "AVERÍA", inicio: "2024-10-14 12:35:00", fin: "2024-10-14 12:45:00", duracion: "15", comentarios: "" },
    { maquina: "Máquina4", orden: "OPG003", motivo: "CAMBIO", inicio: "2024-10-13 13:36:06", fin: "2024-10-13 14:05:30", duracion: "28.9", comentarios: "" },
    { maquina: "Máquina4", orden: "OPG003", motivo: "CAMBIO", inicio: "2024-10-13 13:36:06", fin: "2024-10-13 14:05:30", duracion: "28.9", comentarios: "" },
    { maquina: "Máquina4", orden: "OPG003", motivo: "CAMBIO", inicio: "2024-10-13 13:36:06", fin: "2024-10-13 14:05:30", duracion: "28.9", comentarios: "" },
    { maquina: "Máquina4", orden: "OPG003", motivo: "CAMBIO", inicio: "2024-10-13 13:36:06", fin: "2024-10-13 14:05:30", duracion: "28.9", comentarios: "" },
    { maquina: "Máquina4", orden: "OPG003", motivo: "CAMBIO", inicio: "2024-10-13 13:36:06", fin: "2024-10-13 14:05:30", duracion: "28.9", comentarios: "" },
    { maquina: "Máquina4", orden: "OPG003", motivo: "CAMBIO", inicio: "2024-10-13 13:36:06", fin: "2024-10-13 14:05:30", duracion: "28.9", comentarios: "" },
    { maquina: "Máquina4", orden: "OPG003", motivo: "CAMBIO", inicio: "2024-10-13 13:36:06", fin: "2024-10-13 14:05:30", duracion: "28.9", comentarios: "" },
    { maquina: "Máquina4", orden: "OPG003", motivo: "CAMBIO", inicio: "2024-10-13 13:36:06", fin: "2024-10-13 14:05:30", duracion: "28.9", comentarios: "" },

  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // "edit", "agrupar", "dividir"
  const [selectedRow, setSelectedRow] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [selectedRows, setSelectedRows] = useState([]); // Track selected rows

  const handleTabChange = (value) => {
    setTabValue(value);
  };

  const openModal = (type, row) => {
    setSelectedRow(row);
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
    setModalType(null);
  };

  const handleSave = (data) => {
    // Logic for saving the updated data
    console.log(JSON.stringify(data, null, 2));
    
    closeModal();
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]); // Deselect all if all are selected
    } else {
      setSelectedRows(data.map((row, index) => index)); // Select all rows
    }
  };

  const toggleSelectRow = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((id) => id !== index)); // Deselect row
    } else {
      setSelectedRows([...selectedRows, index]); // Select row
    }
  };

  return (
    <div className="bg-gray-4 mb-7 px-4 sm:px-4">
      {/* Filter Controls */}
      <FilterControls />
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">

        {/* Action Buttons */}
        <ActionButtons openModal={openModal} data={data} />

        {/* Table */}
        <AveriasTable data={data} selectedRows={selectedRows} toggleSelectAll={toggleSelectAll} />
        {/* Pagination */}
        <div className="pt-4 pb-1 border-b flex justify-between">
          <p className="text-left text-gray-400 text-[10px]">Showing 1 to 10 of 50 Entries</p>
          <div className="flex gap-[2px]">
            {["prev", "1", "2", "3", "next"].map((label, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(index)}
                className={`text-[10px] text-gray-400  px-2 py-2 rounded ${tabValue === index ? "bg-blue-570 text-white" : "text-gray-400"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Modals */}
        <Modal isOpen={isModalOpen} closeModal={closeModal} modalType={modalType} handleSave={handleSave} selectedRow={selectedRow} />
      </div>


           <div className="fixed bottom-[25px]">
              <Bottom_window/>
            </div>
    </div>
  );
};

export default Averias;
