import React from "react";

interface PropTypes {
  type?: "text" | "email" | "password" | "date";
  label?: string;
  required?: boolean;
  placeholder?: string;
  value?: any;
}
const FileInput = ({ label, required, placeholder, value }: PropTypes) => {
  return (
    <div className="Input w-full">
      <label className="mb-2 text-sm lg:text-base text-[#2E2E2E] lg:font-light">
        {label}
      </label>
      <div className="flex items-center border w-full h-12 pl-4 rounded text-base font-normal pr-[1.15rem] relative">
        <input
          type="file"
          required={required}
          placeholder={placeholder}
          value={value}
          className="w-full flex-grow border-none outline-none focus:outline-none"
        />
      </div>
    </div>
  );
};

export default FileInput;
