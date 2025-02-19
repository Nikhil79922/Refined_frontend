import React from "react";

export default function InputBox({ label, name, type, placeholder, register, errors, validation = {} }) {
  return (
    <div className="relative mb-1">
      {label && (
        <label
          htmlFor={name}
          className="block text-xs sm:text-sm font-[600] text-[#141415] font-inter mb-[6px]"
        >
          {label}
        </label>
      )}

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
        className="w-full h-[36px] px-[8px] bg-white text-xs outline-none  font-normal text-black placeholder:text-[#98A2B2] border border-[#E7E7E7] rounded-[6px]"
      />

      {errors[name] && <p className="absolute mt-[2px] left-0 text-red-500 text-xs">{errors[name].message}</p>}
    </div>
  );
}
