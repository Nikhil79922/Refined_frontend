import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectBox from "../layout/SelectBox";
import InputBox from "../layout/InputBox";
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
    <div className="bg-gray-4 mb-[24vw] flex items-start justify-center">
      <form onSubmit={handleSubmit(handleEnterScrap)} className="bg-gray-4 px-4  rounded-lg w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <SelectBox label="Máquina" name="machine" options={machineOptions} register={register} errors={errors} placeholder="Máquina" />
          <SelectBox label="Orden" name="order" options={orderOptions} register={register} errors={errors} placeholder="Orden" />

          <InputBox label="Producto" name="product" type="text" placeholder="Producto" register={register} errors={!errors} />
          <div className="col-span-1 sm:col-span-2 lg:col-span-3"> 
          <InputBox     label="Descripción" name="description" type="text" placeholder="Descripción" register={register} errors={!errors} />
          </div>
          
          <SelectBox label="Unidad" name="unit" options={unitOptions} register={register} errors={errors} placeholder="Unidad" />
          <SelectBox label="Tipo de defecto" name="typeOfDefect" options={defectOptions} register={register} errors={errors} placeholder="Tipo de defecto" />
          <InputBox label="Cantidad" name="quantity" type="number" placeholder="Cantidad" register={register} errors={errors} />
        </div>

        <div className="mt-6 text-left">
          <button type="submit" className="w-[170px] h-[35px] bg-[#179FDB] text-white text-sm font-semibold rounded-[6px] hover:bg-[#2A6AB2]">
            Introducir Scrap
          </button>
        </div>
      </form>

      <div className="fixed bottom-[25px]">
        <Bottom_window />
      </div>
    </div>
  );
};

export default Scrap;