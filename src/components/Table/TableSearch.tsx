import React from "react";

import "./Table.css";

const TableSearch = () => {
  return (
    <form className="table-search">
      <input type="text" placeholder="Search table" />
      <button className="focus:outline-none">
        <img
          src="/vectors/search.svg"
          className="filter grayscale"
          alt="Search"
        />
      </button>
    </form>
  );
};

export default TableSearch;
