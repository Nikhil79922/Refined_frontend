import React from "react";

const SelectBox = ({ label, name, options, placeholder, register, errors }) => {
  return (
    <div>
      {label && (
        <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-[600] text-[#141415] font-inter mb-[6px]">
          {label}
        </label>
      )}
      <select
        {...register(name, { required: `${label} is requerida` })}
        className="w-full h-[36px] px-[8px] bg-white text-xs outline-none font-normal text-[#98A2B2] border border-[#E7E7E7] rounded-[6px]"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="min-h-[20px] p-[2px]" >
      {errors?.[name] && <p className="text-red-500 text-xs">{errors[name].message}</p>}
      </div>
    </div>
  );
};

export default SelectBox;