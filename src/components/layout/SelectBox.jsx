import React from "react";

const SelectBox = ({ label, name, options, placeholder, register, errors }) => {
  return (
    <div>
      {label && (
        <label className="block text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-[600] text-gray-1 font-inter mb-[3px]">
          {label}
        </label>
      )}
      <select
        {...register(name, { required: `${label} is requerida` })}
        className="w-full h-[36px] pl-[8px] pr-[8px] bg-white text-xs outline-none font-normal text-gray-400 border border-gray-300 rounded"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors?.[name] && <p className="text-red-500 text-xs">{errors[name].message}</p>}
    </div>
  );
};

export default SelectBox;
