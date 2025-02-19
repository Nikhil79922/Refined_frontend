import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectBox from "../layout/SelectBox";
import unfold from '../../assets/svg/unfold.svg'
import Bottom_window from "./Bottom_window";
const machines = [
  { value: "Máquina1", label: "Máquina 1" },
  { value: "Máquina2", label: "Máquina 2" },
  { value: "Máquina3", label: "Máquina 3" },
];

const orders = [
  { value: "0F0001", label: "0F0001" },
  { value: "0F0002", label: "0F0002" },
  { value: "0F0003", label: "0F0003" },
];


const tableData = [
  { machine: "Máquina1", order: "0F0001", product: "PR0001", status: "Producción", toFabricate: "10,000", fabricated: "7,564", bgClass: "bg-green-100" },
  { machine: "Máquina2", order: "0F0002", product: "PR0002", status: "Microparo", toFabricate: "13,000", fabricated: "10,364", bgClass: "bg-orange-100" },
  { machine: "Máquina3", order: "0F0003", product: "PR0003", status: "Microparo", toFabricate: "10,000", fabricated: "5,000", bgClass: "bg-white" },
  { machine: "Máquina4", order: "0F0004", product: "PR0004", status: "Paro", toFabricate: "5,000", fabricated: "2,365", bgClass: "bg-red-100" },
  { machine: "Máquina5", order: "0F0005", product: "PR0005", status: "Preparación", toFabricate: "3,500", fabricated: "0", bgClass: "bg-blue-100" },
  { machine: "Máquina6", order: "0F0006", product: "PR0006", status: "Limpieza", toFabricate: "8,000", fabricated: "7,956", bgClass: "bg-yellow-50" },
];

export default function Orden() {
  const [selectedMachine, setSelectedMachine] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("");
  const [tabValue, setTabValue] = useState(0);
  const [finalizedRows, setFinalizedRows] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleTabChange = (value) => {
    setTabValue(value);
  };

  const handleStartOrder = (data) => {
    alert(JSON.stringify(data, null, 2));

  };

  const handleFinalize = (index) => {
    setFinalizedRows((prev) => [...prev, index]);
  };



  return (
    <div className="px-4  mb-24   bg-gray-4 ">
      {/* Top Form */}
      <div className="flex flex-wrap items-center gap-4 mb-6 bg-gray-4 rounded">
        {/* Machine Dropdown */}
        <div className="flex flex-col w-full sm:w-1/3">
          <SelectBox
            label="Máquina"
            name="machine"
            options={machines}
            value={selectedMachine}
            onChange={(e) => setSelectedMachine(e.target.value)}
            placeholder="Máquina"
            register={register}
            errors={errors}
          />
        </div>

        {/* Order Dropdown */}


        <div className="flex flex-col w-full sm:w-1/3">
          <SelectBox
            label="Orden"
            name="order"
            options={orders}
            value={selectedOrder}
            onChange={(e) => setSelectedOrder(e.target.value)}
            placeholder="Orden"
            register={register}
            errors={errors}
          />
        </div>
        {/* Button */}
        <div className="flex flex-col w-full sm:w-auto self-start ">
        <label className="invisible hidden sm:block mb-1">Button</label>
          <button
            className="w-full sm:w-[170px] h-[35px] bg-[#179FDB] text-white text-sm font-semibold rounded-[6px]  hover:bg-[#2A6AB2]"
            onClick={handleSubmit(handleStartOrder)}
          >
            Iniciar Orden
          </button>
        </div>
      </div>

      {/* Timeline Tabs */}
      <div className="bg-white p-4 rounded-[12px] border-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[20px] leading-[22px] font-semibold font-inter">Timeline</h2>
          <div className="flex gap-1">
            {["Day", "Week", "Month"].map((label, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(index)}
                className={`text-[10px] leading-[10px] font-inter font-normal px-2 py-2 rounded ${tabValue === index ? "bg-blue-580 text-white" : "text-gray-600"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto rounded-[12px]  font-inter">
          <table className="min-w-full   table-auto">
            <thead>
              <tr className="bg-[#2A6AB2] ">
                {[
                  "Máquina",
                  "Orden",
                  "Producto",
                  "Estado",
                  "Cant. Fabricar",
                  "Cant. Fabricada",
                  "Finalizar",
                ].map((header, index) => (
                  <th
                    key={index}
                    className="text-white h-auto font-semibold text-[14px] leading-[18px] px-4 py-4 text-left"
                  >
                    <div className="flex items-center ">
                      {header}
                      <img src={unfold} className={`h-[16px] ml-[9px] cursor-pointer`} />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[12px]  leading-[14px]  font-[350] py-[15px] font-inter">
              {tableData.map((row, index) => (
                <tr key={index} className={`${row.bgClass}`}>
                  {finalizedRows.includes(index) ? (
                    <>
                      <td className="px-4 h-[46px] py-2">{row.machine}</td>
                      <td colSpan={6} className="px-4 py-2   text-center">


                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-4 py-2  ">{row.machine}</td>
                      <td className="px-4 py-2">{row.order}</td>
                      <td className="px-4 py-2">{row.product}</td>
                      <td className="px-4 py-2">{row.status}</td>
                      <td className="px-4 py-2">{row.toFabricate}</td>
                      <td className="px-4 py-2">{row.fabricated}</td>
                      <td className="px-4 py-2 text-left">
                        <button
                          className="bg-[#C52031] leading-[14px] text-[#ffffff] text-[11px] py-2 px-3 rounded-[5px]"
                          onClick={() => handleFinalize(index)}
                        >
                          Finalizar
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="fixed bottom-[25px]">
        <Bottom_window />
      </div>

    </div>
  );
}