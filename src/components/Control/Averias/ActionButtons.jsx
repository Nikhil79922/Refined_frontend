import React from "react";

export default function ActionButtons({ openModal, data })
{
    return(
        <div className=" flex flex-wrap items-center gap-4 mb-4 ">
          <button
            className="bg-[#179FDB] h-[30px] text-[14px] leading-[14px] font-normal text-[#FFFFFF] font-inter px-4 py-2 rounded-[6px] hover:bg-blue-590"
            onClick={() => openModal("edit", data[0])} 
          >
            Editar
          </button>
          <button 
            className="bg-[#94C11F]  h-[30px]  text-[14px] leading-[14px] font-normal text-[#FFFFFF] font-inter px-4 py-1 rounded-[6px] hover:bg-[#82AC1A]"
            onClick={() => openModal("agrupar", data[0])}
          >
            Agrupar
          </button>
          <button
            className="bg-[#F2D112]  h-[30px] text-[14px] leading-[14px] font-normal text-[#FFFFFF] px-4 font-inter py-1 rounded-[6px] hover:bg-[#D4B80F]"
            onClick={() => openModal("dividir", data[0])}
          >
            Dividir
          </button>
          <button
            className="bg-[#98A2B2] h-[30px] text-[14px] leading-[14px] font-normal text-[#FFFFFF] font-inter px-4 py-1 rounded-[6px] hover:bg-[#7F8A9E]"
          >
            Mostrar averías sin motivo
          </button>
        </div>
    );
}