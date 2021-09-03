import React, { useEffect, useState } from "react";
import { generateId } from "../../../utils";
import CheckIcon from "../../vectors/CheckIcon";
import "./Index.scss";

const RadioButton = ({
  selected,
  options,
  onChange = () => {},
}: {
  selected?: number;
  options: string[];
  onChange?: Function;
}) => {
  const [selectedIndex, setSelecteedIndex] = useState(selected);
  const [id, setId] = useState("");

  const handleChange = (index: number) => {
    setSelecteedIndex(index);
    onChange(index);
  };

  useEffect(() => {
    setId(generateId());
  }, []);

  return (
    <div className="space-y-[1.8125rem]">
      {options.map((option: string, optionIndex: number, key) => (
        <div
          className="flex items-center"
          key={`radio-button-${key}- ${optionIndex}-${option}`}
          onClick={() => handleChange(optionIndex)}
        >
          <div
            key={`radio-button[${id}]-${optionIndex}`}
            className={`radiobutton-container ${
              selectedIndex === optionIndex ? "active" : ""
            }`}
          >
            {selectedIndex === optionIndex && <span />}
          </div>
          <span className="ml-[0.625rem] text-sm lg:text-base">{option}</span>
        </div>
      ))}
    </div>
  );
};

export default RadioButton;
