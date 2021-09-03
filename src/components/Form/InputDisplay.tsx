import React from "react";
import Input from "./Input";

import "./inputDisplay.scss";

function InputDisplay() {
  return (
    <div className="px-6">
      <div className="inp">
        <Input />
        <span>Default input with placeholder.</span>
      </div>
      <div className="inp">
        <Input value="Content" />
        <span>Form input with content</span>
      </div>
      <div className="inp">
        <Input additionalInfo="Additional Information" />
        <span>Form input with additional information indicator.</span>
      </div>
      <div className="inp">
        <Input disabled={true} />
        <span>Disabled form</span>
      </div>
      <div className="inp">
        <Input error="Caption text, description, error notification" />
        <span>Error Input</span>
      </div>
    </div>
  );
}

export default InputDisplay;
