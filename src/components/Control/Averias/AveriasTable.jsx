import React from "react";
import unfold from '../../../assets/svg/unfold.svg'
import { useForm, Controller } from "react-hook-form";

export default function AveriasTable({ data, selectedRows, toggleSelectRow, toggleSelectAll })
{
  const { control, watch, setValue } = useForm();
  return (
    <div className="overflow-x-auto rounded-t-[14px] border border-[#E9EBF0]">
      <table className="w-[260vw] md:w-[170vw] lg:w-full sm:w-[140vw]  table-auto">
        <thead>
          <tr className="bg-[#2A6AB2] gap-[6px]">
            <th className="bg-[#2A6AB2] h-[20px] font-normal text-lg px-4 py-2 text-left">
              <Controller
                name="selectAll"
                control={control}
                render={({ field }) => (
                  <input
                    type="checkbox"
                    checked={selectedRows.length === data.length}
                    onChange={toggleSelectAll}
                    {...field}
                  />
                )}
              />
            </th>
            {[
              "Máquina",
              "Orden",
              "Motivo Parada",
              "Fecha Inicio",
              "Fecha Fin",
              "Duración",
              "Comentarios"
            ].map((header, index) => (
              <th
                key={index}
                className="text-white h-auto font-medium text-[14px] leading-[16px] px-4 py-3 text-left"
              >
                <div className="flex items-center gap-2">
                  {header}
                  <img src={unfold} className="h-[14px] cursor-pointer" />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-[11.5px] leading-[14px] font-inter font-[400]">
          {data.map((row, index) => (
            <tr key={index} className="bg-white">
              <td className="px-4 py-3 border-b-[1px]">
                <Controller
                  name={`selectRow-${index}`}
                  control={control}
                  render={({ field }) => (
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(index)}
                      onChange={() => toggleSelectRow(index)}
                      {...field}
                    />
                  )}
                />
              </td>
              <td className="px-4 py-2 border-b-[1px]">{row.maquina}</td>
              <td className="px-4 py-2 border-b-[1px]">{row.orden}</td>
              <td className="px-4 py-2 border-b-[1px]">{row.motivo}</td>
              <td className="px-4 py-2 border-b-[1px]">{row.inicio}</td>
              <td className="px-4 py-2 border-b-[1px]">{row.fin}</td>
              <td className="px-4 py-2 border-b-[1px]">{row.duracion}</td>
              <td className="px-4 py-2 border-b-[1px]">{row.comentarios}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}