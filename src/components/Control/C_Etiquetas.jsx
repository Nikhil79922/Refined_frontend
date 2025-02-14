/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectBox from "../layout/SelectBox"; // Importing the reusable SelectBox component
import Bottom_window from "./Bottom_window";

const printerOptions = [
  { value: "Impresora1", label: "Impresora 1" },
  { value: "Impresora2", label: "Impresora 2" },
  { value: "Impresora3", label: "Impresora 3" },
  { value: "Impresora4", label: "Impresora 4" },
  { value: "Impresora5", label: "Impresora 5" },
  { value: "Impresora6", label: "Impresora 6" },
];

const labelOptions = [
  { value: "Etiqueta1", label: "Etiqueta 1" },
  { value: "Etiqueta2", label: "Etiqueta 2" },
  { value: "Etiqueta3", label: "Etiqueta 3" },
  { value: "Etiqueta4", label: "Etiqueta 4" },
  { value: "Etiqueta5", label: "Etiqueta 5" },
  { value: "Etiqueta6", label: "Etiqueta 6" },
];

function C_Etiquetas() {
  const [selectedPrinter, setSelectedPrinter] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");
  const [quantity, setQuantity] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const handlePrintLabels = (data) => {
    alert(JSON.stringify(data, null, 2));
    
  };

  return (
    <div className="grid grid-cols-1 gap-2 mb-6 w-[100vw] lg:w-[83vw] mt-[-10px] ml-[5px] lg:ml-[10px]">
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-3 rounded">
        {/* Impresora Dropdown */}
        <SelectBox
          label="Impresora"
          name="printer"
          options={printerOptions}
          value={selectedPrinter}
          onChange={(e) => setSelectedPrinter(e.target.value)}
          placeholder="Impresora"
          register={register}
          errors={errors}
        />

        {/* Etiqueta Dropdown */}
        <SelectBox
          label="Etiqueta"
          name="label"
          options={labelOptions}
          value={selectedLabel}
          onChange={(e) => setSelectedLabel(e.target.value)}
          placeholder="Etiqueta"
          register={register}
          errors={errors}
        />

        {/* Cantidad Input */}
        <div>
            <label className="block text-sm font-[600] font-inter text-gray-1 mb-1">Cantidad</label>
            <input
              type="number"
              placeholder="Cantidad"
              {...register("quantity", {
                required: "Cantidad es requerida", 
                min: { value: 1, message: "Debe ser al menos 1" }, 
              })}
              className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-700 border border-gray-300 rounded"
            />
            {errors.quantity && <p className="text-red-500 text-xs">{errors.quantity.message}</p>}
          </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-start lg:justify-start ml-[12px]">
        <button
          className="w-[176px] h-[45px] bg-blue-2 text-white text-sm font-[700] rounded font-inter  hover:bg-blue-500"
          onClick={handleSubmit(handlePrintLabels)}
        >
          Imprimir etiquetas
        </button>
      </div>

      <div className="fixed bottom-[25px]">
        <Bottom_window/>
      </div>

    </div>
  );
}

export default C_Etiquetas;
