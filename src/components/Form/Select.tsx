import React from "react";
import { generateId } from "../../../utils";

const id = generateId();

interface PropTypes {
  label?: string;
  value?: string;
  onChange?: Function;
  placeholder?: string;
  required?: boolean;
  options?: string[] | { name: string; value: string }[];
  disabled?: boolean;
  selectedOption?: string;
}
const Select = ({
  label = "",
  placeholder = "Select",
  value,
  required = true,
  onChange = () => {},
  options = [],
  disabled = false,
  selectedOption,
}: PropTypes) => {
  return (
    <div className="space-y-2 flex flex-col">
      <label htmlFor={id} className="lg:font-light">
        {label}
      </label>
      <div className="border-[#DDE2E5] border px-3 rounded">
        <select
          value={value}
          defaultValue={value}
          id={id}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 lg:h-12 border-none focus:outline-none w-full md:auto bg-white"
          required={required}
        >
          <option value="" disabled>
            {placeholder || "Select"}
          </option>
          {options.map(
            (
              option: string | { name: string; value: string },
              optionIndex: number
            ) => (
              <option
                key={`${id}-option_${optionIndex}`}
                value={typeof option === "string" ? option : option.value}
                // selected={
                //   typeof option === "string"
                //     ? option.toLowerCase() === selectedOption
                //     : option.value.toLowerCase() === selectedOption
                // }
              >
                {typeof option === "string" ? option : option.name}
              </option>
            )
          )}
        </select>
      </div>
    </div>
  );
};

export default Select;
