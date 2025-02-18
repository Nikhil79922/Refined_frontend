import React from "react";

const SelectBox = ({ label, name, options, placeholder, register, errors }) => {
  return (
    <div className="relative mb-[4px]">
      {label && (
        <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-[600] text-[#141415] font-inter mb-[6px]">
          {label}
        </label>
      )}
      <select
        {...register(name, { required: `${label} is requerida` })}
        className="w-full h-[36px] px-[8px] bg-white text-xs outline-none font-normal text-[#494949] border border-[#E7E7E7] rounded-[6px]"
      >
        {placeholder && <option className="text-[#98A2B2]" value="">{placeholder}</option>}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    
      {errors?.[name] && <p className="absolute left-0 text-red-500 text-xs mt-[2px] ">{errors[name].message}</p>}
      
    </div>
  );
};

export default SelectBox;