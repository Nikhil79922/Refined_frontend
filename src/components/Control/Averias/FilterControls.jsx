import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectBox from "../../layout/SelectBox.jsx";
const machineOptions = [
  { value: "Máquina1", label: "Máquina 1" },
  { value: "Máquina2", label: "Máquina 2" },
  { value: "Máquina3", label: "Máquina 3" },
];

const orderOptions = [
  { value: "Orden1", label: "Orden 1" },
  { value: "Orden2", label: "Orden 2" },
  { value: "Orden3", label: "Orden 3" },
];

export default function FilterControls() {
  const [selectedMachine, setSelectedMachine] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const currentDate = new Date().toISOString().split("T")[0];
  return (


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
      {/* Máquina Dropdown */}
      <SelectBox
        label="Máquina"
        name="machine"
        options={machineOptions}
        value={selectedMachine}
        onChange={(e) => setSelectedMachine(e.target.value)}
        placeholder="Filtro Máquina"
        register={register}
        errors={errors}
      />

      {/* Orden Dropdown */}
      <SelectBox
        label="Orden"
        name="order"
        options={orderOptions}
        value={selectedOrder}
        onChange={(e) => setSelectedOrder(e.target.value)}
        placeholder="Filtro Orden"
        register={register}
        errors={errors}
      />

      {/* Fecha Inicio Input */}
      <div>
        <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-[600] text-[#141415] font-inter mb-[6px]">Fecha Inicio</label>
        <input
          type="date"
          value={startDate}
          defaultValue={currentDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full h-[36px] px-[8px] bg-white text-xs outline-none font-normal text-[#98A2B2] border border-[#E7E7E7] rounded-[6px]"
        />
      </div>

      {/* Fecha Fin Input */}
      <div>
        <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-[600] text-[#141415] font-inter mb-[6px]">Fecha Fin</label>
        <input
          type="date"
          value={endDate}
          defaultValue={currentDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full h-[36px] px-[8px] bg-white text-xs outline-none font-normal text-[#98A2B2] border border-[#E7E7E7] rounded-[6px]"
        />
      </div>
    </div>
  );
}