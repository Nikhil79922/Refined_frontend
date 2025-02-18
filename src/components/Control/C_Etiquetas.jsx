/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectBox from "../layout/SelectBox";
import Bottom_window from "./Bottom_window";
import InputBox from "../layout/InputBox";

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
    <div className="bg-gray-4 mb-[29.5vw] flex items-start justify-center">
      <form className="bg-gray-4 px-4 rounded-lg w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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


          <div className="relative mb-1">
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
        </div>

        {/* Button Section */}
        <div className="mt-6 text-left">
          <button
            className="w-[170px] h-[35px] bg-[#179FDB] text-white text-sm font-semibold rounded-[6px] hover:bg-[#2A6AB2]"
            onClick={handleSubmit(handlePrintLabels)}
          >
            Imprimir etiquetas
          </button>
        </div>
      </form>

      <div className="fixed bottom-[25px]">
        <Bottom_window />
      </div>
    </div>

  );
}

export default C_Etiquetas;