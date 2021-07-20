import React, { useState } from "react";
import "./Table.css";

const TableFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pick-card ">
      <div onClick={() => setIsOpen(!isOpen)} className="flex items-center">
        <span className="mr-10 text-lp-grey1">Filter</span>
        <img src="/vectors/tweak.svg" alt="Tweak" />
      </div>
      {isOpen && (
        <div className="filter-options absolute top-5 mt-10 right-0 flex flex-col z-50 shadow bg-white rounded-t border font-semibold text-sm p-6 border-lightgreen w-[20rem] cursor-default"></div>
      )}
    </div>
  );
};

export default TableFilter;
