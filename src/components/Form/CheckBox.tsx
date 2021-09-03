import React, { useState } from "react";
import CheckIcon from "../../vectors/CheckIcon";
import "./Index.scss";

function CheckBox({
  value = false,
  onChange = () => {},
  customClass,
  label = "label",
}: {
  value?: boolean;
  onChange?: Function;
  customClass?: string;
  label?: string;
}) {
  const [selected, setSelected] = useState(value);

  const handleChange = () => {
    setSelected(!selected);
    onChange(selected);
  };

  return (
    <div className="flex items-center space-x-2">
      <div
        className={`checkbox-container ${
          selected ? "active" : ""
        } ${customClass}`}
        onClick={handleChange}
      >
        {selected && <CheckIcon />}
      </div>
      <span className="text-[#676767]">{label}</span>
    </div>
  );
}

export default CheckBox;
