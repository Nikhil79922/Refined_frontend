import React from "react";
import { useForm } from "react-hook-form";
import SelectBox from "../../layout/SelectBox.jsx";
import cross from "../../../assets/svg/cross.svg"



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

const failureOptions = [
  { value: "ajuste", label: "Ajuste" },
  { value: "averia", label: "Avería" },
  { value: "cambio", label: "Cambio" },
];

export default function Modal({ isOpen, closeModal, modalType, selectedRow, handleSave }) {
  
  const currentDate = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50"
      style={{ zIndex: 60 }}>
      <div className="bg-white rounded-[12px] shadow-md sm:w-[500px] ">
        <div className="flex justify-between items-center text-[#141415] bg-[#F2F2F7] rounded-t-[12px]  py-4 px-4">
          <h3 className="text-[24px] leading-[25px] font-bold font-inter ">
            {modalType === "edit" ? "Editar Pop-up Window" : modalType === "agrupar" ? "Agrupar Pop-up Window" : "Dividir Pop-up Window"}
          </h3>
          <button  onClick={closeModal}>
            <img src={cross} className="text-[#141415] h-[15px] px-[10px] cursor-pointer text-[26px] md:text-[22px]"  />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
          {/* Máquina Dropdown */}
          <SelectBox
            label="Máquina"
            name="machine"
            options={machineOptions}
            value={selectedRow?.maquina || ""}
            onChange={(e) => console.log(e.target.value)}
            placeholder="Filtro Máquina"
            register={register}
            errors={errors}
          />

          {/* Orden Dropdown */}
          <SelectBox
            label="Orden"
            name="order"
            options={orderOptions}
            value={selectedRow?.orden || ""}
            onChange={(e) => console.log(e.target.value)}
            placeholder="Filtro Orden"
            register={register}
            errors={errors}
          />

          {/* Show only in Edit Mode */}
          {modalType === "edit" && (
            <SelectBox
              label="Tipo de Avería"
              name="type of defect"
              options={failureOptions}
              value={selectedRow?.motivo || ""}
              onChange={(e) => console.log(e.target.value)}
              placeholder="Tipo de Avería"
              register={register}
              errors={errors}
            />
          )}

          {/* Show in Agrupar or Dividir Mode */}
          {(modalType === "agrupar" || modalType === "dividir") && (
            <>
              <div>
                <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">Fecha Inicio</label>
                <input
                  type="date"
                  defaultValue={currentDate}
                  className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-300 rounded"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px]">Fecha Fin</label>
                <input
                  type="date"
                  defaultValue={currentDate}
                  className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-300 rounded"
                />
              </div>

              <SelectBox
                label="Tipo de Avería"
                name="type of defect"
                options={failureOptions}
                value={selectedRow?.motivo || ""}
                onChange={(e) => console.log(e.target.value)}
                placeholder="Seleccione un tipo de avería"
                register={register}
                errors={errors}
              />
            </>
          )}
        </div>

        <div className="px-4">
          <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-medium text-black mb-[2px] ">Comentarios</label>
          <textarea
            className="w-full h-[36px] p-2  bg-white text-xs outline-none font-normal  text-gray-700 border border-gray-300 rounded"
            placeholder="Type here..."
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-start gap-[14px] p-4 leading-[16px]">
          <button className="bg-[#7A8699] font-inter font-medium text-[14px]  text-[#F2F2F7] px-4 py-3 rounded-lg w-full sm:w-auto" onClick={closeModal}>
            Cancelar
          </button>
          <button className="bg-[#179FDB] font-inter font-medium text-[14px]  text-[#F2F2F7] px-4 py-3 rounded-lg w-full sm:w-auto" onClick={handleSubmit(handleSave)}>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}