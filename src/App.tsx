import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { RangeSlider } from "./components/Slider";

function App() {
  const [rentSplit, setRentSplit] = useState(10);

  const handleRentSplit = (value: any) => {
    setRentSplit(value);
    // const cloneForm = [...form.get];
    // cloneForm[index].rentSplit = value;
    // form.set(cloneForm);
  };

  return (
    <div className="App">
      gi
      <div className="flex justify-between items-center">
        <div className="w-10/12">
          <RangeSlider value={rentSplit} onChange={handleRentSplit} />
        </div>
        <div className="h-12 w-12 flex justify-center items-center bg-white text-rgray text-sm border rounded-sm">
          {rentSplit}%
        </div>
      </div>
    </div>
  );
}

export default App;
