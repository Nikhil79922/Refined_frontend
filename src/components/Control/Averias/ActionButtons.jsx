import React from "react";

export default function ActionButtons({ openModal, data })
{
    return(
        <div className=" flex flex-wrap items-center gap-4 mb-4 ">
          <button
            className="bg-blue-570 h-[30px] text-xs text-white px-4 py-2 rounded-lg hover:bg-blue-590"
            onClick={() => openModal("edit", data[0])} // Opens edit modal for the first row as an example
          >
            Editar
          </button>
          <button
            className="bg-green-500  h-[30px]  text-xs text-white px-4 py-1 rounded-lg hover:bg-green-600"
            onClick={() => openModal("agrupar", data[0])}
          >
            Agrupar
          </button>
          <button
            className="bg-yellow-500 h-[30px] text-xs text-white px-4 py-1 rounded-lg hover:bg-yellow-600"
            onClick={() => openModal("dividir", data[0])}
          >
            Dividir
          </button>
          <button
            className="bg-gray-400 h-[30px] text-xs text-white  px-4 py-1 rounded-lg hover:bg-gray-500"
          >
            Mostrar averías sin motivo
          </button>
        </div>
    );
}