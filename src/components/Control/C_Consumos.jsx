
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectBox from "../layout/SelectBox";
import Bottom_window from "./Bottom_window";

const machineOptions = [
  { value: "Máquina1", label: "Máquina 1" },
  { value: "Máquina2", label: "Máquina 2" },
  { value: "Máquina3", label: "Máquina 3" },
  { value: "Máquina4", label: "Máquina 4" },
  { value: "Máquina5", label: "Máquina 5" },
  { value: "Máquina6", label: "Máquina 6" },
];

const orderOptions = [
  { value: "0F0001", label: "0F0001" },
  { value: "0F0002", label: "0F0002" },
  { value: "0F0003", label: "0F0003" },
  { value: "0F0004", label: "0F0004" },
  { value: "0F0005", label: "0F0005" },
  { value: "0F0006", label: "0F0006" },
];

function C_Consumos() {
  const [selectedMachine, setSelectedMachine] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEnterConsumption = (data) => {
    alert(JSON.stringify(data, null, 2));

  };


  return (
    <div className="bg-gray-4 mb-[23vw] flex items-start justify-center">
    <form className="bg-gray-4 px-4 rounded-lg w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Máquina Dropdown */}
        <SelectBox
          label="Máquina"
          name="machine"
          options={machineOptions}
          value={selectedMachine}
          onChange={(e) => setSelectedMachine(e.target.value)}
          placeholder="Máquina"
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
          placeholder="Orden"
          register={register}
          errors={errors}
        />

        {/* Unidad Input */}
        <div className="relative mb-1">
          <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-[600] text-[#141415] font-inter mb-[6px]">
            Unidad
          </label>
          <input
            type="text"
            placeholder="Unidad"
            {...register("unidad", { required: "Unidad es requerida" })}
            className="w-full h-[36px] px-[8px] bg-white text-xs outline-none font-normal text-[#98A2B2] border border-[#E7E7E7] rounded-[6px]"
          />
          {errors.unidad && <p className="absolute left-0 text-red-500 text-xs mt-1">{errors.unidad.message}</p>}
        </div>

        {/* Referencia Input */}
        <div className="relative mb-1">
          <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-[600] text-[#141415] font-inter mb-[6px]">
            Referencia
          </label>
          <input
            type="text"
            placeholder="Referencia"
            {...register("referencia", { required: "Referencia es requerida" })}
            className="w-full h-[36px] px-[8px] bg-white text-xs outline-none font-normal text-[#98A2B2] border border-[#E7E7E7] rounded-[6px]"
          />
          {errors.referencia && <p className="absolute left-0 text-red-500 text-xs mt-1">{errors.referencia.message}</p>}
        </div>

        {/* Cantidad Input */}
        <div className="relative mb-1">
          <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-[600] text-[#141415] font-inter mb-[6px]">
            Cantidad
          </label>
          <input
            type="number"
            placeholder="Cantidad"
            {...register("quantity", {
              required: "Cantidad es requerida",
              min: { value: 1, message: "Debe ser al menos 1" },
            })}
            className="w-full h-[36px] px-[8px] bg-white text-xs outline-none font-normal text-[#98A2B2] border border-[#E7E7E7] rounded-[6px]"
          />
          {errors.quantity && <p className="absolute left-0 mt-1 text-red-500 text-xs">{errors.quantity.message}</p>}
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6 text-left">
        <button
          type="submit"
          className="w-[170px] h-[35px] bg-[#179FDB] text-white text-sm font-semibold rounded-[6px] hover:bg-[#2A6AB2]"
          onClick={handleSubmit(handleEnterConsumption)}
        >
          Introducir consumo
        </button>
      </div>
    </form>

    <div className="fixed bottom-[25px]">
      <Bottom_window />
    </div>
  </div>
  );
}

export default C_Consumos;