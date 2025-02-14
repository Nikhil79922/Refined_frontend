import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectBox from "../layout/SelectBox";
import Bottom_window from "./Bottom_window";

const machineOptions = [
  { value: "Máquina1", label: "Máquina 1" },
  { value: "Máquina2", label: "Máquina 2" },
];

const orderOptions = [
  { value: "Orden1", label: "Orden 1" },
  { value: "Orden2", label: "Orden 2" },
];

const unitOptions = [
  { value: "Unidad1", label: "Unidad 1" },
  { value: "Unidad2", label: "Unidad 2" },
];

const defectOptions = [
  { value: "Defecto1", label: "Defecto 1" },
  { value: "Defecto2", label: "Defecto 2" },
];

const Scrap = () => {
  const [selectedMachine, setSelectedMachine] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");
  const [selectedDefect, setSelectedDefect] = useState("");
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleEnterScrap = (data) => {
    alert(JSON.stringify(data, null, 2));

  };

  return (
    <div className="bg-gray-4  mb-20  flex items-start justify-center">
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


          {/* Producto Input */}
          <div className="">
            <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-[600] text-[#141415] font-inter mb-[6px]">Producto</label>
            <input
              type="text"
              placeholder="Producto"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full h-[36px] px-[8px] bg-white text-xs outline-none font-normal text-[#98A2B2] border border-[#E7E7E7] rounded-[6px]"
            />
          </div>

          {/* Descripción Input */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-[600] text-[#141415] font-inter mb-[6px]">Descripción</label>
            <input
              type="text"
              placeholder="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-[36px] px-[8px] bg-white text-xs outline-none font-normal text-[#98A2B2] border border-[#E7E7E7] rounded-[6px]"
            />
          </div>

          {/* Unidad Dropdown */}
          <SelectBox
            label="Unidad"
            name="unit"
            options={unitOptions}
            value={selectedUnit}
            register={register}
            errors={errors}
            onChange={(e) => setSelectedUnit(e.target.value)}
            placeholder="Unidad"
          />

          {/* Tipo de Defecto Dropdown */}
          <SelectBox
            label="Tipo de defecto"
            name="type of defect"
            options={defectOptions}
            value={selectedDefect}
            onChange={(e) => setSelectedDefect(e.target.value)}
            register={register}
            errors={errors}
            placeholder="Tipo de defecto"
          />

          {/* Cantidad Input */}
          <div>
            <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-[600] text-[#141415] font-inter mb-[6px]">Cantidad</label>
            <input
              type="number"
              placeholder="Cantidad"
              {...register("quantity", {
                required: "Cantidad es requerida", 
                min: { value: 1, message: "Debe ser al menos 1" }, 
              })}
              className="w-full h-[36px] px-[8px] bg-white text-xs outline-none font-normal text-[#98A2B2] border border-[#E7E7E7] rounded-[6px]"
            />
            {errors.quantity && <p className="text-red-500 text-xs">{errors.quantity.message}</p>}
          </div>

        </div>

        {/* Submit Button */}
        <div className="mt-6 text-left">
          <button
            type="submit"
            className="w-[170px] h-[35px] bg-[#179FDB] text-white text-sm font-semibold rounded-[6px] hover:bg-[#2A6AB2]"
            onClick={handleSubmit(handleEnterScrap)}
          >
            Introducir Scrap
          </button>
        </div>
      </form>

      <div className="fixed bottom-[25px]">
        <Bottom_window/>
      </div>
    </div>
  );
};

export default Scrap;