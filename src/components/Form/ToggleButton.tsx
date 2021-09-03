import React, { useState } from "react";
import "./Index.scss";

const ToggleButton = ({
  selected = false,
  onChange = () => {},
}: {
  selected?: boolean;
  onChange?: Function;
}) => {
  const [isSelected, setIsSelecteed] = useState(selected);

  const handleChange = () => {
    setIsSelecteed(!isSelected);
    onChange(isSelected);
  };

  return (
    <div className="toggle-container" onClick={handleChange}>
      <div className={`slider ${isSelected ? "active" : ""}`}>
        <div className={`dialog-button `} />
      </div>
    </div>
  );
};

export default ToggleButton;
