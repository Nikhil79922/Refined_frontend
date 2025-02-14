import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SelectBox from "../layout/SelectBox";
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
    <div className="px-4 mb-7 bg-gray-4 ">
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
        <div className="flex flex-col w-full sm:w-auto">
          <label className="invisible mb-1">Button</label>
          <button
            className="w-full sm:w-[170px] h-[35px] bg-blue-570 text-white text-sm font-medium rounded  hover:bg-blue-590"
            onClick={handleSubmit(handleStartOrder)}

          >
            Iniciar Orden
          </button>
        </div>
      </div>

      {/* Timeline Tabs */}
      <div className="bg-white p-4 rounded border-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Timeline</h2>
          <div className="flex gap-1">
            {["Day", "Week", "Month"].map((label, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(index)}
                className={`text-[9px] font-normal px-2 py-2 rounded ${tabValue === index ? "bg-blue-580 text-white" : "text-gray-600"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto rounded border border-gray-100">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-blue-580">
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
                    className="text-white font-medium text-sm px-4 py-2 text-left"
                  >
                    <div className="flex items-center gap-2">
                      {header}
                      <span className="material-symbols-outlined font-thin">unfold_more</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-xs">
              {tableData.map((row, index) => (
                <tr key={index} className={`${row.bgClass}`}>
                  {finalizedRows.includes(index) ? (
                    <>
                      <td className="px-4 py-2">{row.machine}</td>
                      <td colSpan={6} className="px-4 py-2 text-center">

                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-4 py-2">{row.machine}</td>
                      <td className="px-4 py-2">{row.order}</td>
                      <td className="px-4 py-2">{row.product}</td>
                      <td className="px-4 py-2">{row.status}</td>
                      <td className="px-4 py-2">{row.toFabricate}</td>
                      <td className="px-4 py-2">{row.fabricated}</td>
                      <td className="px-4 py-2 text-left">
                        <button
                          className="bg-red-500 text-gray-100 text-[11px] py-1 px-4 rounded"
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
        <Bottom_window/>
      </div>

    </div>
  );
}
