
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectBox from "../layout/SelectBox";
import Bottom_window from "./Bottom_window";
import InputBox from "../layout/InputBox";

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
          <InputBox
            className="relative mb-1"
            label="Unidad"
            name="unidad"
            type="text"
            placeholder="Unidad"
            register={register}
            errors={errors}
            validation={{ required: "Unidad es requerida" }}
          />

          {/* Referencia Input */}
          <InputBox
            className="relative mb-1"
            label="Referencia"
            name="referencia"
            type="text"
            placeholder="Referencia"
            register={register}
            errors={errors}
            validation={{ required: "Referencia es requerida" }}
          />

          {/* Cantidad Input */}
          <InputBox
            className="relative mb-1"
            label="Cantidad"
            name="quantity"
            type="number"
            placeholder="Cantidad"
            register={register}
            errors={errors}
            validation={{
              required: "Cantidad es requerida",
              min: { value: 1, message: "Debe ser al menos 1" },
            }}
          />

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