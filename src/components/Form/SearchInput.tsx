import React, { useState } from "react";
import SearchIcon from "../../vectors/SearchIcon";

interface PropTypes {
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: Function;
  customClass?: string;
  focusState?: boolean;
  triggerSearch: Function;
  onSearchBlur: any;
}

function SearchInput({
  placeholder,
  value,
  label,
  onChange = () => {},
  triggerSearch = () => {},
  onSearchBlur = () => {},
}: PropTypes) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    triggerSearch();
  };

  return (
    <>
      {label && <label className="mb-2 font-bold text-base op">{label}</label>}
      <form
        className={`flex items-center border max-w-full lg:w-[18.5rem] h-10 lg:h-12 pl-4 rounded text-base font-normal bg-white pr-[1.15rem]`}
        onSubmit={handleSubmit}
      >
        <SearchIcon />
        <input
          type="search"
          placeholder={placeholder}
          value={value}
          onBlur={onSearchBlur}
          onChange={(e) => onChange(e.target.value)}
          className="border-none outline-none focus:outline-none flex-grow w-full pl-2 md:w-max"
        />{" "}
      </form>
    </>
  );
}

export default SearchInput;
