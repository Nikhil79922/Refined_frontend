import React from "react";

export default function AveriasTable({ data, selectedRows, toggleSelectRow, toggleSelectAll })
{
    return (
        <div className="overflow-x-auto rounded border border-gray-100">
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-blue-470">
          <th className="text-blue-470 font-normal text-lg px-4 py-2 text-left">
            <input
              type="checkbox"
              checked={selectedRows.length === data.length}
              onChange={toggleSelectAll}
            />
          </th>
          {["Máquina", "Orden", "Motivo Parada", "Fecha Inicio", "Fecha Fin", "Duración", "Comentarios"].map(
            (header, index) => (
              <th
                key={index}
                className="text-white font-semibold text-[12px] px-4 py-2 text-left"
              >
                <div className="flex items-center gap-2">
                  {header}
                  <span class="material-symbols-outlined">
                    unfold_more
                  </span>
                </div>
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody className="text-xs">
        {data.map((row, index) => (
          <tr key={index} className="bg-white">
            <td className="px-4 py-2 border-b-[1px]">
              <input
                type="checkbox"
                checked={selectedRows.includes(index)}
                onChange={() => toggleSelectRow(index)}
              />
            </td>
            <td className="px-4 py-2 border-b-[1px] ">{row.orden}</td>
            <td className="px-4 py-2 border-b-[1px] ">{row.maquina}</td>
            <td className="px-4 py-2 border-b-[1px] ">{row.motivo}</td>
            <td className="px-4 py-2 border-b-[1px] ">{row.inicio}</td>
            <td className="px-4 py-2 border-b-[1px] ">{row.fin}</td>
            <td className="px-4 py-2 border-b-[1px] ">{row.duracion}</td>
            <td className="px-4 py-2 border-b-[1px] ">{row.comentarios}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

    )
}
